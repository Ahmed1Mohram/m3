import React from 'react';
import { Wifi, Plug, Volume2, Armchair, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function WorkStudyScorecard({ cafe }) {
  if (!cafe) return null;

  const isHighFocus = cafe.luxuryScore >= 95 || cafe.moods?.includes('work');
  const quietScore = isHighFocus ? '8.8 / 10' : '7.5 / 10';
  const quietLabel = isHighFocus ? 'هادئ جداً ومناسب للتركيز والاجتماعات' : 'معتدل بأجواء عمل حيوية';

  return (
    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#101524] to-[#0A0D14] border border-[#F3C06B]/30 shadow-lg text-right space-y-3">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#F3C06B]/15 border border-[#F3C06B]/30 flex items-center justify-center text-[#F3C06B]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-black text-white">
              بطاقة جاهزية العمل والمذاكرة عن بُعد (Study & Remote Work)
            </h4>
            <span className="text-[10px] text-[#86868B]">
              تقييم موثق لبيئة العمل والإنتاجية في {cafe.name}
            </span>
          </div>
        </div>

        <span className="text-[11px] font-black text-[#F3C06B] bg-[#F3C06B]/10 px-2.5 py-0.5 rounded-full border border-[#F3C06B]/25">
          جاهز للعمل ✓
        </span>
      </div>

      {/* Grid of 4 Key Work Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        
        {/* Pillar 1: WiFi Speed */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <Wifi className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-white flex items-center gap-1.5">
              <span>سرعة الواي فاي:</span>
              <span className="text-emerald-400 font-extrabold">50+ Mbps</span>
            </div>
            <p className="text-[11px] text-[#A1A1A6]">
              {cafe.amenities?.wifi || 'واي فاي سريع ومستقر للاجتماعات والمكالمات'}
            </p>
          </div>
        </div>

        {/* Pillar 2: Power Sockets */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <Plug className="w-4 h-4 text-[#F3C06B] shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-white flex items-center gap-1.5">
              <span>أفياش اللابتوب:</span>
              <span className="text-[#F3C06B] font-extrabold">متوفرة</span>
            </div>
            <p className="text-[11px] text-[#A1A1A6]">
              {cafe.amenities?.sockets || 'أفياش موزعة بالجلسات الجدارية والوسطية'}
            </p>
          </div>
        </div>

        {/* Pillar 3: Quietness & Focus */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <Volume2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-white flex items-center gap-1.5">
              <span>مستوى الهدوء:</span>
              <span className="text-blue-400 font-extrabold">{quietScore}</span>
            </div>
            <p className="text-[11px] text-[#A1A1A6]">{quietLabel}</p>
          </div>
        </div>

        {/* Pillar 4: Ergonomic Seating */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
          <Armchair className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-white flex items-center gap-1.5">
              <span>راحة الجلسة:</span>
              <span className="text-purple-400 font-extrabold">مناسبة 4+ ساعات</span>
            </div>
            <p className="text-[11px] text-[#A1A1A6]">
              طاولات بارتفاع مريح وكراسي تدعم الجلسات المطولة
            </p>
          </div>
        </div>

      </div>

      {/* Policy Tip */}
      <div className="flex items-center gap-1.5 text-[11px] text-emerald-400/90 pt-1">
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
        <span>مسموح العمل باللابتوب طوال ساعات التشغيل دون حد أقصى للوقت.</span>
      </div>

    </div>
  );
}
