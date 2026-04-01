# 🚀 Dheeraj Kumar — Portfolio v2

> Personal portfolio of **Dheeraj Kumar**, Software Engineer & AI Researcher.  
> Built with **Next.js 16**, **Three.js**, and **Framer Motion**.

🌐 **Live:** [dheerajkumar.vercel.app](https://dheerajkumar.vercel.app) *(replace with your actual URL)*

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖥️ **Terminal Boot Screen** | Hacker-style intro with animated `npm run start` output. Press `Enter` (desktop) or tap `▶` (mobile) to launch. |
| 🏹 **3D Arrow Field Hero** | 300 glowing 3D arrows powered by Three.js. React to mouse movement in real-time and scroll. |
| 🖱️ **Mouse Tracking** | Arrows point toward your cursor with smooth lerp interpolation. Camera tilts to follow. |
| 📜 **Scroll Animation** | Hero text fades in/out in 3 stages as you scroll. Camera pulls forward with scroll. |
| 🧭 **macOS-style Dock** | Animated floating dock with magnification effect for navigation. |
| 💼 **Projects Section** | Showcases GitHub projects with live links. |
| 📄 **Research / Insights** | Published AI research papers section. |
| 🧠 **Skills Section** | Categorized technical skills from resume. |
| 🗓️ **Timeline** | Work & education history. |
| 📬 **Contact Form** | Email form via Nodemailer API route. |
| 📥 **Download Resume** | Direct PDF download from `/public/resume.pdf`. |

---

## 🗂️ Project Structure

```
portfolio-v2/
├── public/
│   └── resume.pdf              # Your CV (downloadable)
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send-email/     # Contact form API route (Nodemailer)
│   │   ├── globals.css         # Global styles + Tailwind
│   │   ├── layout.tsx          # Root layout (metadata, fonts)
│   │   └── page.tsx            # Entry point → renders <App />
│   │
│   └── components/
│       ├── App.tsx             # 🔑 Main wrapper: terminal state → portfolio
│       ├── TerminalIntro.tsx   # Terminal boot screen with typewriter effect
│       ├── Hero.tsx            # Hero section (3D scene + scroll overlay)
│       ├── ArrowField3D.tsx    # Three.js 3D arrow field (mouse + scroll reactive)
│       ├── Overlay.tsx         # Scroll-animated text over 3D hero
│       ├── Projects.tsx        # GitHub projects grid
│       ├── Blog.tsx            # Research papers / insights
│       ├── Skills.tsx          # Technical skills categorized
│       ├── Timeline.tsx        # Work & education timeline
│       ├── Dock.tsx            # macOS-style floating navigation dock
│       └── Contact.tsx         # Contact form with email API
│
├── next.config.ts              # Next.js config
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework (App Router, SSR/SSG) |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Scroll animations, spring physics |
| **Three.js** | 3D arrow field rendering |
| **@react-three/fiber** | React bindings for Three.js |
| **@react-three/drei** | Three.js helpers |
| **Nodemailer** | Contact form email sending |
| **Google Fonts (Inter)** | Typography |

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js **v18+**
- npm or yarn

### 1. Clone the repo
```bash
git clone https://github.com/dheerajkumar47/Next-js-Portfolio.git
cd Next-js-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=your-email@example.com
```

> **Note:** For Gmail, use an [App Password](https://myaccount.google.com/apppasswords) (not your real password). Enable 2FA first.

### 4. Start the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_TO`
4. Click **Deploy** — done! ✅

Vercel auto-deploys on every `git push` to `main`.

---

## ✏️ How to Customize

### Update Personal Info
| What to change | File |
|---|---|
| Name, title, bio | `src/components/Overlay.tsx` |
| Projects | `src/components/Projects.tsx` |
| Skills | `src/components/Skills.tsx` |
| Work history | `src/components/Timeline.tsx` |
| Research papers | `src/components/Blog.tsx` |
| Contact / socials | `src/components/Contact.tsx` |
| Resume PDF | Replace `public/resume.pdf` |
| SEO metadata | `src/app/layout.tsx` |
| Terminal boot text | `src/components/TerminalIntro.tsx` → `BOOT_LINES` array |

### Change 3D Arrow Colors
In `src/components/ArrowField3D.tsx`, find the `meshStandardMaterial` tags and change:
- `color` — base color of shaft/tip
- `emissive` — glow color
- `emissiveIntensity` — glow strength

---

## 📬 Contact Form Setup (Nodemailer)

The contact form uses a Next.js API route at `src/app/api/send-email/`.

It requires these environment variables:
```env
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx   # Gmail App Password
EMAIL_TO=recipient@example.com
```

---

## 📄 License

MIT — feel free to fork and customize for your own portfolio!

---

*Made with ❤️ by [Dheeraj Kumar](https://github.com/dheerajkumar47)*
