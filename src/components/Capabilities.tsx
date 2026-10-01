import { CAPABILITIES } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/ui";

export default function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Four things I do,"
          muted="end to end."
          intro="Every capability below is backed by shipped work you can open, run or read the code for."
        />

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col bg-background p-8 md:p-10">
                <p className="mb-6 text-xs text-muted-foreground">0{i + 1}</p>
                <h3 className="font-display text-4xl leading-none">{cap.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{cap.summary}</p>
                <p className="mt-8 text-sm leading-relaxed text-foreground/80">{cap.tools.join(" · ")}</p>
                <p className="mt-auto pt-8 text-xs text-muted-foreground">
                  Proof: <span className="text-foreground">{cap.proof.join(", ")}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
