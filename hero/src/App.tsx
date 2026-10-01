import { Button } from '@/components/ui/button'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Studio', href: '#studio' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Reach Us', href: '#contact' },
]

const displayFont = { fontFamily: "'Instrument Serif', serif" }

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6">
        <a href="#" className="text-3xl tracking-tight text-foreground" style={displayFont}>
          Velorah<sup className="text-xs">®</sup>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-current={link.active ? 'page' : undefined}
                className={`text-sm transition-colors hover:text-foreground ${
                  link.active ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="glass" size="pill">
          Begin Journey
        </Button>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-40 py-[90px] text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl leading-[0.95] font-normal tracking-[-2.46px] sm:text-7xl md:text-8xl"
          style={displayFont}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the
          chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <Button variant="glass" size="pill-lg" className="animate-fade-rise-delay-2 mt-12 cursor-pointer">
          Begin Journey
        </Button>
      </main>
    </div>
  )
}

export default App
