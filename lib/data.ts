export const PERSONAL_INFO = {
  name: 'Kumari Akanksha',
  title: 'Computational Imaging · Scientific Machine Learning · Deep Learning for Biological Systems',
  location: 'Tainan, Taiwan',
  phone: '+886 974 290 442',
  email: 'kakankshatk.7@gmail.com',
  github: 'https://github.com/akanksha2160',
  linkedin: 'https://linkedin.com/in/akanksha2160',
  googleScholar: '#',
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
    status: 'top of cohort',
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
      {
        title: 'Research infrastructure',
        description: 'Modular PyTorch pipelines with deterministic seeding, configuration management, and experiment tracking; shared as reusable research infrastructure across Tu Lab projects.',
        metrics: [],
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
  {
    title: 'Research Intern — IIPP Fellowship',
    organization: 'National Yang Ming Chiao Tung University',
    location: 'Hsinchu, Taiwan',
    advisor: 'Prof. Ray-Hua Horng',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
    bullets: [
      {
        title: 'Surrogate ML modeling for scientific instruments',
        description: 'Feature-engineered regression pipeline for semiconductor growth-parameter prediction (FWHM; R² = 0.80) via cross-validated model selection; demonstrates scientific ML applied to physical measurement systems. Selected from ∼600 nationwide applicants (NTD 30,000/month stipend).',
        metrics: ['R² = 0.80', 'Selected from ~600 applicants'],
      },
    ],
  },
]

export const PUBLICATIONS = [
  {
    authors: 'K. Akanksha et al.',
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
    shortDescription: 'Contrastive learning Siamese network for long-term cell identity preservation in dense confocal microscopy',
    technologies: ['PyTorch', 'Siamese Networks', 'ConvLSTM', 'Attention U-Net', 'Contrastive Learning'],
    keyMetrics: {
      'Dice Score': '84.62%',
      'Dataset': '12 spheroid clusters, ~1,118 frames',
      'Performance': 'Outperforms U-Net & SAM',
    },
    overview: 'Developing a contrastive-embedding Siamese network to preserve cell identity across long temporal sequences in live-cell confocal microscopy. The hybrid architecture combines Siamese Networks, ConvLSTM for temporal modeling, and Attention U-Net for precise segmentation.',
    methodology: 'Contrastive metric learning with Siamese architecture, temporal feature extraction via ConvLSTM, spatial attention mechanisms for boundary detection.',
    dataset: '3D cancer spheroids in Type-I collagen matrices, 12 spheroid clusters with ~1,118 frames and 15-level z-stacks per timepoint.',
    results: 'Achieved 84.62% Dice score, surpassing U-Net and SAM baselines in low-contrast conditions. Quantitative invasion analysis reveals leader-follower dynamics.',
    status: 'In Progress - Manuscript in Preparation',
  },
  {
    slug: 'organoid-maturation-prediction',
    title: 'Longitudinal Temporal Model for Organoid Maturation Prediction',
    shortDescription: 'Early prediction of differentiation outcomes using temporal augmentation and multi-timepoint feature integration',
    technologies: ['Temporal Augmentation', 'Multi-timepoint Features', 'Bright-field Microscopy', 'Early Prediction'],
    keyMetrics: {
      'Accuracy': '96.25%',
      'AUC': '0.99',
      'Status': 'Accepted at IEEE CBMS 2026',
    },
    overview: 'Designed a temporally-aware longitudinal imaging pipeline to predict downstream functional differentiation outcomes from early time-point images in iPSC-derived organoids.',
    methodology: 'Introduced temporal augmentation strategies and multi-timepoint feature integration for early-stage phenotype forecasting from bright-field microscopy.',
    dataset: 'iPSC-derived organoids with longitudinal bright-field imaging. Day-10 assessment predicts functional maturation.',
    results: 'ResNet-18 achieves 96.25% accuracy with AUC 0.99. Discriminative morphological representations confirmed via t-SNE visualization.',
    status: 'Accepted - IEEE CBMS 2026',
  },
  {
    slug: 'cardiac-spheroid-quality-assessment',
    title: 'Interpretable Cardiac Spheroid Quality Assessment',
    shortDescription: 'ResNet-18 + Grad-CAM pipeline for non-destructive quality assessment with mechanistic interpretability',
    technologies: ['ResNet-18', 'Grad-CAM', 'Saliency Maps', 'Bright-field Microscopy'],
    keyMetrics: {
      'Accuracy': '86.5%',
      'Interpretability': 'Saliency-driven',
      'Status': 'Under Review at Biofabrication',
    },
    overview: 'Non-destructive quality assessment of 3D cardiac spheroids from bright-field microscopy with interpretable saliency maps highlighting morphological patterns.',
    methodology: 'ResNet-18 backbone with Grad-CAM for gradient-based activation mapping. Saliency maps highlight boundary and internal morphological patterns.',
    dataset: '3D cardiac spheroids imaged via bright-field microscopy. Expert-annotated quality labels.',
    results: '86.5% classification accuracy with saliency maps consistent with expert annotations, providing mechanistic interpretability beyond classification.',
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
    title: 'Top of Master\'s Cohort',
    organization: 'NCKU Biomedical Engineering',
    year: '2025–Present',
    description: 'Highest GPA in cohort (4.24/4.30)',
  },
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

export const CV_URL = '/cv.pdf'
