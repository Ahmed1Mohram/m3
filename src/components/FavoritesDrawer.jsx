import React from 'react';
import { X, Bookmark, Trash2, ArrowLeft } from 'lucide-react';

export default function FavoritesDrawer({
  isOpen,
  onClose,
  favorites,
  cafes,
  onRemoveFav,
  onOpenDetails
}) {
  if (!isOpen) return null;

  const favCafes = cafes.filter((c) => favorites.includes(c.id));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md max-h-[80vh] overflow-y-auto rounded-3xl p-6 bg-[#0E121B] border border-[#D4AF37]/30 shadow-2xl animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2 text-base font-bold text-[#F7E7A9]">
            <Bookmark className="w-5 h-5 text-[#D4AF37] fill-current" />
            <span>الكافيهات المحفوظة ({favCafes.length})</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#D4AF37]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {favCafes.length === 0 ? (
          <div className="py-12 text-center text-[#8A8D9F] text-xs">
            <Bookmark className="w-8 h-8 text-[#D4AF37] mx-auto mb-2 opacity-60" />
            <p>لسه ما حفظتش أي كافيه. اضغط على علامة الحفظ في أي كافيه للرجوع ليه بسهولة!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {favCafes.map((cafe) => (
              <div
                key={cafe.id}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-all"
              >
                <div
                  className="flex items-center gap-3 cursor-pointer flex-grow"
                  onClick={() => {
                    onClose();
                    onOpenDetails(cafe);
                  }}
                >
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="text-sm font-bold text-white hover:text-[#D4AF37] transition-colors">
                      {cafe.name}
                    </div>
                    <div className="text-[11px] text-[#8A8D9F]">{cafe.districtName}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onRemoveFav(cafe.id)}
                    className="p-2 text-[#8A8D9F] hover:text-rose-400 transition-colors"
                    title="حذف من المفضلة"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDetails(cafe);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F7E7A9] text-xs font-bold hover:bg-[#D4AF37] hover:text-[#07080B] transition-all"
                  >
                    عرض
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
