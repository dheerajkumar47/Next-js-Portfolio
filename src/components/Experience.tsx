import { EXPERIENCE } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/ui";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience" title="Where I've" muted="learned the craft." />

        <ol className="border-t border-white/10">
          {EXPERIENCE.map((item, i) => (
            <li key={`${item.org}-${item.title}`} className="border-b border-white/10">
              <Reveal delay={i * 0.05} className="grid gap-3 py-8 md:grid-cols-[220px_1fr_1.4fr] md:gap-12">
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <div>
                  <h3 className="font-display text-3xl leading-none">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.org}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
