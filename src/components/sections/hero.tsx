"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroWorkspace } from "@/components/hero/workspace";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 section-pad sm:pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="ambient-grid absolute inset-0 opacity-80" />
      <div className="glow-orb -left-10 top-24 h-64 w-64 bg-accent/25" />
      <div className="glow-orb right-0 top-40 h-72 w-72 bg-sky-500/15" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="status-dot" aria-hidden />
            {siteConfig.status}
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="display text-[clamp(3rem,9vw,5.8rem)] text-foreground"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
          >
            Hi, I&apos;m Abinav.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-xl text-foreground/90 sm:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            I build things that turn ideas into reality.
          </motion.p>

          <motion.p
            className="mt-4 text-sm tracking-[0.08em] text-muted uppercase sm:text-[13px]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {siteConfig.roles.join(" • ")}
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I&apos;m a student at {siteConfig.school.name} in{" "}
            {siteConfig.school.location} who enjoys building software,
            experimenting with AI, and turning real-world problems into
            products.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button href="/#projects">
              Explore My Work <ArrowDownRight size={16} />
            </Button>
            <Button href="/#about" variant="secondary">
              Get to Know Me <ArrowUpRight size={16} />
            </Button>
          </motion.div>

          <p className="mt-10 max-w-md text-sm text-muted">
            <span className="text-foreground">{siteConfig.name}</span> — young,
            still learning, and already shipping real software.
          </p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <HeroWorkspace />
        </motion.div>
      </div>
    </section>
  );
}
