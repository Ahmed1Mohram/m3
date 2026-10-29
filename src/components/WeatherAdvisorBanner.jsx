import React from 'react';
import { Moon, Trees } from 'lucide-react';

export default function WeatherAdvisorBanner({ onSelectOutdoorMood }) {
  return (
    <div className="w-full px-4 max-w-2xl mx-auto -mt-4 mb-6 text-center">
      <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-md text-xs">
        <span className="flex items-center gap-1.5 text-white/90">
          <Moon className="w-3.5 h-3.5 text-emerald-400" />
          <span>طقس القاهرة الليلة: <b>21° مئوية</b> • معتدل ومنعش</span>
        </span>
        <span className="text-white/20 hidden sm:inline">•</span>
        <button
          type="button"
          onClick={onSelectOutdoorMood}
          className="flex items-center gap-1 text-[#F3C06B] hover:text-white font-bold cursor-pointer transition-colors"
        >
          <Trees className="w-3 h-3" />
          <span>ترشيح كافيهات التراس والجلسات الخارجية 🌿</span>
        </button>
      </div>
    </div>
  );
}
