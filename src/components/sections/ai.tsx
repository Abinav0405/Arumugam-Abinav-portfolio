import { Reveal, SectionHeading } from "@/components/ui/reveal";

const aiPoints = [
  "AI coding assistants",
  "AI-powered application ideas",
  "Automation workflows",
  "AI APIs",
  "AI development workflows",
];

export function AISection() {
  return (
    <section id="ai" className="section-pad py-24 sm:py-28" aria-labelledby="ai-title">
      <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            id="ai-title"
            eyebrow="AI"
            title="Building with AI"
            description="AI is one of the areas I care about most. I experiment with the tools — and I want to understand how to build products with them."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[28px] border border-border bg-surface p-7 sm:p-8">
            <p className="display text-3xl text-foreground sm:text-4xl">
              I don&apos;t just want to use AI. I want to understand how to
              build with it.
            </p>
            <ul className="mt-8 space-y-3">
              {aiPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 border-t border-border pt-3 text-muted first:border-t-0 first:pt-0"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
