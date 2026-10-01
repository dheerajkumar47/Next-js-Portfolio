import Image from "next/image";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolio";
import { Reveal, SectionHeading, Tag, TextLink } from "@/components/ui";

export default function CaseStudies() {
  return (
    <section id="work" className="px-6 py-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Case studies,"
          muted="problem to production."
          intro="Six systems I designed and built — what was broken, what I shipped, and how it works under the hood."
        />

        <div className="flex flex-col gap-6">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Reveal>
      <article id={study.id} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 lg:p-12">
        <header className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-8">
          <div className="flex items-baseline gap-5">
            <span className="text-sm text-muted-foreground">{study.index}</span>
            <h3 className="font-display text-4xl leading-none sm:text-6xl">{study.title}</h3>
          </div>
          <p className="text-xs tracking-wide text-muted-foreground">
            {study.category} · {study.year}
          </p>
        </header>

        <div className="grid gap-10 pt-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h4 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Problem</h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">{study.problem}</p>

            <h4 className="mt-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">What I built</h4>
            <p className="font-display mt-3 text-2xl leading-snug sm:text-3xl">{study.outcome}</p>

            <div className="mt-8 flex flex-wrap gap-6">
              {study.live && <TextLink href={study.live}>Live demo</TextLink>}
              {study.code && <TextLink href={study.code}>Source code</TextLink>}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">How it works</h4>
            <ol className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              {study.flow.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="liquid-glass rounded-full px-3.5 py-1.5">{step}</span>
                  {i < study.flow.length - 1 && (
                    <span className="text-muted-foreground" aria-hidden="true">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <ul className="mt-8 space-y-3">
              {study.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {study.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              <span className="text-foreground">Good fit for:</span> {study.fit}
            </p>
          </div>
        </div>

        {study.image && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={study.image.src}
              alt={study.image.alt}
              width={study.image.width}
              height={study.image.height}
              sizes="(min-width: 1280px) 1180px, 100vw"
              className="h-auto w-full"
            />
          </div>
        )}
      </article>
    </Reveal>
  );
}
