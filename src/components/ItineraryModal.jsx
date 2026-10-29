import React, { useState, useMemo } from 'react';
import {
  X,
  Sparkles,
  MapPin,
  Clock,
  Compass,
  Navigation,
  Coffee,
  Utensils,
  Cake,
  Share2,
  CheckCircle2,
  ChevronLeft
} from 'lucide-react';
import { CAFES_DATA } from '../data/cafesData';

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.834.49 3.557 1.343 5.05L2 22l5.08-1.328A9.972 9.972 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.82 14.288c-.244.686-1.42 1.258-1.956 1.336-.51.074-1.173.104-3.76-1.002-3.09-1.32-5.086-4.502-5.24-4.707-.152-.205-1.254-1.666-1.254-3.178 0-1.512.793-2.256 1.074-2.56.28-.305.613-.38.818-.38.204 0 .408.002.585.011.189.01.442-.072.69.524.258.62.88 2.146.958 2.302.078.156.13.338.026.544-.104.207-.156.336-.312.518-.156.182-.328.406-.468.545-.156.155-.318.324-.136.636.182.312.81 1.337 1.737 2.164 1.192 1.064 2.197 1.394 2.509 1.55.312.156.494.13.676-.078.182-.208.78-.908.988-1.22.208-.312.416-.26.69-.156.274.104 1.737.82 2.038.97.302.15.503.226.577.352.074.126.074.732-.17 1.418z" />
    </svg>
  );
}

const THEMES = [
  {
    id: 'chill',
    name: 'خروجة روقان ولذاذة',
    desc: 'فطور رايق + قهوة تخصصية على الممشى + حلا وسهرة',
    icon: Coffee
  },
  {
    id: 'work',
    name: 'يوم إنتاجية وعمل',
    desc: 'مخبوزات وقهوة هادئة + جلسة عمل مطولة + عشاء خفيف',
    icon: Sparkles
  },
  {
    id: 'luxury',
    name: 'سهرة فاخرة وكابلز',
    desc: 'برانش راقي + قهوة مختصة + تراس خارجي فخم',
    icon: Utensils
  }
];

