# Kumari Akanksha — Academic Portfolio Website

A modern, professional academic portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed for PhD program applications to top universities (MIT, Stanford, CMU).

## Features

✨ **Design & UX**
- Minimal, elegant design with neutral color palette (navy, blue, white, grey)
- Smooth animations with Framer Motion
- Fully responsive (mobile, tablet, desktop)
- SEO-optimized with metadata and JSON-LD structured data
- Accessibility-first approach

📋 **Sections**
- Hero with profile photo and social links
- About & research highlights
- Research interests (categorized)
- Education timeline
- Research experience with expandable details
- Publications & presentations with status badges
- Featured research projects with detail pages
- Technical skills (categorized)
- Awards & honors
- Service & leadership
- Contact form

🔍 **SEO & Performance**
- OpenGraph tags for social sharing
- Person schema (JSON-LD) for search engines
- Image optimization with Next.js Image
- Zero layout shift fonts with `next/font`
- Fast page loads with static generation

## Getting Started

### Prerequisites
- **Node.js 18+** and npm installed
- Git (for deployment)

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Edit content:**
   - Update `lib/data.ts` for all site content (publications, projects, skills, etc.)
   - Modify components in `components/sections/` for design changes
   - Update `app/page.tsx` to add/remove sections

### Adding Your Profile Photo

1. Replace the emoji in `Hero.tsx` with your actual photo:
   ```tsx
   <Image 
     src="/profile.jpg" 
     alt="Kumari Akanksha" 
     width={160} 
     height={160}
     className="rounded-full"
   />
   ```

2. Place your headshot as `public/profile.jpg`

### Adding Your CV

1. Place your PDF resume as `public/cv.pdf`
2. The "Download CV" button will automatically link to it

## Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

Vercel is the official Next.js hosting platform with zero-config deployment.

**Option 1: Push to GitHub, then connect to Vercel**
1. Initialize git: `git init`
2. Commit files: `git add . && git commit -m "Initial portfolio"`
3. Create repo on GitHub
4. Push: `git remote add origin <repo-url> && git push -u origin main`
5. Go to [vercel.com](https://vercel.com) → Import project from GitHub
6. Vercel auto-detects Next.js and deploys with one click

**Option 2: Vercel CLI**
```bash
npm i -g vercel
vercel
```

### Custom Domain

In Vercel dashboard:
1. Go to your project Settings
2. Domains → Add custom domain
3. Update DNS records at your domain registrar

### Deploy to Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

## Customization

### Colors
Edit the color palette in `tailwind.config.ts`:
```ts
colors: {
  navy: '#1B2A4A',
  blue: { primary: '#3B7DD8' },
  // ...
}
```

### Typography
Fonts are imported in `app/globals.css`:
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Code:** JetBrains Mono (monospace)

### Animations
Framer Motion animations are in each section component. Adjust delays/durations in the `motion.div` props.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── page.tsx                # Home page with all sections
│   ├── projects/
│   │   ├── page.tsx            # Projects listing
│   │   └── [slug]/page.tsx     # Individual project detail
│   └── globals.css
├── components/
│   ├── layout/                 # Navbar, Footer
│   └── sections/               # Hero, About, Education, etc.
├── lib/
│   └── data.ts                 # All site content
├── public/
│   ├── profile.jpg             # Your headshot
│   └── cv.pdf                  # Your resume
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Content Management

### Editing Resume/CV Data
Edit `lib/data.ts`:
```ts
export const PERSONAL_INFO = { ... }
export const EDUCATION = [ ... ]
export const EXPERIENCE = [ ... ]
export const PUBLICATIONS = [ ... ]
```

### Adding Projects
1. Add project object to `PROJECTS` array in `lib/data.ts`
2. Create dynamic route page auto-generates at `/projects/[slug]`
3. Project detail page pulls metadata from `lib/data.ts`

## Performance Tips

- **Images:** Use Next.js `Image` component for optimization
- **Fonts:** Hosted via Google Fonts CDN (zero layout shift)
- **Build:** `npm run build` generates fully static HTML for fast serving
- **Analytics:** Add Vercel Analytics in `next.config.js`

## SEO Checklist

- ✅ Page titles & meta descriptions set via Next.js metadata API
- ✅ OpenGraph tags for social sharing
- ✅ JSON-LD Person schema in layout
- ✅ Semantic HTML with proper headings
- ✅ Image alt text
- ✅ Mobile-responsive design
- ✅ Fast page load (PageSpeed Insights: 90+)

**Pro tip:** Submit sitemap to Google Search Console after deployment.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari, Chrome Android)

## License

This portfolio template is open source and available under MIT license.

## Support

For Next.js help: [nextjs.org/docs](https://nextjs.org/docs)

---

Built with ❤️ for PhD applications. Good luck! 🚀
