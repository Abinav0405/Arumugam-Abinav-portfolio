"use client";

import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { skillGroups, type SkillLevel } from "@/data/skills";
import { cn } from "@/lib/utils";

const levelStyles: Record<SkillLevel, string> = {
  Exploring: "border-border text-muted",
  Learning: "border-sky-500/30 text-sky-600 dark:text-sky-300",
  "Building with": "border-accent/40 text-accent",
  "Experienced with": "border-foreground/25 text-foreground",
};

export function SkillsSection() {
  const [active, setActive] = useState(skillGroups[0].title);
  const group = skillGroups.find((item) => item.title === active) ?? skillGroups[0];

  return (
    <section
      id="skills"
      className="section-pad py-24 sm:py-32"
      aria-labelledby="skills-title"
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="skills-title"
            eyebrow="Skills"
            title="Tools I'm building with"
            description="Labels are honest — exploring, learning, building with, or experienced with. I'm still early, and that's fine."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="mt-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillGroups.map((item) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={active === item.title}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  active === item.title
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border text-muted hover:text-foreground",
                )}
                onClick={() => setActive(item.title)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-4"
              >
                <span className="font-medium text-foreground">{skill.name}</span>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[11px]",
                    levelStyles[skill.level],
                  )}
                >
                  {skill.level}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
