"use client";

import { useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { Reveal, TextLink } from "@/components/ui";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-white/40 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 pt-32 pb-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-5 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">Contact</p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-[-1.5px] md:text-7xl">
            Have a use case? <em className="text-muted-foreground not-italic">Let&apos;s build it.</em>
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            Tell me how your customers or team work today. I&apos;ll reply with a clear plan, a timeline and a fixed
            price. Open to freelance projects and full-time AI engineering roles.
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            className="font-display mt-10 inline-block text-3xl underline decoration-white/20 underline-offset-8 transition-colors hover:decoration-white"
          >
            {PROFILE.email}
          </a>

          <div className="mt-10 flex flex-wrap gap-6">
            <TextLink href={PROFILE.github}>GitHub</TextLink>
            <TextLink href={PROFILE.linkedin}>LinkedIn</TextLink>
            <TextLink href={PROFILE.resume} download="Dheeraj-Kumar-Resume.pdf">
              Résumé (PDF)
            </TextLink>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="form-status">
            <label className="block">
              <span className="sr-only">Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={fieldClass}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={fieldClass}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="block">
              <span className="sr-only">Project details</span>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className={`${fieldClass} resize-none`}
                placeholder="What should the AI do, and where does your data live?"
                required
              />
            </label>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="liquid-glass cursor-pointer rounded-full px-10 py-4 text-foreground transition-transform hover:scale-[1.03] disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p id="form-status" role="status" className="text-sm text-muted-foreground">
                {status === "sent" && "Thanks — I'll reply within a day."}
                {status === "error" && (
                  <>
                    Couldn&apos;t send. Email me directly at{" "}
                    <a href={`mailto:${PROFILE.email}`} className="text-foreground underline">
                      {PROFILE.email}
                    </a>
                    .
                  </>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>

      <footer className="mx-auto mt-32 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.
        </p>
        <a href="#top" className="transition-colors hover:text-foreground">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
