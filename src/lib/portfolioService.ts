import { isSupabaseConfigured, supabase } from '@/lib/supabase'

const localCertificates = [
  {
    id: 'local-bnsp-program-analyst',
    title: 'BNSP - Program Analyst',
    image_url: '/assets/certificates/bnsp-program-analyst.png',
  },
  {
    id: 'local-magenta-peruri',
    title: 'Kementerian BUMN x Peruri - Magang Generasi Bertalenta (MAGENTA)',
    image_url: '/assets/certificates/magenta-peruri.png',
  },
  {
    id: 'local-narada-code-devsecops',
    title: 'Narada Code - DevSecOps CI/CD Workshop',
    image_url: '/assets/certificates/narada-code-devsecops.png',
  },
  {
    id: 'local-cisco-cybersecurity',
    title: 'Cisco - Introduction to Cybersecurity',
    image_url: '/assets/certificates/cisco-cybersecurity.png',
  },
  {
    id: 'local-cisco-ethical-hacker',
    title: 'Cisco - Ethical Hacker',
    image_url: '/assets/certificates/cisco-ethical-hacker.png',
  },
  {
    id: 'local-python-pcap',
    title: 'Python Institute - PCAP: Python Essentials',
    image_url: '/assets/certificates/python-pcap.png',
  },
  {
    id: 'local-bssn-keamanan-siber',
    title: 'BSSN - Keamanan Siber Sektor Industri 2025',
    image_url: '/assets/certificates/bssn-keamanan-siber.png',
  },
  {
    id: 'local-toefl-prediction',
    title: 'TOEFL - Prediction Test',
    image_url: '/assets/certificates/toefl-prediction.png',
  },
]

