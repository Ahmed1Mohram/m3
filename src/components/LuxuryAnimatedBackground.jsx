import React from 'react';

/**
 * Apple-Grade Ultra-Clear Ambient Atmosphere
 * Crystal-clear cafe background with warm ambient lighting, zero CPU lag.
 */
export default function LuxuryAnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#060709]">
      
      {/* 1. Crystal-Clear Warm Cafe Lounge Interior Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-95 scale-100 transform-gpu will-change-transform transition-all duration-1000"
        style={{
          backgroundImage: "url('/luxury_marble_table_bg.png')",
          transform: 'translate3d(0, 0, 0)',
          filter: 'contrast(1.05) brightness(0.98) saturate(1.08)'
        }}
      />

      {/* 2. Apple Cinematic Top & Bottom Fade */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#060709]/90 via-[#060709]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#060709] via-[#060709]/70 to-transparent" />

      {/* 3. Subtle Apple Center Vignette (Soft spotlight) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 35%, rgba(6,7,9,0.18) 0%, rgba(6,7,9,0.55) 75%, rgba(6,7,9,0.88) 100%)'
        }}
      />

      {/* 4. Warm Amber & Champagne Atmospheric Glows */}
      <div
        className="absolute top-1/6 -right-24 w-[600px] h-[600px] rounded-full opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(243,192,107,0.4) 0%, transparent 70%)'
        }}
      />
      <div
        className="absolute bottom-1/4 -left-24 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.35) 0%, transparent 70%)'
        }}
      />

    </div>
  );
}

