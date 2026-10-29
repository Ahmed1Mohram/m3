import React, { useState } from 'react';
import {
  Star,
  MapPin,
  Heart,
  Sparkles,
  BookOpen,
  Navigation,
  Scale,
  Wifi,
  Plug,
  Car,
  Trees,
  Copy,
  Check
} from 'lucide-react';
import { shareOutingOnWhatsApp, copyCafeLocation, getCafeOpenStatus } from '../utils/shareUtils';

function InstagramIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.834.49 3.557 1.343 5.05L2 22l5.08-1.328A9.972 9.972 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.82 14.288c-.244.686-1.42 1.258-1.956 1.336-.51.074-1.173.104-3.76-1.002-3.09-1.32-5.086-4.502-5.24-4.707-.152-.205-1.254-1.666-1.254-3.178 0-1.512.793-2.256 1.074-2.56.28-.305.613-.38.818-.38.204 0 .408.002.585.011.189.01.442-.072.69.524.258.62.88 2.146.958 2.302.078.156.13.338.026.544-.104.207-.156.336-.312.518-.156.182-.328.406-.468.545-.156.155-.318.324-.136.636.182.312.81 1.337 1.737 2.164 1.192 1.064 2.197 1.394 2.509 1.55.312.156.494.13.676-.078.182-.208.78-.908.988-1.22.208-.312.416-.26.69-.156.274.104 1.737.82 2.038.97.302.15.503.226.577.352.074.126.074.732-.17 1.418z" />
    </svg>
  );
}

