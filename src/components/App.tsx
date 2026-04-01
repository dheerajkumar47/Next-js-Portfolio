"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Dock from "@/components/Dock";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

const TerminalIntro = dynamic(() => import("@/components/TerminalIntro"), { ssr: false });

export default function App() {
  const [launched, setLaunched] = useState(false);

  return (
    <>
      {/* Terminal intro — stays until user presses Enter/taps */}
      {!launched && <TerminalIntro onLaunch={() => setLaunched(true)} />}

      {/* Main portfolio — fades in after launch */}
      <main
        className="bg-[#080b14] min-h-screen text-white"
        style={{
          transition: "opacity 0.8s ease 0.1s",
          opacity: launched ? 1 : 0,
          pointerEvents: launched ? "auto" : "none",
        }}
      >
        <Hero />
        <Projects />
        <Blog />
        <Skills />
        <Timeline />
        <Dock />
        <Contact />
      </main>
    </>
  );
}
