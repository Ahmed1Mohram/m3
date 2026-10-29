import React from 'react';
import { Star, Gem, Trees, Laptop, Car, Moon, Cake } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'الكل (120)', icon: Star },
  { id: 'work', label: 'عمل ومذاكرة (أفياش + نت)', icon: Laptop },
  { id: 'outdoor', label: 'تراس وجلسات خارجية', icon: Trees },
  { id: 'parking', label: 'ركنة وفاليه متاح', icon: Car },
  { id: 'luxury', label: 'أجواء فاخرة وهادئة', icon: Gem },
  { id: 'night', label: 'سهران لبعد 12 ص', icon: Moon },
  { id: 'dessert', label: 'حلويات وشوكولاتة', icon: Cake }
];

export default function MoodFilters({ activeCategory, onSelectCategory }) {
  return (
    <section id="mood-filters" className="w-full pt-8 pb-6 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        
        {/* Title & Eyebrow */}
        <div>
          <span className="text-xs font-bold text-[#F3C06B] tracking-wider block mb-1">
            تصفية سريعة حسب تفضيلك
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
            كافيهات مختارة على مزاجك
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            اختر ما يهمك (مساحات عمل، جلسات خارجية، باركينج، أو سهرات ليلية)
          </p>
        </div>

        {/* Filter Chips Container */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10 max-w-full overflow-x-auto pb-1 sm:pb-1 scrollbar-none no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#F3C06B] text-[#07080B] font-bold shadow-md shadow-[#F3C06B]/25'
                    : 'text-[#A1A1A6] hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#07080B]' : 'text-[#F3C06B]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
