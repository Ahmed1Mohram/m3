import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, ArrowLeft, Coffee, Sparkles, Compass, ZoomIn, ZoomOut, Crosshair, Layers, Star, Clock, Car } from 'lucide-react';
import gsap from 'gsap';

const MAP_CAFES = [
  {
    id: 'brown-nose',
    name: 'Brown Nose Coffee',
    nameAr: 'براون نوز كوفي',
    district: 'tagamoa',
    districtLabel: 'التجمع الخامس • ممشى ذا ووترواي 1',
    coords: { x: 88, y: 35 },
    rating: 4.9,
    reviews: '2.8k',
    priceEstimate: 'من 100 - 240 ج.م',
    route: 'المسار المباشر: عبر شارع التسعين الشمالي',
    parking: 'خدمة فاليه وجراج ووترواي 1 المؤمن',
    hours: 'مفتوح حتى 12:30 ص',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Brown+Nose+Coffee+The+Waterway+New+Cairo'
  },
  {
    id: 'seven-fortunes-waterway',
    name: 'Seven Fortunes Coffee Roasters',
    nameAr: 'سفن فورتشنز — ووترواي 2',
    district: 'tagamoa',
    districtLabel: 'التجمع الخامس • ممشى ذا ووترواي 2',
    coords: { x: 86, y: 32 },
    rating: 4.9,
    reviews: '3.1k',
    priceEstimate: 'من 95 - 250 ج.م',
    route: 'المسار المباشر: عبر التسعين الشمالي وممشى ووترواي 2',
    parking: 'جراج ووترواي 2 الإلكتروني الذكي',
    hours: 'مفتوح حتى 1:00 ص',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Seven+Fortunes+Coffee+Waterway+2+New+Cairo'
  },
  {
    id: 'ovio-garden8',
    name: 'Ovio',
    nameAr: 'أوفيو كافيه — داخل مول جاردن 8',
    district: 'tagamoa',
    districtLabel: 'التجمع الأول • داخل مول جاردن 8',
    coords: { x: 84, y: 46 },
    rating: 4.8,
    reviews: '2.5k',
    priceEstimate: 'من 130 - 320 ج.م',
    route: 'المسار المباشر: عبر طريق السويس ومدخل جاردن 8',
    parking: 'مواقف مول جاردن 8 الفاخرة المغطاة',
    hours: 'مفتوح حتى 12:00 ص',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Ovio+Garden+8+New+Cairo'
  },
  {
    id: 'cult-tagamoa',
    name: 'Cult Coffee',
    nameAr: 'كالت كوفي — مجمع 5A',
    district: 'tagamoa',
    districtLabel: 'التجمع الخامس • مجمع 5A الفاخر بالطريق الدائري',
    coords: { x: 81, y: 38 },
    rating: 4.8,
    reviews: '2.7k',
    priceEstimate: 'من 95 - 260 ج.م',
    route: 'المسار المباشر: الطريق الدائري ومحور المشير مدخل 5A',
    parking: 'خدمة فاليه 5A الشاملة',
    hours: 'مفتوح حتى 1:00 ص',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Cult+5A+Waterway+New+Cairo'
  },
  {
    id: 'espresso-lab-point90',
    name: 'Espresso Lab',
    nameAr: 'إسبريسو لاب — داخل بوينت 90 مول',
    district: 'tagamoa',
    districtLabel: 'التجمع الخامس • داخل بوينت 90 مول (أمام AUC)',
    coords: { x: 89, y: 48 },
    rating: 4.8,
    reviews: '3.5k',
    priceEstimate: 'من 85 - 230 ج.م',
    route: 'المسار المباشر: عبر التسعين الجنوبي أمام الجامعة الأمريكية',
    parking: 'جراج بوينت 90 مول المباشر',
    hours: 'مفتوح حتى 1:30 ص',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Espresso+Lab+Point+90+Mall+New+Cairo'
  },
  {
    id: 'tbs-concorde',
    name: 'TBS (The Bakery Shop)',
    nameAr: 'تي بي إس بيكري — داخل مول كونكورد بلازا',
    district: 'tagamoa',
    districtLabel: 'التجمع الخامس • داخل مول كونكورد بلازا',
    coords: { x: 87, y: 44 },
    rating: 4.7,
    reviews: '2.9k',
    priceEstimate: 'من 75 - 190 ج.م',
    route: 'المسار المباشر: عبر شارع التسعين الجنوبي بساحة كونكورد بلازا',
    parking: 'مواقف مول كونكورد بلازا المتاحة',
    hours: 'مفتوح حتى 12:00 ص',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=TBS+The+Bakery+Shop+Concorde+Plaza+New+Cairo'
  },
  {
    id: 'paul-cfc',
    name: 'Paul Bakery & Café',
    nameAr: 'بول كافيه — داخل كايرو فيستيفال سيتي مول',
    district: 'tagamoa',
    districtLabel: 'التجمع الخامس • داخل CFC Mall (منطقة النافورة)',
    coords: { x: 79, y: 34 },
    rating: 4.8,
    reviews: '4.2k',
    priceEstimate: 'من 110 - 290 ج.م',
    route: 'المسار المباشر: الطريق الدائري مباشرة مدخل مول CFC',
    parking: 'جراج كايرو فيستيفال سيتي مول متعدد الطوابق',
    hours: 'مفتوح حتى 12:30 ص',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Paul+Cairo+Festival+City+Mall'
  },
  {
    id: 'vanilla-tagamoa',
    name: 'Vanilla Café',
    nameAr: 'فانيلا لاونج — داخل سيلفر ستار مول',
    district: 'tagamoa',
    districtLabel: 'التجمع الخامس • داخل سيلفر ستار مول',
    coords: { x: 86, y: 42 },
    rating: 4.8,
    reviews: '2.3k',
    priceEstimate: 'من 90 - 250 ج.م',
    route: 'المسار المباشر: محور محمد نجيب والحي الأول',
    parking: 'مواقف سيلفر ستار مول',
    hours: 'مفتوح حتى 1:00 ص',
    image: '/vanilla.jpg',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Vanilla+Lounge+Silver+Star+New+Cairo'
  },
  {
    id: 'circle-zayed',
    name: 'Circle Coffee',
    nameAr: 'سيركل كوفي — الشيخ زايد',
    district: 'zayed',
    districtLabel: 'الشيخ زايد • وصلة دهشور (بجوار أركان)',
    coords: { x: 16, y: 50 },
    rating: 4.8,
    reviews: '1.9k',
    priceEstimate: 'من 85 - 220 ج.م',
    route: 'المسار المباشر: عبر وصلة دهشور ومحور 26 يوليو',
    parking: 'ساحة انتظار سيارات مخصصة لسيركل',
    hours: 'مفتوح حتى 1:00 ص',
    image: '/circle.jpg',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Circle+Coffee+Sheikh+Zayed'
  },
  {
    id: 'qahwa-arkan',
    name: 'Qahwa',
    nameAr: 'قهوة كافيه — داخل مول أركان بلازا',
    district: 'zayed',
    districtLabel: 'الشيخ زايد • داخل مول أركان بلازا',
    coords: { x: 18, y: 56 },
    rating: 4.8,
    reviews: '3.4k',
    priceEstimate: 'من 110 - 280 ج.م',
    route: 'المسار المباشر: عبر محور 26 يوليو مباشرة مدخل أركان',
    parking: 'جراج إلكتروني متطور وفاليه أركان بلازا',
    hours: 'مفتوح حتى 1:00 ص',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Qahwa+Arkan+Plaza+Sheikh+Zayed'
  },
  {
    id: 'cova-zayed',
    name: 'Cova Montenapoleone 1817',
    nameAr: 'كوفا ميلانو — أركان بلازا التوسعة',
    district: 'zayed',
    districtLabel: 'الشيخ زايد • داخل أركان بلازا 2',
    coords: { x: 17, y: 58 },
    rating: 4.9,
    reviews: '2.1k',
    priceEstimate: 'من 120 - 320 ج.م',
    route: 'المسار المباشر: أركان بلازا التوسعة الجديدة VIP',
    parking: 'خدمة فاليه أركان وكوفا الخاصة',
    hours: 'مفتوح حتى 1:00 ص',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Cova+Arkan+Plaza+Sheikh+Zayed'
  },
  {
    id: '30-north',
    name: '30 North Coffee',
    nameAr: '30 نورث كوفي — ممشى بارك ستريت',
    district: 'zayed',
    districtLabel: 'الشيخ زايد • ممشى بارك ستريت',
    coords: { x: 15, y: 64 },
    rating: 4.9,
    reviews: '1.9k',
    priceEstimate: 'من 120 - 290 ج.م',
    route: 'المسار المباشر: مدخل الشيخ زايد 1 وممشى بارك ستريت',
    parking: 'مواقف خاصة وسيارات بارك ستريت',
    hours: 'مفتوح حتى 12:00 ص',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=400&q=85',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=30+North+Coffee+Park+Street+Sheikh+Zayed'
  },
  {
    id: 'cake-cafe-zayed',
    name: 'Cake Café',
    nameAr: 'كيك كافيه — كابيتال بيزنس بارك',
    district: 'zayed',
    districtLabel: 'الشيخ زايد • داخل كابيتال بيزنس بارك',
    coords: { x: 22, y: 61 },
    rating: 4.8,
    reviews: '2.3k',
    priceEstimate: 'من 90 - 240 ج.م',
    route: 'المسار المباشر: محور 26 يوليو وممشى النوافير كابيتال بارك',
    parking: 'جراج كابيتال الإلكتروني الذكي',
    hours: 'مفتوح حتى 12:00 ص',
    image: '/coffee_dessert.jpg',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Cake+Cafe+Capital+Business+Park+Sheikh+Zayed'
  },
  {
    id: 'the-lane-zayed',
    name: 'The Lane Bakery',
    nameAr: 'ذا لين بيكري — نادي بالم هيلز',
    district: 'zayed',
    districtLabel: '6 أكتوبر / زايد • داخل كمبوند بالم هيلز',
    coords: { x: 13, y: 68 },
    rating: 4.9,
    reviews: '2.4k',
    priceEstimate: 'من 95 - 260 ج.م',
    route: 'المسار المباشر: عبر وصلة دهشور ومدخل نادي بالم هيلز',
    parking: 'مواقف ستريت كونكت ونادي بالم هيلز',
    hours: 'مفتوح حتى 11:30 م',
    image: '/the_lane.jpg',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=The+Lane+Bakery+Palm+Hills+October'
  },
  {
    id: 'onze-zayed',
    name: 'Onze Café',
    nameAr: 'أونز كافيه — بيفرلي هيلز',
    district: 'zayed',
    districtLabel: 'الشيخ زايد • داخل ذا هاب بيفرلي هيلز',
    coords: { x: 11, y: 46 },
    rating: 4.8,
    reviews: '1.6k',
    priceEstimate: 'من 90 - 230 ج.م',
    route: 'المسار المباشر: مدخل كمبوند بيفرلي هيلز ومجمع ذا هاب',
    parking: 'مواقف مجمع ذا هاب المجانية',
    hours: 'مفتوح حتى 12:00 ص',
    image: '/onze.jpg',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Onze+Cafe+The+Hub+Beverly+Hills+Sheikh+Zayed'
  },
  {
    id: 'dipndip-mallofarabia',
    name: 'dipndip',
    nameAr: 'ديب آند ديب — مول العرب',
    district: 'zayed',
    districtLabel: '6 أكتوبر / زايد • داخل مول العرب (ميدان جهينة)',
    coords: { x: 24, y: 52 },
    rating: 4.7,
    reviews: '4.3k',
    priceEstimate: 'من 95 - 240 ج.م',
    route: 'المسار المباشر: ميدان جهينة مباشرة وبوابة 4 مول العرب',
    parking: 'ساحات انتظار وجراج مول العرب الضخمة',
    hours: 'مفتوح حتى 1:00 ص',
    image: '/circle.jpg',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=dipndip+Mall+of+Arabia'
  }
];

