import React from 'react';
import { Scale, X, Sparkles, ArrowLeft } from 'lucide-react';

export default function CompareBar({
  compareList = [],
  onOpenCompare,
  onClearCompare,
  onRemoveCafe
}) {
  if (compareList.length === 0) return null;

  const isReady = compareList.length >= 2;

  return (
    <aside
      aria-label="شريط مقارنة الكافيهات"
      className="fixed bottom-22 sm:bottom-24 inset-x-4 max-w-2xl mx-auto z-40 animate-in slide-in-from-bottom duration-300 pointer-events-auto"
    >
      <div className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl liquid-glass border border-[#F3C06B]/40">
        
        {/* Left: Info & Thumbnails */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#F3C06B]/15 border border-[#F3C06B]/30 flex items-center justify-center text-[#F3C06B] shrink-0">
            <Scale className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black text-white">
                {isReady ? 'المقارنة جاهزة' : 'اختر كافيه ثاني للمقارنة'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F3C06B] text-[#07080B] font-bold">
                {compareList.length}/2
              </span>
            </div>

            {/* Selected Cafes Mini Badges */}
            <div className="flex items-center gap-2 mt-1">
              {compareList.map((cafe) => (
                <div
                  key={cafe.id}
                  className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#E5E7EB] truncate max-w-[140px]"
                >
                  <img
                    src={cafe.logo || `/logos/${cafe.id}.svg`}
                    alt={cafe.name}
                    className="w-3.5 h-3.5 rounded object-contain shrink-0"
                  />
                  <span className="truncate">{cafe.name}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveCafe(cafe.id);
                    }}
                    className="text-[#86868B] hover:text-red-400 p-0.5 cursor-pointer"
                    aria-label={`إزالة ${cafe.name} من المقارنة`}
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenCompare}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md ${
              isReady
                ? 'bg-gradient-to-r from-[#F3C06B] to-[#D4AF37] text-[#07080B] hover:brightness-110 shadow-[#F3C06B]/25 active:scale-95'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <span>{isReady ? 'قارن الآن' : 'عرض الكافيه المختار'}</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onClearCompare}
            className="p-2 rounded-xl text-[#86868B] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="إلغاء المقارنة"
            aria-label="إلغاء المقارنة"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
}
