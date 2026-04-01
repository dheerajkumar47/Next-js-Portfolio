"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Mouse tracker (normalized -1 to 1) ─────────────────────────────────────
function useMouse() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return mouse;
}

// ─── Arrow Field ─────────────────────────────────────────────────────────────
function ArrowField({
  scrollProgress,
  mouse,
}: {
  scrollProgress: { current: number };
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const tipRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const COUNT = 300;
  const COLS = 20;
  const ROWS = 15;

  // Pre-build grid positions
  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        if (arr.length >= COUNT) break;
        const x = (c - COLS / 2) * 2.2;
        const y = (r - ROWS / 2) * 2.0;
        const z = (Math.random() - 0.5) * 4;
        arr.push([x, y, z]);
      }
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scroll = scrollProgress.current;
    const mx = mouse.current.x; // -1 to 1
    const my = mouse.current.y; // -1 to 1

    for (let i = 0; i < COUNT; i++) {
      const [bx, by, bz] = positions[i];

      // Each arrow's direction influenced by mouse + wave
      const wave = Math.sin(t * 0.7 + bx * 0.35 + by * 0.25) * 0.4;

      // Distance from this arrow to mouse (in normalized grid space)
      const nx = bx / 22; // normalize to ~-1..1
      const ny = by / 15;
      const dx = mx - nx;
      const dy = my - ny;
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;

      // Arrows "point toward" mouse — stronger when closer
      const influence = Math.min(1.5 / dist, 1.2);
      const mouseAngleX = dy * influence * 1.0;
      const mouseAngleZ = -dx * influence * 0.8;

      // Base flowing wave + mouse attraction
      const angleX = Math.PI / 2 + wave * 0.5 + mouseAngleX + scroll * 0.5;
      const angleZ = mouseAngleZ * 0.6;

      const scale = 0.55 + Math.sin(t * 1.2 + i * 0.15) * 0.06;

      // Shaft
      dummy.position.set(bx, by + wave * 0.35, bz);
      dummy.rotation.set(angleX, 0, angleZ);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Tip — offset along local Y (the shaft's direction)
      const tipOffset = 0.55;
      dummy.position.set(
        bx + Math.sin(angleZ) * tipOffset,
        by + wave * 0.35 + Math.cos(angleX) * tipOffset,
        bz + Math.sin(angleX) * tipOffset * 0.3
      );
      dummy.rotation.set(angleX, 0, angleZ);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      tipRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    tipRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      {/* Shafts */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
        <cylinderGeometry args={[0.04, 0.04, 0.7, 6]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#3730a3"
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.8}
        />
      </instancedMesh>

      {/* Tips */}
      <instancedMesh ref={tipRef} args={[undefined, undefined, COUNT]}>
        <coneGeometry args={[0.14, 0.38, 6]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.9}
          roughness={0.1}
          metalness={0.9}
        />
      </instancedMesh>
    </group>
  );
}

// ─── Camera — follows mouse smoothly + scroll ─────────────────────────────────
function CameraRig({
  scrollProgress,
  mouse,
}: {
  scrollProgress: { current: number };
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const { camera } = useThree();
  // Smooth lerp targets
  const lerpedMouse = useRef({ x: 0, y: 0 });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const s = scrollProgress.current;

    // Smoothly follow mouse
    lerpedMouse.current.x += (mouse.current.x - lerpedMouse.current.x) * 0.05;
    lerpedMouse.current.y += (mouse.current.y - lerpedMouse.current.y) * 0.05;

    const lx = lerpedMouse.current.x;
    const ly = lerpedMouse.current.y;

    // Camera tilts with mouse + gentle float + scroll pull
    camera.position.x = lx * 3 + Math.sin(t * 0.12) * 0.8;
    camera.position.y = ly * 2 + Math.cos(t * 0.09) * 0.5 - s * 5;
    camera.position.z = 18 - s * 3;
    camera.lookAt(lx * 1.5, ly * 1.0 - s * 4, 0);
  });

  return null;
}

// ─── Floating particles ───────────────────────────────────────────────────────
function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.018;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#818cf8"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Exported canvas ──────────────────────────────────────────────────────────
export default function ArrowField3D({
  scrollProgress,
}: {
  scrollProgress: { current: number };
}) {
  const mouse = useMouse();

  return (
    <Canvas
      camera={{ position: [0, 0, 18], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#818cf8" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[0, 5, 10]} intensity={0.6} color="#a855f7" />

      <CameraRig scrollProgress={scrollProgress} mouse={mouse} />
      <Particles />
      <ArrowField scrollProgress={scrollProgress} mouse={mouse} />
    </Canvas>
  );
}
