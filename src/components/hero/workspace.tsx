"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroWorkspace() {
  const reduce = useReducedMotion();
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const saveData =
      "connection" in navigator &&
      Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    setLite(mobile || saveData || Boolean(reduce));
  }, [reduce]);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[540px]"
      aria-hidden={!lite ? undefined : true}
    >
      <div className="absolute inset-[8%] rounded-[28px] border border-border bg-surface-elevated/80 shadow-[var(--shadow)]" />
      <div className="glow-orb left-[10%] top-[8%] h-40 w-40 bg-accent/30" />
      <div className="glow-orb bottom-[12%] right-[8%] h-36 w-36 bg-sky-500/20" />

      <motion.div
        className="absolute left-[8%] top-[14%] w-[58%] overflow-hidden rounded-2xl border border-border bg-background/90 p-4 shadow-[var(--shadow)] float-slow"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[10px] tracking-wide text-muted">
            workspace.tsx
          </span>
        </div>
        <pre className="font-mono text-[11px] leading-5 text-muted sm:text-xs">
          <code>
            {`const abinav = {
  role: "student-builder",
  builds: ["web", "android", "ai"],
  loop: "idea → ship → improve"
}`}
          </code>
        </pre>
      </motion.div>

      <motion.div
        className="absolute right-[4%] top-[28%] w-[48%] rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow)] float-slower"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
      >
        <p className="text-[10px] tracking-[0.16em] text-accent uppercase">
          Live product
        </p>
        <p className="mt-2 text-sm font-medium text-foreground">
          AKK Timesheet Manager
        </p>
        <p className="mt-1 text-xs text-muted">Web + Android · Production</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-accent-soft">
          <div className="h-full w-[78%] rounded-full bg-accent" />
        </div>
      </motion.div>

      {!lite ? (
        <motion.div
          className="absolute bottom-[16%] left-[14%] w-[52%] rounded-2xl border border-border bg-[#0b0d10] p-4 font-mono text-[11px] text-[#9ae6b4] shadow-[var(--shadow)]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-[#6b7280]">~/projects</p>
          <p>$ build --idea reality</p>
          <p className="mt-1">✓ compiling curiosity...</p>
          <p>✓ shipping something useful</p>
          <p className="mt-1 animate-pulse">█</p>
        </motion.div>
      ) : (
        <div className="absolute bottom-[18%] left-[14%] rounded-2xl border border-border bg-surface px-4 py-3 text-xs text-muted">
          Digital workspace · builder mode
        </div>
      )}

      <motion.div
        className="absolute right-[10%] bottom-[10%] rounded-full border border-border bg-accent-soft px-3 py-1.5 text-[11px] text-accent"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        AI · SaaS · Experiments
      </motion.div>
    </div>
  );
}
