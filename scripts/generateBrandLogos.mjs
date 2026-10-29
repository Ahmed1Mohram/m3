import fs from 'fs';
import path from 'path';

const LOGOS_DIR = 'public/logos';
if (!fs.existsSync(LOGOS_DIR)) {
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

// Brand SVG Definitions for Authentic Cairo Cafes
const BRAND_LOGOS = {
  'brown-nose': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="bnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D1A10"/>
      <stop offset="100%" stop-color="#140C07"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="url(#bnGrad)"/>
  <circle cx="50" cy="50" r="42" fill="none" stroke="#F3C06B" stroke-width="1.5" stroke-dasharray="2 3"/>
  <!-- Dog Snout / Coffee Bean Silhouette -->
  <path d="M50 24 C40 24 33 32 33 42 C33 54 44 65 50 72 C56 65 67 54 67 42 C67 32 60 24 50 24 Z" fill="#F3C06B"/>
  <ellipse cx="50" cy="42" rx="7" ry="5.5" fill="#140C07"/>
  <path d="M50 47.5 L50 56 M44 54 C47 57 53 57 56 54" stroke="#140C07" stroke-width="2" stroke-linecap="round" fill="none"/>
  <text x="50" y="86" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="7.5" fill="#FFFFFF" letter-spacing="1">BROWN NOSE</text>
</svg>`,

  'sip': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#0A0A0A"/>
  <circle cx="50" cy="50" r="40" fill="none" stroke="#FFFFFF" stroke-width="2"/>
  <text x="50" y="58" text-anchor="middle" font-family="'Outfit', 'Inter', sans-serif" font-weight="900" font-size="24" fill="#FFFFFF" letter-spacing="4">SIP</text>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="5.5" fill="#F3C06B" letter-spacing="2">SPECIALTY</text>
</svg>`,

  '30north': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="tnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1510"/>
      <stop offset="100%" stop-color="#0B0907"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="url(#tnGrad)"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <circle cx="50" cy="50" r="37" fill="none" stroke="#D4AF37" stroke-width="0.75" stroke-dasharray="3 2"/>
  <text x="50" y="48" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-weight="900" font-size="23" fill="#D4AF37">30°N</text>
  <text x="50" y="66" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="7" fill="#FFFFFF" letter-spacing="3">COFFEE</text>
  <text x="50" y="76" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="500" font-size="5" fill="#888888" letter-spacing="1">ROASTERS</text>
</svg>`,

  'holm': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#1C2024"/>
  <rect x="25" y="25" width="50" height="50" rx="8" fill="none" stroke="#E2E4E8" stroke-width="2"/>
  <path d="M38 34 L38 66 M62 34 L62 66 M38 50 L62 50" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
  <text x="50" y="86" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="800" font-size="8" fill="#FFFFFF" letter-spacing="3">HOLM</text>
</svg>`,

  'cult': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#0C0D0E"/>
  <rect x="8" y="8" width="84" height="84" rx="18" fill="none" stroke="#D4FF00" stroke-width="2.5"/>
  <text x="50" y="58" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-size="28" fill="#D4FF00" letter-spacing="2">CULT</text>
  <rect x="30" y="68" width="40" height="4" fill="#FFFFFF"/>
</svg>`,

  'espresso-lab': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#141414"/>
  <!-- Red Lab Hexagon -->
  <polygon points="50,16 80,33 80,67 50,84 20,67 20,33" fill="#E50914"/>
  <text x="50" y="57" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="26" fill="#FFFFFF">E</text>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="800" font-size="6" fill="#FFFFFF" letter-spacing="1.5">LAB</text>
</svg>`,

  'tbs': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#C62828"/>
  <ellipse cx="50" cy="50" rx="42" ry="34" fill="#1C1C1C"/>
  <text x="50" y="56" text-anchor="middle" font-family="'Arial Black', sans-serif" font-weight="900" font-size="23" fill="#FFFFFF" letter-spacing="1">TBS</text>
  <text x="50" y="70" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="5.5" fill="#F3C06B" letter-spacing="1">THE BAKERY SHOP</text>
</svg>`,

  'paul': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#0A0A0A"/>
  <rect x="6" y="6" width="88" height="88" rx="20" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
  <text x="50" y="56" text-anchor="middle" font-family="'Times New Roman', Times, serif" font-weight="bold" font-size="28" fill="#FFFFFF" letter-spacing="2">PAUL</text>
  <text x="50" y="72" text-anchor="middle" font-family="'Times New Roman', Times, serif" font-style="italic" font-size="7.5" fill="#CCCCCC">depuis 1889</text>
</svg>`,

  'qahwa': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#0D2818"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#D4AF37" stroke-width="2"/>
  <!-- Arabic Calligraphy Stylized for Qahwa -->
  <text x="50" y="52" text-anchor="middle" font-family="'Amiri', 'Traditional Arabic', serif" font-weight="bold" font-size="26" fill="#D4AF37">القهوة</text>
  <text x="50" y="72" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="800" font-size="8" fill="#FFFFFF" letter-spacing="3">QAHWA</text>
</svg>`,

  'beanos': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#B71C1C"/>
  <circle cx="50" cy="50" r="40" fill="#FFFFFF"/>
  <circle cx="50" cy="50" r="37" fill="#B71C1C"/>
  <ellipse cx="50" cy="48" rx="22" ry="26" fill="#4E342E"/>
  <path d="M42 36 Q50 48 58 60" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="50" y="85" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="8.5" fill="#FFFFFF" letter-spacing="1">BEANO'S</text>
</svg>`,

  'cilantro': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#1B5E20"/>
  <ellipse cx="50" cy="50" rx="42" ry="34" fill="#2E7D32"/>
  <!-- Cilantro Leaf Curve -->
  <path d="M35 55 C35 35 65 35 65 55 C65 65 35 65 35 55 Z" fill="#A5D6A7"/>
  <circle cx="50" cy="46" r="4" fill="#FFFFFF"/>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="9" fill="#FFFFFF" letter-spacing="1">CILANTRO</text>
</svg>`,

  'costa': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#731422"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="50" cy="50" r="38" fill="none" stroke="#FFFFFF" stroke-width="1"/>
  <text x="50" y="44" text-anchor="middle" font-family="'Arial Black', sans-serif" font-weight="900" font-size="16" fill="#FFFFFF" letter-spacing="1">COSTA</text>
  <!-- Three Coffee Beans -->
  <ellipse cx="40" cy="56" rx="5" ry="7" fill="#F3C06B"/>
  <ellipse cx="50" cy="54" rx="5" ry="7" fill="#F3C06B"/>
  <ellipse cx="60" cy="56" rx="5" ry="7" fill="#F3C06B"/>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="7.5" fill="#FFFFFF" letter-spacing="2">COFFEE</text>
</svg>`,

  'starbucks': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#006241"/>
  <circle cx="50" cy="50" r="42" fill="#006241" stroke="#FFFFFF" stroke-width="2.5"/>
  <!-- Simplified Siren Crown & Face -->
  <circle cx="50" cy="50" r="28" fill="#006241"/>
  <polygon points="50,28 53,35 60,35 55,39 57,46 50,42 43,46 45,39 40,35 47,35" fill="#FFFFFF"/>
  <circle cx="50" cy="52" rx="7" ry="8" fill="#FFFFFF"/>
  <circle cx="50" cy="53" r="6" fill="#006241"/>
  <!-- Waves -->
  <path d="M30 65 Q50 80 70 65" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,

  'starbucks-reserve': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#0A0A0A"/>
  <!-- Copper Star and R -->
  <polygon points="50,22 53,30 61,30 55,34 57,42 50,37 43,42 45,34 39,30 47,30" fill="#C5A059"/>
  <text x="50" y="68" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-weight="bold" font-size="30" fill="#C5A059">R</text>
  <text x="50" y="84" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="5.5" fill="#FFFFFF" letter-spacing="3">RESERVE</text>
</svg>`,

  'cinnabon': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#0097A7"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#FFFFFF" stroke-width="2"/>
  <!-- Cinnamon Roll Swirl -->
  <path d="M50 35 C60 35 65 42 65 50 C65 60 55 65 50 65 C42 65 37 58 37 50 C37 44 42 40 47 40 C52 40 55 45 55 48 C55 52 50 54 48 53" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
  <text x="50" y="80" text-anchor="middle" font-family="'Brush Script MT', 'Segoe Script', cursive" font-size="14" fill="#FFFFFF">Cinnabon</text>
</svg>`,

  'dipndip': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#D32F2F"/>
  <circle cx="50" cy="50" r="40" fill="#2E1C14"/>
  <text x="50" y="52" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="14" fill="#FFFFFF">dip<tspan fill="#E53935">n</tspan>dip</text>
  <!-- Chocolate Smile Drip -->
  <path d="M35 60 Q50 74 65 60" stroke="#D32F2F" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="50" cy="69" r="3" fill="#D32F2F"/>
</svg>`,

  'dunkin': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#FFFFFF"/>
  <rect x="2" y="2" width="96" height="96" rx="22" fill="none" stroke="#FF671F" stroke-width="3"/>
  <text x="50" y="52" text-anchor="middle" font-family="'Arial Black', sans-serif" font-weight="900" font-size="28" fill="#FF671F">D<tspan fill="#DA1884">D</tspan></text>
  <text x="50" y="74" text-anchor="middle" font-family="'Arial Black', sans-serif" font-weight="900" font-size="9" fill="#FF671F">DUNKIN<tspan fill="#DA1884">'</tspan></text>
</svg>`,

  'krispy-kreme': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#006A4E"/>
  <!-- White Badge -->
  <ellipse cx="50" cy="50" rx="42" ry="32" fill="#FFFFFF"/>
  <text x="50" y="47" text-anchor="middle" font-family="'Brush Script MT', 'Segoe Script', cursive" font-weight="bold" font-size="14" fill="#D32F2F">Krispy Kreme</text>
  <text x="50" y="64" text-anchor="middle" font-family="'Arial Black', sans-serif" font-weight="900" font-size="7.5" fill="#006A4E" letter-spacing="1">DOUGHNUTS</text>
</svg>`,

  'caribou': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#004B87"/>
  <circle cx="50" cy="50" r="40" fill="#003561" stroke="#FFFFFF" stroke-width="1.5"/>
  <!-- Caribou Reindeer Horns Silhouette -->
  <path d="M42 34 Q50 26 58 34 M38 28 L44 34 M62 28 L56 34" stroke="#87CEEB" stroke-width="3" stroke-linecap="round" fill="none"/>
  <text x="50" y="58" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="11" fill="#FFFFFF" letter-spacing="1">CARIBOU</text>
  <text x="50" y="72" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="7" fill="#87CEEB" letter-spacing="2">COFFEE</text>
</svg>`,

  'second-cup': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#B71C1C"/>
  <circle cx="50" cy="50" r="40" fill="#FFFFFF"/>
  <!-- Canadian Maple Leaf + Coffee Cup -->
  <polygon points="50,26 53,34 60,32 56,38 63,42 56,45 57,52 50,47 43,52 44,45 37,42 44,38 40,32 47,34" fill="#B71C1C"/>
  <text x="50" y="68" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="8.5" fill="#1C1C1C">SECOND CUP</text>
  <text x="50" y="78" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="5.5" fill="#B71C1C" letter-spacing="1.5">CAFÉ</text>
</svg>`,

  'ovio': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#2E382F"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <!-- Olive Branch -->
  <ellipse cx="43" cy="36" rx="4" ry="7" transform="rotate(-30 43 36)" fill="#D4AF37"/>
  <ellipse cx="57" cy="36" rx="4" ry="7" transform="rotate(30 57 36)" fill="#D4AF37"/>
  <text x="50" y="60" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-weight="bold" font-size="20" fill="#FFFFFF" letter-spacing="3">OVIO</text>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="6" fill="#D4AF37" letter-spacing="2">ARTISAN</text>
</svg>`,

  'seven-fortunes': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#0C1B2E"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#D4AF37" stroke-width="2"/>
  <text x="50" y="58" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" fill="#D4AF37">7</text>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="800" font-size="6" fill="#FFFFFF" letter-spacing="2">FORTUNES</text>
  <text x="50" y="82" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="4.5" fill="#D4AF37" letter-spacing="1.5">ROASTERS</text>
</svg>`,

  'lyfe': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#1E3329"/>
  <!-- Minimalist Leaf -->
  <path d="M50 25 C65 25 70 45 50 65 C30 45 35 25 50 25 Z" fill="#88B89E"/>
  <path d="M50 25 L50 65" stroke="#1E3329" stroke-width="2"/>
  <text x="50" y="82" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="12" fill="#FFFFFF" letter-spacing="4">LYFE</text>
</svg>`,

  'sachi': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#080A0E"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#D4AF37" stroke-width="2"/>
  <circle cx="50" cy="50" r="37" fill="none" stroke="#D4AF37" stroke-width="0.8" stroke-dasharray="2 3"/>
  <text x="50" y="56" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-weight="bold" font-size="28" fill="#D4AF37">S</text>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="#FFFFFF" letter-spacing="4">SACHI</text>
</svg>`,

  'kazoku': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#121214"/>
  <!-- Japanese Kamon Circle -->
  <circle cx="50" cy="46" r="24" fill="none" stroke="#E63946" stroke-width="3"/>
  <circle cx="50" cy="46" r="14" fill="#E63946"/>
  <text x="50" y="82" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="800" font-size="9" fill="#FFFFFF" letter-spacing="3">KAZOKU</text>
</svg>`,

  'haagen-dazs': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#6A1024"/>
  <ellipse cx="50" cy="50" rx="42" ry="32" fill="#FAF6EE" stroke="#D4AF37" stroke-width="2"/>
  <text x="50" y="49" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-weight="bold" font-size="11" fill="#6A1024">Häagen-Dazs</text>
  <rect x="25" y="55" width="50" height="2" fill="#D4AF37"/>
</svg>`,

  'pinkberry': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#FFFFFF"/>
  <rect x="2" y="2" width="96" height="96" rx="22" fill="none" stroke="#E91E63" stroke-width="2.5"/>
  <!-- Pinkberry Swirl -->
  <ellipse cx="48" cy="42" rx="14" ry="18" fill="#E91E63"/>
  <ellipse cx="60" cy="36" rx="6" ry="10" transform="rotate(30 60 36)" fill="#8BC34A"/>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="10" fill="#E91E63" letter-spacing="1">pinkberry</text>
</svg>`,

  'brioche-doree': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#C62828"/>
  <circle cx="50" cy="50" r="40" fill="#FFFFFF"/>
  <circle cx="50" cy="50" r="36" fill="#C62828"/>
  <text x="50" y="47" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-weight="bold" font-size="11" fill="#FDD835">Brioche</text>
  <text x="50" y="62" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-weight="bold" font-size="11" fill="#FFFFFF">Dorée</text>
</svg>`,

  'molten': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#2E1C14"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <!-- Molten Cake Outline -->
  <path d="M30 60 L38 38 L62 38 L70 60 Z" fill="#4E342E"/>
  <path d="M46 38 Q50 52 54 38" fill="#D4AF37"/>
  <text x="50" y="78" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="9" fill="#FFFFFF" letter-spacing="1.5">MOLTEN</text>
</svg>`,

  'house-of-cocoa': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#1F130E"/>
  <circle cx="50" cy="50" r="40" fill="none" stroke="#C5A059" stroke-width="2"/>
  <!-- Cocoa Pod Silhouette -->
  <ellipse cx="50" cy="44" rx="14" ry="20" fill="#C5A059"/>
  <text x="50" y="73" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-weight="bold" font-size="7" fill="#FFFFFF" letter-spacing="2">HOUSE OF</text>
  <text x="50" y="82" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-weight="bold" font-size="8" fill="#C5A059" letter-spacing="3">COCOA</text>
</svg>`,

  'nespresso': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#1A1816"/>
  <!-- Iconic Mirrored N -->
  <path d="M36 28 L48 28 L64 68 L52 68 Z M48 28 L64 28 L64 42 Z M36 54 L36 68 L52 68 Z" fill="#D4AF37"/>
  <text x="50" y="86" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="800" font-size="7.5" fill="#FFFFFF" letter-spacing="2">NESPRESSO</text>
</svg>`,

  'zooba': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#00B4D8"/>
  <circle cx="50" cy="50" r="40" fill="#FFB703"/>
  <circle cx="50" cy="50" r="35" fill="#E63946"/>
  <text x="50" y="58" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="18" fill="#FFFFFF" letter-spacing="1">ZOOBA</text>
</svg>`,

  'circle': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#07090D"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#F3C06B" stroke-width="2"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="#FFFFFF" stroke-width="3"/>
  <circle cx="50" cy="50" r="14" fill="#F3C06B"/>
  <text x="50" y="88" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="8" fill="#FFFFFF" letter-spacing="2">CIRCLE</text>
</svg>`,

  'onze': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#1C2541"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <text x="50" y="56" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-weight="bold" font-size="28" fill="#D4AF37">XI</text>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="800" font-size="8.5" fill="#FFFFFF" letter-spacing="3">ONZE</text>
</svg>`,

  'the-lane': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#1A1815"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#F3C06B" stroke-width="1.5"/>
  <text x="50" y="47" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-weight="bold" font-size="12" fill="#F3C06B">THE LANE</text>
  <text x="50" y="64" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="7" fill="#FFFFFF" letter-spacing="2">BAKERY &amp; CAFE</text>
</svg>`
};

// Generic Luxury Monogram Generator for any brand
function generateBrandSVG(name, brandColor = '#F3C06B', bgColor = '#0E121A') {
  const words = name.trim().split(/\s+/);
  let initials = words.length > 1 ? (words[0][0] + words[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
  const displayName = name.length > 14 ? name.slice(0, 12) + '..' : name;

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor}"/>
      <stop offset="100%" stop-color="#05070A"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="url(#bgGrad)"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="${brandColor}" stroke-width="1.5"/>
  <circle cx="50" cy="50" r="37" fill="none" stroke="${brandColor}" stroke-width="0.7" stroke-dasharray="2 3"/>
  <text x="50" y="55" text-anchor="middle" font-family="'Outfit', 'Inter', sans-serif" font-weight="900" font-size="26" fill="${brandColor}">${initials}</text>
  <text x="50" y="74" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="800" font-size="6.5" fill="#FFFFFF" letter-spacing="1.5">${displayName.toUpperCase()}</text>
</svg>`;
}

// Brand color palette mappings
const BRAND_COLORS = {
  'dar-ward': { color: '#FFD54F', bg: '#4A148C' },
  'cacao-sampaka': { color: '#D4AF37', bg: '#3E2723' },
  'white-owl': { color: '#FFFFFF', bg: '#1A202C' },
  'koffee-kulture': { color: '#FF7043', bg: '#263238' },
  'miette': { color: '#FBC02D', bg: '#3E2723' },
  'vanilla': { color: '#FFF9C4', bg: '#37474F' },
  'vasko': { color: '#FF5252', bg: '#263238' },
  'blank': { color: '#FFFFFF', bg: '#0A0A0A' },
  'overdose': { color: '#7C4DFF', bg: '#1A0826' },
  'chapter': { color: '#FFA726', bg: '#212121' },
  'daily-dose': { color: '#26A69A', bg: '#004D40' },
  'pottery': { color: '#FF8A65', bg: '#3E2723' },
  'crave': { color: '#FFFFFF', bg: '#C62828' },
  'cake-cafe': { color: '#F48FB1', bg: '#4A154B' },
  'cova': { color: '#D4AF37', bg: '#1A1A1A' },
  'batter-half': { color: '#FFAB91', bg: '#3E2723' },
  'ralphs': { color: '#FDD835', bg: '#1565C0' },
  'escobar': { color: '#D4AF37', bg: '#1A120B' },
  'gourmet': { color: '#81C784', bg: '#1B5E20' },
  'barten': { color: '#B39DDB', bg: '#311B92' },
  'aroma': { color: '#FFB74D', bg: '#E65100' },
  'granita': { color: '#80CBC4', bg: '#004D40' },
  'yokal': { color: '#FFD54F', bg: '#BF360C' },
  'carmine': { color: '#EF5350', bg: '#B71C1C' },
  'mo-bistro': { color: '#90CAF9', bg: '#0D47A1' },
  'eish-malh': { color: '#FFF59D', bg: '#F57F17' },
  'tamara': { color: '#A5D6A7', bg: '#1B5E20' },
  'gigi': { color: '#F48FB1', bg: '#880E4F' },
  'izakaya': { color: '#E57373', bg: '#212121' },
  'brown-sugar': { color: '#D7CCC8', bg: '#3E2723' },
  'left-bank': { color: '#80DEEA', bg: '#006064' },
  'bocca': { color: '#FFAB91', bg: '#BF360C' },
  'grom': { color: '#81D4FA', bg: '#01579B' },
  'v60-specialty': { color: '#F3C06B', bg: '#1B140E' },
  'espresso-bar': { color: '#FFE082', bg: '#212121' },
  'roastery': { color: '#FFB74D', bg: '#3E2723' },
  'nomad': { color: '#C5E1A5', bg: '#33691E' },
  'dose': { color: '#80CBC4', bg: '#004D40' },
  'spectra': { color: '#FF8A80', bg: '#B71C1C' },
  'mori': { color: '#E0E0E0', bg: '#212121' }
};

// Write all predefined logos
for (const [key, svgContent] of Object.entries(BRAND_LOGOS)) {
  fs.writeFileSync(path.join(LOGOS_DIR, `${key}.svg`), svgContent.trim(), 'utf8');
}
console.log(`Wrote ${Object.keys(BRAND_LOGOS).length} predefined brand SVG logos to ${LOGOS_DIR}`);

// Now create logos for all other unique cafes in the 120 dataset
import('./generateFull120Cafes.mjs').then(async (m1) => {
  const m2 = await import('./zayedList.mjs');
  const all = [...m1.TAGAMOA_LIST, ...m2.ZAYED_LIST];

  let generatedCount = 0;
  for (const cafe of all) {
    const brandKey = cafe.id.split('-')[0];
    const targetFile = path.join(LOGOS_DIR, `${cafe.id}.svg`);

    // If predefined specific logo exists, copy or link
    const matchingKey = Object.keys(BRAND_LOGOS).find(k => cafe.id.startsWith(k) || k.startsWith(brandKey));
    if (matchingKey) {
      fs.writeFileSync(targetFile, BRAND_LOGOS[matchingKey].trim(), 'utf8');
      generatedCount++;
      continue;
    }

    // Otherwise generate tailored SVG
    const palette = BRAND_COLORS[brandKey] || { color: '#F3C06B', bg: '#0E121A' };
    const svg = generateBrandSVG(cafe.name, palette.color, palette.bg);
    fs.writeFileSync(targetFile, svg.trim(), 'utf8');
    generatedCount++;
  }

  console.log(`Successfully generated total ${generatedCount} cafe SVG logos in ${LOGOS_DIR}`);
});