export default function CafeCard({
  cafe,
  budget,
  groupSize = 1,
  isFavorite,
  onToggleFav,
  isCompared = false,
  onToggleCompare,
  onOpenDetails
}) {
  const basket = cafe.smartBasket;
  const [copied, setCopied] = useState(false);
  const openStatus = getCafeOpenStatus(cafe.amenities?.hours);

  const handleCopyLocation = async (e) => {
    e.stopPropagation();
    const ok = await copyCafeLocation(cafe);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareWhatsApp = (e) => {
    e.stopPropagation();
    shareOutingOnWhatsApp({ cafe, budget, groupSize, basket });
  };

  return (
    <article
      onClick={() => onOpenDetails(cafe)}
      className="cafe-card group flex flex-col rounded-[30px] overflow-hidden liquid-glass-card shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
    >
      
      {/* Media Cover */}
      <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-[#161a24]">
        <img
          src={cafe.image}
          alt={cafe.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-black/40 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex justify-between items-center z-10">
          
          {/* Badge: مميز / الأقرب لك */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {cafe.badge && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-[#F3C06B]/40 text-[11px] font-bold text-[#F3C06B] shadow-md">
                <Star className="w-3 h-3 fill-current" />
                <span>{cafe.badge}</span>
              </div>
            )}

            {/* Live Cairo Open Status */}
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border backdrop-blur-md ${openStatus.badgeClass}`}>
              {openStatus.label}
            </span>
          </div>

          {/* Action Buttons: Compare, WhatsApp, Instagram, Favorite */}
          <div className="flex items-center gap-1.5">
            {/* Compare Toggle Button */}
            {onToggleCompare && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleCompare(cafe);
                }}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                  isCompared
                    ? 'bg-[#F3C06B] text-[#07080B] font-bold shadow-[0_0_12px_rgba(243,192,107,0.5)] scale-105'
                    : 'bg-black/75 hover:bg-black text-white hover:text-[#F3C06B] border border-white/20'
                }`}
                title={isCompared ? 'إزالة من المقارنة' : 'إضافة للمقارنة (قارن كافيهين)'}
                aria-label="مقارنة الكافيه"
              >
                <Scale className="w-3.5 h-3.5" />
              </button>
            )}

            {/* WhatsApp Share Button */}
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="w-8 h-8 rounded-full bg-black/75 hover:bg-emerald-600 border border-white/20 hover:border-transparent flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
              title="مشاركة خطة الكافيه بالواتساب للشلة"
              aria-label="مشاركة بالواتساب"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </button>

            {/* Instagram Link */}
            {cafe.socialLinks?.instagram && (
              <a
                href={cafe.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-black/75 hover:bg-[#E1306C] border border-white/20 hover:border-transparent flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
                title={`زيارة حساب ${cafe.name} على إنستجرام`}
                aria-label="صفحة إنستجرام"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            )}

            {/* Favorite Bookmark */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFav(cafe.id);
              }}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                isFavorite
                  ? 'bg-[#F3C06B] text-[#07080B] shadow-[0_0_12px_rgba(243,192,107,0.4)]'
                  : 'bg-black/75 border border-white/20 text-white hover:text-[#F3C06B]'
              }`}
              aria-label="إضافة للمفضلة"
            >
              <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Location Pill on Image */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 text-[11px] font-semibold text-[#A1A1A6] border border-white/10 z-10">
          <MapPin className="w-3 h-3 text-[#F3C06B]" />
          <span>{cafe.districtName}</span>
        </div>

        {/* Official Brand Logo Avatar Badge */}
        <div className="absolute -bottom-4 left-4 z-20">
          <div className="w-12 h-12 rounded-2xl bg-[#0d1017] p-1 border-2 border-white/20 shadow-xl group-hover:border-[#F3C06B] transition-all overflow-hidden flex items-center justify-center">
            <img
              src={cafe.logo || `/logos/${cafe.id}.svg`}
              alt={`${cafe.name} logo`}
              className="w-full h-full object-contain"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

      </div>

      {/* Card Content Body */}
      <div className="p-5 pt-6 flex flex-col flex-grow">
        
        {/* Row 1: Name, Arabic Subtitle & Rating */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F3C06B] transition-colors tracking-tight truncate">
              <bdi dir="ltr">{cafe.name}</bdi>
            </h3>
            <p className="text-xs text-[#9CA3AF] truncate font-medium mt-0.5">
              {cafe.nameAr}
            </p>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-[#F3C06B] shrink-0 bg-white/[0.04] px-2 py-1 rounded-xl border border-white/5">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{cafe.rating}</span>
            <span className="text-[#86868B] text-[10px]">({cafe.reviewsCount})</span>
          </div>
        </div>

        {/* Row 2: Price Range & Quick Amenities */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs sm:text-sm font-semibold text-[#F3C06B]/90 truncate">
            {cafe.priceRange || `متوسط المنيو ${cafe.menu[0]?.price || 90} ج`}
          </span>

          {/* Quick Amenity Icons */}
          <div className="flex items-center gap-1 text-[#86868B] text-[10px]">
            {cafe.amenities?.wifi && (
              <span className="p-1 rounded-md bg-white/5" title="واي فاي متوفر">
                <Wifi className="w-3 h-3 text-[#F3C06B]" />
              </span>
            )}
            {cafe.amenities?.sockets && (
              <span className="p-1 rounded-md bg-white/5" title="أفياش لابتوب للعمل والمذاكرة">
                <Plug className="w-3 h-3 text-[#F3C06B]" />
              </span>
            )}
            {cafe.amenities?.parking && (
              <span className="p-1 rounded-md bg-white/5" title="باركينج وفاليه">
                <Car className="w-3 h-3 text-[#F3C06B]" />
              </span>
            )}
            {cafe.amenities?.outdoor && (
              <span className="p-1 rounded-md bg-white/5" title="جلسات خارجية وتراس">
                <Trees className="w-3 h-3 text-[#F3C06B]" />
              </span>
            )}
          </div>
        </div>

        {/* Row 3: The Smart Budget Basket (حساب الميزانية الفوري) */}
        {basket && (
          <div className="p-3 rounded-2xl bg-gradient-to-r from-[#F3C06B]/10 to-[#141824]/60 border border-[#F3C06B]/25 mb-4">
            <div className="flex items-center justify-between text-xs font-bold text-[#F3C06B] mb-1">
              <span className="flex items-center gap-1 truncate">
                <Sparkles className="w-3 h-3 shrink-0" />
                {groupSize > 1 ? `توليفة ${groupSize} أفراد:` : `توليفة بالـ ${budget} ج:`}
              </span>
              <span className="font-bold shrink-0">{basket.total} ج</span>
            </div>
            
            <p className="text-[11px] text-[#E0E2EC] line-clamp-1">
              {basket.items.map((i) => i.name).join(' + ')}
            </p>

            <div className="flex items-center justify-between text-[10px] mt-1">
              {groupSize > 1 && (
                <span className="text-white/70">
                  {Math.round(basket.total / groupSize)} ج للفرد
                </span>
              )}
              <span className="text-emerald-400 font-bold dir-ltr mr-auto">
                {basket.remaining > 0 ? `+${basket.remaining} EGP Change` : 'Exact Fit ✓'}
              </span>
            </div>
          </div>
        )}

        {/* Row 4: Feature Tags & Direct Actions */}
        <div className="mt-auto pt-3 border-t border-white/5 flex flex-col gap-2.5">
          <div className="flex flex-wrap gap-1.5">
            {cafe.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[#A1A1A6]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row: Full Menu + Quick Copy GPS */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(cafe);
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-2xl bg-white/[0.06] hover:bg-[#F3C06B] text-white hover:text-[#07080B] text-xs font-bold border border-white/10 hover:border-[#F3C06B] transition-all cursor-pointer shadow-sm group/btn"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#F3C06B] group-hover/btn:text-[#07080B] transition-colors" />
              <span>المنيو الكامل ({cafe.menu.length})</span>
            </button>

            {/* Quick Copy Address & GPS */}
            <button
              type="button"
              onClick={handleCopyLocation}
              className={`p-2 rounded-2xl border transition-all cursor-pointer flex items-center justify-center ${
                copied
                  ? 'bg-emerald-600/30 border-emerald-500/50 text-emerald-400'
                  : 'bg-white/5 hover:bg-white/15 border-white/10 text-white/80 hover:text-white'
              }`}
              title="نسخ العنوان ورابط اللوكيشن"
              aria-label="نسخ العنوان واللوكيشن"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

      </div>

    </article>
  );
}
