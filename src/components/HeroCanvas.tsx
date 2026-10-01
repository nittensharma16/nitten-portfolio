"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type TransformState = "web" | "ai" | "automation";

interface HeroCanvasProps {
  activeState?: TransformState;
  onStateChange?: (state: TransformState) => void;
  interactive?: boolean;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({
  activeState = "web",
  onStateChange,
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [internalState, setInternalState] = useState<TransformState>(activeState);
  const [isSupported, setIsSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Sync prop changes
  useEffect(() => {
    setInternalState(activeState);
  }, [activeState]);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container || reducedMotion) return;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setIsSupported(false);
      return;
    }

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 800 : 2800;

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 32 : 24;
    camera.position.y = 1.5;

    // Center focal point
    const group = new THREE.Group();
    scene.add(group);

    // Build target positions for the 3 states
    // 1. WEB: Architectural 3D Grid + Coordinate planes + Wireframe brackets
    // 2. AI: Neural network nodes + Synaptic spherical cloud + Fibonacci shell
    // 3. AUTOMATION: Directional conveyor loops + Circuit trajectories + Orbital rings

    const posWeb = new Float32Array(particleCount * 3);
    const posAI = new Float32Array(particleCount * 3);
    const posAuto = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const emberColor = new THREE.Color(0xff4d1f);
    const whiteColor = new THREE.Color(0xf2f2f0);
    const darkMutedColor = new THREE.Color(0x383842);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;

      // WEB: Multi-layered architectural planes & interface grids
      const gridX = ((i % 24) - 11.5) * 0.9;
      const gridY = (Math.floor((i % 576) / 24) - 11.5) * 0.45;
      const layer = Math.floor(i / 576) - 2;
      posWeb[idx] = gridX + (Math.random() - 0.5) * 0.2;
      posWeb[idx + 1] = gridY + (Math.random() - 0.5) * 0.2;
      posWeb[idx + 2] = layer * 2.8 + Math.sin(gridX * 0.8) * 0.8;

      // AI: Neural cluster & Fibonacci synaptic sphere
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 6.2 + (Math.sin(i * 0.15) * 1.8);
      posAI[idx] = radius * Math.sin(phi) * Math.cos(theta);
      posAI[idx + 1] = radius * Math.cos(phi);
      posAI[idx + 2] = radius * Math.sin(phi) * Math.sin(theta);

      // AUTOMATION: Directional racetracks, concentric vector rings & pipeline arrows
      const angle = (i / particleCount) * Math.PI * 8;
      const trackRadius = 4.5 + Math.floor(i / (particleCount / 5)) * 1.6;
      const trackHeight = ((i % 100) - 50) * 0.14;
      posAuto[idx] = Math.cos(angle) * trackRadius + (Math.random() - 0.5) * 0.3;
      posAuto[idx + 1] = trackHeight + Math.sin(angle * 2) * 1.2;
      posAuto[idx + 2] = Math.sin(angle) * trackRadius + (Math.random() - 0.5) * 0.3;

      // Initial positions set to WEB
      currentPositions[idx] = posWeb[idx];
      currentPositions[idx + 1] = posWeb[idx + 1];
      currentPositions[idx + 2] = posWeb[idx + 2];

      // Rare, intentional ember accent color for ~12% of nodes
      if (Math.random() < 0.14) {
        colors[idx] = emberColor.r;
        colors[idx + 1] = emberColor.g;
        colors[idx + 2] = emberColor.b;
      } else if (Math.random() < 0.45) {
        colors[idx] = whiteColor.r * 0.85;
        colors[idx + 1] = whiteColor.g * 0.85;
        colors[idx + 2] = whiteColor.b * 0.85;
      } else {
        colors[idx] = darkMutedColor.r;
        colors[idx + 1] = darkMutedColor.g;
        colors[idx + 2] = darkMutedColor.b;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.08 : 0.095,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, pMaterial);
    group.add(particleSystem);

    // Inner Architectural Core (Machinery & Neural Structure)
    const coreGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x141418,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Floating Ember Core Node
    const emberCoreGeo = new THREE.OctahedronGeometry(0.85, 0);
    const emberCoreMat = new THREE.MeshBasicMaterial({
      color: 0xff4d1f,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const emberCoreMesh = new THREE.Mesh(emberCoreGeo, emberCoreMat);
    group.add(emberCoreMesh);

    // Outer orbital rings for Automation / System feel
    const ringGeo = new THREE.TorusGeometry(8.5, 0.025, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x33333d,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh1.rotation.x = Math.PI / 3;
    group.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.scale.setScalar(1.25);
    group.add(ringMesh2);

    // Cursor interaction state
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    if (interactive && !isMobile) {
      window.addEventListener("mousemove", onMouseMove);
    }

    // Resize handler
    const onResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Group rotation based on time + cursor
      group.rotation.y = time * 0.08 + mouse.x * 0.35;
      group.rotation.x = Math.sin(time * 0.05) * 0.15 - mouse.y * 0.25;

      // Inner core counter rotation
      coreMesh.rotation.y = -time * 0.12;
      coreMesh.rotation.x = time * 0.09;

      emberCoreMesh.rotation.y = time * 0.3;
      emberCoreMesh.rotation.z = time * 0.2;
      const pulse = 1 + Math.sin(time * 2.5) * 0.12;
      emberCoreMesh.scale.set(pulse, pulse, pulse);

      ringMesh1.rotation.z = time * 0.05;
      ringMesh2.rotation.z = -time * 0.04;

      // Morphing particle positions toward current state target
      const posAttr = geometry.attributes.position;
      const arr = posAttr.array as Float32Array;

      let targetPos = posWeb;
      if (internalState === "ai") {
        targetPos = posAI;
      } else if (internalState === "automation") {
        targetPos = posAuto;
      }

      const lerpSpeed = 0.045;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        arr[idx] += (targetPos[idx] - arr[idx]) * lerpSpeed;
        arr[idx + 1] += (targetPos[idx + 1] - arr[idx + 1]) * lerpSpeed;
        arr[idx + 2] += (targetPos[idx + 2] - arr[idx + 2]) * lerpSpeed;

        // Subtle organic breathing motion
        arr[idx + 1] += Math.sin(time * 1.5 + i * 0.1) * 0.003;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      if (interactive && !isMobile) {
        window.removeEventListener("mousemove", onMouseMove);
      }
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer?.dispose();
      geometry.dispose();
      pMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      emberCoreGeo.dispose();
      emberCoreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, [internalState, reducedMotion, interactive]);

  const handleStateClick = (state: TransformState) => {
    setInternalState(state);
    if (onStateChange) onStateChange(state);
  };

  if (reducedMotion || !isSupported) {
    return (
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-white/10 flex items-center justify-center relative bg-gradient-to-tr from-[#141416]/80 to-transparent">
          <div className="absolute inset-0 rounded-full border border-[#FF4D1F]/20 scale-90 animate-pulse" />
          <div className="w-48 h-48 rounded-full border border-dashed border-white/20 flex items-center justify-center">
            <div className="w-12 h-12 rotate-45 border border-[#FF4D1F] bg-[#FF4D1F]/10 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#FF4D1F]" />
            </div>
          </div>
          <div className="absolute bottom-6 font-mono text-[10px] tracking-widest text-[#8A8A8F]">
            [ STATIC KINEMATIC SCHEMATIC // REDUCED MOTION ]
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full select-none">
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating State Controls (metaphor for the 3 services) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-20 flex flex-col items-end gap-2 pointer-events-auto">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A8A8F] mb-1">
          SCULPTURE STATE
        </span>
        <div className="flex items-center gap-1.5 p-1 bg-[#141416]/90 border border-[#222226] backdrop-blur-md rounded-lg">
          <button
            onClick={() => handleStateClick("web")}
            className={`px-3 py-1 font-mono text-xs rounded transition-all duration-300 ${
              internalState === "web"
                ? "bg-[#FF4D1F] text-white shadow-sm font-semibold"
                : "text-[#8A8A8F] hover:text-[#F2F2F0] hover:bg-white/5"
            }`}
          >
            01 / WEB
          </button>
          <button
            onClick={() => handleStateClick("ai")}
            className={`px-3 py-1 font-mono text-xs rounded transition-all duration-300 ${
              internalState === "ai"
                ? "bg-[#FF4D1F] text-white shadow-sm font-semibold"
                : "text-[#8A8A8F] hover:text-[#F2F2F0] hover:bg-white/5"
            }`}
          >
            02 / AI
          </button>
          <button
            onClick={() => handleStateClick("automation")}
            className={`px-3 py-1 font-mono text-xs rounded transition-all duration-300 ${
              internalState === "automation"
                ? "bg-[#FF4D1F] text-white shadow-sm font-semibold"
                : "text-[#8A8A8F] hover:text-[#F2F2F0] hover:bg-white/5"
            }`}
          >
            03 / AUTO
          </button>
        </div>
      </div>
    </div>
  );
};
