'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Grid,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MapPin,
  Compass,
  ArrowDown,
  Layers,
  ChevronRight,
  Volume2,
  VolumeX,
  Plus
} from 'lucide-react';
import gsap from 'gsap';

const SPACES = [
  {
    id: '01',
    indexTag: '01 / LIVING',
    titleLine1: 'THE LIVING',
    titleLine2: 'SPACE',
    tagline: 'WHERE THE DAY GATHERS.',
    subtitleAr: 'مساحات عمل ولقاءات هادئة بأفخم كافيهات التجمع الخامس والشيخ زايد',
    bgImage: '/luxury_marble_table_bg.png',
    district: 'tagamoa',
    category: 'work',
    hubName: 'ووترواي & 5A',
    hotspots: [
      {
        id: 'h1',
        x: 64,
        y: 38,
        label: 'La Marzocco Bar',
        desc: 'بار القهوة المختصة والـ V60 الإثيوبي',
        price: 'من 95 ج.م'
      },
      {
        id: 'h2',
        x: 35,
        y: 68,
        label: 'Oak Study Desks',
        desc: 'أفياش لابتوب وإنترنت فائق السرعة للعمل',
        price: 'واي فاي مجاني'
      },
      {
        id: 'h3',
        x: 82,
        y: 65,
        label: 'Velvet Lounge',
        desc: 'كنب مخملي مريح للجلسات الحوارية الدافئة',
        price: 'جلسات راقية'
      }
    ]
  },
  {
    id: '02',
    indexTag: '02 / PAVILION',
    titleLine1: 'THE GLASS',
    titleLine2: 'PAVILION',
    tagline: 'WHERE SUNSET MEETS WATERWAY.',
    subtitleAr: 'أجنحة زجاجية ساحرة منعكسة على المياه بأجواء معمارية راقية',
    bgImage: '/the_lane.jpg',
    district: 'tagamoa',
    category: 'luxury',
    hubName: 'ذا ووترواي 1',
    hotspots: [
      {
        id: 'h4',
        x: 52,
        y: 36,
        label: 'Panoramic Atrium',
        desc: 'واجهات زجاجية ممتدة حتى السقف مع إطلالة مفتوحة',
        price: 'أجواء استثنائية'
      },
      {
        id: 'h5',
        x: 24,
        y: 72,
        label: 'Reflecting Pool Terrace',
        desc: 'تراس خارجي بإضاءات رومانسية على الماء',
        price: 'تراس مفتوح'
      }
    ]
  },
  {
    id: '03',
    indexTag: '03 / TERRACE',
    titleLine1: 'THE BOTANICAL',
    titleLine2: 'TERRACE',
    tagline: 'OPEN AIR & EVENING LIGHTS.',
    subtitleAr: 'جلسات خارجية على الطراز الأوروبي محاطة بالخضرة وإضاءات المساء',
    bgImage: '/vanilla.jpg',
    district: 'zayed',
    category: 'outdoor',
    hubName: 'أركان بلازا & ستريت 88',
    hotspots: [
      {
        id: 'h6',
        x: 30,
        y: 52,
        label: 'Bistro Parasols',
        desc: 'جلسات خارجية بمظلات دافئة تحت إضاءات الشموع',
        price: 'أركان بلازا'
      },
      {
        id: 'h7',
        x: 74,
        y: 38,
        label: 'Crystal Salon',
        desc: 'صالون داخلي بنجف كريستال فخم لبرانش الصباح',
        price: 'منيو متكامل'
      }
    ]
  },
  {
    id: '04',
    indexTag: '04 / NIGHT',
    titleLine1: 'THE NIGHT',
    titleLine2: 'ESCAPE',
    tagline: 'FOR MIDNIGHT MINDS & MUSIC.',
    subtitleAr: 'جلسات ساهرة لما بعد منتصف الليل مع قهوة معدلة وحلويات راقية',
    bgImage: '/coffee_dessert.jpg',
    district: 'all',
    category: 'night',
    hubName: 'التجمع & زايد',
    hotspots: [
      {
        id: 'h8',
        x: 48,
        y: 42,
        label: 'Midnight Specialty Bar',
        desc: 'قهوة مميزة وتشيزكيك سان سيباستيان طازجة',
        price: 'سهران لـ 2 ص'
      }
    ]
  }
];

