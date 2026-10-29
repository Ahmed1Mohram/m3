import React from 'react';
import { ShoppingBag, Image, MapPin, RefreshCw } from 'lucide-react';

const PILLARS = [
  {
    icon: ShoppingBag,
    title: 'تجارب مخصصة',
    desc: 'حسب ميزانيتك و ذوقك'
  },
  {
    icon: Image,
    title: 'صور حقيقية',
    desc: 'من داخل الكافيهات'
  },
  {
    icon: MapPin,
    title: 'معلومات دقيقة',
    desc: 'الموقع - الأسعار - التقييمات'
  },
  {
    icon: RefreshCw,
    title: 'تحديث مستمر',
    desc: 'أفخم الكافيهات دائماً'
  }
];

export default function TrustPillarsBar() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#07080B] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* 4 Pillars in a Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 flex-grow">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F3C06B] shrink-0 shadow-[0_0_15px_rgba(243,192,107,0.15)]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{p.title}</span>
                  <span className="text-[11px] text-[#8A8D9F]">{p.desc}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Signature */}
        <div className="shrink-0 flex items-center gap-2 select-none border-t lg:border-t-0 lg:border-r border-white/10 pt-4 lg:pt-0 lg:pr-8">
          <span className="text-lg sm:text-xl text-[#F3C06B] font-bold tracking-tight">
            CaféLens
          </span>
          <span className="text-xs text-[#8A8D9F] font-medium">
            — تجربتك الأرقى دائماً
          </span>
        </div>

      </div>
    </footer>
  );
}
