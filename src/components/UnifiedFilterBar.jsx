import React from 'react';
import {
  Star,
  Gem,
  Trees,
  Laptop,
  Car,
  Moon,
  Cake,
  Building2,
  Columns,
  LayoutGrid,
  MapPin,
  Sparkles
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'كل الكافيهات', icon: Star },
  { id: 'work', label: 'عمل ومذاكرة (أفياش + نت)', icon: Laptop },
  { id: 'outdoor', label: 'تراس وجلسات خارجية', icon: Trees },
  { id: 'parking', label: 'ركنة وفاليه متاح', icon: Car },
  { id: 'luxury', label: 'أجواء فاخرة وهادئة', icon: Gem },
  { id: 'night', label: 'سهران لبعد 12 ص', icon: Moon },
  { id: 'dessert', label: 'حلويات وشوكولاتة', icon: Cake }
];

const TAGAMOA_HUBS = [
  { id: 'all', label: 'كل مجمعات التجمع' },
  { id: 'waterway', label: 'ذا ووترواي (1 & 2)' },
  { id: '5a', label: 'ووترواي 5A' },
  { id: 'concorde', label: 'كونكورد بلازا' },
  { id: '90th', label: 'شارع التسعين' },
  { id: 'mivida', label: 'ميفيدا وإعمار' },
  { id: 'cfc', label: 'كايرو فيستيفال' },
  { id: 'point90', label: 'بوينت 90' }
];

const ZAYED_HUBS = [
  { id: 'all', label: 'كل مجمعات زايد وأكتوبر' },
  { id: 'arkan', label: 'أركان بلازا' },
  { id: 'capital', label: 'كابيتال بيزنس بارك' },
  { id: 'street88', label: 'بالم هيلز ستريت 88' },
  { id: 'galleria', label: 'جاليريا 40' },
  { id: 'tivoli', label: 'تيفولي ووصلة دهشور' },
  { id: 'malls', label: 'مول العرب ومصر' }
];

export default function UnifiedFilterBar({
  district,
  onSelectDistrict,
  activeCategory,
  onSelectCategory,
  activeHub,
  onSelectHub,
  filteredCount,
  viewMode,
  onViewModeChange
}) {
  const currentHubs = district === 'zayed' ? ZAYED_HUBS : TAGAMOA_HUBS;

  return (
    <div className="w-full px-4 sm:px-8 max-w-7xl mx-auto mb-8">
      <div className="rounded-[32px] liquid-glass p-5 sm:p-6 space-y-4">
        
        {/* Top Header Row: District Selector + Results Counter + View Mode */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          
          {/* Results Summary */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#F3C06B] animate-pulse" />
              <span className="text-[11px] font-bold text-[#F3C06B] tracking-wider uppercase">
                الدليل الحصري الموثق
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>تم العثور على</span>
              <span className="text-[#F3C06B] font-extrabold text-2xl sm:text-3xl">{filteredCount}</span>
              <span>كافيه يطابق اختياراتك</span>
            </h2>
          </div>

          {/* District Pills + View Mode */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end flex-wrap">
            
            {/* District Segmented Control */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.05] border border-white/10">
              <button
                type="button"
                onClick={() => onSelectDistrict('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  district === 'all'
                    ? 'bg-[#F3C06B] text-[#07080B] shadow-md shadow-[#F3C06B]/25'
                    : 'text-[#A1A1A6] hover:text-white'
                }`}
              >
                الكل (120)
              </button>
              <button
                type="button"
                onClick={() => onSelectDistrict('tagamoa')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  district === 'tagamoa'
                    ? 'bg-[#F3C06B] text-[#07080B] shadow-md shadow-[#F3C06B]/25'
                    : 'text-[#A1A1A6] hover:text-white'
                }`}
              >
                التجمع الخامس (60)
              </button>
              <button
                type="button"
                onClick={() => onSelectDistrict('zayed')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  district === 'zayed'
                    ? 'bg-[#F3C06B] text-[#07080B] shadow-md shadow-[#F3C06B]/25'
                    : 'text-[#A1A1A6] hover:text-white'
                }`}
              >
                الشيخ زايد (60)
              </button>
            </div>

            {/* View Mode (Grid vs Carousel) */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.05] border border-white/10">
              <button
                type="button"
                onClick={() => onViewModeChange('grid')}
                title="عرض شبكة كروت"
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#F3C06B] text-[#07080B]'
                    : 'text-[#A1A1A6] hover:text-white'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onViewModeChange('carousel')}
                title="عرض شريط أفقي"
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-[#F3C06B] text-[#07080B]'
                    : 'text-[#A1A1A6] hover:text-white'
                }`}
              >
                <Columns className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Row 2: Mood & Amenities Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F3C06B] to-[#D4AF37] text-[#07080B] shadow-md shadow-[#F3C06B]/25 font-black scale-[1.02]'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-[#9CA3AF] hover:text-white border border-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#07080B]' : 'text-[#F3C06B]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Row 3: Hub & Mall Sub-Chips */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/5 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
          <span className="text-[11px] font-bold text-[#F3C06B] shrink-0 flex items-center gap-1 ml-1">
            <Building2 className="w-3.5 h-3.5" />
            <span>المجمع والمول:</span>
          </span>

          {currentHubs.map((hub) => {
            const isActive = activeHub === hub.id;
            return (
              <button
                key={hub.id}
                type="button"
                onClick={() => onSelectHub(hub.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white/20 text-[#F3C06B] border border-[#F3C06B]/40 font-bold'
                    : 'text-[#86868B] hover:text-white hover:bg-white/5'
                }`}
              >
                {hub.label}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
