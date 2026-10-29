import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Shuffle,
  Navigation,
  Star,
  MapPin,
  BookOpen,
  Coffee,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { shareOutingOnWhatsApp } from '../utils/shareUtils';

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.834.49 3.557 1.343 5.05L2 22l5.08-1.328A9.972 9.972 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.82 14.288c-.244.686-1.42 1.258-1.956 1.336-.51.074-1.173.104-3.76-1.002-3.09-1.32-5.086-4.502-5.24-4.707-.152-.205-1.254-1.666-1.254-3.178 0-1.512.793-2.256 1.074-2.56.28-.305.613-.38.818-.38.204 0 .408.002.585.011.189.01.442-.072.69.524.258.62.88 2.146.958 2.302.078.156.13.338.026.544-.104.207-.156.336-.312.518-.156.182-.328.406-.468.545-.156.155-.318.324-.136.636.182.312.81 1.337 1.737 2.164 1.192 1.064 2.197 1.394 2.509 1.55.312.156.494.13.676-.078.182-.208.78-.908.988-1.22.208-.312.416-.26.69-.156.274.104 1.737.82 2.038.97.302.15.503.226.577.352.074.126.074.732-.17 1.418z" />
    </svg>
  );
}

export default function SurpriseModal({
  cafes = [],
  budget,
  groupSize = 1,
  isOpen,
  onClose,
  onOpenDetails
}) {
  if (!isOpen) return null;

  const [isSpinning, setIsSpinning] = useState(true);
  const [pickedCafe, setPickedCafe] = useState(null);
  const [displayTitle, setDisplayTitle] = useState('جاري اختيار أفضل كافيه لك...');

  // Spin roulette and pick a random cafe
  const spinRoulette = () => {
    if (!cafes || cafes.length === 0) return;
    setIsSpinning(true);

    let counter = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * cafes.length);
      setPickedCafe(cafes[randomIndex]);
      counter++;

      if (counter > 12) {
        clearInterval(interval);
        const finalCafe = cafes[Math.floor(Math.random() * cafes.length)];
        setPickedCafe(finalCafe);
        setIsSpinning(false);
        setDisplayTitle('كافيه الليلة المقترح لك!');

        // Golden Confetti Burst
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#F3C06B', '#D4AF37', '#FFF5D0', '#E5A93C']
        });
      }
    }, 90);
  };

  useEffect(() => {
    if (isOpen) {
      spinRoulette();
    }
  }, [isOpen]);

  if (!pickedCafe) return null;

  const basket = pickedCafe.smartBasket;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg rounded-[32px] bg-[#0A0D14] border border-[#F3C06B]/40 shadow-[0_30px_90px_rgba(243,192,107,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-[#F3C06B] transition-all cursor-pointer z-30"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Celebration Banner */}
        <div className="p-5 sm:p-6 text-center border-b border-white/10 bg-gradient-to-b from-[#161a24] to-[#0A0D14]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3C06B]/15 border border-[#F3C06B]/30 text-xs font-bold text-[#F3C06B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>عجلة الحظ الذكية للخروجات</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {displayTitle}
          </h3>
          <p className="text-xs text-[#86868B] mt-1">
            يناسب تماماً ميزانيتك الحالية ({budget} ج.م)
          </p>
        </div>

        {/* Cafe Showcase Card */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Image & Logo */}
          <div className="relative h-44 rounded-2xl overflow-hidden bg-[#161a24] border border-white/10">
            <img
              src={pickedCafe.image}
              alt={pickedCafe.name}
              className={`w-full h-full object-cover transition-all duration-300 ${
                isSpinning ? 'blur-sm scale-105' : 'blur-0 scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Official Logo */}
            <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-[#0A0D14] p-1 border-2 border-[#F3C06B] overflow-hidden shadow-xl">
              <img
                src={pickedCafe.logo || `/logos/${pickedCafe.id}.svg`}
                alt={pickedCafe.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute bottom-3 right-3 text-right">
              <span className="text-[11px] font-bold text-[#F3C06B] bg-black/70 px-2.5 py-0.5 rounded-full border border-white/10">
                {pickedCafe.districtName}
              </span>
            </div>
          </div>

          {/* Titles & Rating */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-xl font-black text-white">
                <bdi dir="ltr">{pickedCafe.name}</bdi>
              </h4>
              <p className="text-xs text-[#F3C06B] font-bold mt-0.5">
                {pickedCafe.nameAr}
              </p>
              <p className="text-[11px] text-[#86868B] flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-[#F3C06B]" />
                <span>{pickedCafe.address}</span>
              </p>
            </div>

            <div className="flex items-center gap-1 text-xs font-bold text-[#F3C06B] bg-white/5 px-2.5 py-1 rounded-xl border border-white/10">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{pickedCafe.rating}</span>
            </div>
          </div>

          {/* Suggested Basket */}
          {basket && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F3C06B]/15 to-[#161a24] border border-[#F3C06B]/30">
              <div className="text-xs font-bold text-[#F3C06B] flex items-center justify-between mb-1">
                <span>الطلب المقترح بالميزانية:</span>
                <span className="font-black text-sm">{basket.total} جنيه</span>
              </div>
              <p className="text-xs text-white">
                {basket.items.map((i) => i.name).join(' + ')}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="space-y-2 pt-2">
            
            {/* GPS Direction */}
            <a
              href={pickedCafe.socialLinks?.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#F3C06B] to-[#D4AF37] hover:brightness-110 active:scale-95 text-[#07080B] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#F3C06B]/25 transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#07080B]" />
              <span>يلا بينا! تشغيل مسار الخريطة (GPS) ↲</span>
            </a>

            {/* WhatsApp Share */}
            <button
              type="button"
              onClick={() => shareOutingOnWhatsApp({ cafe: pickedCafe, budget, groupSize, basket })}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>مشاركة الخروجة مع أصحابي بالواتساب</span>
            </button>

            {/* Sub-actions: Reshuffle & View Menu */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={spinRoulette}
                disabled={isSpinning}
                className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Shuffle className="w-3.5 h-3.5 text-[#F3C06B]" />
                <span>رشحلي واحد تاني</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenDetails(pickedCafe);
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#F3C06B]" />
                <span>المنيو بالكامل</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
