import { MORE_WORK } from "@/data/portfolio";
import { Reveal, SectionHeading, TextLink } from "@/components/ui";

export default function MoreWork() {
  return (
    <section id="more-work" className="px-6 pb-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="More work" title="Experiments, tools" muted="and client builds." />

        <ul className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {MORE_WORK.map((item, i) => (
            <li key={item.title} className="bg-background">
              <Reveal delay={(i % 3) * 0.06} className="flex h-full flex-col p-7">
                <p className="text-xs text-muted-foreground">{item.category}</p>
                <h3 className="font-display mt-3 text-3xl leading-none">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <p className="mt-5 text-xs text-foreground/70">{item.stack.join(" · ")}</p>
                <div className="mt-auto flex flex-wrap gap-5 pt-6">
                  {item.live && <TextLink href={item.live}>Live</TextLink>}
                  {item.code && <TextLink href={item.code}>Code</TextLink>}
                  {item.download && (
                    <TextLink href={item.download.href} download={item.download.filename}>
                      {item.download.label}
                    </TextLink>
                  )}
                  {item.note && <span className="text-xs text-muted-foreground">{item.note}</span>}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
