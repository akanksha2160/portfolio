export const PERSONAL_INFO = {
  name: 'Kumari Akanksha',
  title: 'Computational Imaging · Scientific Machine Learning · Deep Learning for Biological Systems',
  location: 'Tainan, Taiwan',
  phone: '+886 974 290 442',
  email: 'kakankshatk.7@gmail.com',
  github: 'https://github.com/akanksha2160',
  linkedin: 'https://linkedin.com/in/akanksha2160',
  googleScholar: 'https://scholar.google.com/citations?hl=en&user=yNmEP2kAAAAJ',
}

export const RESEARCH_INTERESTS = [
  { icon: '🔬', category: 'Computational Imaging', items: ['Computational microscopy', 'Biological image analysis', 'Image-based phenotyping'] },
  { icon: '🧠', category: 'ML Methods', items: ['Deep learning', 'Metric learning', 'Weakly supervised learning', 'Interpretable AI', 'Representation learning'] },
  { icon: '🧬', category: 'Biological Applications', items: ['Multi-object tracking', 'Instance segmentation', 'Spatiotemporal modeling', 'Quantitative biology'] },
]

export const EDUCATION = [
  {
    school: 'National Cheng Kung University (NCKU)',
    location: 'Tainan, Taiwan',
    degree: 'M.S. in Biomedical Engineering',
    gpa: '4.24/4.30',
    startDate: 'Feb 2025',
    endDate: 'Expected Feb 2027',
  },
  {
    school: 'Delhi Skill and Entrepreneurship University (DSEU)',
    location: 'Delhi, India',
    degree: 'B.S. in Data Analytics',
    gpa: '8.89/10.0',
    startDate: 'Aug 2021',
    endDate: 'May 2024',
  },
]

export const EXPERIENCE = [
  {
    title: 'Graduate Research Assistant',
    organization: 'Tu Lab, National Cheng Kung University',
    location: 'Tainan, Taiwan',
    advisor: 'Prof. Ting-Yuan Tu',
    startDate: 'Feb 2025',
    endDate: 'Present',
    bullets: [
      {
        title: 'Live-cell tracking & identity re-identification',
        description: 'Developing a contrastive-embedding Siamese network for long-term cell identity preservation in dense time-lapse confocal microscopy sequences of 3D cancer spheroids embedded in Type-I collagen matrices; dataset spans 12 spheroid clusters, ∼1,118 frames with 15-level z-stacks per time point. Hybrid architecture combining Siamese Networks, ConvLSTM, and Attention U-Net achieves Dice score: 84.62%, outperforming U-Net and SAM baselines in low-contrast conditions. Quantitative invasion analysis reveals radial leader–follower dynamics and morphological dissociation from classical EMT assumptions. Manuscript in preparation.',
        metrics: ['Dice: 84.62%', 'Outperforms U-Net & SAM'],
      },
      {
        title: 'Interpretable image-based phenotyping',
        description: 'ResNet-18 + Grad-CAM pipeline for non-destructive quality assessment of 3D cardiac spheroids from bright-field microscopy (86.5% accuracy); saliency maps highlight boundary and internal morphological patterns consistent with expert annotation, providing mechanistic interpretability beyond classification. Manuscript under review, Biofabrication (submitted 2025).',
        metrics: ['86.5% accuracy', 'Mechanistic interpretability'],
      },
      {
        title: 'Weakly supervised differentiation QC',
        description: 'Deep learning framework for automated NK-cell maturation assessment from Day-10 bright-field EB images; domain-specific preprocessing (Otsu-based ROI, circular soft masking), imbalance-aware training (class-weighted loss, Mixup, label smoothing), and stratified group 5-fold cross-validation. ResNet-18 achieves 96.25% accuracy (AUC: 0.99), with t-SNE confirming discriminative morphological representations. First-author paper, IEEE CBMS 2026 (accepted).',
        metrics: ['96.25% accuracy', 'AUC: 0.99', '1st author @ IEEE CBMS 2026'],
      },
    ],
  },
  {
    title: 'Visiting Research Intern — TEEP Fellowship',
    organization: 'Tu Lab, National Cheng Kung University',
    location: 'Tainan, Taiwan',
    advisor: 'Prof. Ting-Yuan Tu',
    startDate: 'May 2024',
    endDate: 'Oct 2024',
    bullets: [
      {
        title: 'Longitudinal spatiotemporal organoid modeling',
        description: 'Designed a temporally-aware longitudinal imaging pipeline to predict downstream functional differentiation outcomes from early time-point images; introduced temporal augmentation strategies and multi-timepoint feature integration for early-stage phenotype forecasting. Methodological foundation of the IEEE CBMS 2026 framework.',
        metrics: [],
      },
      {
        title: 'Oral presentation',
        description: '"Early Prediction of iPSC Differentiation Quality via Deep Learning." TSBME & TSB Joint Conference, 2024 (invited).',
        metrics: ['Invited talk'],
      },
    ],
  },
]