export default function ItineraryModal({
  isOpen,
  onClose,
  initialDistrict = 'tagamoa',
  onOpenDetails
}) {
  if (!isOpen) return null;

  const [district, setDistrict] = useState(initialDistrict === 'zayed' ? 'zayed' : 'tagamoa');
  const [theme, setTheme] = useState('chill');
  const [targetBudget, setTargetBudget] = useState(450); // Total day budget per person

  // Generate 3 curated consecutive stops based on district & theme
  const itinerary = useMemo(() => {
    const districtCafes = CAFES_DATA.filter((c) => c.district === district);

    // Stop 1: Breakfast / Bakery / Brunch
    const breakfastCafes = districtCafes.filter(
      (c) =>
        c.menu.some((m) => m.subType === 'croissant' || m.subType === 'brunch') ||
        c.tags.some((t) => t.includes('فطور') || t.includes('كرواسون') || t.includes('برانش'))
    );
    const stop1 = breakfastCafes[0] || districtCafes[0];

    // Stop 2: Specialty Coffee & V60 / Atmosphere
    const coffeeCafes = districtCafes.filter(
      (c) =>
        c.id !== stop1.id &&
        (c.menu.some((m) => m.subType === 'v60' || m.subType === 'flatwhite') ||
          c.tags.some((t) => t.includes('مختصة') || t.includes('V60')))
    );
    const stop2 = coffeeCafes[0] || districtCafes[1];

    // Stop 3: Evening Dessert & Terrace
    const dessertCafes = districtCafes.filter(
      (c) =>
        c.id !== stop1.id &&
        c.id !== stop2.id &&
        (c.menu.some((m) => m.type === 'dessert') || c.moods.includes('outdoor'))
    );
    const stop3 = dessertCafes[0] || districtCafes[2];

    // Sample Orders
    const order1 = stop1.menu.find((m) => m.type === 'food') || stop1.menu[0];
    const drink1 = stop1.menu.find((m) => m.type === 'drink') || stop1.menu[1];
    const cost1 = (order1?.price || 110) + (drink1?.price || 85);

    const drink2 = stop2.menu.find((m) => m.subType === 'v60' || m.subType === 'flatwhite') || stop2.menu[0];
    const cost2 = drink2?.price || 110;

    const sweet3 = stop3.menu.find((m) => m.type === 'dessert') || stop3.menu[0];
    const drink3 = stop3.menu.find((m) => m.type === 'drink') || stop3.menu[1];
    const cost3 = (sweet3?.price || 130) + (drink3?.price || 85);

    const totalEst = cost1 + cost2 + cost3;

    return {
      stops: [
        {
          period: 'المحطة 1: الصباح (10:00 ص - 1:00 م)',
          type: 'فطار أو برانش ومخبوزات طازجة',
          cafe: stop1,
          order: `${order1?.name || 'كرواسون طازج'} + ${drink1?.name || 'قهوة الصباح'}`,
          cost: cost1
        },
        {
          period: 'المحطة 2: الظهيرة (2:00 م - 5:00 م)',
          type: 'قهوة تخصصية وسوالف روقان',
          cafe: stop2,
          order: `${drink2?.name || 'قهوة مقطرة V60 إثيوبية'}`,
          cost: cost2
        },
        {
          period: 'المحطة 3: المساء والسهرة (7:30 م - 11:30 م)',
          type: 'حلا وتراس خارجي مريح',
          cafe: stop3,
          order: `${sweet3?.name || 'سان سيباستيان تشيز كيك'} + ${drink3?.name || 'مشروب بارد منعش'}`,
          cost: cost3
        }
      ],
      totalEst
    };
  }, [district, theme]);

  const handleShareWhatsApp = () => {
    const lines = itinerary.stops
      .map(
        (s, idx) =>
          `*${idx + 1}. ${s.period}*\n🏛️ ${s.cafe.name} (${s.cafe.districtName})\n🍽️ الطلب المقترح: ${s.order} (${s.cost} ج)\n🗺️ اللوكيشن: ${s.cafe.socialLinks?.googleMaps || ''}`
      )
      .join('\n\n');

    const msg = `🗺️ *خطة خروجتنا المتكاملة لليوم — كافيه لينس* 🗺️
📍 المنطقة: ${district === 'tagamoa' ? 'التجمع الخامس' : 'الشيخ زايد'}
✨ نمط اليوم: ${THEMES.find((t) => t.id === theme)?.name}
💰 الميزانية التقديرية للفرد: ${itinerary.totalEst} ج.م

${lines}

_تم تخطيط المسار بالكامل عبر CaféLens — دليلك لأفخم كافيهات التجمع وزايد_`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-[32px] bg-[#0A0D14] border border-[#F3C06B]/30 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-[#07090E] shrink-0">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#F3C06B] mb-0.5">
              <Compass className="w-4 h-4" />
              <span>مخطط خروجة اليوم المتكامل (Full-Day Itinerary)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              خطط يومك بالكامل في التجمع أو زايد
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white hover:text-[#F3C06B] transition-all cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls: District & Theme */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          {/* District Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              type="button"
              onClick={() => setDistrict('tagamoa')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                district === 'tagamoa'
                  ? 'bg-[#F3C06B] text-[#07080B] shadow-sm'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              خروجة التجمع الخامس
            </button>
            <button
              type="button"
              onClick={() => setDistrict('zayed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                district === 'zayed'
                  ? 'bg-[#F3C06B] text-[#07080B] shadow-sm'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              خروجة الشيخ زايد
            </button>
          </div>

          {/* Theme Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none no-scrollbar">
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTheme(t.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  theme === t.id
                    ? 'bg-white/15 text-white border border-[#F3C06B]/50 text-[#F3C06B]'
                    : 'text-[#86868B] hover:text-white bg-white/5'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body: The 3 Stops */}
        <div className="overflow-y-auto p-4 sm:p-7 flex-1 space-y-4">
          
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#F3C06B]/15 via-[#101420] to-emerald-950/20 border border-[#F3C06B]/30 flex items-center justify-between gap-3">
            <div>
              <span className="text-xs font-black text-white block">
                مسار اليوم المقترح ({itinerary.stops.length} محطات قريبة من بعضها)
              </span>
              <span className="text-[11px] text-[#A1A1A6]">
                محسوبة في نفس المجمع والممشى لتقليل الزحمة وتوفير البنزين والركنات
              </span>
            </div>
            <div className="text-left shrink-0">
              <span className="text-[11px] text-[#86868B] block">إجمالي اليوم للفرد:</span>
              <span className="text-base font-black text-[#F3C06B]">{itinerary.totalEst} ج.م</span>
            </div>
          </div>

          {/* Stops List */}
          <div className="space-y-3.5 relative before:absolute before:top-4 before:bottom-4 before:right-6 before:w-0.5 before:bg-[#F3C06B]/30">
            {itinerary.stops.map((stop, idx) => (
              <div
                key={idx}
                className="relative pr-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0D1017] border border-white/10 hover:border-[#F3C06B]/40 transition-all shadow-md"
              >
                {/* Station Number Node */}
                <div className="absolute right-3.5 top-5 w-6 h-6 rounded-full bg-[#F3C06B] text-[#07080B] text-xs font-black flex items-center justify-center shadow-md">
                  {idx + 1}
                </div>

                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/5 shrink-0 border border-white/10">
                    <img
                      src={stop.cafe.image}
                      alt={stop.cafe.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-[#F3C06B] block mb-0.5">
                      {stop.period}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white truncate">
                      {stop.cafe.name} <span className="text-xs text-[#86868B]">({stop.cafe.nameAr})</span>
                    </h4>
                    <p className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                      🍽️ الطلب: {stop.order}
                    </p>
                    <p className="text-[10px] text-[#86868B] truncate mt-0.5">
                      📍 {stop.cafe.districtName}
                    </p>
                  </div>
                </div>

                {/* Stop Price & GPS Action */}
                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <span className="text-xs font-bold text-white bg-white/5 px-2.5 py-1 rounded-lg">
                    {stop.cost} ج
                  </span>

                  <a
                    href={stop.cafe.socialLinks?.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#F3C06B] text-white hover:text-[#07080B] text-xs font-bold transition-all cursor-pointer"
                  >
                    <Navigation className="w-3 h-3 text-[#F3C06B]" />
                    <span>GPS</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      if (onOpenDetails) onOpenDetails(stop.cafe);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white/90 font-medium transition-all cursor-pointer"
                  >
                    المنيو
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#07090E] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-[#86868B] text-center sm:text-right">
            يمكنك إرسال خطة اليوم للأصدقاء على جروب الواتساب لترتيب المواعيد بنقرة واحدة.
          </p>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/25 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>مشاركة خطة اليوم على واتساب</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
