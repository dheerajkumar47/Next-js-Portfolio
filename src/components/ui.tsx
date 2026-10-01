"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  muted,
  intro,
}: {
  eyebrow: string;
  title: string;
  muted?: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-16 max-w-3xl">
      <p className="mb-5 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">{eyebrow}</p>
      <h2 className="font-display text-5xl leading-[0.95] font-normal tracking-[-1.5px] md:text-7xl">
        {title} {muted && <em className="text-muted-foreground not-italic">{muted}</em>}
      </h2>
      {intro && <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </Reveal>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">{children}</span>
  );
}

export function ArrowIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TextLink({ href, children, download }: { href: string; children: React.ReactNode; download?: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 text-sm text-foreground underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}
