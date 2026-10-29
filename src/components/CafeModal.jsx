import React, { useState, useMemo } from 'react';
import {
  X,
  MapPin,
  Wifi,
  Plug,
  Trees,
  Car,
  Clock,
  Camera,
  Phone,
  Sparkles,
  Navigation,
  BookOpen,
  Search,
  CheckCircle2,
  Coffee,
  Share2,
  Globe,
  ExternalLink,
  Scale,
  Copy,
  Check,
  Plus,
  Minus,
  Receipt
} from 'lucide-react';
import { shareOutingOnWhatsApp, copyCafeLocation, getCafeOpenStatus } from '../utils/shareUtils';
import WorkStudyScorecard from './WorkStudyScorecard';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.834.49 3.557 1.343 5.05L2 22l5.08-1.328A9.972 9.972 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.82 14.288c-.244.686-1.42 1.258-1.956 1.336-.51.074-1.173.104-3.76-1.002-3.09-1.32-5.086-4.502-5.24-4.707-.152-.205-1.254-1.666-1.254-3.178 0-1.512.793-2.256 1.074-2.56.28-.305.613-.38.818-.38.204 0 .408.002.585.011.189.01.442-.072.69.524.258.62.88 2.146.958 2.302.078.156.13.338.026.544-.104.207-.156.336-.312.518-.156.182-.328.406-.468.545-.156.155-.318.324-.136.636.182.312.81 1.337 1.737 2.164 1.192 1.064 2.197 1.394 2.509 1.55.312.156.494.13.676-.078.182-.208.78-.908.988-1.22.208-.312.416-.26.69-.156.274.104 1.737.82 2.038.97.302.15.503.226.577.352.074.126.074.732-.17 1.418z" />
    </svg>
  );
}

const MENU_CATEGORIES = [
  { id: 'all', label: 'كل الأصناف' },
  { id: 'hot_coffee', label: 'قهوة ساخنة ومختصة' },
  { id: 'iced_coffee', label: 'مشروبات باردة ومثلجة' },
  { id: 'tea_specialty', label: 'ماتشا وشاي وعصائر' },
  { id: 'desserts', label: 'حلويات وتشيز كيك' },
  { id: 'bakery', label: 'مخبوزات وكرواسون' },
  { id: 'brunch_food', label: 'برانش وساندوتشات' }
];

