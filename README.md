# Praveen Kumar — Portfolio Website

A complete, production-ready personal portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start (Run Locally)

```bash
# 1. Navigate into the portfolio folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in your browser
# → http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles & custom utilities
├── components/
│   ├── Navbar.tsx          # Frosted floating 3-pill navigation
│   ├── Hero.tsx            # Apple-style hero with portrait, copy email & radar
│   ├── TechTicker.tsx      # Infinite auto-scrolling verified metric ticker
│   ├── LiveAiSimulator.tsx # Interactive AI architecture simulator with live tests
│   ├── Experience.tsx      # Soket AI Labs & IITGN experience
│   ├── Projects.tsx        # 2-column project cards with code/arch/test tabs
│   ├── Services.tsx        # 6 client-targeted service cards with deliverables
│   ├── HowIWork.tsx        # 5-step milestone process with glowing energy line
│   ├── About.tsx           # Narrative from Soket AI Labs & engineering principles
│   ├── Skills.tsx          # Categorized technical skill sets
│   ├── Recognition.tsx     # IITGN Explorer Fellowship & Dakshana Scholar
│   ├── Contact.tsx         # Direct email, copy pill, LinkedIn & Formspree form
│   ├── Footer.tsx          # Minimalist footer with navigation & copyright
│   ├── SpotlightCard.tsx   # Reusable cursor-tracking radial spotlight card
│   └── BrandIcons.tsx      # Custom SVG brand icons (GitHub, LinkedIn)
├── lib/
│   └── data.ts             # ← All portfolio content lives here
├── public/
│   └── praveen.png         # Your professional photograph
└── next.config.ts          # Next.js configuration
```

---

## ✏️ Customizing Content

**All website content is in one file:** [`lib/data.ts`](./lib/data.ts)

To update:
- **Personal info / links** → `siteConfig`
- **Services** → `services` array
- **Projects** → `projects` array
- **Experience** → `experience` array
- **Skills** → `skills` object
- **Work process steps** → `workflowSteps` array

No need to touch any component files for content changes.

---

## 📬 Setting Up the Contact Form

The contact form uses **Formspree** (free tier, no backend required).

### Steps:
1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Click **"+ New Form"** and name it (e.g., "Portfolio Contact")
3. Copy your **Form ID** (looks like `xpzvwkae`)
4. Open `components/Contact.tsx`
5. Find this line:
   ```ts
   const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
   ```
6. Replace it with your actual ID:
   ```ts
   const FORMSPREE_ID = "xpzvwkae"; // ← your real ID
   ```
7. Rebuild: `npm run build`

You'll receive email notifications for every form submission.

---

## 🌐 Deploy to Vercel (Free — Recommended)

### Option A: Via GitHub (Best for automatic updates)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   gh repo create praveen-portfolio --public --push --source=.
   ```

2. **Connect to Vercel:**
   - Go to [https://vercel.com](https://vercel.com) and sign in with GitHub
   - Click **"Add New Project"**
   - Import your `praveen-portfolio` repository
   - Vercel auto-detects Next.js — click **"Deploy"**
   - Your site goes live at `https://praveen-portfolio.vercel.app`

3. **Custom domain (optional):**
   - In Vercel → Project Settings → Domains
   - Add your domain (e.g., `praveenkumar.dev`)

### Option B: Direct Deploy (No Git needed)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from the portfolio folder
cd portfolio
vercel

# Follow the prompts:
# → Set up and deploy? Y
# → Which scope? (select your account)
# → Link to existing project? N
# → Project name: praveen-portfolio
# → Directory: ./
# → Override settings? N

# Your site URL will be printed when complete
```

---

## 📋 Pre-Launch Checklist

Before sharing your URL with clients:

- [ ] Replace `YOUR_FORMSPREE_ID` in `Contact.tsx` with your real Formspree ID
- [ ] Test the contact form sends to your email
- [ ] Verify your profile photo loads correctly
- [ ] Check all GitHub project links open correctly
- [ ] Test on mobile (resize browser or use DevTools)
- [ ] Check LinkedIn link opens your profile
- [ ] Verify email link opens mail client
- [ ] Run `npm run build` with no errors
- [ ] (Optional) Add a custom domain in Vercel

---

## 🛠️ Build Commands

```bash
npm run dev      # Start local development server (http://localhost:3000)
npm run build    # Create optimized production build
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

---

## ⚡ Performance Notes

- All animations respect `prefers-reduced-motion`
- Images use Next.js `<Image>` for automatic optimization
- No unnecessary external scripts or trackers
- Static site generation — fast cold starts on Vercel

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16 | React framework |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| Framer Motion | latest | Animations |
| Lucide React | 1.64 | Icons |
| Formspree | free | Contact form |
| Vercel | free | Hosting |

---

Built by Praveen Kumar · [praveenthepredator@gmail.com](mailto:praveenthepredator@gmail.com)
