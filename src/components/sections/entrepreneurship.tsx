import { Reveal, SectionHeading } from "@/components/ui/reveal";

const areas = [
  "SaaS",
  "AI automation",
  "AI products",
  "Websites",
  "Mobile apps",
  "E-commerce",
  "Affiliate marketing",
  "Digital products",
  "Startup ideas",
];

export function EntrepreneurshipSection() {
  return (
    <section
      id="entrepreneurship"
      className="section-pad py-24 sm:py-28"
      aria-labelledby="entrepreneurship-title"
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="entrepreneurship-title"
            eyebrow="Ambition"
            title="More than a developer."
            description="I'm interested in entrepreneurship and building products. These are interests, experiments, and ambitions — not a list of companies I've founded."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-3xl text-lg text-foreground sm:text-xl">
            I don&apos;t just want to write software. I want to build things
            people actually use.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