export default function CafeModal({
  cafe,
  budget,
  groupSize = 1,
  isOpen,
  onClose,
  isCompared = false,
  onToggleCompare
}) {
  if (!isOpen || !cafe) return null;

  const [activeTab, setActiveTab] = useState('menu'); // 'menu' | 'details'
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const openStatus = getCafeOpenStatus(cafe.amenities?.hours);

  const basket = cafe.smartBasket || { items: [], total: 0, remaining: budget };

  // Custom Live Order Tray State & Handlers
  const [customTray, setCustomTray] = useState({}); // { [itemId]: qty }
  const [includeTaxService, setIncludeTaxService] = useState(false);

  const addToTray = (item) => {
    setCustomTray((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
  };

  const removeFromTray = (item) => {
    setCustomTray((prev) => {
      const count = (prev[item.id] || 0) - 1;
      if (count <= 0) {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      }
      return { ...prev, [item.id]: count };
    });
  };

  const clearTray = () => setCustomTray({});

  const trayItemsList = useMemo(() => {
    return Object.entries(customTray)
      .map(([id, qty]) => {
        const item = cafe.menu.find((m) => m.id === id);
        return item ? { ...item, qty } : null;
      })
      .filter(Boolean);
  }, [customTray, cafe.menu]);

  const traySubtotal = useMemo(() => {
    return trayItemsList.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [trayItemsList]);

  const trayTotal = includeTaxService ? Math.round(traySubtotal * 1.26) : traySubtotal;

  const handleShareCustomTray = () => {
    if (trayItemsList.length === 0) return;
    const itemsText = trayItemsList
      .map((i) => `• ${i.qty}x ${i.name} (${i.price * i.qty} ج)`)
      .join('\n');
    const taxNote = includeTaxService ? ' (شامل 14% ضريبة + 12% خدمة)' : ' (أسعار صافية بالمنيو)';
    const splitNote =
      groupSize > 1
        ? `\n👥 نصيب الفرد لشلة من ${groupSize}: ${Math.round(trayTotal / groupSize)} ج.م`
        : '';

    const msg = `🧾 *طلبنا في كافيه ${cafe.name} (${cafe.nameAr})* ☕\n📍 ${cafe.address}\n\n*الأصناف المختارة:*\n${itemsText}\n\n💰 *الإجمالي:* ${trayTotal} ج.م${taxNote}${splitNote}\n🗺️ اللوكيشن: ${cafe.socialLinks?.googleMaps}\n\n_تم إعداد الفاتورة عبر CaféLens — دليلك لكافيهات التجمع وزايد_`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Filter items in the menu by category and search query
  const filteredMenuItems = useMemo(() => {
    return (cafe.menu || []).filter((item) => {
      // Category match
      if (selectedCat !== 'all' && item.category !== selectedCat) {
        return false;
      }
      // Search query match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.desc ? item.desc.toLowerCase().includes(q) : false;
        if (!matchName && !matchDesc) return false;
      }
      return true;
    });
  }, [cafe.menu, selectedCat, searchQuery]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[32px] bg-[#0A0D14] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-[#F3C06B] hover:border-[#F3C06B] transition-all cursor-pointer z-30 shadow-lg"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Banner with Real Cafe Image */}
        <div className="relative h-48 sm:h-56 w-full shrink-0 overflow-hidden">
          <img
            src={cafe.image}
            alt={cafe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/60 to-black/30 pointer-events-none" />

          {/* Header Info Overlay */}
          <div className="absolute bottom-4 inset-x-4 sm:inset-x-7 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 z-10">
            <div className="flex items-center gap-3.5">
              {/* Official Brand Logo Avatar */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0A0D14] p-1.5 border-2 border-[#F3C06B]/40 shadow-2xl overflow-hidden shrink-0">
                <img
                  src={cafe.logo || `/logos/${cafe.id}.svg`}
                  alt={`${cafe.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F3C06B] text-[#07080B] text-[10px] font-black tracking-wide">
                    {cafe.badge || 'كافيه مميز'}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border backdrop-blur-md ${openStatus.badgeClass}`}>
                    {openStatus.label}
                  </span>
                  <span className="text-xs font-semibold text-[#A1A1A6]">
                    {cafe.districtName}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2 flex-wrap">
                  <bdi dir="ltr">{cafe.name}</bdi>
                  <span className="text-base sm:text-lg font-bold text-[#F3C06B]">({cafe.nameAr})</span>
                </h2>
              </div>
            </div>

            {/* Quick Actions (WhatsApp, Compare, Copy GPS, Instagram, Navigation) */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* WhatsApp Share Button */}
              <button
                type="button"
                onClick={() => shareOutingOnWhatsApp({ cafe, budget, groupSize, basket })}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 backdrop-blur-md border border-emerald-500/40 text-xs font-bold text-emerald-400 transition-all shadow-sm cursor-pointer"
                title="مشاركة خطة الكافيه للشلة على واتساب"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>مشاركة بالواتساب</span>
              </button>

              {/* Compare Toggle */}
              {onToggleCompare && (
                <button
                  type="button"
                  onClick={() => onToggleCompare(cafe)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl backdrop-blur-md border text-xs font-bold transition-all cursor-pointer ${
                    isCompared
                      ? 'bg-[#F3C06B] border-[#F3C06B] text-[#07080B] font-bold'
                      : 'bg-white/10 hover:bg-white/20 border-white/15 text-white'
                  }`}
                  title="مقارنة هذا الكافيه مع كافيه آخر"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>{isCompared ? 'في المقارنة ✓' : 'قارن الكافيه'}</span>
                </button>
              )}

              {/* Copy Address & GPS */}
              <button
                type="button"
                onClick={async () => {
                  const ok = await copyCafeLocation(cafe);
                  if (ok) {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl backdrop-blur-md border text-xs font-bold transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-600/30 border-emerald-500/50 text-emerald-400'
                    : 'bg-white/10 hover:bg-white/20 border-white/15 text-white'
                }`}
                title="نسخ العنوان ورابط خرائط جوجل"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#F3C06B]" />}
                <span>{copied ? 'تم النسخ ✓' : 'نسخ العنوان'}</span>
              </button>

              {/* Navigation Direct Link */}
              <a
                href={cafe.socialLinks?.googleMaps || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(cafe.name + ' ' + cafe.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-xs font-bold text-white transition-all"
                title="بدء الاتجاهات المباشرة عبر خرائط جوجل"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F3C06B]" />
                <span>الاتجاهات (GPS)</span>
              </a>

              {/* Instagram */}
              {cafe.socialLinks?.instagram && (
                <a
                  href={cafe.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/30 to-[#fcb045]/30 hover:from-[#833ab4]/50 hover:to-[#fcb045]/50 backdrop-blur-md border border-[#E1306C]/40 text-xs font-bold text-white transition-all shadow-sm"
                  title="فتح صفحة إنستجرام الرسمية"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>إنستجرام</span>
                </a>
              )}

              {/* Phone */}
              {cafe.phone && (
                <a
                  href={`tel:${cafe.phone}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-xs font-bold text-white transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>اتصال</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs: 'menu' (المنيو والأسعار) vs 'details' (معلومات الكافيه) */}
        <div className="flex items-center justify-between px-4 sm:px-7 py-3 border-b border-white/10 bg-[#080B10] shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('menu')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'menu'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3C06B] text-[#07080B] shadow-sm'
                  : 'text-[#A1A1A6] hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>المنيو الكامل والأسعار ({cafe.menu.length} صنف)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'details'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3C06B] text-[#07080B] shadow-sm'
                  : 'text-[#A1A1A6] hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>الأجواء والمميزات</span>
            </button>
          </div>

          <span className="hidden sm:inline text-[11px] font-semibold text-emerald-400">
            ✓ أسعار رسمية حقيقية 2024-2026
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-7 flex-1">
          
          {/* TAB 1: FULL DIGITAL MENU (المنيو الرقمي والأسعار الحقيقية) */}
          {activeTab === 'menu' && (
            <div className="flex flex-col gap-4">
              
              {/* Smart Basket Match for this Cafe */}
              <div className="p-3.5 rounded-2xl bg-[#141824] border border-[#F3C06B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                <div>
                  <div className="text-xs font-bold text-[#F3C06B] flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {groupSize > 1
                        ? `توليفة الطلب لشلة من ${groupSize} أفراد بالميزانية (${budget} ج):`
                        : `توليفة طلبك المقترحة بالميزانية (${budget} جنيه):`}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {basket.items.map((it, idx) => (
                      <span key={idx}>
                        {it.name} (<b className="text-[#F3C06B]">{it.price} ج</b>)
                        {idx < basket.items.length - 1 ? ' + ' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-xs font-bold text-white">
                    الإجمالي: <span className="text-[#F3C06B]">{basket.total} جنيه</span>
                    {groupSize > 1 && (
                      <span className="text-[11px] text-[#A1A1A6] mr-2">
                        ({Math.round(basket.total / groupSize)} ج للفرد)
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-bold text-emerald-400">
                    {basket.remaining > 0 ? `وفرت ${basket.remaining} جنيه في جيبك` : 'مطابقة تامة'}
                  </div>
                </div>
              </div>

              {/* Menu Search & Category Filter */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Search in Menu */}
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 text-[#86868B] absolute right-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث في أصناف المنيو (V60، سبانش، كرواسون، كيك...)"
                    className="w-full pl-3 pr-9 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-[#86868B] focus:outline-none focus:border-[#F3C06B] transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#86868B] hover:text-white"
                    >
                      مسح
                    </button>
                  )}
                </div>

                {/* Categories Bar */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  {MENU_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCat(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        selectedCat === cat.id
                          ? 'bg-[#F3C06B] text-[#07080B] font-bold shadow-sm'
                          : 'bg-white/5 text-[#A1A1A6] hover:bg-white/10 hover:text-white border border-white/5'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Items List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1">
                {filteredMenuItems.length > 0 ? (
                  filteredMenuItems.map((item) => (
                    <div
                      key={item.id || item.name}
                      className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#F3C06B]/30 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <div>
                          <h4 className="text-xs font-bold text-white group-hover:text-[#F3C06B]">
                            {item.name}
                          </h4>
                          {item.desc && (
                            <p className="text-[11px] text-[#86868B] mt-0.5 line-clamp-2 leading-relaxed">
                              {item.desc}
                            </p>
                          )}
                        </div>
                        <span className="text-sm font-black text-[#F3C06B] shrink-0 font-bold">
                          {item.price} ج
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-[#A1A1A6]">
                        <div className="flex items-center gap-1.5">
                          <span className="bg-white/5 px-2 py-0.5 rounded-md">
                            {item.type === 'drink' ? 'مشروب' : item.type === 'dessert' ? 'حلا' : 'طعام'}
                          </span>
                          <span className="text-emerald-400 font-semibold hidden sm:inline">
                            سعر معتمد ✓
                          </span>
                        </div>

                        {/* Interactive Tray Counter */}
                        <div className="flex items-center gap-1.5">
                          {customTray[item.id] > 0 && (
                            <div className="flex items-center gap-1 bg-white/10 rounded-xl px-1.5 py-0.5 border border-white/10">
                              <button
                                type="button"
                                onClick={() => removeFromTray(item)}
                                className="w-5 h-5 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs font-bold text-white cursor-pointer active:scale-95"
                                aria-label="إنقاص"
                              >
                                <Minus className="w-2.5 h-2.5" />
                              </button>
                              <span className="text-xs font-black text-[#F3C06B] px-1">
                                {customTray[item.id]}
                              </span>
                            </div>
                          )}
                          <button
                            type="button"
                            onClick={() => addToTray(item)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#F3C06B]/20 hover:bg-[#F3C06B] text-[#F3C06B] hover:text-[#07080B] text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-95"
                            title="إضافة للطلب وحساب الفاتورة"
                          >
                            <Plus className="w-3 h-3" />
                            <span>{customTray[item.id] > 0 ? 'زيادة' : 'أضف للطلب'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-8 text-center text-xs text-[#86868B]">
                    لا توجد أصناف مطابقة لكلمة البحث في هذا القسم.
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: ATMOSPHERE & AMENITIES (أجواء ومميزات الكافيه) */}
          {activeTab === 'details' && (
            <div className="flex flex-col gap-6">
              
              {/* Vibe Story */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-[#F3C06B]/25">
                <div className="text-xs font-bold text-[#F3C06B] flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  أجواء وتجربة المكان:
                </div>
                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  {cafe.vibe}
                </p>
              </div>

              {/* Gallery Grid */}
              <div>
                <h4 className="text-xs font-bold text-white mb-2.5">
                  معرض الصور الحقيقية للكافيه:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(cafe.gallery || [cafe.image]).map((img, i) => (
                    <div key={i} className="h-32 sm:h-36 rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Study & Remote Work Scorecard */}
              <WorkStudyScorecard cafe={cafe} />

              {/* Verified Official Channels & Direct Links (الحسابات والروابط الرسمية المؤكدة) */}
              <div>
                <h4 className="text-xs font-bold text-white mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>الحسابات والروابط الرسمية المؤكدة للكافيه:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  
                  {/* Instagram Direct Link Card */}
                  {cafe.socialLinks?.instagram && (
                    <a
                      href={cafe.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-[#833ab4]/15 via-[#fd1d1d]/15 to-[#fcb045]/15 hover:from-[#833ab4]/25 hover:to-[#fcb045]/25 border border-[#E1306C]/30 hover:border-[#E1306C] transition-all shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#fd1d1d] to-[#833ab4] flex items-center justify-center text-white shadow-md">
                          <InstagramIcon className="w-5 h-5" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-white group-hover/link:text-[#F3C06B] transition-colors">
                            صفحة إنستجرام الرسمية
                          </div>
                          <div className="text-[11px] text-[#A1A1A6]">
                            {cafe.socialLinks.instagramHandle || '@' + cafe.id}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#A1A1A6] group-hover/link:text-white transition-all" />
                    </a>
                  )}

                  {/* Facebook Direct Link Card */}
                  {cafe.socialLinks?.facebook && (
                    <a
                      href={cafe.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between p-3.5 rounded-2xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 hover:border-[#1877F2] transition-all shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#1877F2] flex items-center justify-center text-white shadow-md font-bold text-base">
                          f
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-white group-hover/link:text-[#F3C06B] transition-colors">
                            صفحة فيسبوك الرسمية
                          </div>
                          <div className="text-[11px] text-[#A1A1A6]">
                            متابعة العروض والتحديثات
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#A1A1A6] group-hover/link:text-white transition-all" />
                    </a>
                  )}

                  {/* Website Direct Link Card */}
                  {cafe.socialLinks?.website && (
                    <a
                      href={cafe.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#F3C06B] transition-all shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#F3C06B]/20 border border-[#F3C06B]/40 flex items-center justify-center text-[#F3C06B] shadow-md">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-white group-hover/link:text-[#F3C06B] transition-colors">
                            الموقع الإلكتروني الرسمي
                          </div>
                          <div className="text-[11px] text-[#A1A1A6]">
                            تصفح المنيو أونلاين
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#A1A1A6] group-hover/link:text-white transition-all" />
                    </a>
                  )}

                  {/* Google Maps Location & Reviews Card */}
                  <a
                    href={cafe.socialLinks?.googleMaps || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.name + ' ' + cafe.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-400 transition-all shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-md">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-white group-hover/link:text-emerald-400 transition-colors">
                          موقع الكافيه على Google Maps
                        </div>
                        <div className="text-[11px] text-[#A1A1A6]">
                          خط سير فوري وإرشادات القيادة
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#A1A1A6] group-hover/link:text-white transition-all" />
                  </a>

                </div>
              </div>

              {/* Real Amenities Checklist */}
              <div>
                <h4 className="text-xs font-bold text-white mb-2.5">
                  المرافق والخدمات المؤكدة:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#B0B3C1]">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Wifi className="w-4 h-4 text-[#F3C06B] shrink-0" />
                    <span>{cafe.amenities.wifi}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Plug className="w-4 h-4 text-[#F3C06B] shrink-0" />
                    <span>{cafe.amenities.sockets}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Trees className="w-4 h-4 text-[#F3C06B] shrink-0" />
                    <span>{cafe.amenities.outdoor}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Car className="w-4 h-4 text-[#F3C06B] shrink-0" />
                    <span>{cafe.amenities.parking}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Clock className="w-4 h-4 text-[#F3C06B] shrink-0" />
                    <span>{cafe.amenities.hours}</span>
                  </div>
                  {cafe.phone && (
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{cafe.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Exact Physical Address */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-white">
                  <MapPin className="w-4 h-4 text-[#F3C06B] shrink-0" />
                  <span>{cafe.address}</span>
                </div>
                <a
                  href={cafe.socialLinks?.googleMaps || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.name + ' ' + cafe.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-[#F3C06B] text-[#07080B] text-xs font-bold hover:brightness-110 transition-all shrink-0"
                >
                  فتح في Google Maps
                </a>
              </div>

            </div>
          )}

        </div>

        {/* Docked Live Custom Order Tray & Bill Calculator */}
        {trayItemsList.length > 0 && (
          <div className="p-3.5 sm:p-4 bg-[#0A0E1A] border-t border-[#F3C06B]/30 shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-[0_-15px_40px_rgba(0,0,0,0.85)] animate-in slide-in-from-bottom duration-200">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs font-black text-[#F3C06B] flex items-center gap-1">
                  <Receipt className="w-3.5 h-3.5" />
                  صينية طلباتك المخصصة ({trayItemsList.reduce((s, i) => s + i.qty, 0)} أصناف):
                </span>
                <button
                  type="button"
                  onClick={() => setIncludeTaxService(!includeTaxService)}
                  className={`text-[10px] px-2.5 py-0.5 rounded-full border transition-all cursor-pointer font-bold ${
                    includeTaxService
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                      : 'bg-white/5 border-white/10 text-[#86868B] hover:text-white'
                  }`}
                >
                  {includeTaxService ? 'شامل 14% ضريبة + 12% خدمة ✓' : 'حساب الخدمة والضريبة (+26%)؟'}
                </button>
              </div>

              <p className="text-[11px] text-[#E0E2EC] truncate">
                {trayItemsList.map((i) => `${i.qty}x ${i.name}`).join(' + ')}
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
              <div className="text-left">
                <span className="text-sm font-black text-[#F3C06B] block">
                  {trayTotal} ج.م
                </span>
                {groupSize > 1 && (
                  <span className="text-[10px] text-[#A1A1A6]">
                    {Math.round(trayTotal / groupSize)} ج / للفرد
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleShareCustomTray}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
                title="مشاركة الفاتورة والطلب للشلة على واتساب"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>إرسال الفاتورة بالواتساب</span>
              </button>

              <button
                type="button"
                onClick={clearTray}
                className="px-2.5 py-2 rounded-xl text-[#86868B] hover:text-white hover:bg-white/10 text-xs font-medium transition-colors cursor-pointer"
                title="مسح الصينية"
              >
                مسح
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
