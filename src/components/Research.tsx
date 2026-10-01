import { RESEARCH } from "@/data/portfolio";
import { ArrowIcon, Reveal, SectionHeading } from "@/components/ui";

export default function Research() {
  return (
    <section id="research" className="px-6 py-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Research"
          title="Published work on"
          muted="trustworthy, efficient AI."
        />

        <div className="divide-y divide-white/10 border-y border-white/10">
          {RESEARCH.map((paper, i) => (
            <Reveal key={paper.link} delay={i * 0.08}>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-10 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-12"
              >
                <h3 className="font-display text-3xl leading-tight transition-colors group-hover:text-muted-foreground md:text-4xl">
                  {paper.title}
                </h3>
                <div>
                  <p className="leading-relaxed text-muted-foreground">{paper.takeaway}</p>
                  <p className="mt-3 text-xs text-muted-foreground">{paper.venue}</p>
                </div>
                <span className="liquid-glass hidden h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110 md:flex">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
