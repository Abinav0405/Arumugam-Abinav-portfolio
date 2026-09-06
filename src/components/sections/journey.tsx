import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { journey } from "@/data/journey";

export function JourneySection() {
  return (
    <section
      id="journey"
      className="section-pad py-24 sm:py-32"
      aria-labelledby="journey-title"
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="journey-title"
            eyebrow="Timeline"
            title="My Journey"
            description="A progression of experiments, builds, and real products — still being written."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-[11px] w-px bg-border sm:left-1/2 sm:-translate-x-px" />
          <ol className="space-y-8">
            {journey.map((entry, index) => {
              const left = index % 2 === 0;
              return (
                <Reveal key={entry.id} delay={index * 0.03}>
                  <li className="relative grid gap-4 sm:grid-cols-2 sm:gap-10">
                    <div
                      className={`pl-10 sm:pl-0 ${left ? "sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10"}`}
                    >
                      <article className="rounded-[22px] border border-border bg-surface p-5 transition hover:border-accent/35">
                        {entry.date ? (
                          <p className="text-xs tracking-[0.14em] text-accent uppercase">
                            {entry.date}
                          </p>
                        ) : null}
                        <h3 className="display mt-2 text-2xl text-foreground">
                          {entry.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {entry.description}
                        </p>
                      </article>
                    </div>
                    <span className="absolute top-6 left-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background sm:left-1/2 sm:-translate-x-1/2" />
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
