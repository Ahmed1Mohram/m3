import React from 'react';
import {
  X,
  Star,
  MapPin,
  Wifi,
  Plug,
  Trees,
  Car,
  Clock,
  Navigation,
  BookOpen,
  Share2,
  Sparkles,
  Check,
  MinusCircle,
  Trophy
} from 'lucide-react';
import { shareComparisonOnWhatsApp } from '../utils/shareUtils';

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.834.49 3.557 1.343 5.05L2 22l5.08-1.328A9.972 9.972 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.82 14.288c-.244.686-1.42 1.258-1.956 1.336-.51.074-1.173.104-3.76-1.002-3.09-1.32-5.086-4.502-5.24-4.707-.152-.205-1.254-1.666-1.254-3.178 0-1.512.793-2.256 1.074-2.56.28-.305.613-.38.818-.38.204 0 .408.002.585.011.189.01.442-.072.69.524.258.62.88 2.146.958 2.302.078.156.13.338.026.544-.104.207-.156.336-.312.518-.156.182-.328.406-.468.545-.156.155-.318.324-.136.636.182.312.81 1.337 1.737 2.164 1.192 1.064 2.197 1.394 2.509 1.55.312.156.494.13.676-.078.182-.208.78-.908.988-1.22.208-.312.416-.26.69-.156.274.104 1.737.82 2.038.97.302.15.503.226.577.352.074.126.074.732-.17 1.418z" />
    </svg>
  );
}

