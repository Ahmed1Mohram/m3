import React from 'react';
import { Coffee, Bookmark, Compass, ArrowUp } from 'lucide-react';

/**
 * Floating Oval Glass Dock (الناف بيضاوية عائمة بالأسفل - تصميم زجاجي فاخر)
 * Positioned ergonomically at the bottom of the viewport with VisionOS frosted glassmorphism.
 */
export default function Navbar({
  selectedDistrict,
  onSelectDistrict,
  favCount = 0,
  onOpenFavs,
  onOpenItinerary
}) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 280);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="شريط التنقل الزجاجي العائم"
      className={`fixed bottom-5 inset-x-0 mx-auto z-50 w-fit max-w-[95vw] transition-all duration-500 ease-out ${
        scrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 px-3 sm:px-4 rounded-full liquid-glass-dock">
        
        {/* 1. Brand Logo Shortcut */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 p-1 rounded-full hover:bg-white/10 transition-all cursor-pointer group shrink-0"
          title="الرئيسية (للأعلى)"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3C06B] flex items-center justify-center text-[#07080B] shadow-[0_0_15px_rgba(243,192,107,0.4)] group-hover:scale-105 transition-transform">
            <Coffee className="w-4 h-4 fill-current" />
          </div>
          <span className="text-xs font-black text-white hidden md:inline tracking-tight pr-1">
            Café<span className="text-[#F3C06B]">Lens</span>
          </span>
        </button>

        {/* Vertical Glass Divider */}
        <div className="w-px h-5 bg-white/15 shrink-0" />

        {/* 2. District Segmented Glass Control */}
        <div className="flex items-center gap-1 p-0.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md shrink-0">
          <button
            type="button"
            onClick={() => onSelectDistrict('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedDistrict === 'all'
                ? 'bg-gradient-to-r from-[#F3C06B] to-[#D4AF37] text-[#07080B] shadow-md shadow-[#F3C06B]/25 font-black'
                : 'text-[#A1A1A6] hover:text-white'
            }`}
          >
            الكل <span className="hidden sm:inline">(120)</span>
          </button>
          
          <button
            type="button"
            onClick={() => onSelectDistrict('tagamoa')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedDistrict === 'tagamoa'
                ? 'bg-gradient-to-r from-[#F3C06B] to-[#D4AF37] text-[#07080B] shadow-md shadow-[#F3C06B]/25 font-black'
                : 'text-[#A1A1A6] hover:text-white'
            }`}
          >
            التجمع <span className="hidden sm:inline">(60)</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectDistrict('zayed')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedDistrict === 'zayed'
                ? 'bg-gradient-to-r from-[#F3C06B] to-[#D4AF37] text-[#07080B] shadow-md shadow-[#F3C06B]/25 font-black'
                : 'text-[#A1A1A6] hover:text-white'
            }`}
          >
            زايد <span className="hidden sm:inline">(60)</span>
          </button>
        </div>

        {/* Vertical Glass Divider */}
        <div className="w-px h-5 bg-white/15 shrink-0" />

        {/* 3. Action Buttons: Itinerary & Bookmarks */}
        <div className="flex items-center gap-1.5 shrink-0">
          
          {/* Outing Itinerary Planner Button */}
          {onOpenItinerary && (
            <button
              type="button"
              onClick={onOpenItinerary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-[#F3C06B] text-[#F3C06B] hover:text-[#07080B] text-xs font-bold border border-[#F3C06B]/30 hover:border-transparent transition-all cursor-pointer shadow-sm active:scale-95 whitespace-nowrap"
              title="خطط خروجتك المتكاملة لليوم (فطور + قهوة + حلا)"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">خطط خروجتك</span>
            </button>
          )}

          {/* Bookmarks Pill */}
          <button
            type="button"
            onClick={onOpenFavs}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/15 hover:border-[#F3C06B]/40 text-xs font-bold text-white transition-all cursor-pointer active:scale-95"
            title="الكافيهات المحفوظة"
            aria-label="المفضلة"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#F3C06B]" />
            <span className="hidden sm:inline">المفضلة</span>
            {favCount > 0 && (
              <span className="bg-[#F3C06B] text-[#07080B] text-[10px] font-black px-1.5 py-0.2 rounded-full min-w-[18px] text-center shadow-sm">
                {favCount}
              </span>
            )}
          </button>

          {/* Quick Scroll to Top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
            title="الصعود للأعلى"
            aria-label="الصعود للأعلى"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </nav>
  );
}
