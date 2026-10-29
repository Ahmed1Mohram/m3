/**
 * Utility functions for sharing outing plans on WhatsApp,
 * copying GPS directions, and calculating live cafe open/closed status in Cairo.
 */

/**
 * Generates and opens a pre-formatted Arabic WhatsApp message for friends / groups.
 */
export function shareOutingOnWhatsApp({ cafe, budget, groupSize = 1, basket }) {
  if (!cafe) return;

  const itemsText =
    basket?.items?.length > 0
      ? basket.items.map((i) => `${i.name} (${i.price} ج)`).join(' + ')
      : 'مشروب سبيشالتي وحلا حسب اختيارك';

  const personText =
    groupSize === 1
      ? 'خروجة فردية'
      : groupSize === 2
      ? 'شخصين (كابلز)'
      : `شلة (${groupSize} أفراد)`;

  const totalSpent = basket?.total || budget;
  const perPersonPrice = groupSize > 1 ? Math.round(totalSpent / groupSize) : totalSpent;

  const amenitiesList = [];
  if (cafe.amenities?.wifi) amenitiesList.push('واي فاي سريع');
  if (cafe.amenities?.sockets) amenitiesList.push('أفياش لابتوب');
  if (cafe.amenities?.parking) amenitiesList.push('ركنة وفاليه متاح');
  if (cafe.amenities?.outdoor) amenitiesList.push('جلسات خارجية وتراس');

  const mapsLink =
    cafe.socialLinks?.googleMaps ||
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${cafe.name} ${cafe.address}`
    )}`;

  const message = `☕ *خطة خروجتنا على كافيه لينس (CaféLens)* ☕

🏛️ *الكافيه:* ${cafe.name} (${cafe.nameAr})
📍 *المنطقة:* ${cafe.districtName}
📌 *العنوان:* ${cafe.address}
👥 *حجم الخروجة:* ${personText}
💰 *الميزانية المقترحة:* ${totalSpent} ج.م ${
    groupSize > 1 ? `(${perPersonPrice} ج للفرد)` : ''
  }
🍰 *الطلب المقترح بالميزانية:*
${itemsText}

✨ *المميزات المتوفرة:* ${amenitiesList.join(' • ') || 'أجواء راقية وهادئة'}
⏰ *مواعيد العمل:* ${cafe.amenities?.hours || 'يومياً'}

🗺️ *مسار الملاحة المباشر بالـ GPS (Google Maps):*
${mapsLink}

_تم إعداد الخطة عبر كافيه لينس — دليلك لكافيهات التجمع وزايد_`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/**
 * Shares side-by-side comparison between 2 cafes on WhatsApp.
 */
export function shareComparisonOnWhatsApp({ cafeA, cafeB, budget }) {
  if (!cafeA || !cafeB) return;

  const message = `⚖️ *مقارنة كافيهين للخروجة — كافيه لينس* ⚖️

1️⃣ *${cafeA.name}* (${cafeA.nameAr})
📍 ${cafeA.districtName}
⭐ التقييم: ${cafeA.rating} (${cafeA.reviewsCount})
💰 الأسعار: ${cafeA.priceRange}
🗺️ اللوكيشن: ${cafeA.socialLinks?.googleMaps}

-------------------------
ضد (VS)
-------------------------

2️⃣ *${cafeB.name}* (${cafeB.nameAr})
📍 ${cafeB.districtName}
⭐ التقييم: ${cafeB.rating} (${cafeB.reviewsCount})
💰 الأسعار: ${cafeB.priceRange}
🗺️ اللوكيشن: ${cafeB.socialLinks?.googleMaps}

🤔 *إيه رأيكم نروح أنهي واحد فيهم النهارده؟*
_كافيه لينس — قارن أسعار ومميزات كافيهات التجمع وزايد_`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/**
 * Copies the exact cafe address & GPS Google Maps route link to clipboard.
 */
export async function copyCafeLocation(cafe) {
  if (!cafe) return false;
  const mapsLink =
    cafe.socialLinks?.googleMaps ||
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${cafe.name} ${cafe.address}`
    )}`;

  const text = `${cafe.name} (${cafe.nameAr})\n📍 العنوان: ${cafe.address}\n🗺️ مسار خرائط جوجل: ${mapsLink}`;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.warn('Clipboard write error:', err);
    return false;
  }
}

/**
 * Live Open/Closed status in Cairo local time (UTC+2)
 */
export function getCafeOpenStatus(hoursStr) {
  if (!hoursStr) {
    return { isOpen: true, label: 'مفتوح الآن', badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
  }

  if (hoursStr.includes('24') || hoursStr.includes('٢٤')) {
    return { isOpen: true, label: 'مفتوح 24 ساعة', badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
  }

  // Cairo time (UTC+2)
  const now = new Date();
  const utcHours = now.getUTCHours();
  const cairoHour = (utcHours + 2) % 24;

  // Cairo night hours: 2:00 AM to 7:30 AM is typically closed for daytime cafes
  const isNightClosed = cairoHour >= 2 && cairoHour < 8;

  if (isNightClosed) {
    return {
      isOpen: false,
      label: 'مغلق حالياً • يفتح 8 ص',
      badgeClass: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    };
  }

  return {
    isOpen: true,
    label: 'مفتوح الآن',
    badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
  };
}