export const TECHNICAL_EXPERIENCE = [
  {
    title: 'Research infrastructure & reproducible ML',
    organization: 'Tu Lab, National Cheng Kung University',
    period: 'Feb 2025 – Present',
    description: 'Modular PyTorch pipelines with deterministic seeding, configuration management and experiment tracking, shared as reusable research infrastructure across Tu Lab projects.',
    tags: ['PyTorch', 'Reproducibility', 'Experiment tracking'],
  },
  {
    title: 'Surrogate ML modeling for scientific instruments',
    organization: 'National Yang Ming Chiao Tung University · IIPP Fellowship',
    period: 'Jan 2024 – Mar 2024',
    description: 'Feature-engineered regression pipeline for semiconductor growth-parameter prediction (FWHM; R² = 0.80) with cross-validated model selection, applying scientific ML to a physical measurement system under Prof. Ray-Hua Horng. Selected from ~600 nationwide applicants.',
    tags: ['Regression', 'Feature engineering', 'Cross-validation', 'R² = 0.80'],
  },
]

export const PUBLICATIONS = [
  {
    authors: 'K. Akanksha, Y.-F. Su, H.-W. Zhang, Y.-T. Liu, L. K. D. Bharali, C.-J. Yen, T.-Y. Tu',
    title: 'Deep Learning for Automated Quality Assessment of NK Cell Differentiation in iPSC Cultures',
    conference: 'IEEE CBMS 2026',
    status: 'accepted',
    type: 'conference',
    role: 'First author',
    year: 2026,
  },
  {
    authors: 'K. Akanksha et al.',
    title: 'Early Prediction of Differentiation Quality in Cardiac Spheroids Using Interpretable Deep Learning',
    conference: 'Biofabrication',
    status: 'under review',
    type: 'journal',
    role: 'First author',
    submittedDate: '2025',
    year: 2025,
  },
  {
    authors: 'K. Akanksha',
    title: 'Early Prediction of iPSC Differentiation Quality via Deep Learning',
    conference: 'TSBME & TSB Joint Conference',
    status: 'accepted',
    type: 'oral',
    role: 'Presenter',
    year: 2024,
    note: 'Invited talk',
  },
]

export const PROJECTS = [
  {
    slug: 'siamese-live-cell-tracking',
    title: 'Siamese Re-ID for Live-Cell Tracking in 3D Cancer Invasion',
    shortDescription: 'Solving long-term cell identity tracking in dense 3D microscopy using contrastive learning— 84.62% Dice in challenging low-contrast conditions',
    technologies: ['PyTorch', 'Siamese Networks', 'ConvLSTM', 'Attention U-Net', 'Contrastive Learning'],
    keyMetrics: {
      'Dice Score': '84.62%',
      'Dataset': '12 spheroids, ~1,118 frames',
      'Finding': 'Radial leader–follower dynamics',
    },
    overview: 'Live-cell tracking in 3D is hard: cells deform, overlap, and appear/disappear in z-stacks. I built a hybrid Siamese network combining contrastive learning (metric space), ConvLSTM (temporal reasoning), and Attention U-Net (segmentation) to preserve cell identity across dense time-lapse sequences. The result: reliable tracking in low-contrast confocal microscopy where traditional segmentation fails.',
    methodology: 'Contrastive metric learning with Siamese architecture embeds cells into a discriminative space. ConvLSTM captures temporal dynamics across frames. Attention U-Net provides spatially-aware segmentation. Evaluated against U-Net and SAM baselines.',
    dataset: '3D cancer spheroids embedded in Type-I collagen (invasion assay). 12 spheroid clusters, ~1,118 frames, 15-level z-stacks per timepoint.',
    results: 'Achieved 84.62% Dice, outperforming U-Net and SAM baselines in low-contrast conditions. Quantitative invasion analysis revealed radial leader–follower dynamics and morphological dissociation from classical EMT assumptions.',
    status: 'In Progress - Manuscript in Preparation',
  },
  {
    slug: 'organoid-maturation-prediction',
    title: 'Longitudinal Temporal Model for Organoid Maturation Prediction',
    shortDescription: 'Predict iPSC differentiation success from early morphology—96.25% accuracy by learning temporal patterns from day 10 onwards',
    technologies: ['Temporal Augmentation', 'Multi-timepoint Features', 'ResNet-18', 'Longitudinal Modeling'],
    keyMetrics: {
      'Accuracy': '96.25%',
      'AUC': '0.99',
      'Input': 'Day-10 bright-field images',
    },
    overview: 'In regenerative medicine, waiting weeks to assess organoid quality is costly. I designed a temporally-aware pipeline that predicts functional maturation from bright-field morphology alone—enabling early QC screening and massive cost savings.',
    methodology: 'Domain-specific preprocessing (Otsu-based ROI, circular soft masking) feeds a ResNet-18, trained with class-weighted loss, Mixup and label smoothing under stratified group 5-fold cross-validation. Temporal augmentation and multi-timepoint feature integration build on the longitudinal pipeline from the TEEP internship.',
    dataset: 'Bright-field embryoid body (EB) images from iPSC-derived NK-cell differentiation cultures. Day-10 images are used to predict later functional maturation.',
    results: 'ResNet-18 achieves 96.25% accuracy and AUC 0.99. t-SNE visualization confirms the model learns interpretable morphological clusters. First-author paper accepted at IEEE CBMS 2026.',
    status: 'Accepted - IEEE CBMS 2026',
  },
  {
    slug: 'cardiac-spheroid-quality-assessment',
    title: 'Interpretable Cardiac Spheroid Quality Assessment',
    shortDescription: 'Non-destructive QC with Grad-CAM saliency maps—86.5% accuracy with expert-validated interpretability, not just black-box predictions',
    technologies: ['ResNet-18', 'Grad-CAM', 'Saliency Maps', 'Bright-field Microscopy'],
    keyMetrics: {
      'Accuracy': '86.5%',
      'Interpretability': 'Grad-CAM saliency maps',
      'Status': 'Under Review at Biofabrication',
    },
    overview: 'Quality control for cardiac spheroids is traditionally destructive (staining + analysis kills samples). I built an interpretable vision system that assesses quality from live images and explains its reasoning—biologists can trust it because they see why the model decided good vs. bad.',
    methodology: 'ResNet-18 extracts morphological features from bright-field images. Grad-CAM generates saliency maps showing which image regions drove the quality decision; the maps highlight boundary and internal morphological patterns consistent with expert annotation.',
    dataset: 'Bright-field images of 3D cardiac spheroids with expert quality annotations.',
    results: '86.5% accuracy, with saliency maps consistent with expert annotation, giving mechanistic interpretability beyond classification and enabling non-destructive phenotyping.',
    status: 'Under Review - Biofabrication (submitted 2025)',
  },
]

