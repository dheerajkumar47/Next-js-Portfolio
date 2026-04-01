"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Single Arrow (cone + cylinder) instanced ───────────────────────────────
function ArrowField({ scrollProgress }: { scrollProgress: { current: number } }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const tipRef  = useRef<THREE.InstancedMesh>(null!);

  const COUNT = 300;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Pre-build grid positions
  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    const COLS = 20;
    const ROWS = 15;
    const spacingX = 2.2;
    const spacingY = 2.0;
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        if (arr.length >= COUNT) break;
        const x = (c - COLS / 2) * spacingX;
        const y = (r - ROWS / 2) * spacingY;
        const z = (Math.random() - 0.5) * 4;
        arr.push([x, y, z]);
      }
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scroll = scrollProgress.current;

    for (let i = 0; i < COUNT; i++) {
      const [bx, by, bz] = positions[i];

      // Wave motion: each arrow shifts based on position + time
      const wave = Math.sin(t * 0.8 + bx * 0.4 + by * 0.3) * 0.5;
      const drift = Math.cos(t * 0.5 + bx * 0.2) * 0.3;

      // Scroll rotates the whole field — arrows tilt as you scroll
      const scrollTilt = scroll * Math.PI * 1.2;

      // Arrow direction angle (flow direction) — arrows point "forward" in Z with wave
      const angle = Math.PI / 2 + wave * 0.6 + drift * 0.4 + scrollTilt * 0.3;

      // Scale pulses slightly
      const scale = 0.55 + Math.sin(t * 1.2 + i * 0.15) * 0.06;

      // Shaft (cylinder)
      dummy.position.set(bx, by + wave * 0.4, bz + drift * 0.3);
      dummy.rotation.set(angle, 0, 0);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Tip (cone) — placed slightly above shaft in local Y
      dummy.position.set(bx, by + wave * 0.4 + Math.cos(angle) * 0.7, bz + drift * 0.3 + Math.sin(angle) * 0.7);
      dummy.rotation.set(angle, 0, 0);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      tipRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    tipRef.current.instanceMatrix.needsUpdate = true;
  });

  // Color gradient: deep blue → violet → cyan
  const colors = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const t = i / COUNT;
      // Interpolate between #0f2fff and #a855f7 and #06b6d4
      const r = 0.06 + t * 0.6;
      const g = 0.1  + t * 0.3;
      const b = 1.0  - t * 0.25;
      arr[i * 3]     = r;
      arr[i * 3 + 1] = g;
      arr[i * 3 + 2] = b;
    }
    return arr;
  }, []);

  return (
    <group>
      {/* Arrow shafts */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.7, 6]} />
        <meshStandardMaterial
          vertexColors={false}
          color="#6366f1"
          emissive="#3730a3"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </instancedMesh>

      {/* Arrow tips (cones) */}
      <instancedMesh ref={tipRef} args={[undefined, undefined, COUNT]}>
        <coneGeometry args={[0.13, 0.35, 6]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </instancedMesh>
    </group>
  );
}

// ─── Camera drift with scroll ────────────────────────────────────────────────
function CameraScroll({ scrollProgress }: { scrollProgress: { current: number } }) {
  const { camera } = useThree();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const s = scrollProgress.current;
    // Gentle float
    camera.position.x = Math.sin(t * 0.15) * 1.5;
    camera.position.y = Math.cos(t * 0.1) * 0.8 - s * 3;
    camera.position.z = 18 - s * 4;
    camera.lookAt(0, -s * 3, 0);
  });
  return null;
}

// ─── Floating particles (stars) ──────────────────────────────────────────────
function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 60;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#818cf8" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// ─── Main exported canvas ────────────────────────────────────────────────────
export default function ArrowField3D({ scrollProgress }: { scrollProgress: { current: number } }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 18], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#818cf8" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[0, 5, 10]} intensity={0.6} color="#a855f7" />

      <CameraScroll scrollProgress={scrollProgress} />
      <Particles />
      <ArrowField scrollProgress={scrollProgress} />
    </Canvas>
  );
}