export default function InteractiveMapSection({ onOpenCafe }) {
  const [activeCafeId, setActiveCafeId] = useState('brown-nose');
  const [mapMode, setMapMode] = useState('dark'); // 'dark' | 'satellite'
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const inspectorCardRef = useRef(null);
  const mapContainerRef = useRef(null);

  const activeCafe = MAP_CAFES.find((c) => c.id === activeCafeId) || MAP_CAFES[0];

  // Filter pins based on selected region
  const visibleCafes = selectedRegion === 'all'
    ? MAP_CAFES
    : MAP_CAFES.filter((c) => c.district === selectedRegion);

  // Apple spring animation when changing active cafe
  useEffect(() => {
    if (inspectorCardRef.current) {
      gsap.fromTo(
        inspectorCardRef.current,
        { opacity: 0, y: 15, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [activeCafeId]);

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 0.9), 1.35));
  };

  const handleResetLocation = () => {
    setZoomLevel(1);
    setSelectedRegion('all');
    setActiveCafeId('brown-nose');
  };

  return (
    <section id="map" className="relative z-10 w-full py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* Outer Apple Glass Card Wrapper */}
      <div className="relative rounded-3xl p-5 sm:p-8 apple-glass border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Apple Style Section Header & Region Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3C06B]/10 border border-[#F3C06B]/20 text-[#F3C06B] text-xs font-semibold mb-2">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>خريطة القاهرة الكبرى الحقيقية • Apple Maps UI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              استكشف أفخم كافيهات القاهرة وزايد جغرافياً
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 max-w-xl">
              تحديد فوري للمسافات وسرعة الوصول عبر المحاور الرئيسية (محور 26 يوليو، الدائري، وطريق السويس) مع تفاصيل الباركينج وحساب الميزانية.
            </p>
          </div>

          {/* Region Filter Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedRegion === 'all'
                  ? 'bg-[#F3C06B] text-[#07080B] font-bold shadow-md'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              الكل (القاهرة وزايد • 16 وجهة)
            </button>
            <button
              onClick={() => {
                setSelectedRegion('tagamoa');
                setActiveCafeId('brown-nose');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                selectedRegion === 'tagamoa'
                  ? 'bg-[#F3C06B] text-[#07080B] font-bold shadow-md'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              التجمع الخامس (القاهرة الجديدة)
            </button>
            <button
              onClick={() => {
                setSelectedRegion('zayed');
                setActiveCafeId('qahwa-arkan');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                selectedRegion === 'zayed'
                  ? 'bg-[#F3C06B] text-[#07080B] font-bold shadow-md'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              الشيخ زايد (6 أكتوبر)
            </button>
          </div>
        </div>

        {/* Realistic Apple Maps Canvas Container */}
        <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-[#090C12] shadow-2xl select-none">
          
          {/* Zoomable Map Layer (True Cartography Image of Cairo) */}
          <div
            ref={mapContainerRef}
            className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center'
            }}
          >
            {/* The High-Resolution Dark Cairo Map */}
            <img
              src="/cairo_apple_map.jpg"
              alt="Apple Maps Dark Mode Cairo"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                mapMode === 'satellite' ? 'contrast-125 brightness-95' : 'contrast-110 brightness-90'
              }`}
            />

            {/* Apple Maps Dynamic Ambient Hue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080B]/60 via-transparent to-[#07080B]/40 pointer-events-none" />

            {/* Realistic Cairo Geographic Region Watermarks */}
            <div className="absolute left-[14%] top-[42%] text-[11px] font-semibold tracking-wider text-white/40 uppercase pointer-events-none drop-shadow">
              الشيخ زايد • Sheikh Zayed
            </div>
            <div className="absolute left-[41%] top-[34%] text-[11px] font-semibold tracking-wider text-amber-300/40 uppercase pointer-events-none drop-shadow">
              جزيرة الزمالك • Zamalek Island
            </div>
            <div className="absolute right-[12%] top-[25%] text-[11px] font-semibold tracking-wider text-white/40 uppercase pointer-events-none drop-shadow">
              القاهرة الجديدة • New Cairo
            </div>

            {/* Highway Route Connecting Pin to Pin (Subtle Apple Glow) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 180 300 C 320 250, 420 220, 850 180"
                fill="none"
                stroke="#F3C06B"
                strokeWidth="2"
                strokeDasharray="4 6"
              />
            </svg>

            {/* Real Cafe Location Pins */}
            {visibleCafes.map((cafe) => {
              const isActive = cafe.id === activeCafeId;
              return (
                <div
                  key={cafe.id}
                  onClick={() => setActiveCafeId(cafe.id)}
                  style={{
                    left: `${cafe.coords.x}%`,
                    top: `${cafe.coords.y}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group transition-transform duration-300"
                >
                  {/* Outer Pulsing Apple Beacon */}
                  {isActive && (
                    <div className="absolute -inset-2.5 rounded-full bg-[#F3C06B] opacity-35 animate-ping pointer-events-none" />
                  )}

                  {/* Pin Capsule */}
                  <div
                    className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-all duration-300 shadow-xl ${
                      isActive
                        ? 'bg-[#F3C06B] text-[#07080B] scale-110 shadow-[0_0_22px_rgba(243,192,107,0.7)] font-bold'
                        : 'bg-[#10141E]/90 text-white border border-white/20 hover:border-[#F3C06B] hover:scale-105'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-[#07080B] text-[#F3C06B]' : 'bg-[#F3C06B]/20 text-[#F3C06B]'
                      }`}
                    >
                      <Coffee className="w-3 h-3" />
                    </div>
                    <span className="text-xs tracking-tight font-medium hidden sm:inline-block">
                      {cafe.nameAr}
                    </span>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Apple Maps Top-Left Search / Status Pill */}
          <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0E121B]/85 backdrop-blur-xl border border-white/10 text-white text-xs shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-[#F3C06B]" />
              <span className="font-medium text-white/90">القاهرة والجيزة • {visibleCafes.length} وجهات فاخرة</span>
            </div>
          </div>

          {/* Apple Maps Mode Switcher (Dark Map vs Satellite) */}
          <div className="absolute top-4 right-4 z-30 flex items-center p-1 rounded-2xl bg-[#0E121B]/85 backdrop-blur-xl border border-white/10 shadow-lg">
            <button
              onClick={() => setMapMode('dark')}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-medium transition-all ${
                mapMode === 'dark'
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              خريطة ليلية
            </button>
            <button
              onClick={() => setMapMode('satellite')}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-medium transition-all ${
                mapMode === 'satellite'
                  ? 'bg-[#F3C06B] text-[#07080B] font-bold'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              قمر صناعي
            </button>
          </div>

          {/* Apple Maps Navigation Controls (Zoom / Recenter / Compass) */}
          <div className="absolute bottom-6 left-4 z-30 flex flex-col gap-2">
            <div className="flex flex-col rounded-2xl bg-[#0E121B]/85 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg">
              <button
                onClick={() => handleZoom(0.15)}
                className="w-9 h-9 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="تكبير الخريطة"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <div className="h-[1px] bg-white/10 w-full" />
              <button
                onClick={() => handleZoom(-0.15)}
                className="w-9 h-9 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="تصغير الخريطة"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleResetLocation}
              className="w-9 h-9 rounded-2xl bg-[#0E121B]/85 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:text-[#F3C06B] hover:bg-white/10 transition-colors shadow-lg"
              title="إعادة التمركز"
            >
              <Crosshair className="w-4 h-4" />
            </button>
          </div>

          {/* Apple Maps Bottom Scale & Legal Indicator */}
          <div className="absolute bottom-4 right-4 z-30 hidden sm:flex items-center gap-2 text-[10px] text-white/50 bg-[#07080B]/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <span>مقياس الرسم: ٥ كم</span>
            <span>•</span>
            <span>Apple Maps Style</span>
          </div>

          {/* Apple Maps Floating Inspector Sheet (High Luxury Cafe Card) */}
          <div
            ref={inspectorCardRef}
            className="absolute bottom-5 right-4 left-4 sm:left-auto sm:right-6 sm:w-[370px] z-30 p-4 sm:p-5 rounded-2xl bg-[#0E121A]/90 backdrop-blur-2xl border border-[#F3C06B]/25 shadow-2xl text-right transition-all"
          >
            <div className="flex items-start gap-3.5 mb-3">
              <div className="relative w-16 h-16 shrink-0">
                <img
                  src={activeCafe.image}
                  alt={activeCafe.name}
                  className="w-full h-full rounded-xl object-cover border border-white/10 shadow-md"
                />
                <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 rounded-lg bg-[#0E121A] p-0.5 border border-white/20 shadow-md overflow-hidden flex items-center justify-center">
                  <img
                    src={`/logos/${activeCafe.id}.svg`}
                    alt={activeCafe.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-semibold text-[#F3C06B] bg-[#F3C06B]/10 px-2 py-0.5 rounded-full">
                    {activeCafe.hours}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-white">
                    <Star className="w-3 h-3 text-[#F3C06B] fill-[#F3C06B]" />
                    <span>{activeCafe.rating}</span>
                    <span className="text-[#8A8D9F] text-[10px]">({activeCafe.reviews})</span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {activeCafe.nameAr}
                </h3>
                <p className="text-[11px] text-[#9CA3AF] truncate flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-[#F3C06B] shrink-0" />
                  <span>{activeCafe.districtLabel}</span>
                </p>
              </div>
            </div>

            {/* Commute and Amenities Breakdown */}
            <div className="space-y-1.5 py-2 border-t border-b border-white/10 my-2 text-[11px]">
              <div className="flex items-center gap-2 text-[#E5E7EB]">
                <Navigation className="w-3.5 h-3.5 text-[#F3C06B] shrink-0" />
                <span className="truncate">{activeCafe.route}</span>
              </div>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <Car className="w-3.5 h-3.5 text-white/60 shrink-0" />
                <span className="truncate">{activeCafe.parking}</span>
              </div>
            </div>

            {/* Actions: View Menu and Navigate */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => onOpenCafe(activeCafe.id)}
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#F3C06B] hover:bg-[#FFE39A] text-[#07080B] text-xs font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
              >
                تصفح المنيو والأسعار
              </button>

              <a
                href={activeCafe.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all flex items-center justify-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
                title="بدء الاتجاهات المباشرة عبر خرائط جوجل"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>الاتجاهات (GPS)</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
