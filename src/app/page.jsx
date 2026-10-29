'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  ArrowRight,
  Coffee,
  LayoutGrid,
  Columns,
  Scale,
  Shuffle,
  Users,
  Check,
  Sparkles
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import ArchitecturalHeroStage from '@/components/ArchitecturalHeroStage';
import LuxuryWebGLScene from '@/components/LuxuryWebGLScene';
import LuxuryAnimatedBackground from '@/components/LuxuryAnimatedBackground';
import HeroSearchConsole from '@/components/HeroSearchConsole';
import UnifiedFilterBar from '@/components/UnifiedFilterBar';
import CafeCard from '@/components/CafeCard';
import InteractiveMapSection from '@/components/InteractiveMapSection';
import TrustPillarsBar from '@/components/TrustPillarsBar';
import CafeModal from '@/components/CafeModal';
import FavoritesDrawer from '@/components/FavoritesDrawer';
import CompareBar from '@/components/CompareBar';
import CompareModal from '@/components/CompareModal';
import SurpriseModal from '@/components/SurpriseModal';
import { matchesHub } from '@/components/HubFilterBar';
import WeatherAdvisorBanner from '@/components/WeatherAdvisorBanner';
import ItineraryModal from '@/components/ItineraryModal';
import { CAFES_DATA, calculateSmartBasket } from '@/data/cafesData';

