import React, { useRef, useEffect } from 'react';
import {
  Coffee,
  Utensils,
  Search,
  Sparkles,
  Plus,
  Minus,
  Users,
  Shuffle,
  Compass,
  ArrowDown
} from 'lucide-react';
import gsap from 'gsap';

export default function HeroSearchConsole({
  budget,
  onBudgetChange,
  groupSize = 1,
  onGroupSizeChange,
  intent = 'drink', // 'drink' | 'food' | 'combo'
  onIntentChange,
  subType = 'all',
  onSubTypeChange,
  onSearchClick,
  onOpenSurprise,
  onOpenItinerary,
  totalAvailableCount = 120
}) {
  const containerRef = useRef(null);

  // GSAP Smooth Entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-anim',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const perPerson = groupSize > 1 ? Math.round(budget / groupSize) : budget;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative z-10 w-full pt-12 sm:pt-20 pb-10 px-4 sm:px-8 max-w-5xl mx-auto text-center"
    >
      {/* 1. High-End Eyebrow Badge */}
      <div className="hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3C06B]/10 border border-[#F3C06B]/25 text-[#F3C06B] text-xs font-bold mb-4 shadow-sm backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5" />
        <span>الدليل الموثق لأفخم كافيهات التجمع الخامس والشيخ زايد</span>
      </div>

      {/* 2. Main Title (Clean, Centered, Perfectly Balanced) */}
      <h1 className="hero-anim text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] mb-3">
        معاك كام؟ احسب خروجتك <span className="text-[#F3C06B]">بالمليم</span>
      </h1>

      {/* 3. Subtitle */}
      <p className="hero-anim text-xs sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-8">
        اكتب ميزانيتك أو شلتك، وسنرشح لك أفضل كافيهات التجمع وزايد مع توليفة طلب جاهزة بالأسعار الرسمية الموثقة.
      </p>

      {/* 4. The Master Glass Search & Budget Console (Sleek, Ergonomic, High-End Liquid Glass) */}
      <div className="hero-anim w-full rounded-[36px] liquid-glass p-5 sm:p-8 text-right space-y-6">
        
        {/* Row 1: Budget Stepper + Group Outing Selector */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          
          {/* Budget Input & Steppers (7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#E5E7EB]">
                ميزانية الخروجة بالجنيه:
              </label>
              <span className="text-[11px] font-bold text-[#F3C06B]">
                {groupSize > 1 ? `(${perPerson} ج للفرد)` : 'خروجة فردية'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Stepper Box */}
              <div className="flex items-center justify-between bg-white/[0.05] border border-white/15 focus-within:border-[#F3C06B] rounded-2xl p-1.5 px-3 transition-all shrink-0">
                <button
                  type="button"
                  onClick={() => onBudgetChange(Math.max(50, budget - 50))}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 text-white flex items-center justify-center font-bold transition-all cursor-pointer active:scale-95"
                  title="إنقاص 50 ج"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-3">
                  <input
                    type="number"
                    min="50"
                    max="5000"
                    step="10"
                    value={budget}
                    onChange={(e) => onBudgetChange(Math.max(0, Number(e.target.value)))}
                    className="w-20 sm:w-24 text-2xl sm:text-3xl font-black bg-transparent text-[#F3C06B] text-center focus:outline-none"
                  />
                  <span className="text-sm font-bold text-white/80">ج.م</span>
                </div>

                <button
                  type="button"
                  onClick={() => onBudgetChange(budget + 50)}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 text-white flex items-center justify-center font-bold transition-all cursor-pointer active:scale-95"
                  title="زيادة 50 ج"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none no-scrollbar flex-1">
                {[100, 150, 200, 300, 500].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => onBudgetChange(val)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      budget === val
                        ? 'bg-[#F3C06B] text-[#07080B] font-black shadow-md shadow-[#F3C06B]/25'
                        : 'bg-white/5 hover:bg-white/10 text-[#9CA3AF] hover:text-white border border-white/5'
                    }`}
                  >
                    {val} ج
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Group Outing Size (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#E5E7EB] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#F3C06B]" />
                <span>حجم الخروجة:</span>
              </label>
              <span className="text-[11px] text-[#A1A1A6]">
                {groupSize === 1 ? '1 شخص' : groupSize === 2 ? '2 أفراد' : `${groupSize} أفراد`}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10">
              {[
                { size: 1, label: 'فردي', desc: '1' },
                { size: 2, label: 'كابلز', desc: '2' },
                { size: 3, label: 'شلة', desc: '3' },
                { size: 4, label: 'جروب', desc: '4+' }
              ].map((g) => (
                <button
                  key={g.size}
                  type="button"
                  onClick={() => onGroupSizeChange && onGroupSizeChange(g.size)}
                  className={`py-2 px-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center ${
                    groupSize === g.size
                      ? 'bg-[#F3C06B] text-[#07080B] shadow-md shadow-[#F3C06B]/25 font-black'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{g.label}</span>
                  <span className="text-[9px] opacity-75">{g.desc}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Row 2: Outing Intent (المشروبات vs الوجبات vs قهوة وحلا) */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#E5E7EB] shrink-0">
              نوع الطلب:
            </span>
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10 overflow-x-auto scrollbar-none no-scrollbar">
              <button
                type="button"
                onClick={() => {
                  onIntentChange('drink');
                  if (onSubTypeChange) onSubTypeChange('all');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  intent === 'drink'
                    ? 'bg-[#F3C06B] text-[#07080B] shadow-sm'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>مشروبات وقهوة</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onIntentChange('food');
                  if (onSubTypeChange) onSubTypeChange('all');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  intent === 'food'
                    ? 'bg-[#F3C06B] text-[#07080B] shadow-sm'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>وجبات وبرانش</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onIntentChange('combo');
                  if (onSubTypeChange) onSubTypeChange('all');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  intent === 'combo'
                    ? 'bg-[#F3C06B] text-[#07080B] shadow-sm'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>قهوة وحلا للمشاركة</span>
              </button>
            </div>
          </div>

          {/* Quick Shortcuts: Surprise & Itinerary */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenSurprise}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#F3C06B] text-white hover:text-[#07080B] text-xs font-bold border border-white/10 hover:border-[#F3C06B] transition-all cursor-pointer shadow-sm active:scale-95 whitespace-nowrap"
              title="عجلة الحظ لترشيح كافيه عشوائي يناسب ميزانيتك"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#F3C06B]" />
              <span>🎲 رشحلي عشوائي</span>
            </button>

            {onOpenItinerary && (
              <button
                type="button"
                onClick={onOpenItinerary}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#F3C06B]/20 to-[#D4AF37]/15 hover:from-[#F3C06B] hover:to-[#D4AF37] text-[#F3C06B] hover:text-[#07080B] text-xs font-bold border border-[#F3C06B]/30 transition-all cursor-pointer shadow-sm active:scale-95 whitespace-nowrap"
                title="تخطيط خروجة اليوم بالكامل (فطور + قهوة + حلا)"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>🗺️ خطط خروجتك</span>
              </button>
            )}
          </div>

        </div>

        {/* Row 3: Main Action Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onSearchClick}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F3C06B] via-[#E5A93C] to-[#D4AF37] hover:brightness-110 active:scale-[0.99] text-[#07080B] font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_35px_rgba(243,192,107,0.35)] transition-all cursor-pointer"
          >
            <Search className="w-5 h-5 text-[#07080B]" />
            <span>استكشف الكافيهات المتاحة بميزانيتك ({totalAvailableCount} كافيه)</span>
            <ArrowDown className="w-4 h-4 text-[#07080B]" />
          </button>
        </div>

      </div>

    </section>
  );
}
