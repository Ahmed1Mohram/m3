import React from 'react';
import { Building2, MapPin, Sparkles } from 'lucide-react';

const TAGAMOA_HUBS = [
  { id: 'all', label: 'كل مجمعات التجمع' },
  { id: 'waterway', label: 'ذا ووترواي (1 & 2)', match: ['waterway', 'ووترواي'] },
  { id: '5a', label: 'ووترواي 5A', match: ['5a', '5A'] },
  { id: 'concorde', label: 'كونكورد بلازا', match: ['concorde', 'كونكورد'] },
  { id: '90th', label: 'شارع التسعين', match: ['تسعين', '90', 'شمالي', 'جنوبي'] },
  { id: 'mivida', label: 'ميفيدا وإعمار', match: ['mivida', 'ميفيدا'] },
  { id: 'cfc', label: 'كايرو فيستيفال سيتي', match: ['cfc', 'festival', 'فيستيفال'] },
  { id: 'point90', label: 'بوينت 90 والجامعة', match: ['point', 'بوينت', 'auc'] }
];

const ZAYED_HUBS = [
  { id: 'all', label: 'كل مجمعات زايد وأكتوبر' },
  { id: 'arkan', label: 'أركان بلازا', match: ['arkan', 'أركان'] },
  { id: 'capital', label: 'كابيتال بيزنس بارك', match: ['capital', 'كابيتال'] },
  { id: 'street88', label: 'بالم هيلز ستريت 88', match: ['street 88', 'palm hills', 'ستريت 88', 'بالم هيلز'] },
  { id: 'galleria', label: 'جاليريا 40', match: ['galleria', 'جاليريا'] },
  { id: 'tivoli', label: 'تيفولي دوم ووصلة دهشور', match: ['tivoli', 'تيفولي', 'دهشور'] },
  { id: 'malls', label: 'مول العرب ومصر', match: ['mall of arabia', 'mall of egypt', 'مول العرب', 'مول مصر'] }
];

export default function HubFilterBar({
  district = 'all',
  activeHub = 'all',
  onSelectHub
}) {
  const currentHubs = district === 'zayed' ? ZAYED_HUBS : TAGAMOA_HUBS;

  return (
    <div className="w-full px-4 sm:px-8 max-w-7xl mx-auto mb-6">
      <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-x-auto scrollbar-none no-scrollbar">
        <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-[#F3C06B] shrink-0 border-l border-white/10 ml-1">
          <Building2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">أشهر المجمعات:</span>
          <span className="sm:hidden">المول:</span>
        </div>

        {currentHubs.map((hub) => {
          const isActive = activeHub === hub.id;
          return (
            <button
              key={hub.id}
              type="button"
              onClick={() => onSelectHub(hub.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#F3C06B] text-[#07080B] font-bold shadow-md shadow-[#F3C06B]/20 scale-[1.02]'
                  : 'text-[#A1A1A6] hover:text-white hover:bg-white/5'
              }`}
            >
              {hub.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Helper to match cafe against selected hub
 */
export function matchesHub(cafe, hubId, district) {
  if (!hubId || hubId === 'all') return true;

  const hubsList = district === 'zayed' ? ZAYED_HUBS : TAGAMOA_HUBS;
  const hubDef = hubsList.find((h) => h.id === hubId);
  if (!hubDef || !hubDef.match) return true;

  const targetText = `${cafe.name} ${cafe.nameAr} ${cafe.districtName} ${cafe.address} ${(cafe.tags || []).join(' ')}`.toLowerCase();

  return hubDef.match.some((kw) => targetText.includes(kw.toLowerCase()));
}