export const SKILLS = {
  'Programming & Tools': {
    items: ['Python (primary)', 'SQL', 'Shell Scripting', 'Linux Workflows', 'Git/GitHub', 'Docker'],
    icon: '💻',
  },
  'Deep Learning & Scientific ML': {
    items: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'CNNs (ResNet, DenseNet, MobileNet)', 'Siamese/Metric Learning', 'ConvLSTM', 'Attention U-Net', 'Vision Transformers', 'Transfer Learning', 'Weakly Supervised Training'],
    icon: '🧠',
  },
  'Computational Imaging & Biological CV': {
    items: ['Time-lapse Microscopy Analysis', 'Z-stack Reconstruction', 'CLAHE Contrast Enhancement', 'ROI Detection (Otsu)', 'Multi-object Tracking', 'Instance Segmentation', 'Image-based Phenotyping', 'Grad-CAM Interpretability', 't-SNE Visualization'],
    icon: '🔬',
  },
  'Experimental & Statistical Rigor': {
    items: ['Stratified Cross-validation', 'Class-imbalance Handling', 'Mixup Augmentation', 'Label Smoothing', 'Deterministic Seeding', 'Experiment Tracking'],
    icon: '📊',
  },
  'Data & Visualization': {
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Statistical Inference', 'Tableau', 'Power BI'],
    icon: '📈',
  },
}

export const AWARDS = [
  {
    title: 'TEEP Research Fellowship',
    organization: 'Ministry of Education, Taiwan',
    year: '2024',
    description: 'Competitive fellowship for deep-learning research at NCKU prior to graduate enrollment',
  },
  {
    title: 'IIPP International Research Fellowship',
    organization: 'National Yang Ming Chiao Tung University',
    year: '2024',
    description: 'Selected from ~600 applicants nationwide; NTD 30,000/month',
  },
  {
    title: 'Merit-cum-Means Scholarship',
    organization: 'Delhi Government',
    description: 'Awarded for academic excellence during undergraduate studies',
  },
  {
    title: 'Invited Oral Talk',
    organization: 'TSBME & TSB Joint Conference',
    year: '2024',
    description: 'Early Prediction of iPSC Differentiation Quality via Interpretable Deep Learning',
  },
]

export const SERVICE = [
  {
    role: 'President',
    organization: 'Indian National Students Association (INSA), NCKU',
    startDate: 'Jul 2025',
    endDate: 'Present',
    description: 'Lead 100+ member community; coordinate academic and intercultural programming with the NCKU International Affairs Office',
  },
  {
    role: 'Mentor',
    organization: 'Desh ke Mentor, Delhi Government',
    startDate: 'Oct 2022',
    endDate: 'Apr 2023',
    description: 'Mentored high-school students on academics and career planning',
  },
]

export const LANGUAGES = {
  fluent: ['English'],
  native: ['Hindi'],
  basic: ['Mandarin Chinese', 'Sanskrit'],
}

export const INTERESTS = [
  'Badminton',
  'Reading',
  'Travel & Hiking',
  'Photography',
  'Music',
]

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''
export const CV_URL = `${BASE_PATH}/cv.pdf`
