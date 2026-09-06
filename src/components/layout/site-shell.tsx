"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [clicks, setClicks] = useState(0);
  const [showEgg, setShowEgg] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  const onLogoClick = useCallback(() => {
    setClicks((count) => {
      const next = count + 1;
      if (next >= 5) {
        setShowEgg(true);
        return 0;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (!showEgg) return;
    const sequence = [
      "> okay_you_found_it",
      "> loading secret.dev...",
      "> status: still learning",
      "> status: still building",
      "> tip: break things. fix them. ship again.",
      "> session closed.",
    ];
    setLines([]);
    let i = 0;
    const id = window.setInterval(() => {
      setLines((prev) => [...prev, sequence[i]]);
      i += 1;
      if (i >= sequence.length) window.clearInterval(id);
    }, 420);
    const close = window.setTimeout(() => setShowEgg(false), 5200);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(close);
    };
  }, [showEgg]);

  return (
    <>
      <ScrollProgress />
      <Navbar onLogoClick={onLogoClick} />
      <main className="flex-1">{children}</main>
      <Footer />

      <AnimatePresence>
        {showEgg ? (
          <motion.div
            className="fixed bottom-6 right-6 z-[70] w-[min(92vw,360px)] overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[var(--shadow)]"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16 }}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-2 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              abinav — terminal
            </div>
            <div className="space-y-1 px-4 py-3 font-mono text-xs text-accent">
              <p>Okay, you found it.</p>
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
