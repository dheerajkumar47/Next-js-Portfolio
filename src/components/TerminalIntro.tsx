"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Terminal lines to animate ────────────────────────────────────────────────
const BOOT_LINES = [
  { text: "dheeraj@portfolio:~$ npm run start", delay: 300, color: "#4ade80" },
  { text: "", delay: 700 },
  { text: "> dheeraj-portfolio@0.1.0 start", delay: 900, color: "#86efac" },
  { text: "> next start", delay: 1100, color: "#86efac" },
  { text: "", delay: 1400 },
  { text: "   ▲ Next.js 16.1.3", delay: 1600, color: "#a3e635" },
  { text: "", delay: 1800 },
  { text: "   - Local:        http://localhost:3000", delay: 2000, color: "#6ee7b7" },
  { text: "   - Network:      http://192.168.1.10:3000", delay: 2200, color: "#6ee7b7" },
  { text: "", delay: 2600 },
  { text: "   ✓ Starting...", delay: 2900, color: "#4ade80" },
  { text: "   ✓ Compiled successfully in 4.8s", delay: 3800, color: "#4ade80" },
  { text: "", delay: 4200 },
  { text: "   ◆ Portfolio of Dheeraj Kumar loaded.", delay: 4500, color: "#f0fdf4" },
  { text: "   ◆ Software Engineer & AI Researcher.", delay: 4900, color: "#bbf7d0" },
  { text: "", delay: 5300 },
];

const PROMPT_DELAY = 5600; // when to show "Press ENTER" prompt

// ─── Typewriter single line ────────────────────────────────────────────────────
function TypewriterLine({ text, color = "#4ade80" }: { text: string; color?: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [text]);

  if (!text) return <div className="h-4" />;

  return (
    <div style={{ color, fontFamily: "monospace" }} className="text-sm md:text-base leading-relaxed">
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-pulse">▌</span>
      )}
    </div>
  );
}

// ─── Main TerminalIntro ────────────────────────────────────────────────────────
export default function TerminalIntro({ onLaunch }: { onLaunch: () => void }) {
  const [visibleLines, setVisibleLines] = useState<typeof BOOT_LINES>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [launching, setLaunching] = useState(false);
  const launched = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Reveal lines one by one based on delay
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, line]);
        }, line.delay)
      );
    });

    timers.push(
      setTimeout(() => setShowPrompt(true), PROMPT_DELAY)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  // Scroll to bottom as lines appear
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleLines]);

  const handleLaunch = useCallback(() => {
    if (launched.current || !showPrompt) return;
    launched.current = true;
    setLaunching(true);
    setTimeout(onLaunch, 800);
  }, [showPrompt, onLaunch]);

  // Enter key listener
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleLaunch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleLaunch]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col"
      style={{
        background: "#050a05",
        transition: launching ? "opacity 0.7s ease, transform 0.7s ease" : "none",
        opacity: launching ? 0 : 1,
        transform: launching ? "translateY(-40px) scale(0.98)" : "translateY(0) scale(1)",
      }}
    >
      {/* CRT scan lines overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
        }}
      />

      {/* Glow vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,10,2,0.85) 100%)",
        }}
      />

      {/* Terminal header bar */}
      <div
        className="flex items-center gap-2 px-5 py-3 border-b relative z-20"
        style={{ borderColor: "#1a2e1a", background: "#0d150d" }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
        <span
          className="ml-4 text-xs tracking-widest uppercase"
          style={{ color: "#4ade8088", fontFamily: "monospace" }}
        >
          bash — dheeraj@portfolio — 120×40
        </span>
      </div>

      {/* Terminal body */}
      <div className="flex-1 overflow-y-auto px-6 md:px-12 py-6 relative z-20 scrollbar-none">
        {/* Static header */}
        <div
          className="text-xs mb-6 opacity-50"
          style={{ color: "#4ade80", fontFamily: "monospace" }}
        >
          Last login: {new Date().toDateString()} on ttys001
        </div>

        {/* Animated lines */}
        <div className="space-y-0.5">
          {visibleLines.map((line, i) => (
            <TypewriterLine key={i} text={line.text} color={line.color} />
          ))}
        </div>

        {/* Prompt */}
        {showPrompt && (
          <div className="mt-8 space-y-4" ref={bottomRef}>
            {/* Blinking prompt text */}
            <div
              className="flex items-center gap-2 text-sm md:text-base"
              style={{ color: "#4ade80", fontFamily: "monospace" }}
            >
              <span
                className="text-green-400 font-bold"
                style={{ animation: "blink 1s step-end infinite" }}
              >
                ▶
              </span>
              <span>
                {" "}
                Press{" "}
                <kbd
                  className="px-2 py-0.5 rounded text-xs font-bold"
                  style={{
                    background: "#14532d",
                    border: "1px solid #4ade80",
                    color: "#bbf7d0",
                  }}
                >
                  ENTER
                </kbd>{" "}
                to launch portfolio
              </span>
            </div>

            {/* Mobile tap button */}
            <button
              onClick={handleLaunch}
              className="md:hidden flex items-center gap-3 px-6 py-4 rounded-lg font-mono font-bold text-base active:scale-95 transition-transform"
              style={{
                background: "linear-gradient(135deg, #14532d, #166534)",
                border: "1px solid #4ade80",
                color: "#4ade80",
                boxShadow: "0 0 20px #4ade8030, 0 0 40px #4ade8015",
              }}
            >
              <span className="text-xl">▶</span>
              <span>LAUNCH PORTFOLIO</span>
            </button>

            {/* Desktop secondary click hint */}
            <div
              className="hidden md:block text-xs opacity-40"
              style={{ color: "#4ade80", fontFamily: "monospace" }}
            >
              or click anywhere to continue
            </div>
          </div>
        )}

        <div ref={showPrompt ? undefined : bottomRef} />
      </div>

      {/* Click anywhere (desktop) */}
      {showPrompt && (
        <div className="absolute inset-0 z-0 hidden md:block cursor-pointer" onClick={handleLaunch} />
      )}

      {/* Blink keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
