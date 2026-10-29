import React, { useRef, useEffect } from 'react';
import { MapPin, Sparkles, CheckCircle2, Coffee, Cake, UtensilsCrossed, Laptop, Heart } from 'lucide-react';
import gsap from 'gsap';

const PRESETS = [150, 200, 275, 350, 500, 750];

const DISTRICTS = [
  { id: 'all', label: 'كل المناطق' },
  { id: 'tagamoa', label: 'التجمع الخامس' },
  { id: 'zayed', label: 'الشيخ زايد' },
  { id: 'zamalek', label: 'الزمالك' },
  { id: 'maadi', label: 'المعادي' }
];

const MOODS = [
  { id: 'all', label: 'الكل', icon: Sparkles },
  { id: 'coffee', label: 'رشفة ومزاج قهوة', icon: Coffee },
  { id: 'dessert', label: 'قهوة وحاجة حلوة', icon: Cake },
  { id: 'brunch', label: 'برنش ووجبة خفيفة', icon: UtensilsCrossed },
  { id: 'work', label: 'شغل ومذاكرة ولابتوب', icon: Laptop },
  { id: 'date', label: 'خروجة شياكة وفوتوسيشن', icon: Heart }
];

export default function BudgetConsole({
  budget,
  onBudgetChange,
  district,
  onDistrictChange,
  mood,
  onMoodChange
}) {
  const budgetNumRef = useRef(null);

  // Animate number with GSAP on budget change
  useEffect(() => {
    if (budgetNumRef.current) {
      const currentVal = parseInt(budgetNumRef.current.innerText, 10) || 0;
      gsap.to({ val: currentVal }, {
        val: budget,
        duration: 0.35,
        ease: 'power2.out',
        onUpdate: function () {
          if (budgetNumRef.current) {
            budgetNumRef.current.innerText = Math.round(this.targets()[0].val);
          }
        }
      });
    }
  }, [budget]);

  return (
    <div id="console" className="w-full max-w-4xl mx-auto rounded-3xl p-6 sm:p-9 glass-panel relative overflow-hidden shadow-2xl shadow-black/80">
      
      {/* Top Gold Border Glow */}
      <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Header Metric */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-xs sm:text-sm font-bold text-[#8A8D9F] tracking-wide block mb-1">
            ميزانيتك المتاحة حالياً للخروجة
          </span>
          <div className="flex items-baseline gap-2.5">
            <span
              ref={budgetNumRef}
              className="font-['Outfit'] text-5xl sm:text-6xl font-black text-[#F7E7A9] drop-shadow-[0_0_20px_rgba(212,175,55,0.35)] leading-none"
            >
              {budget}
            </span>
            <span className="text-lg sm:text-xl font-bold text-[#D4AF37]">جنيه مصري</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#B0B3C1]">
          <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
          <span>شامل الضريبة والخدمة التقريبية</span>
        </div>
      </div>

      {/* Interactive Slider */}
      <div className="my-6">
        <input
          type="range"
          min="100"
          max="800"
          step="25"
          value={budget}
          onChange={(e) => onBudgetChange(Number(e.target.value))}
          aria-label="تحديد الميزانية بالجنيه"
        />
        <div className="flex justify-between mt-2.5 font-['Outfit'] text-xs font-semibold text-[#727588] dir-ltr px-1">
          <span>100 EGP</span>
          <span>200 EGP</span>
          <span>350 EGP</span>
          <span>500 EGP</span>
          <span>800+ EGP</span>
        </div>
      </div>

      {/* Preset Pills */}
      <div className="flex flex-wrap items-center gap-2.5 mb-7">
        <span className="text-xs font-bold text-[#8A8D9F] ml-1">ميزانيات سريعة:</span>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((amount) => (
            <button
              key={amount}
              onClick={() => onBudgetChange(amount)}
              className={`px-3.5 py-1.5 rounded-full font-['Outfit'] text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                budget === amount
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#07080B] shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105'
                  : 'bg-white/5 border border-white/10 text-[#B0B3C1] hover:bg-[#D4AF37]/15 hover:text-[#F7E7A9]'
              }`}
            >
              {amount} ج
            </button>
          ))}
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent my-6" />

      {/* Districts & Moods Filter Tabs */}
      <div className="grid grid-cols-1 gap-5">
        
        {/* District Selector */}
        <div>
          <label className="text-xs sm:text-sm font-bold text-[#F9FAFB] flex items-center gap-2 mb-2.5">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            اختر المنطقة الفاخرة:
          </label>
          <div className="flex flex-wrap gap-2">
            {DISTRICTS.map((d) => (
              <button
                key={d.id}
                onClick={() => onDistrictChange(d.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  district === d.id
                    ? 'bg-[#D4AF37]/20 border border-[#D4AF37] text-[#F7E7A9] shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                    : 'bg-white/5 border border-white/10 text-[#B0B3C1] hover:bg-white/10 hover:text-white'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mood Selector */}
        <div>
          <label className="text-xs sm:text-sm font-bold text-[#F9FAFB] flex items-center gap-2 mb-2.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            نوع التجربة والمزاج:
          </label>
          <div className="flex flex-wrap gap-2">
            {MOODS.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => onMoodChange(m.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    mood === m.id
                      ? 'bg-[#D4AF37]/20 border border-[#D4AF37] text-[#F7E7A9] shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                      : 'bg-white/5 border border-white/10 text-[#B0B3C1] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
