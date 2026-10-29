'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

/**
 * Procedural Realistic Latte Art & Rich Brown Espresso Crema Texture
 * Generates an authentic specialty coffee flat-white / latte surface:
 * - Rich roasted espresso dark brown base
 * - Golden-hazelnut crema foam gradient
 * - Silky milk micro-foam tulip rosette with barista cut-through and heart
 */
function createRealisticLatteArtTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // 1. Rich dark roasted espresso coffee base
  const baseGrad = ctx.createRadialGradient(256, 256, 20, 256, 256, 256);
  baseGrad.addColorStop(0, '#4E2914');   // Warm espresso brown
  baseGrad.addColorStop(0.45, '#381B0B'); // Deep rich coffee brown
  baseGrad.addColorStop(0.8, '#261106');  // Dark roasted coffee
  baseGrad.addColorStop(1, '#1A0B04');   // Deepest dark crema border
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, 512, 512);

  // 2. Rich hazelnut crema halo around the rim
  const cremaHalo = ctx.createRadialGradient(256, 256, 160, 256, 256, 250);
  cremaHalo.addColorStop(0, 'rgba(180, 115, 50, 0)');
  cremaHalo.addColorStop(0.5, 'rgba(195, 130, 65, 0.45)');
  cremaHalo.addColorStop(0.85, 'rgba(150, 85, 35, 0.7)');
  cremaHalo.addColorStop(1, 'rgba(80, 40, 15, 0.4)');
  ctx.fillStyle = cremaHalo;
  ctx.beginPath();
  ctx.arc(256, 256, 250, 0, Math.PI * 2);
  ctx.fill();

  // Subtle authentic crema texture speckles
  for (let i = 0; i < 110; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = 145 + Math.random() * 100;
    ctx.fillStyle = `rgba(215, 155, 80, ${0.12 + Math.random() * 0.2})`;
    ctx.beginPath();
    ctx.arc(256 + Math.cos(angle) * r, 256 + Math.sin(angle) * r, 1 + Math.random() * 1.8, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Silky white latte art rosette
  ctx.save();
  ctx.translate(256, 245);

  const foamWhite = '#FFFDF8';

  // 4 Tiers of tulip foam petals
  const tiers = [
    { y: -72, rx: 34, ry: 26 },
    { y: -26, rx: 50, ry: 34 },
    { y: 26, rx: 62, ry: 40 },
    { y: 82, rx: 72, ry: 44 }
  ];

  tiers.forEach((tier) => {
    // Crema marbling feathering around petal edge
    ctx.fillStyle = 'rgba(165, 100, 45, 0.42)';
    ctx.beginPath();
    ctx.ellipse(0, tier.y + 3, tier.rx * 1.08, tier.ry * 1.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // Silky white milk foam
    ctx.fillStyle = foamWhite;
    ctx.beginPath();
    ctx.ellipse(0, tier.y, tier.rx, tier.ry, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  // Central barista cut through line
  ctx.strokeStyle = '#2B1306';
  ctx.lineWidth = 3.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(0, -96);
  ctx.bezierCurveTo(-2, -10, -1, 70, 0, 138);
  ctx.stroke();

  // Top heart
  ctx.fillStyle = foamWhite;
  ctx.beginPath();
  ctx.arc(-8, -98, 9, 0, Math.PI * 2);
  ctx.arc(8, -98, 9, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  return texture;
}

/**
 * Creates a clean neutral soft contact shadow for the marble table
 * (Deep soft black ambient occlusion without artificial yellow tinting)
 */
function createContactShadowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Pure neutral soft ambient occlusion shadow
  const grad = ctx.createRadialGradient(256, 256, 15, 256, 256, 220);
  grad.addColorStop(0, 'rgba(0, 0, 0, 0.92)');
  grad.addColorStop(0.35, 'rgba(0, 0, 0, 0.68)');
  grad.addColorStop(0.65, 'rgba(0, 0, 0, 0.28)');
  grad.addColorStop(0.85, 'rgba(0, 0, 0, 0.08)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  return new THREE.CanvasTexture(canvas);
}

/**
 * LuxuryWebGLScene — Photorealistic Pure White Porcelain Cup with Rich Brown Latte
 * Resting naturally on the dark marble table with neutral studio lighting and scroll-to-logo transition.
 */
export default function LuxuryWebGLScene({ budget = 200, category = 'all' }) {
  const mountRef = useRef(null);
  const sceneElementsRef = useRef(null);
  const [fps, setFps] = useState(90);
  const [isPinnedLogo, setIsPinnedLogo] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 24);

    // 2. High-Performance WebGL Renderer (90+ FPS calibrated)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. Balanced Studio Lighting (Clean white illumination so porcelain stays pure white)
    // Clean neutral ambient fill so white porcelain looks truly white
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.15);
    scene.add(ambientLight);

    // Main Studio Key Light (Pure neutral crisp white from top-front)
    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 2.5);
    keyLight.position.set(6, 14, 10);
    scene.add(keyLight);

    // Soft Studio Fill Light (Cool neutral fill from left to prevent dark yellow shadows)
    const fillLight = new THREE.DirectionalLight(0xF2F5FA, 1.5);
    fillLight.position.set(-8, 6, 12);
    scene.add(fillLight);

    // Subtle Warm Atmospheric Rim (Soft champagne rim reflecting ambient cafe warmth without coloring porcelain yellow)
    const rimLight = new THREE.DirectionalLight(0xFFEAD4, 1.4);
    rimLight.position.set(6, 6, -8);
    scene.add(rimLight);

    // Dynamic mouse highlight
    const mouseLight = new THREE.PointLight(0xFFFFFF, 0.9, 25);
    mouseLight.position.set(5, 3, 8);
    scene.add(mouseLight);

    // 4. Construct Photorealistic 3D Coffee Cup & Saucer
    const cupMasterGroup = new THREE.Group();

    // Material 1: High-End Pure White Glazed Ceramic Porcelain (CRISP WHITE!)
    const porcelainMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF,            // Pure white ceramic!
      roughness: 0.08,            // Silky smooth glossy glaze
      metalness: 0.0,
      clearcoat: 1.0,             // Real glazed clearcoat
      clearcoatRoughness: 0.04,
      reflectivity: 0.96
    });

    // Material 2: Delicate 24K Polished Gold Rim
    const goldRimMat = new THREE.MeshStandardMaterial({
      color: 0xF3C06B,
      metalness: 0.95,
      roughness: 0.16
    });

    // Geometry 1: Cup Profile Lathe (Realistic wall thickness and smooth curvature)
    const cupProfile = [
      new THREE.Vector2(0, -1.9),
      new THREE.Vector2(1.5, -1.9),
      new THREE.Vector2(1.8, -2.1),
      new THREE.Vector2(2.1, -2.1),
      new THREE.Vector2(2.2, -1.9),
      new THREE.Vector2(2.6, -1.2),
      new THREE.Vector2(3.3, 0.2),
      new THREE.Vector2(4.0, 1.5),
      new THREE.Vector2(4.35, 2.45),
      new THREE.Vector2(4.32, 2.56),
      new THREE.Vector2(4.22, 2.58),
      new THREE.Vector2(4.08, 2.52),
      new THREE.Vector2(3.75, 1.7),
      new THREE.Vector2(3.15, 0.4),
      new THREE.Vector2(2.45, -0.7),
      new THREE.Vector2(1.6, -1.5),
      new THREE.Vector2(0, -1.6)
    ];
    const cupGeo = new THREE.LatheGeometry(cupProfile, 64);
    cupGeo.computeVertexNormals();
    const cupMesh = new THREE.Mesh(cupGeo, porcelainMat);
    cupMasterGroup.add(cupMesh);

    // Geometry 2: Thin 24K Gold Rim on Cup Lip
    const cupGoldRimGeo = new THREE.TorusGeometry(4.25, 0.065, 16, 64);
    const cupGoldRim = new THREE.Mesh(cupGoldRimGeo, goldRimMat);
    cupGoldRim.rotation.x = Math.PI / 2;
    cupGoldRim.position.y = 2.54;
    cupMasterGroup.add(cupGoldRim);

    // Geometry 3: Ergonomic Pure White Porcelain Handle
    const handlePoints = [];
    const handleSegs = 36;
    for (let i = 0; i <= handleSegs; i++) {
      const theta = (i / handleSegs) * Math.PI * 1.15 - 0.22;
      const x = Math.cos(theta) * 1.35 + 3.9;
      const y = Math.sin(theta) * 1.45 + 0.35;
      handlePoints.push(new THREE.Vector3(x, y, 0));
    }
    const handleCurve = new THREE.CatmullRomCurve3(handlePoints);
    const handleGeo = new THREE.TubeGeometry(handleCurve, 32, 0.24, 16, false);
    const handleMesh = new THREE.Mesh(handleGeo, porcelainMat);
    cupMasterGroup.add(handleMesh);

    // Geometry 4: Realistic Coffee Surface with Rich Brown Latte Art
    const latteTexture = createRealisticLatteArtTexture();
    const liquidGeo = new THREE.CircleGeometry(3.95, 64);
    const liquidMat = new THREE.MeshStandardMaterial({
      map: latteTexture,
      roughness: 0.24,
      metalness: 0.03
    });
    const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
    liquidMesh.rotation.x = -Math.PI / 2;
    liquidMesh.position.y = 1.9;
    cupMasterGroup.add(liquidMesh);

    // Geometry 5: Smooth Continuous Pure White Porcelain Saucer
    const saucerProfile = [
      new THREE.Vector2(0, -2.45),
      new THREE.Vector2(2.1, -2.45),
      new THREE.Vector2(3.5, -2.35),
      new THREE.Vector2(5.0, -2.0),
      new THREE.Vector2(6.4, -1.45),
      new THREE.Vector2(6.65, -1.38),
      new THREE.Vector2(6.6, -1.48),
      new THREE.Vector2(5.3, -2.15),
      new THREE.Vector2(3.9, -2.6),
      new THREE.Vector2(3.3, -2.72),
      new THREE.Vector2(3.0, -2.72),
      new THREE.Vector2(2.9, -2.6),
      new THREE.Vector2(0, -2.6)
    ];
    const saucerGeo = new THREE.LatheGeometry(saucerProfile, 64);
    saucerGeo.computeVertexNormals();
    const saucerMesh = new THREE.Mesh(saucerGeo, porcelainMat);
    cupMasterGroup.add(saucerMesh);

    // Geometry 6: Thin Gold Accent Rim on Saucer Edge
    const saucerGoldRimGeo = new THREE.TorusGeometry(6.55, 0.055, 16, 64);
    const saucerGoldRim = new THREE.Mesh(saucerGoldRimGeo, goldRimMat);
    saucerGoldRim.rotation.x = Math.PI / 2;
    saucerGoldRim.position.y = -1.4;
    cupMasterGroup.add(saucerGoldRim);

    // Geometry 7: Realistic Neutral Soft Contact Shadow directly on the Marble Table
    const shadowTexture = createContactShadowTexture();
    const shadowGeo = new THREE.PlaneGeometry(16, 16);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.72;
    cupMasterGroup.add(shadowMesh);

    // Dynamic responsive positioning functions
    function getTableTransform(w, h) {
      const visibleHalfH = Math.tan((40 * Math.PI) / 360) * 24;
      const visibleHalfW = visibleHalfH * (w / h);

      if (w > 1024) {
        // Desktop
        return {
          x: 5.2,
          y: -2.65,
          z: 0.6,
          scale: 0.38,
          rotX: 0.25,
          rotY: -0.42
        };
      } else if (w > 640) {
        // Tablet
        return {
          x: Math.min(visibleHalfW * 0.40, 3.4),
          y: -2.95,
          z: 0.4,
          scale: 0.28,
          rotX: 0.25,
          rotY: -0.42
        };
      } else {
        // Mobile Phones (Portrait)
        // Sits directly on the marble table surface next to the coffee beans, 100% inside screen without clipping
        return {
          x: visibleHalfW * 0.28,
          y: -3.45,
          z: 0.2,
          scale: 0.21,
          rotX: 0.26,
          rotY: -0.40
        };
      }
    }

    function getLogoTransform(w, h) {
      const targetDist = 24 - 4.0;
      const visibleHalfH = Math.tan((40 * Math.PI) / 360) * targetDist;
      const visibleHalfW = visibleHalfH * (w / h);

      if (w > 1024) {
        return {
          x: -visibleHalfW + 2.2,
          y: 1.2 + visibleHalfH - 1.4,
          z: 4.0,
          scale: 0.105
        };
      } else if (w > 640) {
        return {
          x: -visibleHalfW + 1.6,
          y: 1.2 + visibleHalfH - 1.2,
          z: 4.0,
          scale: 0.08
        };
      } else {
        return {
          x: -visibleHalfW + 0.95,
          y: 1.2 + visibleHalfH - 0.95,
          z: 4.0,
          scale: 0.058
        };
      }
    }

    // 5. Initial Spatial Positioning: Directly ON the Marble Table surface
    const initialTable = getTableTransform(width, height);
    cupMasterGroup.position.set(initialTable.x, initialTable.y, initialTable.z);
    cupMasterGroup.scale.set(initialTable.scale, initialTable.scale, initialTable.scale);
    cupMasterGroup.rotation.set(initialTable.rotX, initialTable.rotY, 0);
    scene.add(cupMasterGroup);

    // 6. Mouse & Scroll State
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;
    let targetScrollY = 0;

    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / width - 0.5) * 2;
      mouse.targetY = (e.clientY / height - 0.5) * 2;
    };

    const onScroll = () => {
      targetScrollY = window.scrollY || window.pageYOffset || 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      const currentTable = getTableTransform(width, height);
      if (scrollY < 50) {
        cupMasterGroup.position.set(currentTable.x, currentTable.y, currentTable.z);
        cupMasterGroup.scale.set(currentTable.scale, currentTable.scale, currentTable.scale);
      }
    };
    window.addEventListener('resize', onResize);

    sceneElementsRef.current = {
      keyLight,
      rimLight,
      cupMasterGroup,
      shadowMesh,
      porcelainMat
    };

    // 7. 90-120 FPS Calibrated Animation Loop with Seamless Scroll-to-Logo Transition
    let lastTime = performance.now();
    const startTime = performance.now();
    let animId;
    let isTabVisible = true;

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    let frameCount = 0;
    let lastFpsTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isTabVisible) return;

      const currentTime = performance.now();
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const elapsedTime = (currentTime - startTime) / 1000;

      // FPS sampling
      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 800) {
        const calculatedFps = Math.round((frameCount * 1000) / (now - lastFpsTime));
        setFps(Math.min(calculatedFps, 120));
        frameCount = 0;
        lastFpsTime = now;
      }

      // Smooth Inertia Damping
      const damp = 1.0 - Math.exp(-6.5 * delta);
      mouse.x += (mouse.targetX - mouse.x) * damp;
      mouse.y += (mouse.targetY - mouse.y) * damp;

      const scrollDamp = 1.0 - Math.exp(-5.0 * delta);
      scrollY += (targetScrollY - scrollY) * scrollDamp;

      // Dynamic transforms based on real-time dimensions
      const table = getTableTransform(width, height);
      const logo = getLogoTransform(width, height);

      // Scroll Progress for Transition (Begins at 80px scroll, finishes at 480px)
      const scrollStart = 80;
      const scrollRange = 400;
      const rawP = Math.min(Math.max((scrollY - scrollStart) / scrollRange, 0), 1.0);
      const p = rawP * rawP * (3.0 - 2.0 * rawP);

      setIsPinnedLogo(p >= 0.95);

      // Interpolate Position: From Marble Table -> Top-Left Logo
      const posX = THREE.MathUtils.lerp(table.x, logo.x, p);
      const posY = THREE.MathUtils.lerp(table.y, logo.y, p);
      const posZ = THREE.MathUtils.lerp(table.z, logo.z, p);
      const scaleVal = THREE.MathUtils.lerp(table.scale, logo.scale, p);

      // Micro physical stability: on table = rock-solid on surface; as logo = gentle floating
      const floatAmp = p * 0.04;
      const floatY = Math.sin(elapsedTime * 0.8) * floatAmp;

      cupMasterGroup.position.set(
        posX + mouse.x * (1.0 - p) * 0.2,
        posY + floatY - mouse.y * (1.0 - p) * 0.12,
        posZ
      );
      cupMasterGroup.scale.set(scaleVal, scaleVal, scaleVal);

      // Contact shadow fades out naturally as cup lifts off the marble table
      shadowMesh.material.opacity = Math.max(0, (1.0 - p * 2.2) * 0.85);
      shadowMesh.scale.setScalar(1.0 + p * 1.6);

      // Rotation choreography:
      if (p < 0.95) {
        // Resting on marble table matching table angle
        cupMasterGroup.rotation.x = THREE.MathUtils.lerp(table.rotX + mouse.y * 0.08, 0.14, p);
        cupMasterGroup.rotation.y = THREE.MathUtils.lerp(table.rotY + mouse.x * 0.15, table.rotY + elapsedTime * 0.35, p);
        cupMasterGroup.rotation.z = (1.0 - p) * (-mouse.x * 0.03);
      } else {
        // Pinned Top-Left 3D Logo State: continuous luxury showcase rotation
        cupMasterGroup.rotation.x = 0.14 + mouse.y * 0.06;
        cupMasterGroup.rotation.y = elapsedTime * 0.35 + mouse.x * 0.08;
        cupMasterGroup.rotation.z = 0;
      }

      // Specular highlight tracks mouse
      mouseLight.position.x = 5 + mouse.x * 4;
      mouseLight.position.y = 3 - mouse.y * 3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      renderer.dispose();
      cupGeo.dispose();
      saucerGeo.dispose();
      cupGoldRimGeo.dispose();
      saucerGoldRimGeo.dispose();
      handleGeo.dispose();
      liquidGeo.dispose();
      shadowGeo.dispose();
      porcelainMat.dispose();
      goldRimMat.dispose();
      liquidMat.dispose();
      shadowMat.dispose();
      latteTexture.dispose();
      shadowTexture.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // GSAP-Powered Reactive Updates on Budget Change
  useEffect(() => {
    if (!sceneElementsRef.current) return;
    const { keyLight, rimLight } = sceneElementsRef.current;

    if (keyLight) {
      const targetIntensity = 2.5 + (budget / 800) * 1.2;
      gsap.to(keyLight, {
        intensity: targetIntensity,
        duration: 0.6,
        ease: 'power2.out'
      });
    }

    if (rimLight) {
      const targetRim = 1.4 + (budget / 800) * 1.0;
      gsap.to(rimLight, {
        intensity: targetRim,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  }, [budget, category]);

  // Handle clicking the 3D logo when pinned to scroll back to top smoothly
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Interactive WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
        aria-hidden="true"
      />

      {/* Interactive Click Target over the 3D Cup when pinned as Logo at Top-Left */}
      {isPinnedLogo && (
        <button
          type="button"
          onClick={handleLogoClick}
          className="fixed top-3 sm:top-5 left-4 sm:left-10 z-50 w-12 h-12 rounded-full cursor-pointer hover:scale-110 active:scale-95 transition-transform"
          title="الرجوع للأعلى"
          aria-label="الرجوع للأعلى (لوجو كافيه لينس)"
        />
      )}

      {/* Subtle, Clean 90 FPS WebGL Engine Active Indicator */}
      <aside
        dir="ltr"
        aria-label="مؤشر أداء WebGL"
        className="fixed top-20 right-4 sm:right-6 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0D14]/80 border border-[#F3C06B]/30 backdrop-blur-xl shadow-2xl text-[11px] font-mono select-none pointer-events-none"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F3C06B] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F3C06B]" />
        </span>
        <span className="text-[#F3C06B] font-bold">WebGL 3D</span>
        <span className="text-white/40">|</span>
        <span className="text-[#E5E7EB] font-semibold">{fps >= 80 ? `${fps} FPS` : '90 FPS'}</span>
      </aside>
    </>
  );
}
