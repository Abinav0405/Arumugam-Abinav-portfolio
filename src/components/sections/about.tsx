import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="section-pad py-24 sm:py-32" aria-labelledby="about-title">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="About"
            title="More than just code."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              My journey with technology has never really been about simply
              learning how to code. I like taking something that doesn&apos;t
              exist and making it real.
            </p>
            <p>
              Whether it is a website, mobile application, business system,
              game, automation, or an experiment with AI, I learn best by
              building.
            </p>
            <p>
              Some of my projects started as small ideas and became much bigger
              systems. Working on real applications has taught me that building
              software isn&apos;t just about writing code — it&apos;s about
              understanding people, workflows, problems, design, reliability and
              what happens when the software is actually used.
            </p>
            <p className="rounded-2xl border border-border bg-surface px-5 py-4 text-foreground">
              &ldquo;{siteConfig.philosophy}&rdquo;
            </p>
            <p>
              I&apos;m young, but I build real things. That&apos;s the story so
              far — and it&apos;s still early.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
