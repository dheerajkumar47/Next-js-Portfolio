# Dheeraj Kumar — Portfolio v3

> Personal portfolio of **Dheeraj Kumar**, AI Engineer — RAG, AI agents, voice AI and computer vision.
> Built with **Next.js 16**, **Tailwind CSS v4** and **Framer Motion**.

🌐 **Live:** [next-js-portfolio-green.vercel.app](https://next-js-portfolio-green.vercel.app)

---

## ✨ Features

| Section | What it shows |
|---|---|
| **Cinematic hero** | Fullscreen looping video, liquid-glass navigation and CTAs, Instrument Serif headline with staggered fade-rise animation, proof strip. |
| **Case studies** | Six featured systems (AI Receptionist, BidSmith, Factory CCTV Tracking, PSX Market Intelligence, Interview Pilot, AI Tutor) — problem, outcome, how-it-works flow, stack, links. |
| **More work** | Compact grid of experiments, tools and client builds. |
| **Capabilities** | Four service pillars, each tied to shipped proof. |
| **Research** | Two published AI papers with plain-language takeaways. |
| **Experience** | Roles and education timeline. |
| **Process + Contact** | How engagements run, and a contact form via the Nodemailer API route. |

All copy lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) — edit that file to add a project or role.

---

## 🗂️ Project Structure

```
├── public/
│   ├── resume.pdf              # CV (downloadable)
│   └── work/                   # Real project screenshots
└── src/
│   ├── app/
│   │   ├── api/send-email/     # Contact form API route (Nodemailer)
│   │   ├── globals.css         # Theme tokens, .liquid-glass, fade-rise animations
│   │   ├── layout.tsx          # Metadata + Instrument Serif / Inter fonts
│   │   └── page.tsx            # Entry point → renders <App />
│   ├── data/portfolio.ts       # 🔑 All portfolio content
│   └── components/
│       ├── App.tsx             # Page composition
│       ├── Nav.tsx             # Fixed glass nav + mobile menu
│       ├── Hero.tsx            # Video hero
│       ├── CaseStudies.tsx     # Featured case studies
│       ├── MoreWork.tsx        # Secondary projects grid
│       ├── Capabilities.tsx    # Service pillars
│       ├── Research.tsx        # Published papers
│       ├── Experience.tsx      # Roles + education
│       ├── Process.tsx         # How I work
│       ├── Contact.tsx         # Contact form + footer
│       └── ui.tsx              # Reveal, SectionHeading, Tag, TextLink
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework (App Router, SSR/SSG) |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Scroll animations, spring physics |
| **Nodemailer** | Contact form email sending |
| **next/font (Instrument Serif + Inter)** | Self-hosted typography |

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
| Headline, intro, proof numbers | `src/components/Hero.tsx`, `PROOF` in `src/data/portfolio.ts` |
| Case studies / more work | `CASE_STUDIES`, `MORE_WORK` in `src/data/portfolio.ts` |
| Capabilities | `CAPABILITIES` in `src/data/portfolio.ts` |
| Work history | `EXPERIENCE` in `src/data/portfolio.ts` |
| Research papers | `RESEARCH` in `src/data/portfolio.ts` |
| Email, socials, hero video | `PROFILE` in `src/data/portfolio.ts` |
| Resume PDF | Replace `public/resume.pdf` |
| SEO metadata | `src/app/layout.tsx` |
| Colours, glass effect, animations | `src/app/globals.css` |

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
