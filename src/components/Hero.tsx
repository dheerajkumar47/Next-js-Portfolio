import { PROFILE, PROOF } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden bg-background">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={PROFILE.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-32 pb-16 text-center">
        <p className="liquid-glass animate-fade-rise mb-10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          {PROFILE.role}
          <span className="hidden sm:inline">· {PROFILE.location}</span>· Taking new projects
        </p>

        <h1
          className="font-display animate-fade-rise max-w-7xl text-5xl leading-[0.95] font-normal tracking-[-2.46px] sm:text-7xl md:text-8xl"
        >
          AI that <em className="text-muted-foreground not-italic">works</em> in production,{" "}
          <br className="hidden sm:block" />
          <em className="text-muted-foreground not-italic">not just in the demo.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m Dheeraj Kumar. I build RAG chatbots, multi-agent workflows, WhatsApp and voice assistants, and
          real-time computer vision — on clean, tested backends you fully own.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-6 sm:flex-row">
          <a
            href="#contact"
            className="liquid-glass cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]"
          >
            Start a project
          </a>
          <a href="#work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            See the work ↓
          </a>
        </div>
      </div>

      <dl className="animate-fade-rise-delay-3 relative z-10 mx-auto grid w-full max-w-5xl grid-cols-2 gap-x-6 gap-y-6 px-6 pb-12 md:grid-cols-4">
        {PROOF.map((item) => (
          <div key={item.label} className="text-center">
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span className="font-display block text-4xl">{item.value}</span>
              <span className="mt-1 block text-xs text-muted-foreground" aria-hidden="true">
                {item.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
