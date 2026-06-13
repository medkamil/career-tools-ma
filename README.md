# منصة الأدوات المهنية الشاملة | Tawdif Pro

**منصة مغربية متكاملة للتوظيف، التكوين المهني، المشاريع، وأدوات تفاعلية.**

A comprehensive Moroccan platform for employment, vocational training, projects, and interactive tools.

## ✨ Features

- **CV Generator** - Create professional Arabic CVs in minutes
- **Salary Calculator** - Calculate net salary after taxes and deductions (Morocco)
- **Cheque Printer** - Print professional Moroccan bank cheques
- **RTL Support** - Full Arabic right-to-left interface
- **Mobile-First** - Responsive design optimized for all devices
- **SEO Optimized** - Open Graph, Twitter Cards, JSON-LD Schema, sitemap

## 🛠 Tech Stack

| Technology     | Purpose                          |
| -------------- | -------------------------------- |
| Next.js 16     | React framework with App Router  |
| TypeScript     | Type safety (strict mode)        |
| Tailwind CSS 4 | Utility-first styling            |
| Cairo Font     | Arabic-optimized typography      |
| Lucide React   | Icon library                     |
| clsx           | Conditional class names          |
| tailwind-merge | Class conflict resolution        |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm 9+

### Installation

```bash
git clone https://github.com/tawdifpro/tawdifpro.git
cd tawdifpro
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## 📁 Project Structure

```
tawdifpro/
├── app/
│   ├── layout.tsx          # Root layout (SEO, fonts, RTL)
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Tailwind CSS v4
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── (marketing)/
│   │   └── about/page.tsx  # About page
│   └── (tools)/
│       ├── cv-generator/   # CV Generator page
│       ├── salary-calculator/ # Salary Calculator page
│       └── cheque-printer/ # Cheque Printer page
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── layout/             # Layout components
│       ├── Header.tsx      # Sticky header with mobile menu
│       └── Footer.tsx      # 4-column footer
├── config/
│   └── site.ts             # Site configuration
├── lib/
│   └── utils.ts            # cn() utility
├── public/
│   ├── robots.txt          # SEO robots
│   └── favicon.ico
├── vercel.json             # Vercel deployment config
└── package.json
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tawdifpro/tawdifpro)

Or manually:

```bash
npm run build
vercel --prod
```

### Environment Variables

No environment variables are required for the base installation.

## 🧪 SEO Checklist

- [x] Metadata API with dynamic title template
- [x] Open Graph & Twitter Cards
- [x] JSON-LD Organization Schema
- [x] robots.txt
- [x] XML Sitemap
- [x] RTL (`dir="rtl"`) & Arabic (`lang="ar"`)
- [x] Semantic HTML (h1, h2, landmarks)
- [x] Mobile-first responsive design
- [x] Security headers (via vercel.json)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **Email:** contact@tawdifpro.ma
- **Website:** https://tawdifpro.ma
- **Twitter:** [@tawdifpro](https://twitter.com/tawdifpro)

---

Made with ❤️ for Moroccan professionals.
