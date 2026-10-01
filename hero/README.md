# Cinematic Hero (React + Vite + Tailwind v4 + shadcn/ui)

Standalone single-page hero: fullscreen looping video, liquid-glass nav and CTAs,
Instrument Serif display typography with staggered fade-rise animations.

```bash
cd hero
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

- `src/App.tsx` — video background, nav, hero copy
- `src/index.css` — theme tokens (HSL CSS variables), `.liquid-glass`, `fade-rise` keyframes
- `src/components/ui/button.tsx` — shadcn Button with `glass` variant and `pill` / `pill-lg` sizes