export default function ArchitecturalHeroStage({
  onExploreClick,
  onSelectCategory,
  onOpenItinerary,
  favCount = 0,
  onOpenFavs
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const currentSpace = SPACES[activeIndex];

  // GSAP Transition on Space Change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.arch-text-reveal',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.arch-bg-image',
        { scale: 1.05, filter: 'contrast(1.05) brightness(0.95)' },
        { scale: 1, filter: 'contrast(1.06) brightness(1.0) saturate(1.04)', duration: 1.2, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SPACES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SPACES.length) % SPACES.length);
  };

  return (
    <header
      ref={containerRef}
      dir="ltr"
      className="relative w-full h-[100svh] min-h-[680px] max-h-[1080px] overflow-hidden flex flex-col justify-between text-white select-none"
    >
      {/* 1. Dynamic Full-Bleed Architectural Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#060709]">
        <div
          key={currentSpace.id}
          className="arch-bg-image absolute inset-0 bg-cover bg-center transform-gpu will-change-transform transition-all duration-700"
          style={{
            backgroundImage: `url('${currentSpace.bgImage}')`
          }}
        />

        {/* Subtle Vignette Overlays (Keep image crystal clear while ensuring crisp text contrast on the left) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* 2. Top Navigation Bar (Identical layout to the reference image: FORMA on left, Nav in center, Category on right) */}
      <nav
        aria-label="شريط العمارة الفاخر"
        className="relative z-30 w-full px-4 sm:px-12 pt-5 sm:pt-7 pb-4 flex items-center justify-between"
      >
        {/* Left: Brand Identity in Architectural Tracking */}
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-base font-black tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase">
            FORMA <span className="text-[#F3C06B] font-light">·</span> CAFÉLENS
          </span>
        </div>

        {/* Center: Spaced Minimalist Navigation Links (All-Caps Architectural Style) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-xs font-semibold tracking-[0.2em] text-[#D1D5DB]">
          <button
            type="button"
            onClick={onExploreClick}
            className="hover:text-white transition-colors cursor-pointer tracking-[0.25em]"
          >
            SPACES
          </button>
          <button
            type="button"
            onClick={onExploreClick}
            className="hover:text-white transition-colors cursor-pointer tracking-[0.25em]"
          >
            CAFES
          </button>
          <button
            type="button"
            onClick={onOpenItinerary}
            className="hover:text-[#F3C06B] transition-colors cursor-pointer tracking-[0.25em] flex items-center gap-1.5"
          >
            <span>ITINERARY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3C06B] animate-pulse" />
          </button>
          <button
            type="button"
            onClick={onExploreClick}
            className="hover:text-white transition-colors cursor-pointer tracking-[0.25em]"
          >
            CONTACT
          </button>
        </div>

        {/* Right: Category Pill + 4-Dot Grid Toggle Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onExploreClick}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 text-[11px] font-semibold tracking-[0.15em] text-[#E5E7EB] backdrop-blur-md transition-all cursor-pointer"
          >
            <span>RESIDENTIAL & CAFE INTERIORS</span>
          </button>

          {/* 4-Dot Grid Icon Button (Matches the reference image) */}
          <button
            type="button"
            onClick={onExploreClick}
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-[#F3C06B] border border-white/20 hover:border-transparent flex items-center justify-center text-white hover:text-[#07080B] backdrop-blur-md transition-all cursor-pointer active:scale-95 shadow-lg group"
            title="فتح قائمة الكافيهات الكاملة"
            aria-label="قائمة الكافيهات"
          >
            <Grid className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>
        </div>
      </nav>

      {/* 3. Hero Content: Monospaced Index + Monumental Architectural Typography */}
      <div className="relative z-30 px-5 sm:px-16 my-auto max-w-4xl text-left" dir="ltr">
        
        {/* Index Tag: e.g. "01 / LIVING" (Directly from reference design) */}
        <div className="arch-text-reveal flex items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-[#D1D5DB] mb-2 sm:mb-3">
          <span className="text-[#F3C06B] font-bold">{currentSpace.indexTag}</span>
          <span className="opacity-40">|</span>
          <span className="text-white/70 tracking-widest uppercase">{currentSpace.hubName}</span>
        </div>

        {/* Giant Architectural Headline: "THE LIVING SPACE" */}
        <h1 className="arch-text-reveal text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] text-white uppercase drop-shadow-2xl">
          <span className="block">{currentSpace.titleLine1}</span>
          <span className="block text-white/95">{currentSpace.titleLine2}</span>
        </h1>

        {/* Tagline: "WHERE THE DAY GATHERS." */}
        <p className="arch-text-reveal mt-3 sm:mt-4 text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#E5E7EB] uppercase">
          {currentSpace.tagline}
        </p>

        {/* Arabic Architectural Subtitle */}
        <p className="arch-text-reveal mt-2 text-xs sm:text-base text-[#D1D5DB]/90 font-medium max-w-xl leading-relaxed">
          {currentSpace.subtitleAr}
        </p>

        {/* Direct Action Button (Frosted Glass Pill) */}
        <div className="arch-text-reveal mt-5 sm:mt-6 flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={onExploreClick}
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#07080B] text-xs font-black tracking-wider uppercase border border-white/20 hover:border-transparent backdrop-blur-md transition-all cursor-pointer active:scale-95 shadow-xl group"
          >
            <span>استكشف الكافيهات والميزانية</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            type="button"
            onClick={() => onSelectCategory(currentSpace.category)}
            className="flex items-center gap-2 px-4 py-2.5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 text-[#F3C06B] text-xs font-bold border border-[#F3C06B]/30 backdrop-blur-md transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>كافيهات هذا المود</span>
          </button>
        </div>

      </div>


      {/* 5. Bottom Architectural Timeline / Space Switcher (Exact bottom bar from the reference image) */}
      <div
        dir="ltr"
        className="relative z-30 w-full px-5 sm:px-16 pb-6 sm:pb-8 pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 bg-gradient-to-t from-black/75 to-transparent"
      >
        
        {/* Left: Spaces Tabs / Progress Bar */}
        <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none w-full sm:w-auto">
          {SPACES.map((space, idx) => (
            <button
              key={space.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group flex items-center gap-3 transition-all cursor-pointer whitespace-nowrap text-left ${
                activeIndex === idx ? 'opacity-100' : 'opacity-40 hover:opacity-80'
              }`}
            >
              <span
                className={`text-xs font-mono font-bold ${
                  activeIndex === idx ? 'text-[#F3C06B]' : 'text-white'
                }`}
              >
                {space.id}
              </span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">
                {space.titleLine1} {space.titleLine2}
              </span>
              {/* Active Underline Pill */}
              <div
                className={`h-0.5 w-6 rounded-full transition-all ${
                  activeIndex === idx ? 'bg-[#F3C06B] w-12' : 'bg-transparent'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right: Carousel Controls (Prev / Next Arrows) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
            aria-label="المساحة السابقة"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono px-2 text-[#9CA3AF]">
            {currentSpace.id} / 04
          </span>

          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
            aria-label="المساحة التالية"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </header>
  );
}
