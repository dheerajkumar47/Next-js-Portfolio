import { PROCESS } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/ui";

export default function Process() {
  return (
    <section id="process" className="px-6 py-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="How I work" title="Clear steps," muted="no surprises." />

        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <li key={p.step}>
              <Reveal delay={i * 0.08}>
                <p className="text-sm text-muted-foreground">{p.step}</p>
                <h3 className="font-display mt-4 border-t border-white/10 pt-6 text-4xl leading-none">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
