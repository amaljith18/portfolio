# 🚀 Amaljith PM — Personal Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)

**Senior Frontend Engineer · React · TypeScript · Next.js · Dubai, UAE**

[🌐 Live Demo](#) · [📧 Contact](mailto:amaljithpm1999@gmail.com) · [💼 LinkedIn](https://linkedin.com/in/amaljith-pm-45a5431b8) · [🐙 GitHub](https://github.com/amaljith18)

</div>

---

## ✨ Features

- 🌙 **Dark / Light mode** — defaults to dark, persists across sessions
- 🎬 **Framer Motion animations** — page load, scroll reveal, hover effects
- ⌨️ **Typing animation** — animated role switcher in hero section
- 📱 **Fully responsive** — mobile, tablet, laptop, and large screens
- 📬 **Working contact form** — emails delivered via Web3Forms (no backend)
- ⚡ **Lazy loaded sections** — fast initial load with code splitting
- 🔝 **Scroll-to-top button** — smooth UX
- 🔍 **SEO optimized** — meta tags, Open Graph, Twitter Card
- 💎 **Glassmorphism UI** — modern glass cards with neon accents

---

## 🛠️ Tech Stack

| Category       | Technologies                                 |
| -------------- | -------------------------------------------- |
| **Frontend**   | React 18, TypeScript, Vite                   |
| **Styling**    | Tailwind CSS, Custom CSS Variables           |
| **Animation**  | Framer Motion, React Type Animation          |
| **Icons**      | Lucide React                                 |
| **Forms**      | Web3Forms API                                |
| **Fonts**      | Syne, DM Sans, JetBrains Mono (Google Fonts) |
| **Deployment** | Vercel / Netlify / GitHub Pages              |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx        # Sticky navbar with scroll tracking
│   │   │   ├── Hero.tsx          # Hero with typing animation + profile
│   │   │   ├── About.tsx         # About me + stats grid
│   │   │   ├── Skills.tsx        # Tabbed skills with progress bars
│   │   │   ├── Projects.tsx      # Project cards with filter
│   │   │   ├── Experience.tsx    # Animated timeline
│   │   │   ├── Contact.tsx       # Contact form (Web3Forms)
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Loader.tsx        # Loading screen
│   │       └── ScrollToTop.tsx   # Scroll to top button
│   ├── data/
│   │   └── index.ts              # All portfolio content
│   ├── hooks/
│   │   ├── useTheme.ts           # Dark/light mode
│   │   └── useScrollReveal.ts    # Scroll animations
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/amaljith18/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy anywhere.

---

## ⚙️ Configuration

### 1. Update Your Info

Edit `src/data/index.ts` to update:

- Projects
- Work experience
- Skills
- Social links

### 2. Add Your Profile Photo

Drop your photo as `profile.jpg` inside the `public/` folder, then update `src/components/sections/Hero.tsx`:

```tsx
// Replace the placeholder div with:
<img
  src="/profile.jpg"
  alt="Amaljith PM"
  className="w-full h-full object-cover"
/>
```

### 3. Set Up Contact Form (Web3Forms)

1. Go to **[web3forms.com](https://web3forms.com)**
2. Enter your Gmail → click **"Get Access Key"**
3. Open `src/components/sections/Contact.tsx`
4. Replace the access key:

```ts
const WEB3FORMS_ACCESS_KEY = "your-access-key-here";
```

---

## 🌐 Free Hosting Guide

### Option 1 — Vercel (Recommended ⭐)

Fastest deployment, auto HTTPS, free custom domain support.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at **[vercel.com](https://vercel.com)** — auto-deploys on every push.

---

### Option 2 — Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or drag & drop your `dist/` folder at **[app.netlify.com](https://app.netlify.com)**.

---

### Option 3 — GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

---

## 📸 Sections Overview

| Section        | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| **Hero**       | Name, animated role, profile photo, CTA buttons, social links     |
| **About**      | Bio, tags, stats (years exp, performance boost, etc.)             |
| **Skills**     | Frontend / Backend / DevOps / AI tools with progress bars         |
| **Projects**   | 6 projects with images, tech stack, GitHub links, featured filter |
| **Experience** | Timeline: Global Infonet, Noon, Freelance + Education             |
| **Contact**    | Form with validation, sends email via Web3Forms                   |

---

## 📬 Contact

**Amaljith PM**

- 📧 [amaljithpm1999@gmail.com](mailto:amaljithpm1999@gmail.com)
- 📞 +971 506565384
- 📍 Dubai, UAE — Immediate Joiner
- 💼 [LinkedIn](https://linkedin.com/in/amaljith-pm-45a5431b8)
- 🐙 [GitHub](https://github.com/amaljith18)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Built with ❤️ by <strong>Amaljith PM</strong> · Senior Frontend Engineer
</div>
