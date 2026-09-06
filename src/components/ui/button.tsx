"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
  magnetic?: boolean;
};

const variantStyle: Record<
  NonNullable<ButtonProps["variant"]>,
  CSSProperties
> = {
  primary: {
    backgroundColor: "var(--btn-primary-bg)",
    color: "var(--btn-primary-fg)",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--btn-secondary-fg)",
    borderColor: "var(--btn-secondary-border)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--muted)",
  },
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  external,
  magnetic = true,
}: ButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const styles = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
    variant === "primary" && "hover:brightness-110",
    variant === "secondary" && "border hover:border-accent hover:text-accent",
    variant === "ghost" && "hover:text-foreground",
    className,
  );

  function onMove(event: MouseEvent<HTMLElement>) {
    if (!magnetic || reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.22);
    y.set(offsetY * 0.22);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
          style={variantStyle[variant]}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={styles}
        style={variantStyle[variant]}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      style={variantStyle[variant]}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {content}
    </button>
  );
}
