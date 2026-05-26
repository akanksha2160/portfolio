'use client'

import { useEffect, useRef } from 'react'

interface Cell {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  hue: number
  id: number
  tracked: boolean
  pulse: number
  pulseSpeed: number
}

export function CellTrackingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let cells: Cell[] = []
    let animationId = 0
    let nextId = 1

    // Color palette echoing fluorescence microscopy channels
    const palette = [
      { r: 59, g: 130, b: 246 },   // electric blue (DAPI-ish)
      { r: 34, g: 211, b: 238 },   // cyan (microtubules)
      { r: 20, g: 184, b: 166 },   // teal
      { r: 99, g: 102, b: 241 },   // indigo
    ]

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas!.offsetWidth
      height = canvas!.offsetHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      initCells()
    }

    function initCells() {
      // Scale particle count to screen area, capped for performance
      const target = Math.min(Math.floor((width * height) / 22000), 46)
      cells = []
      nextId = 1
      for (let i = 0; i < target; i++) {
        const colorIdx = Math.floor(Math.random() * palette.length)
        cells.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: 2 + Math.random() * 4,
          hue: colorIdx,
          id: nextId++,
          tracked: Math.random() < 0.18, // ~18% get re-ID labels
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        })
      }
    }

    const CONNECT_DIST = 150
    const MOUSE_DIST = 180

    function draw() {
      ctx!.clearRect(0, 0, width, height)

      // Update positions
      for (const c of cells) {
        c.x += c.vx
        c.y += c.vy
        c.pulse += c.pulseSpeed

        // Gentle mouse repulsion (interactive feel)
        const mdx = c.x - mouseRef.current.x
        const mdy = c.y - mouseRef.current.y
        const mdist = Math.hypot(mdx, mdy)
        if (mdist < MOUSE_DIST && mdist > 0) {
          const force = (MOUSE_DIST - mdist) / MOUSE_DIST
          c.x += (mdx / mdist) * force * 1.2
          c.y += (mdy / mdist) * force * 1.2
        }

        // Wrap around edges
        if (c.x < -20) c.x = width + 20
        if (c.x > width + 20) c.x = -20
        if (c.y < -20) c.y = height + 20
        if (c.y > height + 20) c.y = -20
      }

      // Draw tracking lines between nearby cells
      for (let i = 0; i < cells.length; i++) {
        for (let j = i + 1; j < cells.length; j++) {
          const a = cells[i]
          const b = cells[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.32
            const col = palette[a.hue]
            ctx!.strokeStyle = `rgba(${col.r},${col.g},${col.b},${alpha})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // Draw cells (with glow) and re-ID labels
      for (const c of cells) {
        const col = palette[c.hue]
        const pulseR = c.radius + Math.sin(c.pulse) * 0.8

        // Glow
        const grad = ctx!.createRadialGradient(c.x, c.y, 0, c.x, c.y, pulseR * 4)
        grad.addColorStop(0, `rgba(${col.r},${col.g},${col.b},0.5)`)
        grad.addColorStop(1, `rgba(${col.r},${col.g},${col.b},0)`)
        ctx!.fillStyle = grad
        ctx!.beginPath()
        ctx!.arc(c.x, c.y, pulseR * 4, 0, Math.PI * 2)
        ctx!.fill()

        // Core
        ctx!.fillStyle = `rgba(${col.r},${col.g},${col.b},0.9)`
        ctx!.beginPath()
        ctx!.arc(c.x, c.y, pulseR, 0, Math.PI * 2)
        ctx!.fill()

        // Re-ID tracking box + label (mimics object tracking output)
        if (c.tracked) {
          const boxR = pulseR * 4.5
          ctx!.strokeStyle = `rgba(${col.r},${col.g},${col.b},0.55)`
          ctx!.lineWidth = 1
          ctx!.strokeRect(c.x - boxR, c.y - boxR, boxR * 2, boxR * 2)
          ctx!.fillStyle = `rgba(${col.r},${col.g},${col.b},0.8)`
          ctx!.font = '9px monospace'
          ctx!.fillText(`ID:${c.id}`, c.x - boxR, c.y - boxR - 3)
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    function handleMouse(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    function handleLeave() {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouse)
    canvas.addEventListener('mouseleave', handleLeave)

    if (prefersReducedMotion) {
      draw() // single static frame
      cancelAnimationFrame(animationId)
    } else {
      draw()
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
      canvas.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
