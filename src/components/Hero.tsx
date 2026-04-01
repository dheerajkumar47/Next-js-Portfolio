"use client";

import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import Overlay from "@/components/Overlay";

// Dynamically import the 3D canvas — avoids SSR issues with Three.js
const ArrowField3D = dynamic(() => import("@/components/ArrowField3D"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const spring = useSpring(scrollYProgress, { damping: 25, stiffness: 80, mass: 0.5 });

  // Keep a plain ref updated for the Three.js render loop (avoids re-renders)
  useMotionValueEvent(spring, "change", (v) => {
    scrollProgress.current = v;
  });

  return (
    <div ref={containerRef} className="relative h-[400vh]" id="home">
      {/* Sticky viewport — 3D scene + text overlay */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#080b14]">
        {/* 3D Arrow Background */}
        <ArrowField3D scrollProgress={scrollProgress} />

        {/* Radial vignette to blend edges */}
        <div
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, #080b14 90%)",
          }}
        />

        {/* Scroll-animated text overlay */}
        <Overlay scrollYProgress={spring} />
      </div>
    </div>
  );
}
