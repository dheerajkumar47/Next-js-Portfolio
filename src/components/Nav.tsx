"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/portfolio";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300 ${
        scrolled || open ? "bg-background/70 backdrop-blur-md" : ""
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl flex-row items-center justify-between px-6 py-5 md:px-8 md:py-6">
        <a href="#top" className="font-display text-3xl tracking-tight text-foreground">
          Dheeraj<sup className="text-xs">®</sup>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
          >
            Start a project
          </a>
          <button
            type="button"
            className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-1 px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display block py-2 text-3xl text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