export default function CompareModal({
  cafes = [],
  budget,
  isOpen,
  onClose,
  onRemoveCafe,
  onOpenDetails
}) {
  if (!isOpen || cafes.length === 0) return null;

  const cafeA = cafes[0];
  const cafeB = cafes[1] || null;

  const handleShare = () => {
    if (cafeA && cafeB) {
      shareComparisonOnWhatsApp({ cafeA, cafeB, budget });
    }
  };

  const getWinner = (valA, valB, isLowerBetter = false) => {
    if (valA === valB) return 'tie';
    if (isLowerBetter) {
      return valA < valB ? 'A' : 'B';
    }
    return valA > valB ? 'A' : 'B';
  };

  const ratingWinner = cafeB ? getWinner(cafeA.rating, cafeB.rating) : 'A';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-[32px] bg-[#0A0D14] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-[#07090E] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[11px] font-bold text-[#F3C06B] tracking-wide uppercase">
                أداة المفاضلة الذكية
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>مقارنة الكافيهات وجهاً لوجه</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-[#F3C06B] font-bold">
                {cafes.length} من 2 مختار
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {cafeB && (
              <button
                type="button"
                onClick={handleShare}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 text-xs font-bold transition-all cursor-pointer"
                title="مشاركة المقارنة للشلة على واتساب"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>مشاركة المقارنة بالواتساب</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white hover:text-[#F3C06B] transition-all cursor-pointer"
              aria-label="إغلاق المقارنة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1 space-y-6">
          
          {/* Comparison Grid: 2 Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[cafeA, cafeB].map((cafe, idx) => {
              if (!cafe) {
                return (
                  <div
                    key="empty"
                    className="flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-white/10 bg-white/[0.02] text-center min-h-[300px]"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#86868B] mb-3">
                      <Sparkles className="w-6 h-6 text-[#F3C06B]/50" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">
                      اختر كافيه ثاني من القائمة
                    </h4>
                    <p className="text-xs text-[#86868B] max-w-xs mb-4">
                      اضغط على زر &quot;قارن&quot; الموجود على أي كافيه في الصفحة للمقارنة جنباً إلى جنب
                    </p>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#F3C06B] text-white hover:text-[#07080B] text-xs font-bold transition-all cursor-pointer"
                    >
                      تصفح الكافيهات الآن
                    </button>
                  </div>
                );
              }

              const isA = idx === 0;
              const isWinnerRating = cafeB && ((isA && ratingWinner === 'A') || (!isA && ratingWinner === 'B'));

              return (
                <div
                  key={cafe.id}
                  className="relative flex flex-col rounded-3xl bg-[#0D1017] border border-white/10 hover:border-[#F3C06B]/40 shadow-xl overflow-hidden p-5 transition-all"
                >
                  {/* Top Bar with Remove */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-[#F3C06B] px-2.5 py-0.5 rounded-full bg-[#F3C06B]/10 border border-[#F3C06B]/20">
                      الكافيه {idx === 0 ? 'الأول (A)' : 'الثاني (B)'}
                    </span>
                    <button
                      type="button"
                      onClick={() => onRemoveCafe(cafe.id)}
                      className="text-xs text-[#86868B] hover:text-red-400 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <MinusCircle className="w-3.5 h-3.5" />
                      <span>إزالة</span>
                    </button>
                  </div>

                  {/* Header: Logo + Names */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A0D14] p-1.5 border-2 border-white/15 overflow-hidden shrink-0">
                      <img
                        src={cafe.logo || `/logos/${cafe.id}.svg`}
                        alt={cafe.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-white truncate">
                        <bdi dir="ltr">{cafe.name}</bdi>
                      </h3>
                      <p className="text-xs text-[#F3C06B] font-medium truncate">
                        {cafe.nameAr}
                      </p>
                      <p className="text-[11px] text-[#86868B] flex items-center gap-1 mt-0.5 truncate">
                        <MapPin className="w-3 h-3 text-[#F3C06B] shrink-0" />
                        <span>{cafe.districtName}</span>
                      </p>
                    </div>
                  </div>

                  {/* Rating & Reviews */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/5 mb-3">
                    <span className="text-xs font-semibold text-[#86868B]">التقييم العام:</span>
                    <div className="flex items-center gap-1.5">
                      {isWinnerRating && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-[#F3C06B] bg-[#F3C06B]/10 px-2 py-0.5 rounded-full border border-[#F3C06B]/30">
                          <Trophy className="w-3 h-3" /> الأعلى تقييماً
                        </span>
                      )}
                      <div className="flex items-center gap-1 text-sm font-bold text-[#F3C06B]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{cafe.rating}</span>
                        <span className="text-[#86868B] text-xs">({cafe.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/5 mb-3">
                    <span className="text-xs font-semibold text-[#86868B]">متوسط الأسعار:</span>
                    <span className="text-xs font-bold text-white">
                      {cafe.priceRange || 'من 90 - 250 جنيه'}
                    </span>
                  </div>

                  {/* Smart Basket for current budget */}
                  {cafe.smartBasket && (
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F3C06B]/15 to-[#10141f] border border-[#F3C06B]/30 mb-4">
                      <div className="text-[11px] font-bold text-[#F3C06B] flex items-center justify-between mb-1">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          طلب مقترح بميزانية {budget} ج:
                        </span>
                        <span className="font-black text-sm">{cafe.smartBasket.total} ج</span>
                      </div>
                      <p className="text-xs text-white/90 line-clamp-2">
                        {cafe.smartBasket.items.map((i) => i.name).join(' + ')}
                      </p>
                    </div>
                  )}

                  {/* Amenities Checklist */}
                  <div className="space-y-2 mb-5">
                    <h5 className="text-[11px] font-bold text-[#A1A1A6] uppercase tracking-wider mb-2">
                      المميزات والخدمات:
                    </h5>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <Wifi className="w-3.5 h-3.5 text-[#F3C06B] shrink-0" />
                        <span className="text-white/80 truncate">
                          {cafe.amenities?.wifi ? 'واي فاي متوفر' : 'غير محدد'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <Plug className="w-3.5 h-3.5 text-[#F3C06B] shrink-0" />
                        <span className="text-white/80 truncate">
                          {cafe.amenities?.sockets ? 'أفياش للعمل' : 'أفياش محدودة'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <Car className="w-3.5 h-3.5 text-[#F3C06B] shrink-0" />
                        <span className="text-white/80 truncate">
                          {cafe.amenities?.parking ? 'ركنة وفاليه' : 'ركنة بالشارع'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <Trees className="w-3.5 h-3.5 text-[#F3C06B] shrink-0" />
                        <span className="text-white/80 truncate">
                          {cafe.amenities?.outdoor ? 'جلسات وتراس' : 'جلسات داخلية'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white/80">
                      <Clock className="w-3.5 h-3.5 text-[#F3C06B] shrink-0" />
                      <span className="truncate">{cafe.amenities?.hours || 'يومياً حتى بعد منتصف الليل'}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto pt-3 border-t border-white/10 flex items-center gap-2">
                    <a
                      href={cafe.socialLinks?.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F3C06B] hover:brightness-110 text-[#07080B] text-xs font-bold transition-all cursor-pointer shadow-md"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#07080B]" />
                      <span>خريطة الـ GPS</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenDetails(cafe);
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/10 transition-all cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#F3C06B]" />
                      <span>عرض المنيو</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#07090E] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-[#86868B] text-center sm:text-right">
            المقارنة مبنية على أسعار المنيو الرسمية الحقيقية وتقييمات زوار التجمع الخامس والشيخ زايد.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {cafeA && cafeB && (
              <button
                type="button"
                onClick={handleShare}
                className="sm:hidden w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>مشاركة المقارنة بالواتساب</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
            >
              إغلاق المقارنة
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