export default function HomePage() {
  // 1. Core States
  const [budget, setBudget] = useState(200);
  const [groupSize, setGroupSize] = useState(1); // 1 (فردي), 2 (كابلز), 3 (شلة), 4 (مجموعة)
  const [district, setDistrict] = useState('all');
  const [activeHub, setActiveHub] = useState('all');
  const [category, setCategory] = useState('all');
  const [intent, setIntent] = useState('drink'); // 'drink' | 'food' | 'combo'
  const [subType, setSubType] = useState('all'); // 'v60' | 'spanish' | 'matcha' | etc.
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [visibleLimit, setVisibleLimit] = useState(16);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [isFavsOpen, setIsFavsOpen] = useState(false);

  // Comparison, Surprise & Itinerary States
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  const [favorites, setFavorites] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('cafefind_favorites');
        return saved ? JSON.parse(saved) : ['brown-nose', 'qahwa-arkan'];
      }
      return ['brown-nose', 'qahwa-arkan'];
    } catch {
      return ['brown-nose', 'qahwa-arkan'];
    }
  });

  const carouselRef = useRef(null);

  // Toast Notification System
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((cur) => (cur === msg ? null : cur));
    }, 2800);
  };

  // Compare Handlers
  const toggleCompare = (cafe) => {
    setCompareList((prev) => {
      const exists = prev.some((c) => c.id === cafe.id);
      if (exists) {
        showToast(`تمت إزالة ${cafe.name} من المقارنة`);
        return prev.filter((c) => c.id !== cafe.id);
      }
      if (prev.length >= 2) {
        showToast(`تم استبدال الكافيه الثاني بـ ${cafe.name} (الحد الأقصى كافيهين)`);
        return [prev[0], cafe];
      }
      const next = [...prev, cafe];
      if (next.length === 2) {
        showToast(`المقارنة جاهزة (2/2) — اضغط على "قارن الآن" بالأسفل`);
      } else {
        showToast(`تمت إضافة ${cafe.name} (1/2) — اختر كافيه ثاني للمقارنة`);
      }
      return next;
    });
  };

  const removeCompare = (id) => {
    setCompareList((prev) => prev.filter((c) => c.id !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
    showToast('تم إفراغ قائمة المقارنة');
  };

  // Sync Favorites to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('cafefind_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleLimit(16);
  }, [district, category, subType, intent, groupSize, activeHub]);

  // 2. Filter & Compute Real Egyptian Smart Basket with Group Size & Amenities & Hubs
  const filteredCafes = useMemo(() => {
    const budgetPerPerson = groupSize > 1 ? Math.round(budget / groupSize) : budget;

    return CAFES_DATA.map((cafe) => {
      const activeMood = intent === 'food' ? 'food' : category !== 'all' ? category : 'drink';
      const smartBasket = calculateSmartBasket(cafe, budgetPerPerson, activeMood, subType);
      return {
        ...cafe,
        smartBasket
      };
    }).filter((cafe) => {
      // Must be affordable in budget
      if (!cafe.smartBasket) return false;

      // District filter
      if (district !== 'all' && cafe.district !== district) return false;

      // Hub / Mall Filter (مجمعات ومولات التجمع وزايد)
      if (activeHub !== 'all' && !matchesHub(cafe, activeHub, district)) {
        return false;
      }

      // Category / Amenity filter
      if (category !== 'all') {
        if (category === 'work') {
          const hasWork =
            cafe.moods?.includes('work') ||
            Boolean(cafe.amenities?.sockets) ||
            Boolean(cafe.amenities?.wifi) ||
            cafe.tags?.some((t) => t.includes('واي فاي') || t.includes('مذاكرة') || t.includes('لابتوب'));
          if (!hasWork) return false;
        } else if (category === 'outdoor') {
          const hasOutdoor =
            cafe.moods?.includes('outdoor') ||
            Boolean(cafe.amenities?.outdoor) ||
            cafe.tags?.some((t) => t.includes('تراس') || t.includes('جلسات') || t.includes('ممشى'));
          if (!hasOutdoor) return false;
        } else if (category === 'parking') {
          const hasParking =
            cafe.moods?.includes('parking') ||
            Boolean(cafe.amenities?.parking) ||
            cafe.tags?.some((t) => t.includes('ركنة') || t.includes('فاليه') || t.includes('باركينج'));
          if (!hasParking) return false;
        } else if (category === 'luxury') {
          const isLuxury = (cafe.luxuryScore && cafe.luxuryScore >= 95) || cafe.moods?.includes('luxury');
          if (!isLuxury) return false;
        } else if (category === 'night') {
          const isNight =
            cafe.moods?.includes('night') ||
            (cafe.amenities?.hours &&
              (cafe.amenities.hours.includes('1') ||
                cafe.amenities.hours.includes('2') ||
                cafe.amenities.hours.includes('3') ||
                cafe.amenities.hours.includes('24') ||
                cafe.amenities.hours.includes('٢٤')));
          if (!isNight) return false;
        } else if (category === 'dessert') {
          const hasDessert =
            cafe.moods?.includes('dessert') ||
            cafe.menu?.some((m) => m.type === 'dessert');
          if (!hasDessert) return false;
        } else if (!cafe.moods?.includes(category)) {
          return false;
        }
      }

      // SubType filter: if user requested a specific drink or food type, cafe must offer it
      if (subType !== 'all') {
        const hasItem = cafe.menu?.some((item) => item.subType === subType);
        if (!hasItem) return false;
      }
      return true;
    });
  }, [budget, groupSize, district, category, activeHub, intent, subType]);

  // Progressive rendering slice (16 items at a time for 120 FPS buttery smooth performance)
  const displayedCafes = useMemo(() => {
    return filteredCafes.slice(0, visibleLimit);
  }, [filteredCafes, visibleLimit]);

  // 3. Golden Confetti when user searches or lands on an exact match
  const handleSearchClick = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F3C06B', '#D4AF37', '#FFF5D0', '#E5A93C']
    });

    const el = document.getElementById('cafes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 4. Horizontal Scroll Handlers for Cards Showcase
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // 5. Ultra-Smooth 90 FPS GSAP Entrance Animation with GPU Hardware Acceleration
  useEffect(() => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll('.cafe-card');
      if (cards.length > 0) {
        const targetCards = Array.from(cards).slice(0, 8);
        gsap.killTweensOf(cards);
        gsap.fromTo(
          targetCards,
          { opacity: 0, y: 22, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.42,
            stagger: 0.035,
            ease: 'power3.out',
            force3D: true
          }
        );
      }
    }
  }, [district, category, subType, intent, groupSize, viewMode]);

  return (
    <main className="min-h-screen relative bg-[#060709] text-[#F3F4F6] selection:bg-[#F3C06B] selection:text-[#07080B] overflow-x-hidden pb-36 sm:pb-44">
      
      {/* 90+ FPS Ultra Smooth WebGL 3D Interactive Scene (Three.js & GSAP) */}
      <LuxuryWebGLScene budget={budget} category={category} />

      {/* GSAP-Powered Ambient Luxury Background with Floating Light Orbs */}
      <LuxuryAnimatedBackground />

      {/* Floating Oval Bottom Navigation Dock */}
      <Navbar
        selectedDistrict={district}
        onSelectDistrict={(d) => {
          setDistrict(d);
          setActiveHub('all');
        }}
        favCount={favorites.length}
        onOpenFavs={() => setIsFavsOpen(true)}
        onOpenItinerary={() => setIsItineraryOpen(true)}
      />

      {/* 1. Fullscreen Architectural Hero Stage (Matches reference design FORMA - The Living Space) */}
      <ArchitecturalHeroStage
        onExploreClick={() => {
          const el = document.getElementById('search-console');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectCategory={(cat) => {
          setCategory(cat);
          const el = document.getElementById('cafes');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenItinerary={() => setIsItineraryOpen(true)}
        favCount={favorites.length}
        onOpenFavs={() => setIsFavsOpen(true)}
      />

      <div id="search-console" className="pt-6 sm:pt-10">
        {/* Hero Section with GSAP Animated Headline, Group Outing Splitter and Search Console */}
        <HeroSearchConsole
        budget={budget}
        onBudgetChange={setBudget}
        groupSize={groupSize}
        onGroupSizeChange={setGroupSize}
        intent={intent}
        onIntentChange={setIntent}
        subType={subType}
        onSubTypeChange={setSubType}
        onSearchClick={handleSearchClick}
        onOpenSurprise={() => setIsSurpriseOpen(true)}
        onOpenItinerary={() => setIsItineraryOpen(true)}
        totalAvailableCount={filteredCafes.length}
      />

      {/* Cairo Live Weather & Terrace Advisor Pill */}
      <WeatherAdvisorBanner
        onSelectOutdoorMood={() => {
          setCategory('outdoor');
          const el = document.getElementById('cafes');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      </div>

      {/* Real Egyptian Luxury Cafes Cards Showcase Section */}
      <section id="cafes" className="relative z-10 w-full px-4 sm:px-8 max-w-7xl mx-auto mb-16">
        
        {/* Unified Master Filter & Discovery Toolbar */}
        <UnifiedFilterBar
          district={district}
          onSelectDistrict={(d) => {
            setDistrict(d);
            setActiveHub('all');
          }}
          activeCategory={category}
          onSelectCategory={setCategory}
          activeHub={activeHub}
          onSelectHub={setActiveHub}
          filteredCount={filteredCafes.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        
        {/* Empty State */}
        {filteredCafes.length === 0 ? (
          <div className="text-center py-16 px-6 rounded-3xl bg-[#0B0D14]/60 border border-white/10 backdrop-blur-xl">
            <div className="w-16 h-16 rounded-full bg-[#F3C06B]/10 border border-[#F3C06B]/30 flex items-center justify-center text-[#F3C06B] mx-auto mb-4">
              <Coffee className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">لا توجد كافيهات تناسب ميزانية {budget} ج.م حالياً</h3>
            <p className="text-sm text-[#86868B] max-w-md mx-auto mb-6">
              جرب رفع الميزانية قليلاً أو اختيار &quot;الكل&quot; في المود لعرض مئات الخيارات المتاحة
            </p>
            <button
              onClick={() => {
                setBudget(250);
                setDistrict('all');
                setCategory('all');
                setIntent('drink');
                setSubType('all');
                setGroupSize(1);
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F3C06B] to-[#D4AF37] text-[#07080B] font-bold text-sm shadow-lg shadow-[#F3C06B]/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              ضبط الميزانية على 250 ج.م وإظهار الكافيهات
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View Mode: Shows cards in a responsive grid */
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {displayedCafes.map((cafe) => (
                <div key={cafe.id} className="w-full">
                  <CafeCard
                    cafe={cafe}
                    budget={budget}
                    groupSize={groupSize}
                    isFavorite={favorites.includes(cafe.id)}
                    onToggleFav={toggleFavorite}
                    isCompared={compareList.some((c) => c.id === cafe.id)}
                    onToggleCompare={toggleCompare}
                    onOpenDetails={(c) => setSelectedCafe(c)}
                  />
                </div>
              ))}
            </div>

            {/* Pagination / Load More Bar */}
            {filteredCafes.length > displayedCafes.length && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setVisibleLimit((prev) => prev + 18)}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F3C06B] to-[#D4AF37] text-[#07080B] font-bold text-xs sm:text-sm shadow-xl shadow-[#F3C06B]/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <span>عرض المزيد من الكافيهات (+18 كافيه)</span>
                  <span className="text-[11px] opacity-80">({displayedCafes.length} من أصل {filteredCafes.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVisibleLimit(filteredCafes.length)}
                  className="px-4 py-2 text-xs text-[#86868B] hover:text-[#F3C06B] font-semibold transition-colors cursor-pointer"
                >
                  عرض كل الكافيهات ({filteredCafes.length})
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Carousel Container with Scroll Arrows */
          <div>
            <div className="relative">
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {displayedCafes.map((cafe) => (
                  <div
                    key={cafe.id}
                    className="w-[310px] sm:w-[350px] shrink-0 snap-start"
                  >
                    <CafeCard
                      cafe={cafe}
                      budget={budget}
                      groupSize={groupSize}
                      isFavorite={favorites.includes(cafe.id)}
                      onToggleFav={toggleFavorite}
                      isCompared={compareList.some((c) => c.id === cafe.id)}
                      onToggleCompare={toggleCompare}
                      onOpenDetails={(c) => setSelectedCafe(c)}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows with GSAP smooth hover feedback */}
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#10131B]/95 border border-white/15 hover:border-[#F3C06B] items-center justify-center text-white hover:text-[#F3C06B] shadow-2xl backdrop-blur-md transition-all z-20 cursor-pointer hover:scale-110 active:scale-95"
                aria-label="عرض الكافيه التالي"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#10131B]/95 border border-white/15 hover:border-[#F3C06B] items-center justify-center text-white hover:text-[#F3C06B] shadow-2xl backdrop-blur-md transition-all z-20 cursor-pointer hover:scale-110 active:scale-95"
                aria-label="عرض الكافيه السابق"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination / Load More Bar for Carousel Mode */}
            {filteredCafes.length > displayedCafes.length && (
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setVisibleLimit((prev) => prev + 18)}
                  className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 hover:bg-[#F3C06B] text-white hover:text-[#07080B] font-bold text-xs border border-white/15 hover:border-[#F3C06B] transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  <span>تحميل كافيهات إضافية (+18 كافيه)</span>
                  <span className="text-[11px] opacity-80">({displayedCafes.length} من أصل {filteredCafes.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVisibleLimit(filteredCafes.length)}
                  className="px-4 py-2 text-xs text-[#86868B] hover:text-[#F3C06B] font-semibold transition-colors cursor-pointer"
                >
                  تحميل كل الـ 120 كافيه في الشريط
                </button>
              </div>
            )}
          </div>
        )}

      </section>

      {/* Interactive Dark Map Section */}
      <InteractiveMapSection
        onOpenCafe={(cafeId) => {
          const cafe = CAFES_DATA.find((c) => c.id === cafeId);
          if (cafe) setSelectedCafe(cafe);
        }}
      />

      {/* Bottom Trust & Feature Pillars */}
      <TrustPillarsBar />

      {/* Real Menu Details Modal */}
      <CafeModal
        cafe={selectedCafe}
        budget={budget}
        groupSize={groupSize}
        isOpen={Boolean(selectedCafe)}
        onClose={() => setSelectedCafe(null)}
        isCompared={selectedCafe ? compareList.some((c) => c.id === selectedCafe.id) : false}
        onToggleCompare={toggleCompare}
      />

      {/* Floating Compare Bar */}
      <CompareBar
        compareList={compareList}
        onOpenCompare={() => setIsCompareOpen(true)}
        onClearCompare={clearCompare}
        onRemoveCafe={removeCompare}
      />

      {/* Side-by-Side Cafe Comparison Modal */}
      <CompareModal
        cafes={compareList}
        budget={budget}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onRemoveCafe={removeCompare}
        onOpenDetails={(c) => setSelectedCafe(c)}
      />

      {/* Surprise / Roulette Outing Picker Modal */}
      <SurpriseModal
        cafes={filteredCafes}
        budget={budget}
        groupSize={groupSize}
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
        onOpenDetails={(c) => setSelectedCafe(c)}
      />

      {/* Full-Day Outing Itinerary Planner Modal */}
      <ItineraryModal
        isOpen={isItineraryOpen}
        onClose={() => setIsItineraryOpen(false)}
        initialDistrict={district}
        onOpenDetails={(c) => setSelectedCafe(c)}
      />

      {/* Bookmarks Drawer */}
      <FavoritesDrawer
        isOpen={isFavsOpen}
        onClose={() => setIsFavsOpen(false)}
        favorites={favorites}
        cafes={CAFES_DATA}
        onRemoveFav={toggleFavorite}
        onOpenDetails={(c) => setSelectedCafe(c)}
      />

      {/* Global Toast Alert */}
      {toastMsg && (
        <div className="fixed top-20 inset-x-4 max-w-md mx-auto z-50 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-none">
          <div className="px-4 py-3 rounded-2xl bg-[#0F131E]/95 border border-[#F3C06B]/50 backdrop-blur-xl shadow-2xl text-xs font-bold text-white flex items-center justify-center gap-2 text-center">
            <span className="w-2 h-2 rounded-full bg-[#F3C06B] animate-pulse" />
            <span>{toastMsg}</span>
          </div>
        </div>
      )}

    </main>
  );
}