const localTechStacks = [
  ['React.Js', 'react/react-original.svg'],
  ['TypeScript', 'typescript/typescript-original.svg'],
  ['Tailwind', 'tailwindcss/tailwindcss-original.svg'],
  ['HTML', 'html5/html5-original.svg'],
  ['CSS', 'css3/css3-original.svg'],
  ['PHP', 'php/php-original.svg'],
  ['Laravel', 'laravel/laravel-original.svg'],
  ['Next.Js', 'nextjs/nextjs-original.svg'],
  ['JavaScript', 'javascript/javascript-original.svg'],
  ['MySQL', 'mysql/mysql-original.svg'],
].map(([name, icon], index) => ({
  id: `local-tech-${index}`,
  name,
  logo_url: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`,
}))

export const localProjects = [
  {
    id: 'local-astralise-digital-solution',
    title: 'Profile Company - Astralise Digital Solution',
    description:
      'Website company profile Astralise Digital Solution, agensi teknologi digital yang membantu bisnis mewujudkan ide menjadi solusi digital. Astralise menyediakan layanan pengembangan aplikasi web, mobile, dan sistem internal secara end-to-end, mulai dari perencanaan hingga operasional harian.',
    live_url: 'https://www.astralise.my.id/',
    github_url: null,
    technologies: 'React, TypeScript, UI/UX Design, Responsive Web Design',
    key_features:
      'Company profile website, Digital services showcase, Portfolio presentation, Team and client testimonials, Indonesian and English language switcher, Responsive modern interface',
    image_url: '/assets/projects/astralise/astralise-home.png',
    image_urls: ['/assets/projects/astralise/astralise-home.png'],
  },
  {
    id: 'local-caredesk-helpdesk',
    title: 'CareDesk - Helpdesk Ticketing System',
    description:
      'CareDesk adalah aplikasi Helpdesk Ticketing System berbasis web yang dirancang untuk memudahkan pengelolaan permintaan bantuan secara terstruktur dan efisien. Dilengkapi sistem tiket real-time, live chat, SLA tracking, knowledge base, dan analytics lengkap.',
    live_url: 'https://review-hall-88643949.figma.site',
    github_url: null,
    technologies: 'React JS, Tailwind CSS, React Router, Context API, Recharts',
    key_features:
      'Multi-Role Access Control, Ticket management with automatic SLA tracking, Real-time live chat, Self-service knowledge base, Analytics dashboard with report export, Granular role permissions management, Automatic ticket assignment notifications, Advanced filtering and bulk actions',
    demo_credentials: [
      { role: 'User', email: 'user@caredesk.com', password: 'user' },
      { role: 'Admin', email: 'admin@caredesk.com', password: 'admin' },
      { role: 'Agent', email: 'agent@caredesk.com', password: 'agent' },
    ],
    image_url: '/assets/projects/caredesk/dashboard.png',
    image_urls: [
      '/assets/projects/caredesk/dashboard.png',
      '/assets/projects/caredesk/tickets.png',
      '/assets/projects/caredesk/permissions.png',
      '/assets/projects/caredesk/chat.png',
      '/assets/projects/caredesk/analytics.png',
    ],
  },
  {
    id: 'local-quikpassa-event-platform',
    title: 'QuikPassa - Event Ticketing & Management Platform',
    description:
      'QuikPassa adalah platform tiket event online berbasis web yang dirancang untuk ekosistem event Indonesia. Platform ini menghubungkan penyelenggara event, petugas gate, dan pembeli tiket dalam satu sistem terintegrasi — mulai dari pembuatan event, penjualan tiket, hingga validasi kehadiran di lapangan secara real-time.',
    live_url: 'https://emboss-lead-08282754.figma.site',
    github_url: null,
    technologies:
      'React, TypeScript, Vite, Tailwind CSS, React Router, jsPDF, jsQR, Context API',
    key_features:
      'Multi-role authentication, Event management, Gate Staff mode, Real-time QR scanner, Super Admin dashboard, Branded PDF report export, Ticket purchase and history, Interactive seat picker',
    image_url: '/assets/projects/quikpassa/landing-page.png',
    image_urls: [
      '/assets/projects/quikpassa/landing-page.png',
      '/assets/projects/quikpassa/events.png',
      '/assets/projects/quikpassa/super-admin-dashboard.png',
      '/assets/projects/quikpassa/organizer-dashboard.png',
      '/assets/projects/quikpassa/gate-staff-scanner.png',
      '/assets/projects/quikpassa/my-tickets.png',
    ],
  },
  {
    id: 'local-peruri-fixed-asset-management',
    title: 'Fixed Asset Management - PERURI',
    description:
      'Sistem Manajemen Aset Tetap adalah aplikasi berbasis web untuk mengelola aset perusahaan sepanjang siklus hidupnya, mulai dari pendaftaran, stock opname berbasis QR, perpindahan aset, penyusutan, pencetakan label, pelaporan, hingga manajemen pengguna berbasis peran. Hak akses terdiri dari Super Admin yang mengelola seluruh data, Admin Asset dengan akses operasional luas tanpa melihat Super Admin, Admin yang hanya dapat melihat dan mengekspor data aset, serta Staff yang mengelola aset departemen atau divisinya sendiri.',
    live_url: null,
    github_url: null,
    technologies:
      'Laravel, PHP, React.js, TypeScript, Inertia.js, Tailwind CSS, MySQL, Laravel Sanctum, QR Code',
    key_features:
      'Asset management, QR Code stock opname, Asset movement approval, Depreciation calculation, QR Code label printing, Dashboard reporting, Role-based access control',
    image_url: '/assets/projects/peruri/dashboard.png',
    image_urls: [
      '/assets/projects/peruri/login.png',
      '/assets/projects/peruri/dashboard.png',
      '/assets/projects/peruri/asset-management.png',
      '/assets/projects/peruri/label-printing.png',
      '/assets/projects/peruri/stock-opname.png',
      '/assets/projects/peruri/depreciation.png',
    ],
  },
  {
    id: 'local-personal-portfolio',
    title: 'Personal Portfolio Showcase',
    description:
      'Website portfolio personal untuk memperkenalkan profil, pengalaman, keahlian, dan karya melalui pengalaman digital yang modern. Tampilan dirancang dengan nuansa monokrom, tipografi tegas, animasi halus, serta navigasi yang membantu pengunjung memahami perjalanan dan kemampuan saya sebagai web developer.',
    live_url: null,
    github_url: null,
    technologies: 'Next.js, TypeScript, Tailwind CSS, Framer Motion, Supabase',
    key_features:
      'Responsive portfolio experience, Interactive hero section with 3D lanyard, Dynamic project showcase, Certificate and tech stack sections, Supabase-powered content management, Animated transitions and micro-interactions',
    image_url: '/assets/projects/personal-portfolio/portfolio-home.png',
    image_urls: ['/assets/projects/personal-portfolio/portfolio-home.png'],
  },
]

export const fetchProjects = async () => {
  if (!isSupabaseConfigured) return localProjects

  const { data } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', {
      ascending: true,
    })

  const remoteProjects = data || []
  const localTitles = new Set(localProjects.map((item) => item.title))

  return [
    ...localProjects,
    ...remoteProjects.filter((item) => !localTitles.has(item.title)),
  ]
}

export const fetchCertificates = async () => {
  if (!isSupabaseConfigured) return localCertificates

  const { data } = await supabase
    .from('certificates')
    .select('*')
    .order('created_at', {
      ascending: true,
    })

  const remoteCertificates = data || []
  const localTitles = new Set(localCertificates.map((item) => item.title))

  return [
    ...localCertificates,
    ...remoteCertificates.filter((item) => !localTitles.has(item.title)),
  ]
}

export const fetchTechStacks = async () => {
  if (!isSupabaseConfigured) return localTechStacks

  const { data } = await supabase
    .from('tech_stack')
    .select('*')
    .order('created_at', {
      ascending: true,
    })

  const remoteTechStacks = data || []
  const localNames = new Set(localTechStacks.map((item) => item.name))

  return [
    ...localTechStacks,
    ...remoteTechStacks.filter((item) => !localNames.has(item.name)),
  ]
}