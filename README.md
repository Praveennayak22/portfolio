<div align="center">

# Praveen Kumar — Portfolio & System Architecture Console

**Modern, production-grade personal portfolio and interactive engineering simulator.**

[![Live Website](https://img.shields.io/badge/Live_Deployment-portfolio--flax--five--26.vercel.app-0071E3?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-flax-five-26.vercel.app/)
[![Next.js 16](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br/>

[🚀 Visit Live Website](https://portfolio-flax-five-26.vercel.app/) · [⚡ Test Architecture Simulator](https://portfolio-flax-five-26.vercel.app/#simulator) · [🎓 View Verified Certifications](https://portfolio-flax-five-26.vercel.app/#certifications)

</div>

---

## 🌟 Key Highlights & Features

- **⚡ Interactive Architecture Simulator**: Live client console testing multi-stage AST transpilation, compiler validation retry loops, and distributed SLURM / Kubernetes throughput metrics.
- **🎓 Verified Accreditations Showcase**: Direct integration with authentic Coursera credentials from **Stanford Online** (Supervised & Unsupervised ML) and the **University of London** (Full-Stack Web & MongoDB), featuring 1-click Credential ID copy and direct verification links.
- **💼 Comprehensive Full-Stack & AI Services**: 6 tailored service offerings covering Next.js/React full-stack web applications, AI agents, high-throughput FastAPI backends, and ML solutions.
- **📱 100% Mobile-First Responsive**: Precision-engineered across all viewports (from 360px smartphones to 4K displays) with frosted glass command-bar navigation and zero horizontal overflow.
- **🧪 Interactive Project Test Harnesses**: Interactive code, architecture, and pytest simulation tabs built into each project card.
- **🛡️ 100% Type-Safe & Production-Grade**: Zero console errors, fully validated with Next.js Turbopack and TypeScript strict mode.

---

## 🏗️ Architecture & Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom Apple/Linear-inspired dark theme
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) with automatic continuous deployment from `main`
- **Single Source of Truth**: All dynamic data, project specs, and verified credentials managed cleanly in [`lib/data.ts`](./lib/data.ts).

---

## 📂 Project Structure

```text
portfolio/
├── app/
│   ├── layout.tsx              # SEO metadata, OpenGraph, viewport configuration
│   ├── page.tsx                # Master page assembling all components
│   └── globals.css             # Glassmorphism, animations, custom scrollbars
├── components/
│   ├── Navbar.tsx              # Frosted command-bar island with mobile drawer
│   ├── Hero.tsx                # Hero section, capability switcher, email copy
│   ├── TechTicker.tsx          # Infinite auto-scrolling verified metric ticker
│   ├── LiveAiSimulator.tsx     # Interactive system architecture console
│   ├── Projects.tsx            # Selected work with run / arch / test harnesses
│   ├── Services.tsx            # 6 client-targeted service cards with deliverables
│   ├── Certifications.tsx      # Verified Stanford & University of London showcase
│   ├── Experience.tsx          # Soket AI Labs & IIT Gandhinagar track record
│   ├── Skills.tsx              # Categorized tech matrix with interactive filter tabs
│   ├── About.tsx               # Engineering philosophy and deterministic principles
│   ├── Recognition.tsx         # Explorer Fellowship & Dakshana Scholar distinctions
│   ├── Contact.tsx             # Direct email, copy pill, LinkedIn & inquiry form
│   ├── Footer.tsx              # Quick navigation & copyright
│   ├── SpotlightCard.tsx       # Reusable cursor-tracking radial spotlight card
│   └── BrandIcons.tsx          # Custom SVG vectors (GitHub, LinkedIn)
├── lib/
│   └── data.ts                 # ← Single source of truth for all content & credentials
├── public/
│   └── praveen.png             # Professional headshot
└── next.config.ts              # Next.js compiler & experimental optimizations
```

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/Praveennayak22/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server with Turbopack
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

### Production Build Verification

```bash
# Run type checking and production build
npm run build

# Start production server
npm start
```

---

## 👤 Author

**Praveen Kumar**  
*AI Systems & Full-Stack Web Developer · IIT Gandhinagar*  
- **Website**: [portfolio-flax-five-26.vercel.app](https://portfolio-flax-five-26.vercel.app/)  
- **LinkedIn**: [linkedin.com/in/praveen-kumar-52b41828b](https://www.linkedin.com/in/praveen-kumar-52b41828b/)  
- **GitHub**: [@Praveennayak22](https://github.com/Praveennayak22)  
- **Email**: [praveenthepredator@gmail.com](mailto:praveenthepredator@gmail.com)
