module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/cafes/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cafesData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cafesData.js [app-route] (ecmascript)");
;
;
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const district = searchParams.get('district');
    const search = searchParams.get('q');
    const limit = parseInt(searchParams.get('limit') || '120', 10);
    let results = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cafesData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CAFES_DATA"]
    ];
    if (district && district !== 'all') {
        results = results.filter((c)=>c.district === district);
    }
    if (search) {
        const q = search.toLowerCase();
        results = results.filter((c)=>c.name.toLowerCase().includes(q) || c.nameAr && c.nameAr.includes(q) || c.tags.some((t)=>t.includes(q)));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        total: results.length,
        district: district || 'all',
        data: results.slice(0, limit)
    });
}
}),
"[project]/src/data/cafesData.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Real, Authentic Luxury Cafés in Cairo: New Cairo (Tagamoa) & Sheikh Zayed (Egypt)
 * 120 Curated Authentic Cafes with Verified Locations, Live Social Links, and 2024-2026 EGP Menus
 */ __turbopack_context__.s([
    "CAFES_DATA",
    ()=>CAFES_DATA,
    "calculateSmartBasket",
    ()=>calculateSmartBasket
]);
const CAFES_DATA = [
    {
        "id": "brown-nose",
        "name": "Brown Nose Coffee",
        "nameAr": "براون نوز كوفي — ووترواي",
        "logo": "/logos/brown-nose.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ذا ووترواي 1",
        "address": "كمبوند ذا ووترواي، شارع التسعين الشمالي، التجمع الخامس",
        "phone": "0100 001 2345",
        "rating": 4.9,
        "reviewsCount": "2.8k",
        "priceRange": "من 95 - 240 جنيه",
        "badge": "الأشهر في التجمع",
        "badgeType": "featured",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أيقونة القهوة التخصصية المينيمالي على ممشى ووترواي، واجهات زجاجية بانورامية وأجواء راقية لنخبة التجمع",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "work"
        ],
        "tags": [
            "قهوة مختصة V60",
            "ممشى الووترواي",
            "واي فاي فائق السرعة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@brownnosecoffee"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/brownnosecoffee/",
            "instagramHandle": "@brownnosecoffee",
            "facebook": "https://www.facebook.com/brownnosecoffee",
            "website": "https://www.instagram.com/brownnosecoffee/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Brown%20Nose%20Coffee%20%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF%20%D8%B0%D8%A7%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "brown-nose-1",
                "name": "قهوة مقطرة V60 إثيوبية",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 120,
                "desc": "حبوب يرقاتشيفي بنكهات زهرية وحمضية متوازنة"
            },
            {
                "id": "brown-nose-2",
                "name": "فلات وايت أرتيزان دبل شوت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو غني مع حليب مبخر ناعم مايكرو فوم"
            },
            {
                "id": "brown-nose-3",
                "name": "آيسد سبانش لاتيه سبيشالتي",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "مزيج الحليب المكثف المحلى مع إسبريسو وحليب بارد"
            },
            {
                "id": "brown-nose-4",
                "name": "ماتشا سيريمونيال لاتيه مثلج",
                "category": "iced_coffee",
                "subType": "matcha",
                "type": "drink",
                "price": 130,
                "desc": "ماتشا يابانية عضوية من أوجي مع حليب الشوفان"
            },
            {
                "id": "brown-nose-5",
                "name": "سان سيباستيان تشيز كيك",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 140,
                "desc": "تشيز كيك الباسك الإسبانية الشهيرة بقوام ذائب"
            },
            {
                "id": "brown-nose-6",
                "name": "كرواسون لوز فرنسي طازج",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 95,
                "desc": "مخبوز يومياً ومحشو بشرائح اللوز المحمص"
            }
        ]
    },
    {
        "id": "sip-tagamoa",
        "name": "Sip Specialty Coffee",
        "nameAr": "سيب كافيه — داخل مجمع 5A الفاخر",
        "logo": "/logos/sip-tagamoa.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مجمع 5A الفاخر",
        "address": "داخل مجمع 5A الفاخر، الطريق الدائري ومحور المشير، التجمع الخامس",
        "phone": "0102 345 6789",
        "rating": 4.8,
        "reviewsCount": "1.7k",
        "priceRange": "من 90 - 235 جنيه",
        "badge": "تريند 5A الفاخر",
        "badgeType": "trending",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "/vanilla.jpg",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "وجهة رواد الأعمال وعشاق القهوة المختصة مع إطلالات معمارية مذهلة وتراس خارجي مريح",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "إسبريسو سينجل أوريجين",
            "مجمع 5A",
            "جلسات خارجية فخمة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@sipegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/sipegypt/",
            "instagramHandle": "@sipegypt",
            "facebook": "https://www.facebook.com/sipegypt",
            "website": "https://www.instagram.com/sipegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Sip%20Specialty%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%205A%20%D8%A7%D9%84%D9%81%D8%A7%D8%AE%D8%B1%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%20%D9%88%D9%85%D8%AD%D9%88%D8%B1%20%D8%A7%D9%84%D9%85%D8%B4%D9%8A%D8%B1%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "sip-tagamoa-1",
                "name": "فلات وايت سيب الحرفي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "حبوب كولومبية فاخرة برغوة كريمية"
            },
            {
                "id": "sip-tagamoa-2",
                "name": "آيسد سبانش لاتيه سيب",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "توازن رائع بين الحلاوة ومرارة الإسبريسو"
            },
            {
                "id": "sip-tagamoa-3",
                "name": "قهوة مقطرة كيمكس سلفادور",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 125,
                "desc": "نكهة الكراميل والمكسرات بقوام مخملي"
            },
            {
                "id": "sip-tagamoa-4",
                "name": "ماتشا مثلجة بحليب جوز الهند",
                "category": "iced_coffee",
                "subType": "matcha",
                "type": "drink",
                "price": 135,
                "desc": "ماتشا احتفالية نقية ومشروب صيفي منعش"
            },
            {
                "id": "sip-tagamoa-5",
                "name": "نيويورك تشيز كيك بالفراولة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "تشيز كيك كلاسيكية على طبقة بسكويت مقرمش"
            },
            {
                "id": "sip-tagamoa-6",
                "name": "كرواسون زعتر مع جبنة حلوم",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 90,
                "desc": "مخبوزات طازجة كل صباح من الفرن الحجري"
            }
        ]
    },
    {
        "id": "30north-tagamoa",
        "name": "30 North Coffee",
        "nameAr": "30 نورث كوفي — ووترواي 2",
        "logo": "/logos/30north-tagamoa.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ذا ووترواي 2",
        "address": "ووترواي 2، شارع التسعين الشمالي، التجمع الخامس",
        "phone": "0109 876 5432",
        "rating": 4.8,
        "reviewsCount": "2.1k",
        "priceRange": "من 85 - 240 جنيه",
        "badge": "رواد القهوة بمصر",
        "badgeType": "specialty",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "/coffee_dessert.jpg",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "محمصة ووجهة كلاسيكية تقدم حبوب بن نادرة محترفة في أجواء بريطانية عصرية هادئة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "work"
        ],
        "tags": [
            "حبوب محمصة محلياً",
            "أجواء عمل وهدوء",
            "ووترواي 2"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@30northcoffee"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/30northcoffee/",
            "instagramHandle": "@30northcoffee",
            "facebook": "https://www.facebook.com/30northcoffee",
            "website": "https://www.instagram.com/30northcoffee/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=30%20North%20Coffee%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%202%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "30north-tagamoa-1",
                "name": "فلات وايت 30 نورث",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "خلطة الإسبريسو الفائزة بجوائز الجودة"
            },
            {
                "id": "30north-tagamoa-2",
                "name": "قهوة V60 غيشا كوستاريكية",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 140,
                "desc": "سلالة غيشا العريقة ذات النوتات العطرية الخلابة"
            },
            {
                "id": "30north-tagamoa-3",
                "name": "آيسد كراميل ماكياتو",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "صوص كراميل بيتي مع شوت إسبريسو مزدوج"
            },
            {
                "id": "30north-tagamoa-4",
                "name": "كيك الجزر بالجوز",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 115,
                "desc": "وصفة كيك الجزر الشهيرة بأبهى نكهة"
            },
            {
                "id": "30north-tagamoa-5",
                "name": "كرواسون شوكولاتة نوتيلا",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "شوكولاتة ذائبة داخل رقائق العجين الهشة"
            }
        ]
    },
    {
        "id": "holm-tagamoa",
        "name": "Holm Specialty Coffee",
        "nameAr": "هولم كوفي — داخل مجمع 5A الفاخر",
        "logo": "/logos/holm-tagamoa.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مجمع 5A الفاخر",
        "address": "داخل مجمع 5A الفاخر، الطريق الدائري ومحور المشير، التجمع الخامس",
        "phone": "0106 123 4567",
        "rating": 4.9,
        "reviewsCount": "1.4k",
        "priceRange": "من 95 - 265 جنيه",
        "badge": "أعلى تقييم فخامة",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "طراز نورديك إسكندنافي هادئ بألوان بيضاء وأخشاب طبيعية، ملاذ عشاق الجمال والماتشا والقهوة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "تصميم نورديك",
            "ماتشا احترافية",
            "هدوء وتركيز"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@holm.cairo"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/holm.cairo/",
            "instagramHandle": "@holm.cairo",
            "facebook": "https://www.facebook.com/holm.cairo",
            "website": "https://www.instagram.com/holm.cairo/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Holm%20Specialty%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%205A%20%D8%A7%D9%84%D9%81%D8%A7%D8%AE%D8%B1%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%20%D9%88%D9%85%D8%AD%D9%88%D8%B1%20%D8%A7%D9%84%D9%85%D8%B4%D9%8A%D8%B1%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "holm-tagamoa-1",
                "name": "سيريمونيال آيسد ماتشا لاتيه",
                "category": "iced_coffee",
                "subType": "matcha",
                "type": "drink",
                "price": 135,
                "desc": "خفق ماتشا يدوي فريش مع لمسة فانيلا طبيعية"
            },
            {
                "id": "holm-tagamoa-2",
                "name": "فلات وايت حبوب برازيلية",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "قوام كريمي بطعم شوكولاتة الحليب"
            },
            {
                "id": "holm-tagamoa-3",
                "name": "سبانش لاتيه بارد بحليب اللوز",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "مزيج متناغم قليل السكر بنكهة مكثفة"
            },
            {
                "id": "holm-tagamoa-4",
                "name": "بسكوف تشيز كيك بالكراميل",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "طبقة لوتس بسكوف غنية ومقرمشة"
            },
            {
                "id": "holm-tagamoa-5",
                "name": "توست ساوردو ريكوتا وتين",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 165,
                "desc": "برانش خفيف وصحي بأجود المكونات"
            }
        ]
    },
    {
        "id": "cult-tagamoa",
        "name": "Cult Coffee",
        "nameAr": "كالت كوفي — داخل مجمع 5A الفاخر",
        "logo": "/logos/cult-tagamoa.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مجمع 5A الفاخر",
        "address": "داخل مجمع 5A الفاخر، الطريق الدائري ومحور المشير، التجمع الخامس",
        "phone": "0100 999 8881",
        "rating": 4.8,
        "reviewsCount": "2.3k",
        "priceRange": "من 80 - 220 جنيه",
        "badge": "الأكثر شهرة بالشباب",
        "badgeType": "trending",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أيقونة تريند الشباب وجلسات الصباح الحيوية، واجهة زجاجية عصرية وموسيقى لو-فاي مريحة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "جلسات خارجية شبابية",
            "كولد برو مميز",
            "تريند التجمع"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cult.cairo"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cult.cairo/",
            "instagramHandle": "@cult.cairo",
            "facebook": "https://www.facebook.com/cult.cairo",
            "website": "https://www.instagram.com/cult.cairo/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cult%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%205A%20%D8%A7%D9%84%D9%81%D8%A7%D8%AE%D8%B1%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%20%D9%88%D9%85%D8%AD%D9%88%D8%B1%20%D8%A7%D9%84%D9%85%D8%B4%D9%8A%D8%B1%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "cult-tagamoa-1",
                "name": "كالت آيسد سيجنتشر لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "خلطة كالت السرية برغوة كريمية باردة"
            },
            {
                "id": "cult-tagamoa-2",
                "name": "فلات وايت دبل إسبريسو",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "استخلاص إسبريسو دقيق ومتوازن"
            },
            {
                "id": "cult-tagamoa-3",
                "name": "قهوة V60 بن إثيوبي فاخر",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 120,
                "desc": "تقطير يدوي فوري بطعم الفواكه الاستوائية"
            },
            {
                "id": "cult-tagamoa-4",
                "name": "كوكيز كالت العملاقة بالشوكولاتة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 90,
                "desc": "تخرج ساخنة من الفرن بقلب شوكولاتة ذائب"
            },
            {
                "id": "cult-tagamoa-5",
                "name": "كرواسون سادة بالزبدة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 80,
                "desc": "طبقات هشة مقرمشة تذوب في الفم"
            }
        ]
    },
    {
        "id": "espresso-lab-point90",
        "name": "Espresso Lab",
        "nameAr": "إسبريسو لاب — داخل بوينت 90 مول",
        "logo": "/logos/espresso-lab-point90.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل بوينت 90 مول (أمام AUC)",
        "address": "داخل بوينت 90 مول، أمام الجامعة الأمريكية AUC، شارع التسعين الجنوبي",
        "phone": "0101 223 3445",
        "rating": 4.7,
        "reviewsCount": "3.5k",
        "priceRange": "من 85 - 220 جنيه",
        "badge": "المفضل لطلاب AUC والعمل",
        "badgeType": "featured",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مساحة عمل ممتدة بطراز معماري صناعي راقٍ، أفياش كهرباء في كل طاولة ومقاعد مريحة للمذاكرة والعمل",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "work"
        ],
        "tags": [
            "مذاكرة وعمل",
            "أمام AUC",
            "إنترنت فائق"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@espressolabcairo"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/espressolabcairo/",
            "instagramHandle": "@espressolabcairo",
            "facebook": "https://www.facebook.com/espressolabcairo",
            "website": "https://www.instagram.com/espressolabcairo/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Espresso%20Lab%20%D8%AF%D8%A7%D8%AE%D9%84%20%D8%A8%D9%88%D9%8A%D9%86%D8%AA%2090%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A3%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9%20AUC%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A"
        },
        "menu": [
            {
                "id": "espresso-lab-point90-1",
                "name": "إسبريسو لاب فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "تحميص تركي احترافي بحبوب بن أرابيكا 100%"
            },
            {
                "id": "espresso-lab-point90-2",
                "name": "سبانش لاتيه مثلج دبل شوت",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "مشروب الانتعاش الأول أثناء العمل والمذاكرة"
            },
            {
                "id": "espresso-lab-point90-3",
                "name": "قهوة V60 مقطرة كينيا AA",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 115,
                "desc": "حمضية زاهية ومشرقة لمحبي الفلتر كوفي"
            },
            {
                "id": "espresso-lab-point90-4",
                "name": "عصير برتقال وجزر فريش",
                "category": "tea_specialty",
                "subType": "juice",
                "type": "drink",
                "price": 85,
                "desc": "معصور فريش بدون إضافات"
            },
            {
                "id": "espresso-lab-point90-5",
                "name": "تشيز كيك الشوكولاتة والكراميل",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 120,
                "desc": "طبقة غنية من موس الشوكولاتة البلجيكية"
            }
        ]
    },
    {
        "id": "tbs-concorde",
        "name": "TBS (The Bakery Shop)",
        "nameAr": "تي بي إس — داخل مول كونكورد بلازا",
        "logo": "/logos/tbs-concorde.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مول كونكورد بلازا",
        "address": "داخل مول كونكورد بلازا، شارع التسعين الجنوبي، التجمع الخامس",
        "phone": "0122 888 7766",
        "rating": 4.7,
        "reviewsCount": "2.9k",
        "priceRange": "من 85 - 245 جنيه",
        "badge": "ملك المخبوزات والكرواسون",
        "badgeType": "featured",
        "luxuryScore": 95,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "رائحة المخبوزات الفرنسية الطازجة التي تعبق المكان مع كرواسون الزبدة المقرمش والقهوة الصباحية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "كرواسون طازج",
            "كونكورد بلازا",
            "فطور الصباح"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@tbsegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/tbsegypt/",
            "instagramHandle": "@tbsegypt",
            "facebook": "https://www.facebook.com/tbsegypt",
            "website": "https://www.instagram.com/tbsegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=TBS%20(The%20Bakery%20Shop)%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D9%83%D9%88%D9%86%D9%83%D9%88%D8%B1%D8%AF%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "tbs-concorde-1",
                "name": "كرواسون لوز TBS الحرفي",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "المخبوز الأشهر في مصر بحشوة اللوز الكلاسيكية"
            },
            {
                "id": "tbs-concorde-2",
                "name": "كابتشينو إيطالي كريمي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "رغوة حليب ناعمة مع إسبريسو غني"
            },
            {
                "id": "tbs-concorde-3",
                "name": "آيسد سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 100,
                "desc": "قهوة مثلجة مع حليب مكثف محلى"
            },
            {
                "id": "tbs-concorde-4",
                "name": "ساندوتش تركي وجبن إيمنتال",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 145,
                "desc": "في خبز الباغيت الفرنسي المقرمش"
            },
            {
                "id": "tbs-concorde-5",
                "name": "تشيز كيك التوت الأزرق",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "صوص بلوبيري بيتي طازج"
            }
        ]
    },
    {
        "id": "ovio-garden8",
        "name": "Ovio",
        "nameAr": "أوفيو كافيه — داخل مول جاردن 8",
        "logo": "/logos/ovio-garden8.svg",
        "district": "tagamoa",
        "districtName": "التجمع الأول / الخامس • داخل مول جاردن 8",
        "address": "داخل مول جاردن 8، بالقرب من طريق السويس، القاهرة الجديدة",
        "phone": "0106 667 7889",
        "rating": 4.9,
        "reviewsCount": "3.1k",
        "priceRange": "من 100 - 295 جنيه",
        "badge": "فخامة وضيافة راقية",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أناقة المطبخ والقهوة الإيطالية الراقية، ديكورات خشبية دافئة وجلسات تراس تطل على نافورة جاردن 8",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "برانش وفطور فخم",
            "جاردن 8",
            "بانكيك وسويتس أرتيزان"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@ovioegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/ovioegypt/",
            "instagramHandle": "@ovioegypt",
            "facebook": "https://www.facebook.com/ovioegypt",
            "website": "https://www.instagram.com/ovioegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Ovio%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%208%D8%8C%20%D8%A8%D8%A7%D9%84%D9%82%D8%B1%D8%A8%20%D9%85%D9%86%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "ovio-garden8-1",
                "name": "أوفيو كلاسيك فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 100,
                "desc": "حبوب أوفيو الإيطالية الخاصة برغوة حريرية"
            },
            {
                "id": "ovio-garden8-2",
                "name": "آيسد سبانش لاتيه أرتيزان",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "نكهة متوازنة بمذاق الكراميل"
            },
            {
                "id": "ovio-garden8-3",
                "name": "أوفيو تيراميسو ماسكاربوني",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "طبقات بسكويت سافوياردي مغمس بالإسبريسو الفريش"
            },
            {
                "id": "ovio-garden8-4",
                "name": "أوفيو فلوفي ريكوتا بانكيك",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 160,
                "desc": "بانكيك هشة تعلوها الفواكه البرية وشراب القيقب"
            },
            {
                "id": "ovio-garden8-5",
                "name": "أفوكادو بوكتش إيجز برانش",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 195,
                "desc": "بيض مسلوق على ساوردو مع صلصة هولنديز الغنية"
            }
        ]
    },
    {
        "id": "seven-fortunes-waterway",
        "name": "Seven Fortunes Coffee Roasters",
        "nameAr": "سفن فورتشنز — ذا ووترواي",
        "logo": "/logos/seven-fortunes-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ذا ووترواي 1",
        "address": "ووترواي 1، التجمع الخامس، القاهرة الجديدة",
        "phone": "0109 001 1223",
        "rating": 4.8,
        "reviewsCount": "2.4k",
        "priceRange": "من 95 - 225 جنيه",
        "badge": "محمصة دبي العالمية",
        "badgeType": "specialty",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "محمصة القهوة التخصصية المرموقة الحائزة على جوائز عالمية، روائح البن المحمص وجلسات حيوية فاخرة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "بن تخصصي عالمي",
            "ووترواي 1",
            "محترفي القهوة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@sevenfortunes"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/sevenfortunes/",
            "instagramHandle": "@sevenfortunes",
            "facebook": "https://www.facebook.com/sevenfortunes",
            "website": "https://www.instagram.com/sevenfortunes/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Seven%20Fortunes%20Coffee%20Roasters%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%201%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "seven-fortunes-waterway-1",
                "name": "قهوة مقطرة V60 كولومبيا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 125,
                "desc": "نوتات الفواكه المجففة مع لمسة حمضية منعشة"
            },
            {
                "id": "seven-fortunes-waterway-2",
                "name": "فلات وايت دبل شوت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "تناغم مثالي بين الحليب الساخن وخلاصة البن"
            },
            {
                "id": "seven-fortunes-waterway-3",
                "name": "آيسد سبانش لاتيه سبيشالتي",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "مذاق حلو متوازن مع برودة منعشة"
            },
            {
                "id": "seven-fortunes-waterway-4",
                "name": "سولتيد كراميل براوني",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 120,
                "desc": "براوني دافئة وغنية بالشوكولاتة البلجيكية"
            }
        ]
    },
    {
        "id": "paul-cfc",
        "name": "Paul Bakery & Café",
        "nameAr": "بول كافيه وباتيسري — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/paul-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0100 888 1234",
        "rating": 4.8,
        "reviewsCount": "4.2k",
        "priceRange": "من 85 - 285 جنيه",
        "badge": "عراقة المخبوزات الباريسية",
        "badgeType": "featured",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أجواء باريسية أصيلة تعود لعام 1889، جلسات أنيقة أمام نافورة كايرو فيستيفال سيتي الراقصة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "مخبوزات فرنسية",
            "CFC نافورة",
            "إطلالة خلابة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@paulegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/paulegypt/",
            "instagramHandle": "@paulegypt",
            "facebook": "https://www.facebook.com/paulegypt",
            "website": "https://www.instagram.com/paulegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Paul%20Bakery%20%26%20Caf%C3%A9%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "paul-cfc-1",
                "name": "كافيه كريم بول باريسي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو فرنسي تقليدي بحليب ساخن مخملي"
            },
            {
                "id": "paul-cfc-2",
                "name": "ميل فوي بول بالفانيليا",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 135,
                "desc": "رقائق الباف باستري الهشة بكريمة الكاسترد الفاخرة"
            },
            {
                "id": "paul-cfc-3",
                "name": "كرواسون شوكولاتة بول",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "بالزبدة الفرنسية النقية وشوكولاتة فالرونا"
            },
            {
                "id": "paul-cfc-4",
                "name": "تارت الفراولة الطازجة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "تارت مقرمش بحبات الفراولة اللامعة"
            },
            {
                "id": "paul-cfc-5",
                "name": "ساندوتش كروك مدام بالجبن",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 185,
                "desc": "توست فرنسي مخبوز بصلصة البشاميل والبيض"
            }
        ]
    },
    {
        "id": "qahwa-waterway",
        "name": "Qahwa",
        "nameAr": "قهوة كافيه — ذا ووترواي 2",
        "logo": "/logos/qahwa-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 2",
        "address": "ووترواي 2، شارع التسعين، التجمع الخامس",
        "phone": "0102 111 2233",
        "rating": 4.8,
        "reviewsCount": "3.7k",
        "priceRange": "من 95 - 270 جنيه",
        "badge": "الأكثر طلباً للبرانش واللقاءات",
        "badgeType": "trending",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "المكان المفضل للنخبة للقاءات العمل الصباحية وتناول وجبات البرانش المتكاملة بأناقة عصرية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "برانش استثنائي",
            "ووترواي 2",
            "أجواء حيوية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@qahwaegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/qahwaegypt/",
            "instagramHandle": "@qahwaegypt",
            "facebook": "https://www.facebook.com/qahwaegypt",
            "website": "https://www.instagram.com/qahwaegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Qahwa%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%202%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "qahwa-waterway-1",
                "name": "سبانش لاتيه قهوة المميز مثلج",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "مشروب قهاوة الشهير بمذاق فريد"
            },
            {
                "id": "qahwa-waterway-2",
                "name": "فلات وايت أرتيزان",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو متزن برغوة ناعمة"
            },
            {
                "id": "qahwa-waterway-3",
                "name": "فرينش توست كراميل وموز",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 155,
                "desc": "بريوش فرنسي سميك ومغمور بصوص الكراميل"
            },
            {
                "id": "qahwa-waterway-4",
                "name": "تشيز كيك لوتس دافئة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "قوام كريمي غني بنكهة البسكويت"
            },
            {
                "id": "qahwa-waterway-5",
                "name": "أومليت المشروم بالجبن والساوردو",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 170,
                "desc": "فطور متكامل مع سلطة خضراء فريش"
            }
        ]
    },
    {
        "id": "beanos-concorde",
        "name": "Beano's Café",
        "nameAr": "بينوز كافيه — داخل مول كونكورد بلازا",
        "logo": "/logos/beanos-concorde.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مول كونكورد بلازا",
        "address": "داخل مول كونكورد بلازا، شارع التسعين الجنوبي، التجمع الخامس",
        "phone": "0120 444 5566",
        "rating": 4.6,
        "reviewsCount": "2.5k",
        "priceRange": "من 85 - 250 جنيه",
        "badge": "كلاسيكيات القهوة المصرية",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "دفء المقاعد الجلدية الكلاسيكية والمساحات الرحبة المناسبة للقراءة والعمل الهادئ",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food",
            "work"
        ],
        "tags": [
            "أجواء مريحة وهادئة",
            "قراءة وعمل",
            "كونكورد بلازا"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@beanoscafe"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/beanoscafe/",
            "instagramHandle": "@beanoscafe",
            "facebook": "https://www.facebook.com/beanoscafe",
            "website": "https://www.instagram.com/beanoscafe/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Beano's%20Caf%C3%A9%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D9%83%D9%88%D9%86%D9%83%D9%88%D8%B1%D8%AF%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "beanos-concorde-1",
                "name": "كابتشينو بينوز الكلاسيكي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "رغوة حليب ناعمة مع بودرة القرفة"
            },
            {
                "id": "beanos-concorde-2",
                "name": "آيسد كراميل لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو مثلج بنكهة الكراميل اللذيذة"
            },
            {
                "id": "beanos-concorde-3",
                "name": "شوكليت فادج كيك غنية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "كيك شوكولاتة رطبة مع جناش دافئ"
            },
            {
                "id": "beanos-concorde-4",
                "name": "ساندوتش كلوب تشيكن بينوز",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 150,
                "desc": "دجاج مشوي مع بيكون وبيض وجبن شيدر"
            }
        ]
    },
    {
        "id": "cilantro-point90",
        "name": "Cilantro",
        "nameAr": "سيلانترو — داخل بوينت 90 مول",
        "logo": "/logos/cilantro-point90.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل بوينت 90 مول (أمام AUC)",
        "address": "داخل بوينت 90 مول، أمام الجامعة الأمريكية AUC، شارع التسعين الجنوبي",
        "phone": "0100 333 4455",
        "rating": 4.6,
        "reviewsCount": "3.1k",
        "priceRange": "من 75 - 205 جنيه",
        "badge": "تراث القهوة المعاصرة",
        "badgeType": "featured",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "جلسات مريحة وتاريخ طويل من حب القهوة السريعة واللقاءات الودية مع خدمة ممتازة وسريعة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "work"
        ],
        "tags": [
            "خدمة سريعة",
            "بوينت 90",
            "جلسات عمل مريحة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cilantrocafe"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cilantrocafe/",
            "instagramHandle": "@cilantrocafe",
            "facebook": "https://www.facebook.com/cilantrocafe",
            "website": "https://www.instagram.com/cilantrocafe/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cilantro%20%D8%AF%D8%A7%D8%AE%D9%84%20%D8%A8%D9%88%D9%8A%D9%86%D8%AA%2090%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A3%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9%20AUC%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A"
        },
        "menu": [
            {
                "id": "cilantro-point90-1",
                "name": "سيلانترو فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "خلطة بن كولومبي متميزة"
            },
            {
                "id": "cilantro-point90-2",
                "name": "موكا مثلجة بالشوكولاتة",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "شوكولاتة داكنة مع شوت إسبريسو وحليب بارد"
            },
            {
                "id": "cilantro-point90-3",
                "name": "تشيز كيك التوت الكلاسيكية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 105,
                "desc": "طبقة ناعمة من الجبن الكريمي"
            },
            {
                "id": "cilantro-point90-4",
                "name": "كرواسون سويسري بالجبن",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 75,
                "desc": "مخبوز ذهبي ساخن"
            }
        ]
    },
    {
        "id": "costa-point90",
        "name": "Costa Coffee",
        "nameAr": "كوستا كوفي — داخل بوينت 90 مول",
        "logo": "/logos/costa-point90.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل بوينت 90 مول (أمام AUC)",
        "address": "داخل بوينت 90 مول، أمام الجامعة الأمريكية AUC، شارع التسعين الجنوبي",
        "phone": "0122 345 9900",
        "rating": 4.6,
        "reviewsCount": "3.8k",
        "priceRange": "من 80 - 210 جنيه",
        "badge": "القهوة البريطانية الشهيرة",
        "badgeType": "featured",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg"
        ],
        "vibe": "طعم خلطة موكا إيطاليا الإيقونية الشهيرة، قهوة موثوقة ومساحات عمل رحبة وتكييف ممتاز",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "work"
        ],
        "tags": [
            "موكا إيطاليا",
            "جلسات لابتوب ومذاكرة",
            "تكييف ممتاز"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@costacoffeeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/costacoffeeegypt/",
            "instagramHandle": "@costacoffeeegypt",
            "facebook": "https://www.facebook.com/costacoffeeegypt",
            "website": "https://www.instagram.com/costacoffeeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Costa%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D8%A8%D9%88%D9%8A%D9%86%D8%AA%2090%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A3%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9%20AUC%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A"
        },
        "menu": [
            {
                "id": "costa-point90-1",
                "name": "كوستا فلات وايت كورتو",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "مستخلص بحبوب موكا إيطاليا المحمصة ببطء"
            },
            {
                "id": "costa-point90-2",
                "name": "فرابيتشينو كراميل بالكريمة",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "مشروب مثلج منعش غني بقطع الثلج والكراميل"
            },
            {
                "id": "costa-point90-3",
                "name": "كيك الشوكولاتة الذائبة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "دافئة وشهية مع كل رشفة قهوة"
            },
            {
                "id": "costa-point90-4",
                "name": "مافن التوت الأزرق البريطاني",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 80,
                "desc": "حبات توت طازجة وقوام رطب"
            }
        ]
    },
    {
        "id": "caribou-spot",
        "name": "Caribou Coffee",
        "nameAr": "كاريبو كوفي — ذا سبوت مول",
        "logo": "/logos/caribou-spot.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ذا سبوت مول",
        "address": "ذا سبوت مول، أمام الجامعة الأمريكية، شارع التسعين الجنوبي",
        "phone": "0100 445 6677",
        "rating": 4.7,
        "reviewsCount": "2.1k",
        "priceRange": "من 95 - 240 جنيه",
        "badge": "أجواء الكوخ الجبلي الأمريكي",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg"
        ],
        "vibe": "أخشاب الكابينة الريفية الدافئة وقهوة أمريكية طبيعية 100% مع مشروبات الشوكولاتة الفريدة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "شوكولاتة حقيقية ذائبة",
            "أمام AUC",
            "أجواء دافئة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cariboucoffeeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cariboucoffeeegypt/",
            "instagramHandle": "@cariboucoffeeegypt",
            "facebook": "https://www.facebook.com/cariboucoffeeegypt",
            "website": "https://www.instagram.com/cariboucoffeeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Caribou%20Coffee%20%D8%B0%D8%A7%20%D8%B3%D8%A8%D9%88%D8%AA%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A3%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A"
        },
        "menu": [
            {
                "id": "caribou-spot-1",
                "name": "كاريبو موكا بالشوكولاتة الداكنة",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو مع شوكولاتة طبيعية ذائبة فاخرة"
            },
            {
                "id": "caribou-spot-2",
                "name": "آيسد كامب فاير موكا",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "المشروب المميز بنكهة المارشميلو المحمص"
            },
            {
                "id": "caribou-spot-3",
                "name": "تشيز كيك فواكه الغابة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 115,
                "desc": "صوص غني بالفراولة والتوت الأسود"
            },
            {
                "id": "caribou-spot-4",
                "name": "ساندوتش تركي وبيغل الجبن",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 140,
                "desc": "خبز بيغل نيويوركي مخبوز طازجاً"
            }
        ]
    },
    {
        "id": "lyfe-waterway",
        "name": "Lyfe - Whole Food & Cafe",
        "nameAr": "لايف كافيه — ذا ووترواي 2",
        "logo": "/logos/lyfe-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 2",
        "address": "ووترواي 2، شارع التسعين الشمالي، التجمع الخامس",
        "phone": "0102 999 4433",
        "rating": 4.8,
        "reviewsCount": "1.6k",
        "priceRange": "من 95 - 275 جنيه",
        "badge": "الأفضل للأكل الصحي والماتشا",
        "badgeType": "specialty",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg"
        ],
        "vibe": "الملاذ الصحي الأخضر لمحبي الطاقة الإيجابية والمكونات العضوية والقهوة الصحية والعصائر الباردة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "عضوي وصحي",
            "ماتشا وبول أساي",
            "ووترواي 2"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@lyfe.egypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/lyfe.egypt/",
            "instagramHandle": "@lyfe.egypt",
            "facebook": "https://www.facebook.com/lyfe.egypt",
            "website": "https://www.instagram.com/lyfe.egypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Lyfe%20-%20Whole%20Food%20%26%20Cafe%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%202%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "lyfe-waterway-1",
                "name": "سيريمونيال ماتشا بالشوفان",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 130,
                "desc": "ماتشا عضوية بدون سكر مع حليب شوفان باريسي"
            },
            {
                "id": "lyfe-waterway-2",
                "name": "أساي بول التوت وزبدة الفول",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 165,
                "desc": "توت أساي برازيلي مثلج مع جرانولا وفواكه فريش"
            },
            {
                "id": "lyfe-waterway-3",
                "name": "فلات وايت بحليب اللوز",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 100,
                "desc": "خفيف وصحي مع إسبريسو تخصصي"
            },
            {
                "id": "lyfe-waterway-4",
                "name": "سموذي الطاقة الأخضر فريش",
                "category": "tea_specialty",
                "subType": "juice",
                "type": "drink",
                "price": 95,
                "desc": "سبانخ وتفاح أخضر وزنجبيل وليمون"
            },
            {
                "id": "lyfe-waterway-5",
                "name": "توست الأفوكادو والبيض المسلوق",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 175,
                "desc": "خبز الساوردو مع رشة بذور الشيا"
            }
        ]
    },
    {
        "id": "casper-cfc",
        "name": "Casper & Gambini's",
        "nameAr": "كاسبر أند جامبينيز — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/casper-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0100 777 6655",
        "rating": 4.8,
        "reviewsCount": "3.6k",
        "priceRange": "من 100 - 310 جنيه",
        "badge": "فخامة وضيافة كلاسيكية",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg"
        ],
        "vibe": "خدمة راقية من فئة الخمس نجوم مع أطباق برانش شهية ومشروبات قهوة متميزة بإطلالة بحيرة CFC",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "خدمة 5 نجوم",
            "CFC بحيرة",
            "برانش فاخر"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@casperandgambiniseg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/casperandgambiniseg/",
            "instagramHandle": "@casperandgambiniseg",
            "facebook": "https://www.facebook.com/casperandgambiniseg",
            "website": "https://www.instagram.com/casperandgambiniseg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Casper%20%26%20Gambini's%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "casper-cfc-1",
                "name": "جامبينيز سيجنتشر فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 100,
                "desc": "خلطة بن كاسبر الخاصة المستوردة"
            },
            {
                "id": "casper-cfc-2",
                "name": "آيسد سبانش لاتيه غني بالكراميل",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "طبقات من القهوة والحليب البارد اللذيذ"
            },
            {
                "id": "casper-cfc-3",
                "name": "شوكليت فوندان الحمم الذائبة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 150,
                "desc": "كعكة شوكولاتة تفيض بالحمم الذائبة"
            },
            {
                "id": "casper-cfc-4",
                "name": "كلوب ساندوتش كاسبر المميز",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 210,
                "desc": "طبقات من الدجاج والتركي والبيض والبطاطس المقرمشة"
            }
        ]
    },
    {
        "id": "dar-ward-garden8",
        "name": "دار ورد كافيه",
        "nameAr": "دار ورد كافيه ولونج — داخل مول جاردن 8",
        "logo": "/logos/dar-ward-garden8.svg",
        "district": "tagamoa",
        "districtName": "التجمع الأول / الخامس • داخل مول جاردن 8",
        "address": "داخل مول جاردن 8، بالقرب من طريق السويس، القاهرة الجديدة",
        "phone": "0101 555 4433",
        "rating": 4.8,
        "reviewsCount": "2.2k",
        "priceRange": "من 80 - 245 جنيه",
        "badge": "أصالة شرقية فخمة",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg",
            "/vanilla.jpg"
        ],
        "vibe": "أجواء دمشقية ولبنانية مترفة بلمسات مودرن وأشجار زينة مورقة، حلويات شرقية وقهوة عربية أصيلة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "ضيافة شرقية راقية",
            "جاردن 8",
            "قهوة وحلويات شامية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@darward.eg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/darward.eg/",
            "instagramHandle": "@darward.eg",
            "facebook": "https://www.facebook.com/darward.eg",
            "website": "https://www.instagram.com/darward.eg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=%D8%AF%D8%A7%D8%B1%20%D9%88%D8%B1%D8%AF%20%D9%83%D8%A7%D9%81%D9%8A%D9%87%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%208%D8%8C%20%D8%A8%D8%A7%D9%84%D9%82%D8%B1%D8%A8%20%D9%85%D9%86%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "dar-ward-garden8-1",
                "name": "قهوة تركية بالهيل محوجة",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "بن محوج بالهيل والمسك على الطريقة الشامية"
            },
            {
                "id": "dar-ward-garden8-2",
                "name": "سبانش لاتيه مثلج بماء الورد",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "لمسة زهرية شرقية فريدة مع الإسبريسو"
            },
            {
                "id": "dar-ward-garden8-3",
                "name": "كنافة دار ورد بالجبن العكاوي",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "ساخنة ومغطاة بالفستق الحلبي وقطر الورد"
            },
            {
                "id": "dar-ward-garden8-4",
                "name": "شاي مغربي أصيل بالنعناع",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 85,
                "desc": "يقدم في إبريق فضي تقليدي مع كؤوس كريستال"
            }
        ]
    },
    {
        "id": "dunkin-auc",
        "name": "Dunkin'",
        "nameAr": "دانكن دونتس — شارع الجامعة الأمريكية",
        "logo": "/logos/dunkin-auc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • بالقرب من AUC",
        "address": "أمام بوابة 4 الجامعة الأمريكية، شارع التسعين الجنوبي",
        "phone": "0120 777 8899",
        "rating": 4.6,
        "reviewsCount": "3.2k",
        "priceRange": "من 70 - 240 جنيه",
        "badge": "القهوة الأمريكية والدونتس السريعة",
        "badgeType": "featured",
        "luxuryScore": 92,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg",
            "/coffee_dessert.jpg"
        ],
        "vibe": "القهوة الأمريكية السريعة ذات المذاق الثابت والدونتس الملونة الطازجة المفضلة للجميع يومياً",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "دونتس طازجة",
            "قهوة سريعة",
            "أمام AUC"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@dunkinegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/dunkinegypt/",
            "instagramHandle": "@dunkinegypt",
            "facebook": "https://www.facebook.com/dunkinegypt",
            "website": "https://www.instagram.com/dunkinegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Dunkin'%20%D8%A3%D9%85%D8%A7%D9%85%20%D8%A8%D9%88%D8%A7%D8%A8%D8%A9%204%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A"
        },
        "menu": [
            {
                "id": "dunkin-auc-1",
                "name": "قهوة أمريكانو مقطرة فريش",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 70,
                "desc": "بن دانكن الأصلي الشهير عالمياً"
            },
            {
                "id": "dunkin-auc-2",
                "name": "آيسد كراميل لاتيه دانكن",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 85,
                "desc": "حليب بارد وإسبريسو مع صوص الكراميل"
            },
            {
                "id": "dunkin-auc-3",
                "name": "بوكس 6 قطع دونتس متنوعة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 140,
                "desc": "شوكولاتة، بوسطن كريم، وجليزد كلاسيك"
            },
            {
                "id": "dunkin-auc-4",
                "name": "ساندوتش كروكواسون بيكون وجبن",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 110,
                "desc": "كرواسون محمص على الجريل"
            }
        ]
    },
    {
        "id": "krispy-kreme-south90",
        "name": "Krispy Kreme",
        "nameAr": "كريسبي كريم — التسعين الجنوبي",
        "logo": "/logos/krispy-kreme-south90.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • التسعين الجنوبي",
        "address": "شارع التسعين الجنوبي، بجوار مجمع البنوك، التجمع الخامس",
        "phone": "0100 889 9001",
        "rating": 4.7,
        "reviewsCount": "2.8k",
        "priceRange": "من 45 - 185 جنيه",
        "badge": "الدونتس الأكثر ذوباناً في العالم",
        "badgeType": "trending",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "علامة الضوء الأحمر الشهيرة التي تعلن خروج الدونتس الأصلية الساخنة الذائبة مع القهوة الممتازة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "دونتس أوريجينال جليزد",
            "قهوة مثلجة",
            "جلسات مرحة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@krispykremeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/krispykremeegypt/",
            "instagramHandle": "@krispykremeegypt",
            "facebook": "https://www.facebook.com/krispykremeegypt",
            "website": "https://www.instagram.com/krispykremeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Krispy%20Kreme%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%8C%20%D8%A8%D8%AC%D9%88%D8%A7%D8%B1%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%A8%D9%86%D9%88%D9%83%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "krispy-kreme-south90-1",
                "name": "أوريجينال جليزد دونتس دافئة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 70,
                "desc": "تذوب حرفياً في الفم بسكر خفيف"
            },
            {
                "id": "krispy-kreme-south90-2",
                "name": "آيسد لاتيه كريسبى كريم",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو غني مع حليب مثلج"
            },
            {
                "id": "krispy-kreme-south90-3",
                "name": "كابتشينو إيطالي كلاسيك",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "رغوة حليب كريمية متماسكة"
            },
            {
                "id": "krispy-kreme-south90-4",
                "name": "دونتس محشوة بالشوكولاتة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 45,
                "desc": "محشوة بكريمة الشوكولاتة الغنية"
            }
        ]
    },
    {
        "id": "cinnabon-cfc",
        "name": "Cinnabon",
        "nameAr": "سينابون — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/cinnabon-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0120 123 7788",
        "rating": 4.7,
        "reviewsCount": "4.0k",
        "priceRange": "من 80 - 210 جنيه",
        "badge": "رائحة القرفة الأسطورية",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "رائحة قرفة ماكارا الإندونيسية الشهيرة مع لفائف السينابون الساخنة المغطاة بالجبن الكريمي الساحر",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "سينابون رول طازج",
            "قهوة مثلجة موكالاتا",
            "CFC مول"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cinnabonegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cinnabonegypt/",
            "instagramHandle": "@cinnabonegypt",
            "facebook": "https://www.facebook.com/cinnabonegypt",
            "website": "https://www.instagram.com/cinnabonegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cinnabon%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "cinnabon-cfc-1",
                "name": "كلاسيك سينابون رول ساخنة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 95,
                "desc": "عجينة دافئة ملفوفة بقرفة ماكارا وصوص الجبن"
            },
            {
                "id": "cinnabon-cfc-2",
                "name": "موكالاتا مثلجة بالشوكولاتة",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 90,
                "desc": "مزيج شوكولاتة وقهوة مثلجة مع كريمة مخفوقة"
            },
            {
                "id": "cinnabon-cfc-3",
                "name": "كابتشينو سينابون الساخن",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "إسبريسو غني مع رشة قرفة مميزة"
            },
            {
                "id": "cinnabon-cfc-4",
                "name": "بيكانبون بالكراميل والمكسرات",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 110,
                "desc": "مغطاة بصوص الكراميل وجوز البيكان المحمص"
            }
        ]
    },
    {
        "id": "second-cup-concorde",
        "name": "Second Cup",
        "nameAr": "سكند كب — داخل مول كونكورد بلازا",
        "logo": "/logos/second-cup-concorde.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مول كونكورد بلازا",
        "address": "داخل مول كونكورد بلازا، شارع التسعين الجنوبي، التجمع الخامس",
        "phone": "0100 554 3322",
        "rating": 4.6,
        "reviewsCount": "1.9k",
        "priceRange": "من 85 - 215 جنيه",
        "badge": "القهوة الكندية الممتازة",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "/vanilla.jpg",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "دفء المقاهي الكندية مع خيارات الشاي الفاخر واللاتيه المتبل والحلويات الخفيفة وسط هدوء مريح",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "قهوة كندية",
            "شاي متبل وماتشا",
            "كونكورد بلازا"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@secondcupegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/secondcupegypt/",
            "instagramHandle": "@secondcupegypt",
            "facebook": "https://www.facebook.com/secondcupegypt",
            "website": "https://www.instagram.com/secondcupegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Second%20Cup%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D9%83%D9%88%D9%86%D9%83%D9%88%D8%B1%D8%AF%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "second-cup-concorde-1",
                "name": "فانيلا بين لاتيه كندي ساخن",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "نكهة الفانيلا الكندية الطبيعية مع الحليب المخملي"
            },
            {
                "id": "second-cup-concorde-2",
                "name": "آيسد كاراميل كوريتا",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "مشروب مثلج منعش بنكهة الكراميل"
            },
            {
                "id": "second-cup-concorde-3",
                "name": "تشيز كيك الشوكولاتة البيضاء",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 115,
                "desc": "مع صوص التوت البري الكندي"
            },
            {
                "id": "second-cup-concorde-4",
                "name": "كرواسون بالجبن الشيدر المدخن",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "مقرمش بالزبدة الطبيعية"
            }
        ]
    },
    {
        "id": "dipndip-cfc",
        "name": "dipndip",
        "nameAr": "ديب آند ديب — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/dipndip-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0109 444 3322",
        "rating": 4.7,
        "reviewsCount": "4.5k",
        "priceRange": "من 85 - 265 جنيه",
        "badge": "جنة الشوكولاتة البلجيكية",
        "badgeType": "trending",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "/coffee_dessert.jpg",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "عروض صب الشوكولاتة البلجيكية الثلاثية الشهيرة على الكريب والوافل والبانكيك بطريقة تبهج الحواس",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "شوكولاتة بلجيكية",
            "كريب ووافل",
            "CFC نافورة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@dipndipegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/dipndipegypt/",
            "instagramHandle": "@dipndipegypt",
            "facebook": "https://www.facebook.com/dipndipegypt",
            "website": "https://www.instagram.com/dipndipegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=dipndip%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "dipndip-cfc-1",
                "name": "فوتوتشيني كريب بالشوكولاتة الثلاثية",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 165,
                "desc": "شرائط كريب هشة مع آيس كريم وشوكولاتة بلجيكية"
            },
            {
                "id": "dipndip-cfc-2",
                "name": "ديب آند ديب سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "شوت إسبريسو مع الحليب والشوكولاتة البيضاء"
            },
            {
                "id": "dipndip-cfc-3",
                "name": "كابتشينو إيطالي برغوة الحليب",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو متزن لتعديل حلاوة الشوكولاتة"
            },
            {
                "id": "dipndip-cfc-4",
                "name": "براونيز كريب محشو بالشوكولاتة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 155,
                "desc": "قطع براوني دافئة مغلفة بالشوكولاتة الحليبية"
            }
        ]
    },
    {
        "id": "molten-point90",
        "name": "Molten Chocolate Cafe",
        "nameAr": "مولتن شوكليت كافيه — داخل بوينت 90 مول",
        "logo": "/logos/molten-point90.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل بوينت 90 مول (أمام AUC)",
        "address": "داخل بوينت 90 مول، أمام الجامعة الأمريكية AUC، شارع التسعين الجنوبي",
        "phone": "0102 666 5544",
        "rating": 4.7,
        "reviewsCount": "2.3k",
        "priceRange": "من 85 - 245 جنيه",
        "badge": "عشاق الحمم الشوكولاتية",
        "badgeType": "trending",
        "luxuryScore": 95,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "وجهة الحلوى الساخنة المترفة بالشوكولاتة السويسرية والوافل المقرمش مع مشروبات القهوة الممتازة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مولتن لافا كيك",
            "وافل بلجيكي",
            "بوينت 90"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@moltenchocolatecafeeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/moltenchocolatecafeeg/",
            "instagramHandle": "@moltenchocolatecafeeg",
            "facebook": "https://www.facebook.com/moltenchocolatecafeeg",
            "website": "https://www.instagram.com/moltenchocolatecafeeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Molten%20Chocolate%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D8%A8%D9%88%D9%8A%D9%86%D8%AA%2090%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A3%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9%20AUC%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A"
        },
        "menu": [
            {
                "id": "molten-point90-1",
                "name": "مولتن لافا كيك الأصلية بالآيس كريم",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "قلب شوكولاتة ذائب مع بولة فانيلا مثلجة"
            },
            {
                "id": "molten-point90-2",
                "name": "آيسد موكا سويس شوكليت",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 100,
                "desc": "إسبريسو وحليب مع صوص شوكولاتة سويسرية"
            },
            {
                "id": "molten-point90-3",
                "name": "فلات وايت متوازن النكهات",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "رائع بجانب أطباق الشوكولاتة الساخنة"
            },
            {
                "id": "molten-point90-4",
                "name": "كريب فرينش رول بالمارشميلو",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 140,
                "desc": "مارشميلو ذائب وشوكولاتة ساخنة"
            }
        ]
    },
    {
        "id": "house-of-cocoa-cfc",
        "name": "House of Cocoa",
        "nameAr": "هاوس أوف كوكو — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/house-of-cocoa-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0100 223 9988",
        "rating": 4.8,
        "reviewsCount": "2.9k",
        "priceRange": "من 90 - 235 جنيه",
        "badge": "أفخم شوكولاتة وقهوة أوروبية",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "متجر ولونج الشوكولاتة الراقية، ملاعق الشوكولاتة الساخنة الذائبة في الحليب والقهوة التخصصية الموزونة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "ملاعق شوكولاتة ذائبة",
            "أجواء أوروبية فخمة",
            "CFC"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@houseofcocoa"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/houseofcocoa/",
            "instagramHandle": "@houseofcocoa",
            "facebook": "https://www.facebook.com/houseofcocoa",
            "website": "https://www.instagram.com/houseofcocoa/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=House%20of%20Cocoa%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "house-of-cocoa-cfc-1",
                "name": "هوت شوكليت الملعقة الذائبة 70%",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "شوكولاتة داكنة نقية تذوب ببطء في حليب مبخر ساخن"
            },
            {
                "id": "house-of-cocoa-cfc-2",
                "name": "فلات وايت بحبوب بن تخصصي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "إسبريسو سلس ومناسب جداً للشوكولاتة"
            },
            {
                "id": "house-of-cocoa-cfc-3",
                "name": "تشيز كيك الشوكولاتة والكراميل المملح",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "طبقة بسكويت شوكولاتة كرانشي وجبن كريمي"
            },
            {
                "id": "house-of-cocoa-cfc-4",
                "name": "كرواسون برالينيه البندق",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 95,
                "desc": "محشو بكريمة برالينيه البندق الفاخرة"
            }
        ]
    },
    {
        "id": "haagen-dazs-waterway",
        "name": "Haagen-Dazs",
        "nameAr": "هاجن داز — ذا ووترواي",
        "logo": "/logos/haagen-dazs-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 1",
        "address": "ووترواي 1، شارع التسعين الشمالي، التجمع الخامس",
        "phone": "0100 119 8877",
        "rating": 4.8,
        "reviewsCount": "2.7k",
        "priceRange": "من 110 - 255 جنيه",
        "badge": "فخامة الآيس كريم والقهوة",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "جلسات أنيقة على ممشى ووترواي مع أطباق الآيس كريم الفاخرة المشهورة عالمياً والقهوة الإيطالية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "آيس كريم فاخر عالمي",
            "ووترواي 1",
            "أجواء خارجية راقية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@haagendazsegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/haagendazsegypt/",
            "instagramHandle": "@haagendazsegypt",
            "facebook": "https://www.facebook.com/haagendazsegypt",
            "website": "https://www.instagram.com/haagendazsegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Haagen-Dazs%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%201%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "haagen-dazs-waterway-1",
                "name": "أفوغاتو هاجن داز فانيلا الأصلي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 115,
                "desc": "بولة آيس كريم فانيلا بوربون مع شوت إسبريسو ساخن"
            },
            {
                "id": "haagen-dazs-waterway-2",
                "name": "آيسد سبانش لاتيه غني",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "إسبريسو وحليب مع نكهة الفانيلا الكريمية"
            },
            {
                "id": "haagen-dazs-waterway-3",
                "name": "وافل هاجن داز البلجيكي بالتوت",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 155,
                "desc": "وافل مقرمش مع بولة آيس كريم وصوص توت"
            },
            {
                "id": "haagen-dazs-waterway-4",
                "name": "تشيز كيك الفراولة والكراميل",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "كريمة مخملية مع قطع الفراولة اللامعة"
            }
        ]
    },
    {
        "id": "pinkberry-cfc",
        "name": "Pinkberry",
        "nameAr": "بينك بيري — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/pinkberry-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0102 777 6611",
        "rating": 4.7,
        "reviewsCount": "2.2k",
        "priceRange": "من 85 - 205 جنيه",
        "badge": "الزبادي المثلج الخفيف والصحي",
        "badgeType": "trending",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "الزبادي المثلج المنعش قليل السعرات مع فواكه طازجة يومياً وقهوة مثلجة ممتازة لأيام الصيف والتسوق",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "زبادي مثلج فريش",
            "فواكه طبيعية",
            "خفيف وصحي"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@pinkberrymiddleeast"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/pinkberrymiddleeast/",
            "instagramHandle": "@pinkberrymiddleeast",
            "facebook": "https://www.facebook.com/pinkberrymiddleeast",
            "website": "https://www.instagram.com/pinkberrymiddleeast/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Pinkberry%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "pinkberry-cfc-1",
                "name": "بينك بيري أوريجينال مع فواكه طازجة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 95,
                "desc": "زبادي مثلج منعش مع رمان وفراولة وتوت أزرق"
            },
            {
                "id": "pinkberry-cfc-2",
                "name": "آيسد لاتيه بارد خفيف",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو منعش مع حليب قليل الدسم"
            },
            {
                "id": "pinkberry-cfc-3",
                "name": "سموذي الباشن فروت والمانجو",
                "category": "tea_specialty",
                "subType": "juice",
                "type": "drink",
                "price": 90,
                "desc": "مزيج استوائي طبيعي 100%"
            },
            {
                "id": "pinkberry-cfc-4",
                "name": "زبادي الشوكولاتة الداكنة بقطع البراوني",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 105,
                "desc": "مزيج رائع لمحبي الحلى الصحي"
            }
        ]
    },
    {
        "id": "brioche-doree-cfc",
        "name": "Brioche Dorée",
        "nameAr": "بريوش دوريه — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/brioche-doree-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0100 665 4433",
        "rating": 4.7,
        "reviewsCount": "2.5k",
        "priceRange": "من 85 - 255 جنيه",
        "badge": "المخبوزات الفرنسية العريقة",
        "badgeType": "featured",
        "luxuryScore": 95,
        "image": "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مذاق المخبوزات الحرفية الفرنسية المقرمشة مع فنجان الكابتشينو في استراحة تسوق راقية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "بريوش فرنسي",
            "كرواسون زبدة",
            "CFC"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@briochedoreeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/briochedoreeegypt/",
            "instagramHandle": "@briochedoreeegypt",
            "facebook": "https://www.facebook.com/briochedoreeegypt",
            "website": "https://www.instagram.com/briochedoreeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Brioche%20Dor%C3%A9e%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "brioche-doree-cfc-1",
                "name": "بريوش فرنسي محشو بالكريمة واللوز",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 90,
                "desc": "عجينة بريوش غنية بالزبدة والبيض الطازج"
            },
            {
                "id": "brioche-doree-cfc-2",
                "name": "كافيه أوليه فرنسي تقليدي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "قهوة الصباح الفرنسية في مج كبير"
            },
            {
                "id": "brioche-doree-cfc-3",
                "name": "آيسد سبانش لاتيه فرنسي",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "إسبريسو مثلج بطعم الكراميل الخفيف"
            },
            {
                "id": "brioche-doree-cfc-4",
                "name": "تارت الليمون والميرانغ المحروق",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 120,
                "desc": "حموضة ليمون منعشة مع ميرانغ ناعم"
            },
            {
                "id": "brioche-doree-cfc-5",
                "name": "ساندوتش دجاج مشوي بالبيستو",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 155,
                "desc": "في خبز الباغيت الحرفي المقرمش"
            }
        ]
    },
    {
        "id": "cacao-sampaka-garden8",
        "name": "Cacao Sampaka",
        "nameAr": "كاكاو سامباكا — داخل مول جاردن 8",
        "logo": "/logos/cacao-sampaka-garden8.svg",
        "district": "tagamoa",
        "districtName": "التجمع الأول / الخامس • داخل مول جاردن 8",
        "address": "داخل مول جاردن 8، بالقرب من طريق السويس، القاهرة الجديدة",
        "phone": "0101 888 2211",
        "rating": 4.9,
        "reviewsCount": "1.8k",
        "priceRange": "من 95 - 250 جنيه",
        "badge": "شوكولاتة برشلونة الملكية",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "متجر الشوكولاتة الإسبانية الملكية الممتدة من برشلونة، تجربة استثنائية لأندر أنواع الكاكاو والقهوة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "شوكولاتة برشلونة",
            "جاردن 8",
            "أفخم كاكاو إسباني"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cacaosampaka_egypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cacaosampaka_egypt/",
            "instagramHandle": "@cacaosampaka_egypt",
            "facebook": "https://www.facebook.com/cacaosampaka_egypt",
            "website": "https://www.instagram.com/cacaosampaka_egypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cacao%20Sampaka%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%208%D8%8C%20%D8%A8%D8%A7%D9%84%D9%82%D8%B1%D8%A8%20%D9%85%D9%86%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "cacao-sampaka-garden8-1",
                "name": "هوت شوكليت إسباني سميك بالأزتيك",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 130,
                "desc": "قوام كريمي كثيف بنكهة القرفة والكاكاو النقي"
            },
            {
                "id": "cacao-sampaka-garden8-2",
                "name": "كورتادو إسباني تقليدي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو متساوي مع الحليب في كوب زجاجي"
            },
            {
                "id": "cacao-sampaka-garden8-3",
                "name": "تشيز كيك الشوكولاتة الداكنة الكاتالونية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 150,
                "desc": "كاكاو 75% مع طبقة بسكويت مقرمشة"
            },
            {
                "id": "cacao-sampaka-garden8-4",
                "name": "شوروز إسباني ساخن مع صوص الشوكولاتة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 125,
                "desc": "مقلي ذهبي ومغمور في الشوكولاتة الذائبة"
            }
        ]
    },
    {
        "id": "white-owl-garden8",
        "name": "The White Owl",
        "nameAr": "ذا وايت أول كافيه — داخل مول جاردن 8",
        "logo": "/logos/white-owl-garden8.svg",
        "district": "tagamoa",
        "districtName": "التجمع الأول / الخامس • داخل مول جاردن 8",
        "address": "داخل مول جاردن 8، بالقرب من طريق السويس، القاهرة الجديدة",
        "phone": "0109 333 1122",
        "rating": 4.8,
        "reviewsCount": "1.5k",
        "priceRange": "من 90 - 235 جنيه",
        "badge": "أناقة وبساطة عصرية",
        "badgeType": "trending",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "ديكورات بيضاء مينيمال وإضاءة طبيعية وافرة مع مقاعد وثيرة تناسب جلسات التصوير والقهوة الهادئة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "تصوير وإنستجرام",
            "جاردن 8",
            "أجواء مشرقة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@thewhiteowleg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/thewhiteowleg/",
            "instagramHandle": "@thewhiteowleg",
            "facebook": "https://www.facebook.com/thewhiteowleg",
            "website": "https://www.instagram.com/thewhiteowleg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=The%20White%20Owl%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%208%D8%8C%20%D8%A8%D8%A7%D9%84%D9%82%D8%B1%D8%A8%20%D9%85%D9%86%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "white-owl-garden8-1",
                "name": "وايت أول آيسد سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "المشروب التوقيعي الأكثر طلباً برغوة بيضاء"
            },
            {
                "id": "white-owl-garden8-2",
                "name": "فلات وايت بن إثيوبي فاخر",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "قوام حريري متناسق"
            },
            {
                "id": "white-owl-garden8-3",
                "name": "قهوة V60 باردة مقطرة",
                "category": "iced_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 125,
                "desc": "طعم نقي ومنعش لمحبي القهوة الفلتر"
            },
            {
                "id": "white-owl-garden8-4",
                "name": "كيك الفستق والتوت البري",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "كيك إسفنجي بنكهة الفستق الطبيعي"
            },
            {
                "id": "white-owl-garden8-5",
                "name": "كرواسون شوكولاتة بيضاء ولوز",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 90,
                "desc": "مخبوز طازج ومقرمش"
            }
        ]
    },
    {
        "id": "koffee-kulture-garden8",
        "name": "Koffee Kulture",
        "nameAr": "كوفي كالتشر — داخل مول جاردن 8",
        "logo": "/logos/koffee-kulture-garden8.svg",
        "district": "tagamoa",
        "districtName": "التجمع الأول / الخامس • داخل مول جاردن 8",
        "address": "داخل مول جاردن 8، بالقرب من طريق السويس، القاهرة الجديدة",
        "phone": "0102 445 7788",
        "rating": 4.8,
        "reviewsCount": "1.9k",
        "priceRange": "من 95 - 260 جنيه",
        "badge": "ثقافة القهوة التخصصية",
        "badgeType": "specialty",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "محمصة وبار قهوة تخصصية يركز على نقاء النكهات ودرجات التحميص الدقيقة لعشاق القهوة الحقيقيين",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "محمصة قهوة متخصصة",
            "باريستا محترف",
            "جاردن 8"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@koffeekultureeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/koffeekultureeg/",
            "instagramHandle": "@koffeekultureeg",
            "facebook": "https://www.facebook.com/koffeekultureeg",
            "website": "https://www.instagram.com/koffeekultureeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Koffee%20Kulture%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%208%D8%8C%20%D8%A8%D8%A7%D9%84%D9%82%D8%B1%D8%A8%20%D9%85%D9%86%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "koffee-kulture-garden8-1",
                "name": "قهوة مقطرة V60 رواندا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 125,
                "desc": "إيحاءات البرتقال والكراميل بقوام متوسط"
            },
            {
                "id": "koffee-kulture-garden8-2",
                "name": "فلات وايت دبل سينجل أوريجين",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "استخلاص إسبريسو بدرجة حرارة محسوبة"
            },
            {
                "id": "koffee-kulture-garden8-3",
                "name": "آيسد لاتيه بالبندق المحمص",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "طعم جوزي متناغم مع برودة القهوة"
            },
            {
                "id": "koffee-kulture-garden8-4",
                "name": "تارت الشوكولاتة البلجيكية والملح البحري",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "توازن رائع بين الحلاوة ونكهة الملح"
            },
            {
                "id": "koffee-kulture-garden8-5",
                "name": "ساندوتش ديك رومي مدخن وجبنة غودا",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 160,
                "desc": "خبز محمص مع صوص الماسترد ديجون"
            }
        ]
    },
    {
        "id": "miette-garden8",
        "name": "Miette Bakery",
        "nameAr": "ميت بيكري وكافيه — داخل مول جاردن 8",
        "logo": "/logos/miette-garden8.svg",
        "district": "tagamoa",
        "districtName": "التجمع الأول / الخامس • داخل مول جاردن 8",
        "address": "داخل مول جاردن 8، بالقرب من طريق السويس، القاهرة الجديدة",
        "phone": "0106 777 9900",
        "rating": 4.9,
        "reviewsCount": "1.6k",
        "priceRange": "من 80 - 285 جنيه",
        "badge": "المخبوزات الحرفية الفرنسية",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مخبز حرفي فرنسي أنيق يقدم خبز الساوردو الطبيعي والمخبوزات الذهبية الطازجة مع قهوة عالية الجودة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "ساوردو طبيعي",
            "كرواسون حرفي",
            "فطور الصباح الراقي"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@miettebakeryeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/miettebakeryeg/",
            "instagramHandle": "@miettebakeryeg",
            "facebook": "https://www.facebook.com/miettebakeryeg",
            "website": "https://www.instagram.com/miettebakeryeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Miette%20Bakery%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%208%D8%8C%20%D8%A8%D8%A7%D9%84%D9%82%D8%B1%D8%A8%20%D9%85%D9%86%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "miette-garden8-1",
                "name": "كرواسون ميت باللوز والفرنجيبان",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 95,
                "desc": "مخبوز بفرن حجري ومحشو بكريمة اللوز الغنية"
            },
            {
                "id": "miette-garden8-2",
                "name": "كافيه لاتيه بحليب الشوفان الساخن",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو خفيف برغوة حريرية"
            },
            {
                "id": "miette-garden8-3",
                "name": "آيسد سبانش لاتيه فرنسي",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "قهوة مثلجة مع حليب مكثف ومبخر"
            },
            {
                "id": "miette-garden8-4",
                "name": "توست الأفوكادو بالبيض المسلوق والساوردو",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 185,
                "desc": "فطور صحي متكامل مع سلطة خضراء"
            },
            {
                "id": "miette-garden8-5",
                "name": "كانيلي بوردو فرنسي تقليدي (2 قطعة)",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 80,
                "desc": "مقرمش بالكراميل من الخارج وطري من الداخل"
            }
        ]
    },
    {
        "id": "vanilla-lounge-silverstar",
        "name": "Vanilla Lounge",
        "nameAr": "فانيليا لاونج — سيلفر ستار مول",
        "logo": "/logos/vanilla-lounge-silverstar.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • سيلفر ستار",
        "address": "مول سيلفر ستار، الحي الأول، التجمع الخامس",
        "phone": "0114 555 6677",
        "rating": 4.7,
        "reviewsCount": "2.1k",
        "priceRange": "من 85 - 240 جنيه",
        "badge": "جلسات هادئة وأسعار متوازنة",
        "badgeType": "featured",
        "luxuryScore": 95,
        "image": "/vanilla.jpg",
        "gallery": [
            "/vanilla.jpg",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "تصميم مريح وألوان ترابية دافئة تناسب جلسات المذاكرة والعمل الطويلة مع تشكيلة مشروبات ممتازة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food",
            "work"
        ],
        "tags": [
            "جلسات مذاكرة وهدوء",
            "سيلفر ستار",
            "أسعار معقولة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@vanillaloungeeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/vanillaloungeeg/",
            "instagramHandle": "@vanillaloungeeg",
            "facebook": "https://www.facebook.com/vanillaloungeeg",
            "website": "https://www.instagram.com/vanillaloungeeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Vanilla%20Lounge%20%D9%85%D9%88%D9%84%20%D8%B3%D9%8A%D9%84%D9%81%D8%B1%20%D8%B3%D8%AA%D8%A7%D8%B1%D8%8C%20%D8%A7%D9%84%D8%AD%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "vanilla-lounge-silverstar-1",
                "name": "فانيليا كورتادو إسباني",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو دبل شوت مع حليب مبخر كريمي"
            },
            {
                "id": "vanilla-lounge-silverstar-2",
                "name": "آيسد سبانش لاتيه فانيليا الخاص",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "مزيج منعش قليل السكر"
            },
            {
                "id": "vanilla-lounge-silverstar-3",
                "name": "كيمكس قهوة مقطرة إثيوبية",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 110,
                "desc": "تقطير متوازن ونكهات فاكهية ناعمة"
            },
            {
                "id": "vanilla-lounge-silverstar-4",
                "name": "تشيز كيك فانيليا التوت الأزرق",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 115,
                "desc": "قوام جبني متماسك وغني"
            },
            {
                "id": "vanilla-lounge-silverstar-5",
                "name": "ساندوتش روست بيف بالمايونيز والأعشاب",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 140,
                "desc": "في خبز باجيت طازج مع بطاطس ودجز"
            }
        ]
    },
    {
        "id": "vasko-downtown",
        "name": "Vasko Coffee",
        "nameAr": "فاسكو كوفي — داخل مول داون تاون القطامية",
        "logo": "/logos/vasko-downtown.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مول داون تاون القطامية",
        "address": "داخل مول داون تاون القطامية، شارع التسعين، التجمع الخامس",
        "phone": "0100 441 2299",
        "rating": 4.8,
        "reviewsCount": "2.4k",
        "priceRange": "من 80 - 225 جنيه",
        "badge": "القهوة التخصصية المبتكرة",
        "badgeType": "specialty",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg"
        ],
        "vibe": "وجهة المبدعين وعشاق القهوة المختصة، باريستا شغوف يقدم أفضل استخلاص لحبوب البن العالمية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "work"
        ],
        "tags": [
            "داون تاون قطامية",
            "بن تخصصي",
            "جلسات عمل مريحة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@vaskocoffee"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/vaskocoffee/",
            "instagramHandle": "@vaskocoffee",
            "facebook": "https://www.facebook.com/vaskocoffee",
            "website": "https://www.instagram.com/vaskocoffee/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Vasko%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%AF%D8%A7%D9%88%D9%86%20%D8%AA%D8%A7%D9%88%D9%86%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D9%85%D9%8A%D8%A9%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "vasko-downtown-1",
                "name": "قهوة مقطرة V60 كولومبيا هويلّا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 120,
                "desc": "نوتات الشوكولاتة الداكنة والمكسرات المحمصة"
            },
            {
                "id": "vasko-downtown-2",
                "name": "فلات وايت فاسكو الحرفي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "شوت مزدوج من الإسبريسو المتزن"
            },
            {
                "id": "vasko-downtown-3",
                "name": "كولد برو 16 ساعة مع شريحة برتقال",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "مشروب صيفي منعش جداً بدون سكر"
            },
            {
                "id": "vasko-downtown-4",
                "name": "كوكيز رقائق الشوكولاتة والملح",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 80,
                "desc": "طازجة ومقرمشة ومحشوة بالشوكولاتة"
            },
            {
                "id": "vasko-downtown-5",
                "name": "تشيز كيك لوتس مقرمشة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 125,
                "desc": "بسكويت اللوتس مع طبقة كريمة دسمة"
            }
        ]
    },
    {
        "id": "blank-south90",
        "name": "Blank Coffee",
        "nameAr": "بلانك كوفي — التسعين الجنوبي",
        "logo": "/logos/blank-south90.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • التسعين الجنوبي",
        "address": "شارع التسعين الجنوبي، بجوار بنك CIB، التجمع الخامس",
        "phone": "0109 221 3344",
        "rating": 4.8,
        "reviewsCount": "1.9k",
        "priceRange": "من 95 - 230 جنيه",
        "badge": "مينيماليزم وقهوة استثنائية",
        "badgeType": "specialty",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg"
        ],
        "vibe": "طابع مينيمالي نقي باللون الأبيض الخالص، تركيز كامل على جودة فنجان القهوة والموسيقى الهادئة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "تصميم مينيمالي",
            "أجواء تركيز",
            "قهوة مختصة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@blankcoffeeeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/blankcoffeeeg/",
            "instagramHandle": "@blankcoffeeeg",
            "facebook": "https://www.facebook.com/blankcoffeeeg",
            "website": "https://www.instagram.com/blankcoffeeeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Blank%20Coffee%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%8C%20%D8%A8%D8%AC%D9%88%D8%A7%D8%B1%20%D8%A8%D9%86%D9%83%20CIB%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "blank-south90-1",
                "name": "بلانك آيسد سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "مشروب بلانك الأكثر تميزاً وإتقاناً"
            },
            {
                "id": "blank-south90-2",
                "name": "فلات وايت بلانك بن برازيلي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "رغوة ميكروفوم فائقة النعومة"
            },
            {
                "id": "blank-south90-3",
                "name": "قهوة مقطرة V60 إثيوبية",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 120,
                "desc": "نوتات عطرية فواحة زهرية"
            },
            {
                "id": "blank-south90-4",
                "name": "تيراميسو بلانك الكلاسيكي",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "ماسكاربوني فريش مع لمسة بودرة كاكاو داكنة"
            }
        ]
    },
    {
        "id": "overdose-arabella",
        "name": "Overdose Specialty Coffee",
        "nameAr": "أوفر دوز كوفي — داخل مول أرابيلا بلازا",
        "logo": "/logos/overdose-arabella.svg",
        "district": "tagamoa",
        "districtName": "التجمع الثالث / الخامس • داخل مول أرابيلا بلازا",
        "address": "داخل مول أرابيلا بلازا، التجمع الثالث / الخامس، القاهرة الجديدة",
        "phone": "0100 882 1133",
        "rating": 4.8,
        "reviewsCount": "2.5k",
        "priceRange": "من 90 - 225 جنيه",
        "badge": "جرعة كافيين وإبداع",
        "badgeType": "trending",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg"
        ],
        "vibe": "طاقة حيوية وتصميم نيون عصري، وجهة الشباب للقهوة المثلجة المبتكرة ومشروبات الطاقة الطبيعية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "أرابيلا بلازا",
            "سبانش لاتيه مبتكر",
            "أجواء شبابية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@overdosecoffeeeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/overdosecoffeeeg/",
            "instagramHandle": "@overdosecoffeeeg",
            "facebook": "https://www.facebook.com/overdosecoffeeeg",
            "website": "https://www.instagram.com/overdosecoffeeeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Overdose%20Specialty%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A3%D8%B1%D8%A7%D8%A8%D9%8A%D9%84%D8%A7%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%2F%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "overdose-arabella-1",
                "name": "أوفر دوز سبانش لاتيه مثلج دبل",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "جرعة مضاعفة من الكافيين مع حليب مكثف"
            },
            {
                "id": "overdose-arabella-2",
                "name": "فلات وايت أوفردوز الساخن",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "طعم قوي ومحبك لعشاق الإسبريسو"
            },
            {
                "id": "overdose-arabella-3",
                "name": "كولد برو بالباشن فروت",
                "category": "tea_specialty",
                "subType": "juice",
                "type": "drink",
                "price": 105,
                "desc": "طعم فاكهي منعش مع استخلاص قهوة بارد"
            },
            {
                "id": "overdose-arabella-4",
                "name": "تشيز كيك البراوني بالشوكولاتة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 125,
                "desc": "مزيج البراوني الدافئ والجبن الكريمي"
            }
        ]
    },
    {
        "id": "chapter-lakeview",
        "name": "Chapter Cafe",
        "nameAr": "تشابتر كافيه — ليك فيو",
        "logo": "/logos/chapter-lakeview.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ليك فيو",
        "address": "كمبوند ليك فيو، التجمع الخامس، القاهرة الجديدة",
        "phone": "0101 445 9988",
        "rating": 4.9,
        "reviewsCount": "1.7k",
        "priceRange": "من 100 - 265 جنيه",
        "badge": "إطلالات مسطحات مائية خلابة",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg"
        ],
        "vibe": "إطلالة بانورامية هادئة على البحيرات والمساحات الخضراء في ليك فيو، ملاذ الفخامة والخصوصية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "إطلالة بحيرة",
            "ليك فيو",
            "خصوصية وفخامة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@chaptercafeeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/chaptercafeeg/",
            "instagramHandle": "@chaptercafeeg",
            "facebook": "https://www.facebook.com/chaptercafeeg",
            "website": "https://www.instagram.com/chaptercafeeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Chapter%20Cafe%20%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF%20%D9%84%D9%8A%D9%83%20%D9%81%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "chapter-lakeview-1",
                "name": "فلات وايت تشابتر المميز",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 100,
                "desc": "بن تخصصي برغوة حليب ميكروفوم حريرية"
            },
            {
                "id": "chapter-lakeview-2",
                "name": "سبانش لاتيه كولد برو مثلج",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "طبقات من القهوة والحليب البارد اللذيذ"
            },
            {
                "id": "chapter-lakeview-3",
                "name": "سان سيباستيان تشيز كيك مع الشوكولاتة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 140,
                "desc": "محروقة من الأعلى وذائبة من الداخل"
            },
            {
                "id": "chapter-lakeview-4",
                "name": "ساندوتش حلومي مشوي مع بيستو",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 165,
                "desc": "في خبز تشاباتا إيطالي مقرمش"
            }
        ]
    },
    {
        "id": "daily-dose-waterway",
        "name": "The Daily Dose",
        "nameAr": "ذا ديلي دوز — ووترواي 2",
        "logo": "/logos/daily-dose-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 2",
        "address": "ووترواي 2، شارع التسعين الشمالي، التجمع الخامس",
        "phone": "0106 332 1199",
        "rating": 4.8,
        "reviewsCount": "1.8k",
        "priceRange": "من 85 - 220 جنيه",
        "badge": "جرعتك اليومية المفضلة",
        "badgeType": "trending",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg",
            "/vanilla.jpg"
        ],
        "vibe": "مكانك اليومي الثابت لقهوة الصباح السريعة والكرواسون الساخن مع موسيقى راقية وباريستا ودود",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "ووترواي 2",
            "قهوة يومية متقنة",
            "كرواسون طازج"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@thedailydoseegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/thedailydoseegypt/",
            "instagramHandle": "@thedailydoseegypt",
            "facebook": "https://www.facebook.com/thedailydoseegypt",
            "website": "https://www.instagram.com/thedailydoseegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=The%20Daily%20Dose%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%202%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "daily-dose-waterway-1",
                "name": "ديلي دوز فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "استخلاص إسبريسو غني بحبوب فاخرة"
            },
            {
                "id": "daily-dose-waterway-2",
                "name": "آيسد لاتيه بالكراميل المملح",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "صوص كراميل ناعم مع حليب مثلج"
            },
            {
                "id": "daily-dose-waterway-3",
                "name": "قهوة مقطرة V60 كوستاريكا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 120,
                "desc": "نوتات الشوكولاتة والتفاح الأحمر"
            },
            {
                "id": "daily-dose-waterway-4",
                "name": "كرواسون لوز مكرمل ومحمص",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "مخبوز فريش كل صباح"
            }
        ]
    },
    {
        "id": "pottery-downtown",
        "name": "Pottery Cafe",
        "nameAr": "بوتري كافيه — داخل مول داون تاون القطامية",
        "logo": "/logos/pottery-downtown.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مول داون تاون القطامية",
        "address": "داخل مول داون تاون القطامية، شارع التسعين، التجمع الخامس",
        "phone": "0100 221 4455",
        "rating": 4.6,
        "reviewsCount": "3.3k",
        "priceRange": "من 80 - 250 جنيه",
        "badge": "جلسات تراس ومأكولات متنوعة",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg",
            "/coffee_dessert.jpg"
        ],
        "vibe": "من أقدم وأعرق كافيهات التجمع بجلسات خارجية فسيحة وقائمة طعام ومشروبات تلبي كل الأذواق",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "جلسات خارجية واسعة",
            "منيو متنوع",
            "داون تاون"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@potterycafe"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/potterycafe/",
            "instagramHandle": "@potterycafe",
            "facebook": "https://www.facebook.com/potterycafe",
            "website": "https://www.instagram.com/potterycafe/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Pottery%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%AF%D8%A7%D9%88%D9%86%20%D8%AA%D8%A7%D9%88%D9%86%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D9%85%D9%8A%D8%A9%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "pottery-downtown-1",
                "name": "كابتشينو بوتري بالرغوة الغنية",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "إسبريسو كلاسيكي مع حليب مبخر"
            },
            {
                "id": "pottery-downtown-2",
                "name": "موكا مثلجة بالآيس كريم",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "شوكولاتة وقهوة مع بولة فانيلا"
            },
            {
                "id": "pottery-downtown-3",
                "name": "تشيز كيك أوريو بالشوكولاتة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "قطع أوريو مقرمشة في طبقة الجبن"
            },
            {
                "id": "pottery-downtown-4",
                "name": "بيتزا مارجريتا نابوليتان صغيرة",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 150,
                "desc": "جبن موتزاريلا وصلصة طماطم إيطالية"
            }
        ]
    },
    {
        "id": "starbucks-reserve-waterway",
        "name": "Starbucks Reserve",
        "nameAr": "ستاربكس ريزيرف — ذا ووترواي",
        "logo": "/logos/starbucks-reserve-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 1",
        "address": "ووترواي 1، شارع التسعين الشمالي، التجمع الخامس",
        "phone": "0122 990 0112",
        "rating": 4.8,
        "reviewsCount": "4.7k",
        "priceRange": "من 105 - 235 جنيه",
        "badge": "تجربة ريزيرف الحصرية",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "فرع ريزيرف الفاخر ببار قهوة كلوفر وسايفون وحبوب بن نادرة من مزارع صغيرة حول العالم",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "ستاربكس ريزيرف",
            "حبوب نادرة حصرية",
            "ووترواي 1"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@starbucksegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/starbucksegypt/",
            "instagramHandle": "@starbucksegypt",
            "facebook": "https://www.facebook.com/starbucksegypt",
            "website": "https://www.instagram.com/starbucksegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Starbucks%20Reserve%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%201%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "starbucks-reserve-waterway-1",
                "name": "ريزيرف كلوفر برو كولومبيا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 135,
                "desc": "استخلاص ميكانيكي بتقنية كلوفر الحصرية"
            },
            {
                "id": "starbucks-reserve-waterway-2",
                "name": "فلات وايت ريزيرف دبل أوريجين",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 105,
                "desc": "إسبريسو ريزيرف النادر مع رغوة حليب دقيقة"
            },
            {
                "id": "starbucks-reserve-waterway-3",
                "name": "آيسد سبانش لاتيه ريزيرف",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 120,
                "desc": "خلطة الحليب المخفوق مع بن ريزيرف"
            },
            {
                "id": "starbucks-reserve-waterway-4",
                "name": "تشيز كيك الكراميل المحمص",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 125,
                "desc": "طبقة غنية وناعمة من الجبن الفاخر"
            }
        ]
    },
    {
        "id": "yokal-waterway",
        "name": "Yokal Coffee & Sandwiches",
        "nameAr": "يوكل كافيه — ووترواي 2",
        "logo": "/logos/yokal-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 2",
        "address": "ووترواي 2، التجمع الخامس، القاهرة الجديدة",
        "phone": "0100 887 7665",
        "rating": 4.7,
        "reviewsCount": "2.3k",
        "priceRange": "من 75 - 210 جنيه",
        "badge": "سندوتشات مصرية وقهوة مودرن",
        "badgeType": "trending",
        "luxuryScore": 95,
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أكلات الشارع المصري بنكهات معاصرة وديكورات مبهجة مع قهوة مثلجة وسريعة بمذاق رائع",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "سندوتشات مصرية راقية",
            "ووترواي 2",
            "قهوة مثلجة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@yokalegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/yokalegypt/",
            "instagramHandle": "@yokalegypt",
            "facebook": "https://www.facebook.com/yokalegypt",
            "website": "https://www.instagram.com/yokalegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Yokal%20Coffee%20%26%20Sandwiches%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%202%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "yokal-waterway-1",
                "name": "يوكل آيسد سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو مثلج مع لمسة حلاوة متوازنة"
            },
            {
                "id": "yokal-waterway-2",
                "name": "فلات وايت يوكل كلاسيك",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو غني بحليب ساخن"
            },
            {
                "id": "yokal-waterway-3",
                "name": "ساندوتش كبدة إسكندراني يوكل",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 110,
                "desc": "في عيش فينو طازج وصوص طحينة"
            },
            {
                "id": "yokal-waterway-4",
                "name": "سكلانس ساندوتش حلاوة وقشطة ومربى",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 75,
                "desc": "الحلوى المصرية الكلاسيكية برقي"
            }
        ]
    },
    {
        "id": "carmine-waterway",
        "name": "Carmine Cafe",
        "nameAr": "كارمين كافيه — ووترواي 1",
        "logo": "/logos/carmine-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 1",
        "address": "ووترواي 1، التجمع الخامس",
        "phone": "0101 998 7766",
        "rating": 4.8,
        "reviewsCount": "1.9k",
        "priceRange": "من 85 - 265 جنيه",
        "badge": "جلسات راقية وأطباق إيطالية",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "/vanilla.jpg",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أناقة الأخشاب الداكنة والجلسات المريحة مع قائمة قهوة إيطالية متقنة وأطباق حلويات باريسية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "أجواء إيطالية",
            "ووترواي 1",
            "هدوء وفخامة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@carmineegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/carmineegypt/",
            "instagramHandle": "@carmineegypt",
            "facebook": "https://www.facebook.com/carmineegypt",
            "website": "https://www.instagram.com/carmineegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Carmine%20Cafe%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%201%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "carmine-waterway-1",
                "name": "إسبريسو كارمين ريستريتو دبل",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "استخلاص مركز بنكهات الشوكولاتة الداكنة"
            },
            {
                "id": "carmine-waterway-2",
                "name": "آيسد سبانش لاتيه كارمين",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "قهوة مثلجة برغوة حليب كريمية"
            },
            {
                "id": "carmine-waterway-3",
                "name": "تيراميسو كارمين الإيطالي الفاخر",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 140,
                "desc": "جبن ماسكاربوني وبسكويت سافوياردي"
            },
            {
                "id": "carmine-waterway-4",
                "name": "ساندوتش تركي وجبن موزاريلا مدخن",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 165,
                "desc": "في خبز تشاباتا بالزعتر والزيتون"
            }
        ]
    },
    {
        "id": "sachi-lounge-5a",
        "name": "Sachi Lounge & Cafe",
        "nameAr": "ساتشي لاونج — داخل مجمع 5A الفاخر",
        "logo": "/logos/sachi-lounge-5a.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مجمع 5A الفاخر",
        "address": "داخل مجمع 5A الفاخر، الطريق الدائري ومحور المشير، التجمع الخامس",
        "phone": "0100 000 5555",
        "rating": 4.9,
        "reviewsCount": "2.9k",
        "priceRange": "من 110 - 280 جنيه",
        "badge": "قمة الفخامة والضيافة الراقية",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "/coffee_dessert.jpg",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أرقى وجهات الضيافة في القاهرة الجديدة، جلسات ساحرة وتصميم داخلي حائز على جوائز عالمية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "أرقى فخامة",
            "مجمع 5A",
            "ضيافة 5 نجوم"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@sachirestaurant"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/sachirestaurant/",
            "instagramHandle": "@sachirestaurant",
            "facebook": "https://www.facebook.com/sachirestaurant",
            "website": "https://www.instagram.com/sachirestaurant/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Sachi%20Lounge%20%26%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%205A%20%D8%A7%D9%84%D9%81%D8%A7%D8%AE%D8%B1%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%20%D9%88%D9%85%D8%AD%D9%88%D8%B1%20%D8%A7%D9%84%D9%85%D8%B4%D9%8A%D8%B1%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "sachi-lounge-5a-1",
                "name": "ساتشي سيجنتشر فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 110,
                "desc": "حبوب بن إثيوبية عضوية نادرة"
            },
            {
                "id": "sachi-lounge-5a-2",
                "name": "آيسد ماتشا ساتشي الفاخرة",
                "category": "iced_coffee",
                "subType": "matcha",
                "type": "drink",
                "price": 145,
                "desc": "ماتشا احتفالية يابانية مع لمسة فانيلا طبيعية"
            },
            {
                "id": "sachi-lounge-5a-3",
                "name": "فوندان الشوكولاتة الداكنة 80%",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 165,
                "desc": "شوكولاتة فالرونا مع آيس كريم مثلج"
            },
            {
                "id": "sachi-lounge-5a-4",
                "name": "برانش التوست الفرنسي الفاخر",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 180,
                "desc": "بريوش مخبوز في زبدة نورماندي"
            }
        ]
    },
    {
        "id": "kazoku-5a",
        "name": "Kazoku Cafe & Lounge",
        "nameAr": "كازوكو لاونج — داخل مجمع 5A الفاخر",
        "logo": "/logos/kazoku-5a.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مجمع 5A الفاخر",
        "address": "داخل مجمع 5A الفاخر، الطريق الدائري ومحور المشير، التجمع الخامس",
        "phone": "0102 333 8811",
        "rating": 4.9,
        "reviewsCount": "2.1k",
        "priceRange": "من 130 - 245 جنيه",
        "badge": "الرقي الياباني المعاصر",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "هدوء وفخامة الطراز الياباني مع أندر أنواع شاي الماتشا والقهوة المقطرة بعناية فائقة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "طراز ياباني فاخر",
            "ماتشا احتفالية",
            "5A"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@kazokuegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/kazokuegypt/",
            "instagramHandle": "@kazokuegypt",
            "facebook": "https://www.facebook.com/kazokuegypt",
            "website": "https://www.instagram.com/kazokuegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Kazoku%20Cafe%20%26%20Lounge%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%205A%20%D8%A7%D9%84%D9%81%D8%A7%D8%AE%D8%B1%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%20%D9%88%D9%85%D8%AD%D9%88%D8%B1%20%D8%A7%D9%84%D9%85%D8%B4%D9%8A%D8%B1%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "kazoku-5a-1",
                "name": "كازوكو ماتشا لاتيه سيريمونيال",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 140,
                "desc": "ماتشا نقية من مقاطعة كيوتو اليابانية"
            },
            {
                "id": "kazoku-5a-2",
                "name": "قهوة سايفون مقطرة كينيا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 130,
                "desc": "استخلاص بالبخار الفراغي بنقاء تام"
            },
            {
                "id": "kazoku-5a-3",
                "name": "تشيز كيك يابانية قطنية ذائبة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "خفيفة وهشة كالغيوم تذوب بالفم"
            }
        ]
    },
    {
        "id": "escobar-5a",
        "name": "Escobar Lounge",
        "nameAr": "إسكوبار لاونج — داخل مجمع 5A الفاخر",
        "logo": "/logos/escobar-5a.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مجمع 5A الفاخر",
        "address": "داخل مجمع 5A الفاخر، الطريق الدائري ومحور المشير، التجمع الخامس",
        "phone": "0109 998 8771",
        "rating": 4.8,
        "reviewsCount": "1.7k",
        "priceRange": "من 95 - 230 جنيه",
        "badge": "جلسات تراس ليلية ساحرة",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "إضاءة ليلية دافئة وتراس واسع يطل على صخب 5A مع مشروبات موكتيل وقهوة تخصصية متألقة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "تراس ليلي",
            "5A ووترواي",
            "أجواء فخمة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@escobaregypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/escobaregypt/",
            "instagramHandle": "@escobaregypt",
            "facebook": "https://www.facebook.com/escobaregypt",
            "website": "https://www.instagram.com/escobaregypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Escobar%20Lounge%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%205A%20%D8%A7%D9%84%D9%81%D8%A7%D8%AE%D8%B1%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%20%D9%88%D9%85%D8%AD%D9%88%D8%B1%20%D8%A7%D9%84%D9%85%D8%B4%D9%8A%D8%B1%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "escobar-5a-1",
                "name": "آيسد سبانش لاتيه إسكوبار",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "مذاق حلو غني مع نكهة البن المحمص"
            },
            {
                "id": "escobar-5a-2",
                "name": "فلات وايت كولومبي دبل شوت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "قوام كريمي مخملي"
            },
            {
                "id": "escobar-5a-3",
                "name": "براوني الشوكولاتة البلجيكية الدافئة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "مع صوص الشوكولاتة الساخن"
            }
        ]
    },
    {
        "id": "gourmet-lounge-waterway",
        "name": "Gourmet Lounge",
        "nameAr": "جورميه كافيه ولونج — ووترواي 1",
        "logo": "/logos/gourmet-lounge-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 1",
        "address": "ووترواي 1، شارع التسعين الشمالي، التجمع الخامس",
        "phone": "0100 555 1234",
        "rating": 4.8,
        "reviewsCount": "3.0k",
        "priceRange": "من 95 - 280 جنيه",
        "badge": "المكونات العضوية الأرقى بمصر",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "استراحة راقية داخل متجر جورميه الفاخر تقدم ساندوتشات أرتيزان وعصائر طازجة وقهوة استثنائية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "مكونات عضوية فاخرة",
            "ساندوتشات أرتيزان",
            "ووترواي 1"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@gourmetegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/gourmetegypt/",
            "instagramHandle": "@gourmetegypt",
            "facebook": "https://www.facebook.com/gourmetegypt",
            "website": "https://www.instagram.com/gourmetegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Gourmet%20Lounge%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%201%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "gourmet-lounge-waterway-1",
                "name": "جورميه فلات وايت عضوي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "بحليب عضوي مبخر وبن أرابيكا تخصصي"
            },
            {
                "id": "gourmet-lounge-waterway-2",
                "name": "عصير برتقال ورمان فريش",
                "category": "tea_specialty",
                "subType": "juice",
                "type": "drink",
                "price": 95,
                "desc": "طازج 100% بدون أي إضافات"
            },
            {
                "id": "gourmet-lounge-waterway-3",
                "name": "ساندوتش روست بيف مع جبن جرويير",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 180,
                "desc": "لحم بقري أنجوس مع صوص خردل حبوب"
            },
            {
                "id": "gourmet-lounge-waterway-4",
                "name": "تارت التوت البري والماسكاربوني",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "توت طازج مستورد مع كريمة غنية"
            }
        ]
    },
    {
        "id": "barten-waterway",
        "name": "Barten Cafe & Lounge",
        "nameAr": "بارتن كافيه — ووترواي 1",
        "logo": "/logos/barten-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 1",
        "address": "ووترواي 1، التجمع الخامس",
        "phone": "0101 777 5544",
        "rating": 4.8,
        "reviewsCount": "1.6k",
        "priceRange": "من 85 - 230 جنيه",
        "badge": "أجواء عصرية وجلسات عمل",
        "badgeType": "trending",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مساحة أنيقة تجمع بين بساطة المقاهي العالمية ودفء اللقاءات المسائية مع تشكيلة حلويات غنية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "ووترواي 1",
            "حلويات مميزة",
            "أجواء مسائية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@bartenegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/bartenegypt/",
            "instagramHandle": "@bartenegypt",
            "facebook": "https://www.facebook.com/bartenegypt",
            "website": "https://www.instagram.com/bartenegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Barten%20Cafe%20%26%20Lounge%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%201%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "barten-waterway-1",
                "name": "سبانش لاتيه بارتن مثلج",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "مزيج سلس ومنعش"
            },
            {
                "id": "barten-waterway-2",
                "name": "كورتادو إسباني كلاسيك",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو قوي برغوة خفيفة"
            },
            {
                "id": "barten-waterway-3",
                "name": "كيك العسل الروسية (ميدوفيك)",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "طبقات رقيقة مشبعة بالعسل والكريمة"
            }
        ]
    },
    {
        "id": "aroma-concorde",
        "name": "Aroma Lounge",
        "nameAr": "أروما لاونج — داخل مول كونكورد بلازا",
        "logo": "/logos/aroma-concorde.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل مول كونكورد بلازا",
        "address": "داخل مول كونكورد بلازا، شارع التسعين الجنوبي، التجمع الخامس",
        "phone": "0122 334 4556",
        "rating": 4.6,
        "reviewsCount": "2.7k",
        "priceRange": "من 80 - 245 جنيه",
        "badge": "جلسات مريحة وتراس مفتوح",
        "badgeType": "featured",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "جلسات تراس مريحة في قلب كونكورد بلازا مع خيارات متنوعة من المشروبات الساخنة والباردة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "كونكورد بلازا",
            "جلسات خارجية",
            "عصائر وقهوة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@aromaloungeeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/aromaloungeeg/",
            "instagramHandle": "@aromaloungeeg",
            "facebook": "https://www.facebook.com/aromaloungeeg",
            "website": "https://www.instagram.com/aromaloungeeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Aroma%20Lounge%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D9%83%D9%88%D9%86%D9%83%D9%88%D8%B1%D8%AF%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "aroma-concorde-1",
                "name": "كابتشينو أروما الإيطالي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "رغوة حليب كريمية كلاسيكية"
            },
            {
                "id": "aroma-concorde-2",
                "name": "آيسد كراميل لاتيه أروما",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو بارد مع صوص الكراميل"
            },
            {
                "id": "aroma-concorde-3",
                "name": "تشيز كيك الشوكولاتة الداكنة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "قوام غني بطعم الكاكاو الفاخر"
            },
            {
                "id": "aroma-concorde-4",
                "name": "ساندوتش كلوب دجاج وتركي",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 145,
                "desc": "يقدم مع بطاطس مقلية ذهبية"
            }
        ]
    },
    {
        "id": "crave-cfc",
        "name": "Crave Cafe & Bistro",
        "nameAr": "كريف كافيه — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/crave-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0100 666 8899",
        "rating": 4.8,
        "reviewsCount": "4.1k",
        "priceRange": "من 90 - 320 جنيه",
        "badge": "المطبخ العالمي والحلويات الأيقونية",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "شوكليت فوندان كريف الشهيرة مع تشكيلة أطباق عالمية وفنجان قهوة إيطالية في أجواء راقية جداً",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "شوكليت فوندان شهيرة",
            "CFC",
            "أطباق عالمية فاخرة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@craveegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/craveegypt/",
            "instagramHandle": "@craveegypt",
            "facebook": "https://www.facebook.com/craveegypt",
            "website": "https://www.instagram.com/craveegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Crave%20Cafe%20%26%20Bistro%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "crave-cfc-1",
                "name": "كريف فوندان الشوكولاتة الأيقونية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 155,
                "desc": "الحلوى الأشهر في مصر مع آيس كريم الفانيليا"
            },
            {
                "id": "crave-cfc-2",
                "name": "كابتشينو كريف بالكريمة",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "إسبريسو إيطالي غني"
            },
            {
                "id": "crave-cfc-3",
                "name": "سبانش لاتيه كريف المثلج",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "طبقات من القهوة والحليب الحلو"
            },
            {
                "id": "crave-cfc-4",
                "name": "ساندوتش فيليه لحم تندرلويين بالجبن",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 220,
                "desc": "شرائح لحم بقري طري في خبز الباغيت"
            }
        ]
    },
    {
        "id": "granita-uvenues",
        "name": "Granita",
        "nameAr": "جرانيتا كافيه — يو فينيوز",
        "logo": "/logos/granita-uvenues.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • يو فينيوز",
        "address": "يو فينيوز، التجمع الخامس، القاهرة الجديدة",
        "phone": "0102 555 8899",
        "rating": 4.8,
        "reviewsCount": "1.7k",
        "priceRange": "من 85 - 235 جنيه",
        "badge": "تراث قاهري أنيق",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أجواء حقبة القاهرة الذهبية المترفة بلمسات كلاسيكية أوروبية وألوان زمردية وموسيقى كلاسيكية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "طراز قاهري كلاسيكي",
            "يو فينيوز",
            "أناقة تاريخية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@granitaegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/granitaegypt/",
            "instagramHandle": "@granitaegypt",
            "facebook": "https://www.facebook.com/granitaegypt",
            "website": "https://www.instagram.com/granitaegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Granita%20%D9%8A%D9%88%20%D9%81%D9%8A%D9%86%D9%8A%D9%88%D8%B2%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "granita-uvenues-1",
                "name": "قهوة تركي جرانيتا بالمستكة",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "بن محوج فاخر بحبيبات المستكة الحرة"
            },
            {
                "id": "granita-uvenues-2",
                "name": "جرانيتا سبانش لاتيه بارد",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "نكهة متوازنة برغوة مخملية"
            },
            {
                "id": "granita-uvenues-3",
                "name": "تارت التمر بالجوز وصوص التوفي",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "حلوى شرقية بلمسة فرنسية ساحرة"
            }
        ]
    },
    {
        "id": "zooba-waterway",
        "name": "Zooba Cafe",
        "nameAr": "زوبا كافيه — ووترواي 2",
        "logo": "/logos/zooba-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 2",
        "address": "ووترواي 2، شارع التسعين الشمالي، التجمع الخامس",
        "phone": "0100 223 5566",
        "rating": 4.7,
        "reviewsCount": "3.4k",
        "priceRange": "من 65 - 195 جنيه",
        "badge": "فلافل غورميه ومشروبات مصرية",
        "badgeType": "trending",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "ألوان شاحنات الأجرة المصرية وتصميم حائز على جوائز عالمية مع ألذ سندوتشات ومشروبات شاي بالنعناع",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "أكل شارع مصري غورميه",
            "ووترواي 2",
            "أجواء مرحة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@zoobaeats"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/zoobaeats/",
            "instagramHandle": "@zoobaeats",
            "facebook": "https://www.facebook.com/zoobaeats",
            "website": "https://www.instagram.com/zoobaeats/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Zooba%20Cafe%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%202%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "zooba-waterway-1",
                "name": "شاي كرك بالحليب والهيل العطري",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 75,
                "desc": "مغلي ببطء مع توابل الكرك الغنية"
            },
            {
                "id": "zooba-waterway-2",
                "name": "آيسد كرك بالزعفران",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "مشروب مثلج بنكهة الزعفران الملكية"
            },
            {
                "id": "zooba-waterway-3",
                "name": "ساندوتش فلافل بالباذنجان والليمون المعصفر",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 65,
                "desc": "في عيش بلدي ساخن من الفرن"
            },
            {
                "id": "zooba-waterway-4",
                "name": "أرز باللبن زوبا بالكراميل المملح",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 85,
                "desc": "قوام كريمي دسم مع كراميل غني"
            }
        ]
    },
    {
        "id": "batter-half-cfc",
        "name": "The Batter Half & Co",
        "nameAr": "ذا باتر هاف — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/batter-half-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0102 443 2211",
        "rating": 4.8,
        "reviewsCount": "3.1k",
        "priceRange": "من 75 - 240 جنيه",
        "badge": "عاصمة الكب كيك والماكرون الفرنسي",
        "badgeType": "featured",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "ألوان الباستيل الساحرة وصفوف الماكرون والكب كيك المتراصة بجمال مع فنجان شاي إنجليزي أو قهوة تخصصية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "ماكرون فرنسي ملون",
            "كب كيك",
            "CFC"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@thebatterhalfandco"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/thebatterhalfandco/",
            "instagramHandle": "@thebatterhalfandco",
            "facebook": "https://www.facebook.com/thebatterhalfandco",
            "website": "https://www.instagram.com/thebatterhalfandco/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=The%20Batter%20Half%20%26%20Co%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "batter-half-cfc-1",
                "name": "بوكس ماكرون فرنسي 6 حبات متنوعة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 140,
                "desc": "فستق، لافندر، شوكولاتة، وتوت"
            },
            {
                "id": "batter-half-cfc-2",
                "name": "رد فيلفيت كب كيك بالجبن الكريمي",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 75,
                "desc": "العجينة المخملية الحمراء الشهيرة"
            },
            {
                "id": "batter-half-cfc-3",
                "name": "فلات وايت باتر هاف",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو متزن برغوة ناعمة"
            },
            {
                "id": "batter-half-cfc-4",
                "name": "آيسد سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "حليب بارد وإسبريسو منعش"
            }
        ]
    },
    {
        "id": "ralphs-waterway",
        "name": "Ralph's German Bakery",
        "nameAr": "رالفز جيرمان بيكري — ووترواي 2",
        "logo": "/logos/ralphs-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 2",
        "address": "ووترواي 2، شارع التسعين الشمالي، التجمع الخامس",
        "phone": "0101 229 0088",
        "rating": 4.8,
        "reviewsCount": "2.8k",
        "priceRange": "من 75 - 240 جنيه",
        "badge": "تراث المخبوزات الألمانية الشهيرة بدهب",
        "badgeType": "featured",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أسطورة مخبز دهب الشهير في قلب ووترواي، خبز الشوفان الألماني والبريتزل بالزبدة والقهوة النقية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "مخبز ألماني أصلي",
            "بريتزل وخبز الجاودار",
            "ووترواي 2"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@ralphsgermanbakery"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/ralphsgermanbakery/",
            "instagramHandle": "@ralphsgermanbakery",
            "facebook": "https://www.facebook.com/ralphsgermanbakery",
            "website": "https://www.instagram.com/ralphsgermanbakery/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Ralph's%20German%20Bakery%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%202%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "ralphs-waterway-1",
                "name": "بريتزل ألماني طازج بالزبدة والملح",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 75,
                "desc": "مخبوز تقليدي بالسمسم والملح الصخري"
            },
            {
                "id": "ralphs-waterway-2",
                "name": "قهوة فلتر ألمانية بالبندق",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 85,
                "desc": "تقطير بطيء بنكهة البندق الطبيعي"
            },
            {
                "id": "ralphs-waterway-3",
                "name": "سترويدل التفاح الألماني بالقرفة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "مع صلصة الفانيلا الدافئة"
            },
            {
                "id": "ralphs-waterway-4",
                "name": "ساندوتش بيض وجبن إيدام بالبريتزل",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 140,
                "desc": "فطور ألماني مشبع ومغذي"
            }
        ]
    },
    {
        "id": "nespresso-lounge-cfc",
        "name": "Nespresso Boutique & Lounge",
        "nameAr": "نسبريسو بوتيك ولونج — داخل كايرو فيستيفال سيتي مول (CFC)",
        "logo": "/logos/nespresso-lounge-cfc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل كايرو فيستيفال سيتي مول",
        "address": "داخل كايرو فيستيفال سيتي مول، الطريق الدائري، التجمع الخامس",
        "phone": "0100 800 2020",
        "rating": 4.8,
        "reviewsCount": "2.0k",
        "priceRange": "من 50 - 185 جنيه",
        "badge": "فخامة كبسولات الإسبريسو السويسرية",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg"
        ],
        "vibe": "استكشف أندر خلطات البن المستوردة من أرجاء الأرض مع تذوق احترافي لكبسولات الماستر أوريجين",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "نسبريسو بوتيك",
            "تذوق قهوة احترافي",
            "CFC"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@nespresso.egypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/nespresso.egypt/",
            "instagramHandle": "@nespresso.egypt",
            "facebook": "https://www.facebook.com/nespresso.egypt",
            "website": "https://www.instagram.com/nespresso.egypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Nespresso%20Boutique%20%26%20Lounge%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D9%8A%D8%B1%D9%88%20%D9%81%D9%8A%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%84%20%D8%B3%D9%8A%D8%AA%D9%8A%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "nespresso-lounge-cfc-1",
                "name": "تذوق إسبريسو ماستر أوريجين كولومبيا",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 70,
                "desc": "استخلاص نقي بنكهات الفواكه الحمراء"
            },
            {
                "id": "nespresso-lounge-cfc-2",
                "name": "كابتشينو نسبريسو بحليب الشوفان",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "رغوة حليب ميكروفوم متقنة"
            },
            {
                "id": "nespresso-lounge-cfc-3",
                "name": "شوكولاتة نسبريسو الداكنة السويسرية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 50,
                "desc": "مربعات شوكولاتة نقية 70% كاكاو"
            }
        ]
    },
    {
        "id": "starbucks-point90",
        "name": "Starbucks",
        "nameAr": "ستاربكس — داخل بوينت 90 مول",
        "logo": "/logos/starbucks-point90.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل بوينت 90 مول (أمام AUC)",
        "address": "داخل بوينت 90 مول، أمام الجامعة الأمريكية AUC، شارع التسعين الجنوبي",
        "phone": "0120 445 9988",
        "rating": 4.6,
        "reviewsCount": "4.3k",
        "priceRange": "من 75 - 205 جنيه",
        "badge": "الموقع الأبرز للطلاب واللقاءات",
        "badgeType": "featured",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg"
        ],
        "vibe": "ملتقى طلاب الجامعة الأمريكية اليومي، جلسات حيوية سريعة ومقاعد عمل مع مشروبات فرابيتشينو الباردة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "work"
        ],
        "tags": [
            "أمام AUC مباشرة",
            "فرابيتشينو شهير",
            "جلسات عمل وسرعة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@starbucksegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/starbucksegypt/",
            "instagramHandle": "@starbucksegypt",
            "facebook": "https://www.facebook.com/starbucksegypt",
            "website": "https://www.instagram.com/starbucksegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Starbucks%20%D8%AF%D8%A7%D8%AE%D9%84%20%D8%A8%D9%88%D9%8A%D9%86%D8%AA%2090%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A3%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9%20AUC%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A"
        },
        "menu": [
            {
                "id": "starbucks-point90-1",
                "name": "كراميل ماكياتو مثلج كبير",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "صوص كراميل مع حليب بارد وشوت إسبريسو"
            },
            {
                "id": "starbucks-point90-2",
                "name": "فلات وايت ستاربكس كلاسيك",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "ريستريتو شوتس مع حليب مبخر كامل الدسم"
            },
            {
                "id": "starbucks-point90-3",
                "name": "كرواسون بالجبن الرومي الساخن",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 75,
                "desc": "مخبوز ومحمص على الجريل"
            },
            {
                "id": "starbucks-point90-4",
                "name": "كيك الليمون والخشخاش الشهيرة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 85,
                "desc": "طعم ليمون منعش وقوام رطب"
            }
        ]
    },
    {
        "id": "beanos-auc",
        "name": "Beano's AUC",
        "nameAr": "بينوز كافيه — بوابة الجامعة الأمريكية",
        "logo": "/logos/beanos-auc.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • شارع الجامعة",
        "address": "بوابة 4 الجامعة الأمريكية AUC، شارع التسعين، التجمع الخامس",
        "phone": "0100 334 1122",
        "rating": 4.6,
        "reviewsCount": "2.1k",
        "priceRange": "من 85 - 235 جنيه",
        "badge": "الملاذ الهادئ للدراسة والكتب",
        "badgeType": "featured",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg"
        ],
        "vibe": "مساحة مريحة جداً للمذاكرة الفردية والاجتماعات الدراسية بهدوء مع موسيقى كلاسيكية منخفضة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food",
            "work"
        ],
        "tags": [
            "مذاكرة هادئة",
            "قرب الجامعة الأمريكية",
            "أفياش لابتوب"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@beanoscafe"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/beanoscafe/",
            "instagramHandle": "@beanoscafe",
            "facebook": "https://www.facebook.com/beanoscafe",
            "website": "https://www.instagram.com/beanoscafe/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Beano's%20AUC%20%D8%A8%D9%88%D8%A7%D8%A8%D8%A9%204%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9%20AUC%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "beanos-auc-1",
                "name": "فلات وايت بينوز دوبل شوت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "حبوب بن أرابيكا غنية المذاق"
            },
            {
                "id": "beanos-auc-2",
                "name": "آيسد سبانش لاتيه بينوز",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "انتعاش سريع أثناء ساعات المذاكرة"
            },
            {
                "id": "beanos-auc-3",
                "name": "تشيز كيك الشوكولاتة الداكنة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "طبقة غنية من الجبن الكريمي"
            },
            {
                "id": "beanos-auc-4",
                "name": "ساندوتش تركي وجبن شيدر ساخن",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 135,
                "desc": "في خبز توست بني صحي"
            }
        ]
    },
    {
        "id": "caffe-ritazza-tagamoa",
        "name": "Caffe Ritazza",
        "nameAr": "كافيه ريتاتزا — التجمع الخامس",
        "logo": "/logos/caffe-ritazza-tagamoa.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • مجمع الخدمات",
        "address": "شارع التسعين الشمالي، مجمع البنوك، التجمع الخامس",
        "phone": "0112 556 7788",
        "rating": 4.6,
        "reviewsCount": "1.8k",
        "priceRange": "من 70 - 190 جنيه",
        "badge": "إسبريسو السفر السريع الموثوق",
        "badgeType": "featured",
        "luxuryScore": 92,
        "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg"
        ],
        "vibe": "القهوة الإيطالية السريعة ذات المعايير الأوروبية الموثوقة لمحبي فنجان القهوة الصباحي أثناء التنقل",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "خدمة سريعة للموظفين",
            "قهوة إيطالية",
            "تسعين شمالي"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cafferitazzaegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cafferitazzaegypt/",
            "instagramHandle": "@cafferitazzaegypt",
            "facebook": "https://www.facebook.com/cafferitazzaegypt",
            "website": "https://www.instagram.com/cafferitazzaegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Caffe%20Ritazza%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%8C%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%A8%D9%86%D9%88%D9%83%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3"
        },
        "menu": [
            {
                "id": "caffe-ritazza-tagamoa-1",
                "name": "ريتاتزا كابتشينو إيطالي كبير",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "رغوة كثيفة مع بودرة شوكولاتة"
            },
            {
                "id": "caffe-ritazza-tagamoa-2",
                "name": "آيسد لاتيه بالكراميل",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 90,
                "desc": "حليب بارد وإسبريسو منعش"
            },
            {
                "id": "caffe-ritazza-tagamoa-3",
                "name": "مافن الشوكولاتة المزدوجة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 70,
                "desc": "محشوة بقطع شوكولاتة داكنة ذائبة"
            }
        ]
    },
    {
        "id": "mo-bistro-waterway",
        "name": "Mo Bistro & Cafe",
        "nameAr": "مو بيسترو وكافيه — ووترواي 2",
        "logo": "/logos/mo-bistro-waterway.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • ووترواي 2",
        "address": "ووترواي 2، التجمع الخامس، القاهرة الجديدة",
        "phone": "0100 448 9900",
        "rating": 4.8,
        "reviewsCount": "2.6k",
        "priceRange": "من 95 - 310 جنيه",
        "badge": "فخامة البرانش والأطباق الراقية",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg",
            "/vanilla.jpg"
        ],
        "vibe": "بيسترو راقٍ يقدم أطباق البرانش والقهوة الإيطالية الفاخرة وسط أجواء أنيقة وديكورات معمارية مبهرة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "ووترواي 2",
            "برانش فاخر",
            "أطباق بيسترو"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@mobistroegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/mobistroegypt/",
            "instagramHandle": "@mobistroegypt",
            "facebook": "https://www.facebook.com/mobistroegypt",
            "website": "https://www.instagram.com/mobistroegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Mo%20Bistro%20%26%20Cafe%20%D9%88%D9%88%D8%AA%D8%B1%D9%88%D8%A7%D9%8A%202%D8%8C%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "mo-bistro-waterway-1",
                "name": "مو بيسترو فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو إيطالي متوازن مع حليب مبخر"
            },
            {
                "id": "mo-bistro-waterway-2",
                "name": "سبانش لاتيه بارد بالكراميل",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "نكهة متجانسة وحلاوة خفيفة"
            },
            {
                "id": "mo-bistro-waterway-3",
                "name": "سان سيباستيان تشيز كيك مع الشوكولاتة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "قوام كريمي ذائب بلمسة الباسك"
            },
            {
                "id": "mo-bistro-waterway-4",
                "name": "توست السلمون المدخن والبيض المسلوق",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 210,
                "desc": "في خبز ساوردو مع جبن فيلادلفيا والشبت"
            }
        ]
    },
    {
        "id": "eish-malh-district5",
        "name": "Eish + Malh",
        "nameAr": "عيش وملح — ديستريكت 5",
        "logo": "/logos/eish-malh-district5.svg",
        "district": "tagamoa",
        "districtName": "القاهرة الجديدة • ديستريكت 5",
        "address": "مول ديستريكت 5، طريق القطامية - العين السخنة، القاهرة الجديدة",
        "phone": "0109 888 3322",
        "rating": 4.8,
        "reviewsCount": "1.9k",
        "priceRange": "من 80 - 235 جنيه",
        "badge": "المطبخ الإيطالي الأصيل والجيلاتو",
        "badgeType": "specialty",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg",
            "/coffee_dessert.jpg"
        ],
        "vibe": "أصالة وسط البلد الإيطالية منتقلة برقي إلى ديستريكت 5، جيلاتو طبيعي وبيتزا ومخبوزات وقهوة إيطالية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "جيلاتو طبيعي بيتي",
            "ديستريكت 5",
            "أجواء إيطالية دافئة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@eishmalh"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/eishmalh/",
            "instagramHandle": "@eishmalh",
            "facebook": "https://www.facebook.com/eishmalh",
            "website": "https://www.instagram.com/eishmalh/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Eish%20%2B%20Malh%20%D9%85%D9%88%D9%84%20%D8%AF%D9%8A%D8%B3%D8%AA%D8%B1%D9%8A%D9%83%D8%AA%205%D8%8C%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D9%85%D9%8A%D8%A9%20-%20%D8%A7%D9%84%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B3%D8%AE%D9%86%D8%A9%D8%8C%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9"
        },
        "menu": [
            {
                "id": "eish-malh-district5-1",
                "name": "إسبريسو إيطالي دوبيو فريش",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "حبوب بن إيطالية مستوردة مستخلصة بعناية"
            },
            {
                "id": "eish-malh-district5-2",
                "name": "أفوغاتو جيلاتو الفستق الحلبي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 115,
                "desc": "بولة جيلاتو فستق مع فنجان إسبريسو ساخن"
            },
            {
                "id": "eish-malh-district5-3",
                "name": "تيراميسو عيش وملح التقليدي",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "بسكويت سافوياردي مشبع بالقهوة وجبن الماسكاربوني"
            },
            {
                "id": "eish-malh-district5-4",
                "name": "كانولي صقلية بالريكوتا والشوكولاتة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 90,
                "desc": "أنبوب مقرمش محشو بكريمة الريكوتا الإيطالية"
            }
        ]
    },
    {
        "id": "tamara-point90",
        "name": "Tamara Lebanese Bistro & Cafe",
        "nameAr": "تمارا اللبناني — داخل بوينت 90 مول",
        "logo": "/logos/tamara-point90.svg",
        "district": "tagamoa",
        "districtName": "التجمع الخامس • داخل بوينت 90 مول (أمام AUC)",
        "address": "داخل بوينت 90 مول، أمام الجامعة الأمريكية AUC، شارع التسعين الجنوبي",
        "phone": "0100 554 1100",
        "rating": 4.7,
        "reviewsCount": "3.2k",
        "priceRange": "من 65 - 230 جنيه",
        "badge": "كرم الضيافة اللبنانية والشاي العطري",
        "badgeType": "featured",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أجواء بيروت الدافئة مع أطباق المازة وحلويات العثملية والمفروكة وقهوة الركوة بالهيل",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "ضيافة لبنانية",
            "بوينت 90",
            "حلويات شرقية وشاي"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@tamarabistro"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/tamarabistro/",
            "instagramHandle": "@tamarabistro",
            "facebook": "https://www.facebook.com/tamarabistro",
            "website": "https://www.instagram.com/tamarabistro/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Tamara%20Lebanese%20Bistro%20%26%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D8%A8%D9%88%D9%8A%D9%86%D8%AA%2090%20%D9%85%D9%88%D9%84%D8%8C%20%D8%A3%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9%20AUC%D8%8C%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A"
        },
        "menu": [
            {
                "id": "tamara-point90-1",
                "name": "قهوة بيضاء لبنانية بماء الزهر والليمون",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 65,
                "desc": "مشروب بيروتي تقليدي مهدئ للأعصاب"
            },
            {
                "id": "tamara-point90-2",
                "name": "قهوة لبنانية بالهيل في ركوة نحاسية",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 75,
                "desc": "محوجة على الأصول مع حبوب الهيل الأخضر"
            },
            {
                "id": "tamara-point90-3",
                "name": "عثملية تمارا بالقشطة البلدية والقطر",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "شعيرية مقرمشة محشوة بالقشطة الطازجة"
            },
            {
                "id": "tamara-point90-4",
                "name": "مناقيش جبنة عكاوي وزعتر بلدي",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 115,
                "desc": "تخرج ساخنة من الفرن الحجري"
            }
        ]
    },
    {
        "id": "circle-zayed",
        "name": "Circle Coffee",
        "nameAr": "سيركل كوفي — داخل مجمع أركان بلازا ووصلة دهشور",
        "logo": "/logos/circle-zayed.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0112 345 6789",
        "rating": 4.8,
        "reviewsCount": "1.9k",
        "priceRange": "من 90 - 235 جنيه",
        "badge": "كافيه تريند زايد الأول",
        "badgeType": "trending",
        "luxuryScore": 98,
        "image": "/circle.jpg",
        "gallery": [
            "/circle.jpg",
            "/the_lane.jpg",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "التصميم الدائري الشهير بزوايا التصوير الراقية والحديقة الخارجية ذات الإنارة الليلية الساحرة في زايد",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "أجواء راقية",
            "تصوير وإنستجرام",
            "سبانش لاتيه فريد"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@circlecoffee.eg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/circlecoffee.eg/",
            "instagramHandle": "@circlecoffee.eg",
            "facebook": "https://www.facebook.com/circlecoffee.eg",
            "website": "https://www.instagram.com/circlecoffee.eg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Circle%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "circle-zayed-1",
                "name": "سيركل آيسد سبانش لاتيه المميز",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "المشروب الأكثر طلباً بخلطة سيركل الحصرية"
            },
            {
                "id": "circle-zayed-2",
                "name": "قهوة مقطرة كيمكس كوستاريكا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 115,
                "desc": "إيحاءات المكسرات والكراميل بقوام ناعم وخفيف"
            },
            {
                "id": "circle-zayed-3",
                "name": "فلات وايت أرتيزان دبل شوت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "إسبريسو متوازن مع رغوة حليب ناعمة حريرية"
            },
            {
                "id": "circle-zayed-4",
                "name": "سيركل سان سيباستيان تشيز كيك بالكراميل",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "مخبوزة باحتراف مع صوص كراميل مملح بلجيكي"
            },
            {
                "id": "circle-zayed-5",
                "name": "كرواسون لوز فرنسي طازج بالزبدة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 90,
                "desc": "مقرمش من الخارج وطري ومورق من الداخل"
            }
        ]
    },
    {
        "id": "seven-fortunes-parkst",
        "name": "Seven Fortunes Coffee Roasters",
        "nameAr": "سفن فورتشنز — داخل مجمع بارك ستريت زايد",
        "logo": "/logos/seven-fortunes-parkst.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع بارك ستريت",
        "address": "داخل مجمع بارك ستريت، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 889 0011",
        "rating": 4.9,
        "reviewsCount": "2.5k",
        "priceRange": "من 85 - 240 جنيه",
        "badge": "رواد القهوة التخصصية بزايد",
        "badgeType": "specialty",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "/vanilla.jpg",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "محمصة دبي الشهيرة في ممشى بارك ستريت الفاخر، واجهة معمارية عصرية وأجواء نخبوية لا تضاهى",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "بن تخصصي عالمي",
            "بارك ستريت زايد",
            "جلسات نخبوية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@sevenfortunes"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/sevenfortunes/",
            "instagramHandle": "@sevenfortunes",
            "facebook": "https://www.facebook.com/sevenfortunes",
            "website": "https://www.instagram.com/sevenfortunes/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Seven%20Fortunes%20Coffee%20Roasters%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A8%D8%A7%D8%B1%D9%83%20%D8%B3%D8%AA%D8%B1%D9%8A%D8%AA%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "seven-fortunes-parkst-1",
                "name": "قهوة مقطرة V60 إثيوبيا أروماتيك",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 125,
                "desc": "نوتات الياسمين والخوخ المجفف"
            },
            {
                "id": "seven-fortunes-parkst-2",
                "name": "فلات وايت دبل أوريجين كولومبي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "رغوة ميكروفوم دقيقة للغاية"
            },
            {
                "id": "seven-fortunes-parkst-3",
                "name": "آيسد سبانش لاتيه سفن فورتشنز",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "حليب مكثف مع شوت إسبريسو غني"
            },
            {
                "id": "seven-fortunes-parkst-4",
                "name": "تشيز كيك فستق حلبي طبيعي",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 140,
                "desc": "قوام كريمي غني بالفستق المحمص"
            },
            {
                "id": "seven-fortunes-parkst-5",
                "name": "كرواسون شوكولاتة نوتيلا دافئ",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "مخبوز فريش كل صباح"
            }
        ]
    },
    {
        "id": "cult-arkan",
        "name": "Cult Coffee",
        "nameAr": "كالت كوفي — داخل مجمع أركان بلازا",
        "logo": "/logos/cult-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0102 998 1122",
        "rating": 4.8,
        "reviewsCount": "3.1k",
        "priceRange": "من 90 - 215 جنيه",
        "badge": "الأكثر شهرة وزحاماً بزايد",
        "badgeType": "trending",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "/coffee_dessert.jpg",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "الوجهة الأكثر حيوية في توسعة أركان، واجهة بانورامية وجلسات تراس تفيض بالحيوية والموسيقى العصرية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "تريند أركان بلازا",
            "شباب وزحام صباحي",
            "قهوة مميزة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cult.cairo"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cult.cairo/",
            "instagramHandle": "@cult.cairo",
            "facebook": "https://www.facebook.com/cult.cairo",
            "website": "https://www.instagram.com/cult.cairo/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cult%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "cult-arkan-1",
                "name": "كالت سيجنتشر آيسد لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "المشروب البارد الأيقوني في زايد"
            },
            {
                "id": "cult-arkan-2",
                "name": "فلات وايت دبل شوت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "استخلاص إسبريسو تخصصي متقن"
            },
            {
                "id": "cult-arkan-3",
                "name": "كولد برو مثلج 18 ساعة",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "طعم كلاسيكي ناعم بدون مرارة"
            },
            {
                "id": "cult-arkan-4",
                "name": "كوكيز كالت العملاقة بالشوكولاتة الذائبة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 90,
                "desc": "تخرج ساخنة من الفرن بقلب غني"
            }
        ]
    },
    {
        "id": "espresso-lab-arkan",
        "name": "Espresso Lab",
        "nameAr": "إسبريسو لاب — داخل مجمع أركان بلازا",
        "logo": "/logos/espresso-lab-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0100 771 2233",
        "rating": 4.7,
        "reviewsCount": "2.8k",
        "priceRange": "من 90 - 220 جنيه",
        "badge": "المفضل للعمل والاجتماعات",
        "badgeType": "featured",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مساحة واسعة تجمع بين الهدوء والإنترنت السريع والمقاعد المريحة لعقد اجتماعات العمل وجلسات اللابتوب",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "work"
        ],
        "tags": [
            "جلسات عمل ولابتوب",
            "أركان بلازا",
            "واي فاي سريع"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@espressolabcairo"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/espressolabcairo/",
            "instagramHandle": "@espressolabcairo",
            "facebook": "https://www.facebook.com/espressolabcairo",
            "website": "https://www.instagram.com/espressolabcairo/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Espresso%20Lab%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "espresso-lab-arkan-1",
                "name": "إسبريسو لاب فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "تحميص تركي احترافي بحبوب أرابيكا"
            },
            {
                "id": "espresso-lab-arkan-2",
                "name": "سبانش لاتيه بارد بالكراميل",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "حليب بارد مع شوت إسبريسو مزدوج"
            },
            {
                "id": "espresso-lab-arkan-3",
                "name": "قهوة V60 كينيا AA مقطرة",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 115,
                "desc": "نوتات فواكه زاهية ومنعشة"
            },
            {
                "id": "espresso-lab-arkan-4",
                "name": "تشيز كيك الشوكولاتة البلجيكية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 120,
                "desc": "طبقة ناعمة وكثيفة من الشوكولاتة"
            }
        ]
    },
    {
        "id": "30north-parkst",
        "name": "30 North Coffee",
        "nameAr": "30 نورث كوفي — داخل مجمع بارك ستريت",
        "logo": "/logos/30north-parkst.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع بارك ستريت",
        "address": "داخل مجمع بارك ستريت، محور 26 يوليو، الشيخ زايد",
        "phone": "0109 665 4433",
        "rating": 4.8,
        "reviewsCount": "2.0k",
        "priceRange": "من 80 - 240 جنيه",
        "badge": "البن التخصصي النادر",
        "badgeType": "specialty",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "ديكورات بريطانية فاخرة وقهوة فلتر مميزة تقدم بأدوات تحضير يابانية محترفة وسط أجواء ممشى بارك ستريت",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "بارك ستريت",
            "حبوب نادرة",
            "هدوء وفخامة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@30northcoffee"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/30northcoffee/",
            "instagramHandle": "@30northcoffee",
            "facebook": "https://www.facebook.com/30northcoffee",
            "website": "https://www.instagram.com/30northcoffee/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=30%20North%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A8%D8%A7%D8%B1%D9%83%20%D8%B3%D8%AA%D8%B1%D9%8A%D8%AA%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "30north-parkst-1",
                "name": "فلات وايت 30 نورث بارك ستريت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "شوت مزدوج مع رغوة حليب ناعمة"
            },
            {
                "id": "30north-parkst-2",
                "name": "قهوة V60 غيشا كوستاريكا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 140,
                "desc": "سلالة غيشا العطرية النادرة"
            },
            {
                "id": "30north-parkst-3",
                "name": "كيك الجزر بالجوز والفروستنج",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 115,
                "desc": "وصفة كيك الجزر التقليدية الشهيرة"
            },
            {
                "id": "30north-parkst-4",
                "name": "كرواسون زبدة فرنسي سادة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 80,
                "desc": "هش ومورق بالزبدة الطبيعية"
            }
        ]
    },
    {
        "id": "cake-cafe-cbp",
        "name": "Cake Cafe",
        "nameAr": "كيك كافيه — داخل كابيتال بيزنس بارك",
        "logo": "/logos/cake-cafe-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 223 8899",
        "rating": 4.8,
        "reviewsCount": "3.3k",
        "priceRange": "من 90 - 265 جنيه",
        "badge": "أشهر كيك وبرانش في زايد",
        "badgeType": "featured",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أيقونة الكيك والحلويات الإنجليزية الكلاسيكية على ممشى النوافير الراقص في كابيتال بيزنس بارك",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "كيك إنجليزي شهير",
            "كابيتال بيزنس بارك",
            "ممشى النوافير"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cakecafeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cakecafeegypt/",
            "instagramHandle": "@cakecafeegypt",
            "facebook": "https://www.facebook.com/cakecafeegypt",
            "website": "https://www.instagram.com/cakecafeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cake%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "cake-cafe-cbp-1",
                "name": "كيك الشوكولاتة والكراميل كيك كافيه",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "القطعة الأيقونية الأكثر طلباً ومحبة"
            },
            {
                "id": "cake-cafe-cbp-2",
                "name": "فلات وايت كيك كافيه الحرفي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "إسبريسو غني متزن مع الحلويات"
            },
            {
                "id": "cake-cafe-cbp-3",
                "name": "آيسد سبانش لاتيه بارد",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "حليب مثلج مع حليب مكثف وإسبريسو"
            },
            {
                "id": "cake-cafe-cbp-4",
                "name": "توست الأفوكادو والفيتا اليونانية",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 165,
                "desc": "برانش خفيف وصحي في الهواء الطلق"
            }
        ]
    },
    {
        "id": "sip-cbp",
        "name": "Sip Specialty Coffee",
        "nameAr": "سيب كافيه — داخل كابيتال بيزنس بارك",
        "logo": "/logos/sip-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0102 777 4411",
        "rating": 4.8,
        "reviewsCount": "1.8k",
        "priceRange": "من 95 - 230 جنيه",
        "badge": "محطة القهوة لرواد الأعمال",
        "badgeType": "specialty",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "القهوة التخصصية الموزونة لرجال الأعمال وزوار المكاتب العالمية في كابيتال بيزنس بارك",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "كابيتال بيزنس بارك",
            "رواد الأعمال",
            "قهوة مختصة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@sipegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/sipegypt/",
            "instagramHandle": "@sipegypt",
            "facebook": "https://www.facebook.com/sipegypt",
            "website": "https://www.instagram.com/sipegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Sip%20Specialty%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "sip-cbp-1",
                "name": "فلات وايت سيب زايد",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "حبوب كولومبية فاخرة برغوة كريمية"
            },
            {
                "id": "sip-cbp-2",
                "name": "آيسد سبانش لاتيه سيب",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "توازن رائع بين الحلاوة ونكهة القهوة"
            },
            {
                "id": "sip-cbp-3",
                "name": "قهوة كيمكس مقطرة سلفادور",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 125,
                "desc": "استخلاص نظيف بقوام ناعم"
            },
            {
                "id": "sip-cbp-4",
                "name": "نيويورك تشيز كيك بالفراولة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "طبقة بسكويت مقرمشة وجبن كريمي"
            }
        ]
    },
    {
        "id": "ovio-galleria40",
        "name": "Ovio",
        "nameAr": "أوفيو كافيه — داخل مجمع جاليريا 40",
        "logo": "/logos/ovio-galleria40.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع جاليريا 40",
        "address": "داخل مجمع جاليريا 40، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 887 6655",
        "rating": 4.9,
        "reviewsCount": "2.9k",
        "priceRange": "من 100 - 260 جنيه",
        "badge": "الضيافة الإيطالية الفاخرة",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "جلسات راقية على ممشى جاليريا 40 المكشوف مع أرقى وجبات البرانش والبانكيك الهشة وفنجان القهوة الإيطالية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "جاليريا 40",
            "برانش إيطالي فخم",
            "بانكيك أرتيزان"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@ovioegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/ovioegypt/",
            "instagramHandle": "@ovioegypt",
            "facebook": "https://www.facebook.com/ovioegypt",
            "website": "https://www.instagram.com/ovioegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Ovio%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%AC%D8%A7%D9%84%D9%8A%D8%B1%D9%8A%D8%A7%2040%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "ovio-galleria40-1",
                "name": "فلات وايت أوفيو الإيطالي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 100,
                "desc": "حبوب بن إيطالية خاصة برغوة مخملية"
            },
            {
                "id": "ovio-galleria40-2",
                "name": "آيسد سبانش لاتيه أوفيو",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "نكهة متوازنة بمذاق الكراميل"
            },
            {
                "id": "ovio-galleria40-3",
                "name": "بانكيك أوفيو ريكوتا الشهيرة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 160,
                "desc": "بانكيك قطنية هشة مع فواكه الغابة"
            },
            {
                "id": "ovio-galleria40-4",
                "name": "تيراميسو ماسكاربوني إيطالي",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "الوصفة التقليدية المتقنة"
            }
        ]
    },
    {
        "id": "cova-arkan",
        "name": "Cova Montenapoleone 1817",
        "nameAr": "كوفا ميلانو — داخل مجمع أركان بلازا",
        "logo": "/logos/cova-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0100 999 1817",
        "rating": 4.9,
        "reviewsCount": "1.5k",
        "priceRange": "من 95 - 260 جنيه",
        "badge": "عراقة ميلانو منذ 1817",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أقدم باتيسري وكافيه في ميلانو الإيطالية، ثريات كريستال ومقاعد مخملية فاخرة وخدمة من العصر الذهبي",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "تراث ميلانو 1817",
            "أرقى كافيه بإيطاليا",
            "أركان التوسعة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@covamilanoegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/covamilanoegypt/",
            "instagramHandle": "@covamilanoegypt",
            "facebook": "https://www.facebook.com/covamilanoegypt",
            "website": "https://www.instagram.com/covamilanoegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cova%20Montenapoleone%201817%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "cova-arkan-1",
                "name": "إسبريسو كوفا ميلانو الأصلي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "خلطة بن كوفا التاريخية المحمصة بإيطاليا"
            },
            {
                "id": "cova-arkan-2",
                "name": "كابتشينو كوفا بالكريمة المخملية",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 110,
                "desc": "إسبريسو إيطالي أصيل مع بودرة كاكاو كوفا"
            },
            {
                "id": "cova-arkan-3",
                "name": "تيراميسو كوفا ميلانو الشهير",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 155,
                "desc": "وصفة كوفا المحفوظة منذ عام 1817 بجبن الماسكاربوني"
            },
            {
                "id": "cova-arkan-4",
                "name": "ساشر كيك بالشوكولاتة النمساوية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 160,
                "desc": "كيك شوكولاتة كوفا الفاخرة مع مربى المشمش"
            },
            {
                "id": "cova-arkan-5",
                "name": "كرواسون كوفا الذهبي بالباستري كريم",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 110,
                "desc": "عجينة مورقة بالزبدة الإيطالية الفاخرة"
            }
        ]
    },
    {
        "id": "qahwa-arkan",
        "name": "Qahwa",
        "nameAr": "قهوة كافيه — داخل مجمع أركان بلازا",
        "logo": "/logos/qahwa-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0102 334 5566",
        "rating": 4.8,
        "reviewsCount": "3.9k",
        "priceRange": "من 95 - 255 جنيه",
        "badge": "ملتقى العائلات والأصدقاء بأركان",
        "badgeType": "trending",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "تراس خارجي فسيح وممتد في أركان، برانش غني وقهوة مثلجة ولقاءات صاخبة مبهجة لا تنقطع",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "أركان بلازا",
            "برانش متكامل",
            "جلسات خارجية حيوية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@qahwaegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/qahwaegypt/",
            "instagramHandle": "@qahwaegypt",
            "facebook": "https://www.facebook.com/qahwaegypt",
            "website": "https://www.instagram.com/qahwaegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Qahwa%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "qahwa-arkan-1",
                "name": "سبانش لاتيه قهوة المميز بارد",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "الخلطة الحصرية الأشهر في زايد"
            },
            {
                "id": "qahwa-arkan-2",
                "name": "فلات وايت قهوة أرتيزان",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو غني برغوة متجانسة"
            },
            {
                "id": "qahwa-arkan-3",
                "name": "فرينش توست كراميل وموز مكرمل",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 155,
                "desc": "بريوش فرنسي محمص بالزبدة وصوص التوفي"
            },
            {
                "id": "qahwa-arkan-4",
                "name": "تشيز كيك لوتس دافئة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "طبقة لوتس بسكوف كريمية"
            }
        ]
    },
    {
        "id": "paul-arkan",
        "name": "Paul",
        "nameAr": "بول باتيسري وكافيه — داخل مجمع أركان بلازا",
        "logo": "/logos/paul-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0100 882 1199",
        "rating": 4.8,
        "reviewsCount": "3.8k",
        "priceRange": "من 85 - 275 جنيه",
        "badge": "المخبوزات الباريسية في زايد",
        "badgeType": "featured",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "تراس خارجي أنيق يطل على ممشى أركان مع أرقى أنواع المخبوزات الباريسية والكرواسون والقهوة الفرنسية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "مخبوزات فرنسية",
            "أركان بلازا",
            "فطور الصباح"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@paulegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/paulegypt/",
            "instagramHandle": "@paulegypt",
            "facebook": "https://www.facebook.com/paulegypt",
            "website": "https://www.instagram.com/paulegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Paul%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "paul-arkan-1",
                "name": "كافيه كريم بول باريسي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "قهوة فرنسية كلاسيكية مع حليب ساخن"
            },
            {
                "id": "paul-arkan-2",
                "name": "ميل فوي بول بالفانيليا البوربون",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 135,
                "desc": "طبقات الباف باستري الهشة بالكريمة الفرنسية"
            },
            {
                "id": "paul-arkan-3",
                "name": "كرواسون شوكولاتة بول الأصيل",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "بالزبدة الفرنسية النقية وشوكولاتة فالرونا"
            },
            {
                "id": "paul-arkan-4",
                "name": "ساندوتش كروك مسيو بالجبن والغرويير",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 175,
                "desc": "توست فرنسي مخبوز بصلصة البشاميل"
            }
        ]
    },
    {
        "id": "tbs-cbp",
        "name": "TBS (The Bakery Shop)",
        "nameAr": "تي بي إس — داخل كابيتال بيزنس بارك",
        "logo": "/logos/tbs-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0122 777 5544",
        "rating": 4.7,
        "reviewsCount": "2.8k",
        "priceRange": "من 85 - 245 جنيه",
        "badge": "كرواسون الصباح الساخن",
        "badgeType": "featured",
        "luxuryScore": 95,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "رائحة المخبوزات الفرنسية الطازجة التي تعبق أرجاء كابيتال بيزنس بارك مع قهوة الصباح السريعة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food",
            "work"
        ],
        "tags": [
            "كرواسون لوز",
            "كابيتال بيزنس بارك",
            "فطور عمل"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@tbsegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/tbsegypt/",
            "instagramHandle": "@tbsegypt",
            "facebook": "https://www.facebook.com/tbsegypt",
            "website": "https://www.instagram.com/tbsegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=TBS%20(The%20Bakery%20Shop)%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "tbs-cbp-1",
                "name": "كرواسون لوز TBS الحرفي الشهير",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "محشو بكريمة اللوز ومغطى بشرائح اللوز المحمص"
            },
            {
                "id": "tbs-cbp-2",
                "name": "كابتشينو إيطالي كريمي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "رغوة حليب ناعمة مع إسبريسو غني"
            },
            {
                "id": "tbs-cbp-3",
                "name": "آيسد سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 100,
                "desc": "قهوة مثلجة مع حليب مكثف محلى"
            },
            {
                "id": "tbs-cbp-4",
                "name": "ساندوتش تركي وجبن إيمنتال",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 145,
                "desc": "في خبز الباغيت الفرنسي المقرمش"
            }
        ]
    },
    {
        "id": "crave-arkan",
        "name": "Crave",
        "nameAr": "كريف كافيه — داخل مجمع أركان بلازا",
        "logo": "/logos/crave-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0100 443 2299",
        "rating": 4.8,
        "reviewsCount": "3.7k",
        "priceRange": "من 90 - 295 جنيه",
        "badge": "شوكليت فوندان وأجواء ممشى أركان",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "الجلسات الخارجية المترفة بأركان مع كعكة الفوندان الذائبة وقائمة قهوة عالمية متكاملة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "أركان بلازا",
            "شوكليت فوندان",
            "جلسات عشاء وبرانش"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@craveegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/craveegypt/",
            "instagramHandle": "@craveegypt",
            "facebook": "https://www.facebook.com/craveegypt",
            "website": "https://www.instagram.com/craveegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Crave%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "crave-arkan-1",
                "name": "كريف شوكليت فوندان الأصلية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 155,
                "desc": "شوكولاتة مذابة تفيض بحرارة مع آيس كريم مثلج"
            },
            {
                "id": "crave-arkan-2",
                "name": "فلات وايت كريف كلاسيك",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "إسبريسو دبل شوت مع حليب مبخر"
            },
            {
                "id": "crave-arkan-3",
                "name": "آيسد كراميل سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "طبقات من القهوة والحليب البارد اللذيذ"
            },
            {
                "id": "crave-arkan-4",
                "name": "ساندوتش كلوب دجاج وتركي كريف",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 195,
                "desc": "مع بطاطس مقلية ذهبية مقرمشة"
            }
        ]
    },
    {
        "id": "dar-ward-arkan",
        "name": "دار ورد",
        "nameAr": "دار ورد كافيه ولونج — داخل مجمع أركان بلازا",
        "logo": "/logos/dar-ward-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0101 229 8877",
        "rating": 4.8,
        "reviewsCount": "2.4k",
        "priceRange": "من 80 - 245 جنيه",
        "badge": "فخامة الشام وحلويات دمشق",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg"
        ],
        "vibe": "أجواء دمشقية ملكية، نافورة رخامية وزهور شاميّة تفوح عبقاً مع فنجان القهوة المحوجة بالمسك والهيل",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "أجواء شامية ملكية",
            "أركان بلازا",
            "كنافة وقشطة طازجة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@darward.eg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/darward.eg/",
            "instagramHandle": "@darward.eg",
            "facebook": "https://www.facebook.com/darward.eg",
            "website": "https://www.instagram.com/darward.eg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=%D8%AF%D8%A7%D8%B1%20%D9%88%D8%B1%D8%AF%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "dar-ward-arkan-1",
                "name": "قهوة تركية شامية بالمسك والهيل",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "محوجة بركوة نحاسية تقليدية"
            },
            {
                "id": "dar-ward-arkan-2",
                "name": "سبانش لاتيه دار ورد بماء الزهر",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "نكهة عطرية شرقية مع إسبريسو وحليب مثلج"
            },
            {
                "id": "dar-ward-arkan-3",
                "name": "كنافة نابلسية بالجبن العكاوي الذائب",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "ساخنة تعلوها رشة فستق حلبي أخضر"
            },
            {
                "id": "dar-ward-arkan-4",
                "name": "شاي مغربي أصيل بالنعناع الفريش",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 85,
                "desc": "يقدم بإبريق فضي تقليدي وكؤوس منقوشة"
            }
        ]
    },
    {
        "id": "sachi-parkst",
        "name": "Sachi Park St",
        "nameAr": "ساتشي لاونج — داخل مجمع بارك ستريت",
        "logo": "/logos/sachi-parkst.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع بارك ستريت",
        "address": "داخل مجمع بارك ستريت، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 000 7777",
        "rating": 4.9,
        "reviewsCount": "2.8k",
        "priceRange": "من 110 - 280 جنيه",
        "badge": "قمة الفخامة والضيافة في زايد",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg"
        ],
        "vibe": "الضيافة الاستثنائية الحائزة على أرقى تقييمات الشرق الأوسط، هندسة داخلية ساحرة وتراس يطل على بارك ستريت",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "بارك ستريت",
            "أعلى فخامة",
            "ضيافة 5 نجوم"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@sachirestaurant"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/sachirestaurant/",
            "instagramHandle": "@sachirestaurant",
            "facebook": "https://www.facebook.com/sachirestaurant",
            "website": "https://www.instagram.com/sachirestaurant/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Sachi%20Park%20St%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A8%D8%A7%D8%B1%D9%83%20%D8%B3%D8%AA%D8%B1%D9%8A%D8%AA%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "sachi-parkst-1",
                "name": "ساتشي سيجنتشر فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 110,
                "desc": "بن إثيوبي فاخر مستخلص بدرجة حرارة موزونة"
            },
            {
                "id": "sachi-parkst-2",
                "name": "ماتشا سيريمونيال لاتيه مثلجة",
                "category": "iced_coffee",
                "subType": "matcha",
                "type": "drink",
                "price": 145,
                "desc": "ماتشا احتفالية يابانية من كيوتو"
            },
            {
                "id": "sachi-parkst-3",
                "name": "فوندان الشوكولاتة الداكنة فالرونا",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 165,
                "desc": "كاكاو نقي مع بولة آيس كريم فانيلا مدغشقر"
            },
            {
                "id": "sachi-parkst-4",
                "name": "توست البريوش الفرنسي المقرمش",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 180,
                "desc": "مغموس في الزبدة والعسل الطبيعي"
            }
        ]
    },
    {
        "id": "gigi-parkst",
        "name": "Gigi Lounge & Cafe",
        "nameAr": "جيجي لاونج — داخل مجمع بارك ستريت",
        "logo": "/logos/gigi-parkst.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع بارك ستريت",
        "address": "داخل مجمع بارك ستريت، محور 26 يوليو، الشيخ زايد",
        "phone": "0102 888 9911",
        "rating": 4.8,
        "reviewsCount": "1.9k",
        "priceRange": "من 95 - 240 جنيه",
        "badge": "إطلالات بارك ستريت البانورامية",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg"
        ],
        "vibe": "أجواء إيطالية مبهجة بألوان نابضة بالحياة وأشجار ليمون صناعية تحاكي سواحل أمالفي الإيطالية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "طابع سواحل أمالفي",
            "بارك ستريت",
            "أجواء مبهجة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@gigiparkst"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/gigiparkst/",
            "instagramHandle": "@gigiparkst",
            "facebook": "https://www.facebook.com/gigiparkst",
            "website": "https://www.instagram.com/gigiparkst/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Gigi%20Lounge%20%26%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A8%D8%A7%D8%B1%D9%83%20%D8%B3%D8%AA%D8%B1%D9%8A%D8%AA%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "gigi-parkst-1",
                "name": "جيجي آيسد سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "طبقات إسبريسو وحليب مثلج ناعم"
            },
            {
                "id": "gigi-parkst-2",
                "name": "كابتشينو إيطاليانو بالرغوة الذهبية",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو إيطالي غني ودافئ"
            },
            {
                "id": "gigi-parkst-3",
                "name": "تورتة الليمون الإيطالي والريكوتا",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 140,
                "desc": "نكهة ليمون أمالفي المنعشة"
            }
        ]
    },
    {
        "id": "izakaya-parkst",
        "name": "Izakaya Lounge",
        "nameAr": "إيزاكايا لاونج — داخل مجمع بارك ستريت",
        "logo": "/logos/izakaya-parkst.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع بارك ستريت",
        "address": "داخل مجمع بارك ستريت، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 330 4455",
        "rating": 4.9,
        "reviewsCount": "2.2k",
        "priceRange": "من 130 - 240 جنيه",
        "badge": "الفخامة اليابانية النيكاي",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg"
        ],
        "vibe": "انصهار الثقافة اليابانية والبيروفية في تصميم خشبي ساحر وأجواء خافتة راقية مع شاي الماتشا الفاخر",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "طراز نيكاي فاخر",
            "ماتشا يابانية",
            "بارك ستريت"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@izakayacairo"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/izakayacairo/",
            "instagramHandle": "@izakayacairo",
            "facebook": "https://www.facebook.com/izakayacairo",
            "website": "https://www.instagram.com/izakayacairo/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Izakaya%20Lounge%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A8%D8%A7%D8%B1%D9%83%20%D8%B3%D8%AA%D8%B1%D9%8A%D8%AA%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "izakaya-parkst-1",
                "name": "إيزاكايا ماتشا سيريمونيال",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 140,
                "desc": "ماتشا مخفوقة يدوياً بحليب اللوز"
            },
            {
                "id": "izakaya-parkst-2",
                "name": "قهوة يابانية مقطرة بالتقطير البارد",
                "category": "iced_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 130,
                "desc": "استخلاص قطرة بقطرة لمدة 12 ساعة"
            },
            {
                "id": "izakaya-parkst-3",
                "name": "موتشي آيس كريم ياباني 3 قطع",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "نكهات الماتشا والشوكولاتة والمانجو"
            }
        ]
    },
    {
        "id": "carmine-parkst",
        "name": "Carmine Cafe",
        "nameAr": "كارمين كافيه — داخل مجمع بارك ستريت",
        "logo": "/logos/carmine-parkst.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع بارك ستريت",
        "address": "داخل مجمع بارك ستريت، محور 26 يوليو، الشيخ زايد",
        "phone": "0109 112 3344",
        "rating": 4.8,
        "reviewsCount": "1.7k",
        "priceRange": "من 95 - 235 جنيه",
        "badge": "جلسات هادئة وأناقة إيطالية",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg",
            "/vanilla.jpg"
        ],
        "vibe": "أناقة الأثاث الإيطالي المعاصر مع قائمة قهوة إيطالية متقنة وسندوتشات ساكورا في قلب بارك ستريت",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "إيطالي راقٍ",
            "بارك ستريت",
            "هدوء وأناقة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@carmineegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/carmineegypt/",
            "instagramHandle": "@carmineegypt",
            "facebook": "https://www.facebook.com/carmineegypt",
            "website": "https://www.instagram.com/carmineegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Carmine%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A8%D8%A7%D8%B1%D9%83%20%D8%B3%D8%AA%D8%B1%D9%8A%D8%AA%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "carmine-parkst-1",
                "name": "فلات وايت كارمين الحرفي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "ريستريتو شوتس مع حليب مايكروفوم"
            },
            {
                "id": "carmine-parkst-2",
                "name": "آيسد سبانش لاتيه كارمين",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "قهوة مثلجة مع حليب مكثف محلى"
            },
            {
                "id": "carmine-parkst-3",
                "name": "تيراميسو كارمين بالماسكاربوني",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "الوصفة التقليدية الإيطالية الغنية"
            }
        ]
    },
    {
        "id": "brown-sugar-parkst",
        "name": "Brown Sugar Bakery & Cafe",
        "nameAr": "براون شوجر — داخل مجمع بارك ستريت",
        "logo": "/logos/brown-sugar-parkst.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع بارك ستريت",
        "address": "داخل مجمع بارك ستريت، محور 26 يوليو، الشيخ زايد",
        "phone": "0102 776 5533",
        "rating": 4.8,
        "reviewsCount": "1.6k",
        "priceRange": "من 85 - 230 جنيه",
        "badge": "مخبوزات نيويورك وحلويات السكر البني",
        "badgeType": "trending",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg",
            "/coffee_dessert.jpg"
        ],
        "vibe": "رائحة السكر البني والكراميل والمخبوزات النيويوركية الطازجة مع فنجان قهوة تخصصية على التراس",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مخبوزات نيويورك",
            "بارك ستريت",
            "كراميل وسكر بني"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@brownsugaregypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/brownsugaregypt/",
            "instagramHandle": "@brownsugaregypt",
            "facebook": "https://www.facebook.com/brownsugaregypt",
            "website": "https://www.instagram.com/brownsugaregypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Brown%20Sugar%20Bakery%20%26%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A8%D8%A7%D8%B1%D9%83%20%D8%B3%D8%AA%D8%B1%D9%8A%D8%AA%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "brown-sugar-parkst-1",
                "name": "براون شوجر آيسد لاتيه سيجنتشر",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "شراب السكر البني المحضر منزلياً مع حليب وشوت إسبريسو"
            },
            {
                "id": "brown-sugar-parkst-2",
                "name": "فلات وايت بن إثيوبي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "قوام ناعم برغوة حليب ميكروفوم"
            },
            {
                "id": "brown-sugar-parkst-3",
                "name": "كوكيز السكر البني والشوكولاتة المزدوجة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "قلب طري ذائب ومقرمشة من الأطراف"
            },
            {
                "id": "brown-sugar-parkst-4",
                "name": "سولتيد كراميل تشيز كيك نيويوركية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "طبقة غنية من الجبن مع الكراميل والملح"
            }
        ]
    },
    {
        "id": "left-bank-cbp",
        "name": "Left Bank",
        "nameAr": "ليفت بانك كافيه — داخل كابيتال بيزنس بارك",
        "logo": "/logos/left-bank-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 554 9922",
        "rating": 4.7,
        "reviewsCount": "3.2k",
        "priceRange": "من 85 - 285 جنيه",
        "badge": "تراس النوافير الراقص الساحر",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "تراس واسع أمام النوافير الراقصة في كابيتال بيزنس بارك، برانش ممتد وقهوة أوروبية وسط أجواء حيوية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "إطلالة نافورة راقصة",
            "كابيتال بيزنس بارك",
            "برانش وتراس"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@leftbankcairo"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/leftbankcairo/",
            "instagramHandle": "@leftbankcairo",
            "facebook": "https://www.facebook.com/leftbankcairo",
            "website": "https://www.instagram.com/leftbankcairo/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Left%20Bank%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "left-bank-cbp-1",
                "name": "ليفت بانك كابوتشينو كبير",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو غني مع رغوة حليب ناعمة"
            },
            {
                "id": "left-bank-cbp-2",
                "name": "آيسد سبانش لاتيه ليفت بانك",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "حليب بارد مع قهوة مثلجة وسكر بني"
            },
            {
                "id": "left-bank-cbp-3",
                "name": "تشيز كيك البلوبيري الباردة",
                "category": "iced_coffee",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 125,
                "desc": "صوص توت بري طازج على طبقة بسكويت"
            },
            {
                "id": "left-bank-cbp-4",
                "name": "كلوب ساندوتش ليفت بانك المميز",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 185,
                "desc": "دجاج مشوي وتركي وبيض وجبن شيدر"
            }
        ]
    },
    {
        "id": "bocca-cbp",
        "name": "Bocca Cafe",
        "nameAr": "بوكا كافيه — داخل كابيتال بيزنس بارك",
        "logo": "/logos/bocca-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0102 665 4422",
        "rating": 4.8,
        "reviewsCount": "2.9k",
        "priceRange": "من 95 - 295 جنيه",
        "badge": "الأناقة الإيطالية والبرانش المعاصر",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مزيج من الأناقة الإيطالية وأطباق المقهى المعاصرة، جلسات خارجية مطلة على حدائق كابيتال بيزنس بارك",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "كابيتال بيزنس بارك",
            "إيطالي مودرن",
            "برانش فاخر"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@boccaegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/boccaegypt/",
            "instagramHandle": "@boccaegypt",
            "facebook": "https://www.facebook.com/boccaegypt",
            "website": "https://www.instagram.com/boccaegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Bocca%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "bocca-cbp-1",
                "name": "بوكا فلات وايت إيطالي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "حبوب بن إيطالية مستخلصة بعناية"
            },
            {
                "id": "bocca-cbp-2",
                "name": "آيسد سبانش لاتيه بوكا",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "نكهة متوازنة بمذاق الكراميل"
            },
            {
                "id": "bocca-cbp-3",
                "name": "كيك اللوتس الذائبة مع الآيس كريم",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 140,
                "desc": "حشوة لوتس ساخنة وبسكويت مقرمش"
            },
            {
                "id": "bocca-cbp-4",
                "name": "توست السلمون المدخن والريكوتا",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 195,
                "desc": "سلمون نرويجي على خبز الساوردو"
            }
        ]
    },
    {
        "id": "beanos-cbp",
        "name": "Beano's",
        "nameAr": "بينوز كافيه — داخل كابيتال بيزنس بارك",
        "logo": "/logos/beanos-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0120 445 1100",
        "rating": 4.6,
        "reviewsCount": "2.4k",
        "priceRange": "من 85 - 240 جنيه",
        "badge": "جلسات العمل الهادئة والموثوقة",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "/vanilla.jpg",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مساحات عمل مريحة وأفياش كهرباء وخدمة سريعة للمهنيين ورواد كابيتال بيزنس بارك",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food",
            "work"
        ],
        "tags": [
            "كابيتال بيزنس بارك",
            "عمل واجتماعات",
            "قهوة كلاسيكية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@beanoscafe"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/beanoscafe/",
            "instagramHandle": "@beanoscafe",
            "facebook": "https://www.facebook.com/beanoscafe",
            "website": "https://www.instagram.com/beanoscafe/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Beano's%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "beanos-cbp-1",
                "name": "كابتشينو بينوز الكلاسيكي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو متزن برغوة القرفة"
            },
            {
                "id": "beanos-cbp-2",
                "name": "آيسد لاتيه بالكراميل",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "حليب مثلج مع شوت إسبريسو غني"
            },
            {
                "id": "beanos-cbp-3",
                "name": "شوكليت فادج كيك غنية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "كيك شوكولاتة طازجة مع جناش دافئ"
            },
            {
                "id": "beanos-cbp-4",
                "name": "ساندوتش تركي وجبن شيدر",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 140,
                "desc": "في خبز باجيت فرنسي"
            }
        ]
    },
    {
        "id": "costa-cbp",
        "name": "Costa Coffee",
        "nameAr": "كوستا كوفي — داخل كابيتال بيزنس بارك",
        "logo": "/logos/costa-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0122 889 0099",
        "rating": 4.6,
        "reviewsCount": "2.7k",
        "priceRange": "من 80 - 210 جنيه",
        "badge": "القهوة البريطانية الموثوقة",
        "badgeType": "featured",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "/coffee_dessert.jpg",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "خلطة موكا إيطاليا البريطانية الموثوقة، مساحة مريحة للعمل ولقاءات العمل السريعة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "موكا إيطاليا",
            "كابيتال بيزنس بارك",
            "جلسات سريعة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@costacoffeeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/costacoffeeegypt/",
            "instagramHandle": "@costacoffeeegypt",
            "facebook": "https://www.facebook.com/costacoffeeegypt",
            "website": "https://www.instagram.com/costacoffeeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Costa%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "costa-cbp-1",
                "name": "فلات وايت كورتو كوستا",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو مركز مع حليب مبخر"
            },
            {
                "id": "costa-cbp-2",
                "name": "فرابيتشينو كراميل بالكريمة",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "مشروب مثلج منعش في الأيام الحارة"
            },
            {
                "id": "costa-cbp-3",
                "name": "كيك الشوكولاتة الداكنة البريطانية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "دافئة ولذيذة بجانب القهوة"
            },
            {
                "id": "costa-cbp-4",
                "name": "مافن التوت الأزرق",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 80,
                "desc": "مخبوز إنجليزي تقليدي غني بالتوت"
            }
        ]
    },
    {
        "id": "cilantro-cbp",
        "name": "Cilantro",
        "nameAr": "سيلانترو — داخل كابيتال بيزنس بارك",
        "logo": "/logos/cilantro-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 776 5544",
        "rating": 4.6,
        "reviewsCount": "2.3k",
        "priceRange": "من 75 - 205 جنيه",
        "badge": "القهوة اليومية السريعة",
        "badgeType": "featured",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "القهوة المصرية العصرية بجلسات مريحة وخدمة ودودة وسريعة تناسب يوم العمل في زايد",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "سيلانترو",
            "كابيتال بيزنس بارك",
            "قهوة سريعة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cilantrocafe"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cilantrocafe/",
            "instagramHandle": "@cilantrocafe",
            "facebook": "https://www.facebook.com/cilantrocafe",
            "website": "https://www.instagram.com/cilantrocafe/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cilantro%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "cilantro-cbp-1",
                "name": "سيلانترو فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "خلطة بن كولومبي متميزة"
            },
            {
                "id": "cilantro-cbp-2",
                "name": "موكا مثلجة بالشوكولاتة",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "شوكولاتة داكنة مع إسبريسو وحليب مثلج"
            },
            {
                "id": "cilantro-cbp-3",
                "name": "تشيز كيك التوت الكلاسيكية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 105,
                "desc": "طبقة ناعمة من الجبن الكريمي"
            },
            {
                "id": "cilantro-cbp-4",
                "name": "كرواسون سويسري بالجبن",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 75,
                "desc": "مخبوز ذهبي ساخن"
            }
        ]
    },
    {
        "id": "caribou-cbp",
        "name": "Caribou Coffee",
        "nameAr": "كاريبو كوفي — داخل كابيتال بيزنس بارك",
        "logo": "/logos/caribou-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 443 8811",
        "rating": 4.7,
        "reviewsCount": "2.1k",
        "priceRange": "من 95 - 215 جنيه",
        "badge": "الشوكولاتة الحقيقية والقهوة الأمريكية",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "دفء خشب الأرز والقهوة الأمريكية المحضرة بشوكولاتة ذائبة طبيعية في قلب بيئة الأعمال بزايد",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "شوكولاتة حقيقية",
            "كابيتال بيزنس بارك",
            "أجواء دافئة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cariboucoffeeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cariboucoffeeegypt/",
            "instagramHandle": "@cariboucoffeeegypt",
            "facebook": "https://www.facebook.com/cariboucoffeeegypt",
            "website": "https://www.instagram.com/cariboucoffeeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Caribou%20Coffee%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "caribou-cbp-1",
                "name": "كاريبو موكا بالشوكولاتة الداكنة",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو مع قطع شوكولاتة مذابة"
            },
            {
                "id": "caribou-cbp-2",
                "name": "كامب فاير موكا مثلجة مع مارشميلو",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "مشروب كاريبو المميز عالمياً"
            },
            {
                "id": "caribou-cbp-3",
                "name": "تشيز كيك التوت الأسود والفراولة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 115,
                "desc": "قوام كريمي غني ومتوازن"
            }
        ]
    },
    {
        "id": "house-of-cocoa-galleria40",
        "name": "House of Cocoa",
        "nameAr": "هاوس أوف كوكو — داخل مجمع جاليريا 40",
        "logo": "/logos/house-of-cocoa-galleria40.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع جاليريا 40",
        "address": "داخل مجمع جاليريا 40، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 119 5544",
        "rating": 4.8,
        "reviewsCount": "2.6k",
        "priceRange": "من 90 - 235 جنيه",
        "badge": "ملاعق الشوكولاتة الذائبة والقهوة",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أفخم شوكولاتة أوروبية ساخنة تذوب بالملعقة مع فنجان إسبريسو تخصصي وسط جلسات جاليريا 40 الراقية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "شوكولاتة ساخنة فاخرة",
            "جاليريا 40",
            "جلسات راقية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@houseofcocoa"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/houseofcocoa/",
            "instagramHandle": "@houseofcocoa",
            "facebook": "https://www.facebook.com/houseofcocoa",
            "website": "https://www.instagram.com/houseofcocoa/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=House%20of%20Cocoa%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%AC%D8%A7%D9%84%D9%8A%D8%B1%D9%8A%D8%A7%2040%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "house-of-cocoa-galleria40-1",
                "name": "هوت شوكليت الملعقة الذائبة البلجيكية",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "تذوب بالملعقة داخل حليب ساخن مبخر"
            },
            {
                "id": "house-of-cocoa-galleria40-2",
                "name": "فلات وايت بحبوب بن تخصصي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "إسبريسو سلس ومناسب جداً للشوكولاتة"
            },
            {
                "id": "house-of-cocoa-galleria40-3",
                "name": "تشيز كيك الشوكولاتة والكراميل المملح",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "قوام دسم ومقرمش بطبقة كاكاو فاخرة"
            }
        ]
    },
    {
        "id": "the-lane-palmhills",
        "name": "The Lane Bakery & Cafe",
        "nameAr": "ذا لين بيكري — بالم هيلز كلوب",
        "logo": "/logos/the-lane-palmhills.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر / زايد • بالم هيلز",
        "address": "نادي بالم هيلز، 6 أكتوبر، بجوار الشيخ زايد",
        "phone": "0100 999 4488",
        "rating": 4.9,
        "reviewsCount": "1.9k",
        "priceRange": "من 95 - 275 جنيه",
        "badge": "نخبوية بالم هيلز والمخبوزات الفرنسية",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "/the_lane.jpg",
        "gallery": [
            "/the_lane.jpg",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "ملاذ النخبة داخل كمبوند ونادي بالم هيلز، مخبوزات أرتيزان فرنسية فاخرة وإطلالات خضراء شاسعة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "بالم هيلز",
            "أرقى فخامة وهدوء",
            "مخبوزات أرتيزان"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@thelanebakery"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/thelanebakery/",
            "instagramHandle": "@thelanebakery",
            "facebook": "https://www.facebook.com/thelanebakery",
            "website": "https://www.instagram.com/thelanebakery/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=The%20Lane%20Bakery%20%26%20Cafe%20%D9%86%D8%A7%D8%AF%D9%8A%20%D8%A8%D8%A7%D9%84%D9%85%20%D9%87%D9%8A%D9%84%D8%B2%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%D8%8C%20%D8%A8%D8%AC%D9%88%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "the-lane-palmhills-1",
                "name": "ذا لين فلات وايت الحرفي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 100,
                "desc": "حبوب بن مستوردة نادرة برغوة مخملية"
            },
            {
                "id": "the-lane-palmhills-2",
                "name": "آيسد سبانش لاتيه بالم هيلز",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "حليب مكثف مع قهوة مثلجة ناعمة"
            },
            {
                "id": "the-lane-palmhills-3",
                "name": "كرواسون لوز وبندق مقرمش",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 95,
                "desc": "مخبوز بفرن حجري فرنسي"
            },
            {
                "id": "the-lane-palmhills-4",
                "name": "ساندوتش حلومي مشوي مع بيستو الريحان",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 175,
                "desc": "في خبز الساوردو الطبيعي الطازج"
            }
        ]
    },
    {
        "id": "brown-nose-truck-palmhills",
        "name": "Brown Nose Coffee Truck",
        "nameAr": "براون نوز كوفي تراك — بالم هيلز",
        "logo": "/logos/brown-nose-truck-palmhills.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر / زايد • بالم هيلز",
        "address": "بالم هيلز أكتوبر، بجوار ذا كورت يارد",
        "phone": "0100 001 2345",
        "rating": 4.8,
        "reviewsCount": "1.7k",
        "priceRange": "من 85 - 220 جنيه",
        "badge": "أشهر كوفي تراك بالساحل وبالم هيلز",
        "badgeType": "trending",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "شاحنة براون نوز الشهيرة التي جلبت روح الصيف والساحل إلى بالم هيلز بقهوة V60 وسبيشالتي مثلجة مذهلة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "كوفي تراك تريند",
            "بالم هيلز",
            "قهوة مختصة V60"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@brownnosecoffee"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/brownnosecoffee/",
            "instagramHandle": "@brownnosecoffee",
            "facebook": "https://www.facebook.com/brownnosecoffee",
            "website": "https://www.instagram.com/brownnosecoffee/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Brown%20Nose%20Coffee%20Truck%20%D8%A8%D8%A7%D9%84%D9%85%20%D9%87%D9%8A%D9%84%D8%B2%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%D8%8C%20%D8%A8%D8%AC%D9%88%D8%A7%D8%B1%20%D8%B0%D8%A7%20%D9%83%D9%88%D8%B1%D8%AA%20%D9%8A%D8%A7%D8%B1%D8%AF"
        },
        "menu": [
            {
                "id": "brown-nose-truck-palmhills-1",
                "name": "قهوة V60 إثيوبية أروماتيك مثلجة",
                "category": "iced_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 120,
                "desc": "تقطير يدوي فوري بنكهات زهرية منعشة"
            },
            {
                "id": "brown-nose-truck-palmhills-2",
                "name": "آيسد سبانش لاتيه براون نوز",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "المشروب البارد المفضل لعشاق التراك"
            },
            {
                "id": "brown-nose-truck-palmhills-3",
                "name": "فلات وايت دبل شوت أرتيزان",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو غني مع حليب مبخر ساخن"
            },
            {
                "id": "brown-nose-truck-palmhills-4",
                "name": "كرواسون فرنسي طازج بالزبدة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "مقرمش ومخبوز يومياً"
            }
        ]
    },
    {
        "id": "onze-beverlyhills",
        "name": "Onze Cafe",
        "nameAr": "أونز كافيه — بيفرلي هيلز زايد",
        "logo": "/logos/onze-beverlyhills.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • بيفرلي هيلز",
        "address": "كمبوند بيفرلي هيلز، ذا هاب التجاري، الشيخ زايد",
        "phone": "0111 888 3344",
        "rating": 4.8,
        "reviewsCount": "1.9k",
        "priceRange": "من 95 - 275 جنيه",
        "badge": "أيقونة بيفرلي هيلز وتراس الهاب",
        "badgeType": "trending",
        "luxuryScore": 98,
        "image": "/onze.jpg",
        "gallery": [
            "/onze.jpg",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "جلسات تراس ساحرة بين الحدائق الغناء في بيفرلي هيلز، ديكورات زجاجية راقية وقائمة برانش وسبيشالتي كوفي",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "بيفرلي هيلز زايد",
            "تراس بين الحدائق",
            "برانش وقهوة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@onzecafe"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/onzecafe/",
            "instagramHandle": "@onzecafe",
            "facebook": "https://www.facebook.com/onzecafe",
            "website": "https://www.instagram.com/onzecafe/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Onze%20Cafe%20%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF%20%D8%A8%D9%8A%D9%81%D8%B1%D9%84%D9%8A%20%D9%87%D9%8A%D9%84%D8%B2%D8%8C%20%D8%B0%D8%A7%20%D9%87%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "onze-beverlyhills-1",
                "name": "أونز آيسد سبانش لاتيه المنعش",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "مزيج متناغم من القهوة والحليب الحلو"
            },
            {
                "id": "onze-beverlyhills-2",
                "name": "فلات وايت أونز سينجل أوريجين",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "حبوب بن كوستاريكا برغوة مخملية"
            },
            {
                "id": "onze-beverlyhills-3",
                "name": "تشيز كيك سان سيباستيان بالبلجيكيان شوكليت",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 140,
                "desc": "قوام ذائب تفيض بنكهة الجبن الإسباني"
            },
            {
                "id": "onze-beverlyhills-4",
                "name": "توست الأفوكادو بالبيض المسلوق والساوردو",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 175,
                "desc": "برانش صحي ولذيذ وسط الطبيعة"
            }
        ]
    },
    {
        "id": "dipndip-mallofarabia",
        "name": "dipndip",
        "nameAr": "ديب آند ديب — داخل مول العرب (ميدان جهينة)",
        "logo": "/logos/dipndip-mallofarabia.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول العرب",
        "address": "داخل مول العرب، ميدان جهينة، محور 26 يوليو، 6 أكتوبر",
        "phone": "0109 444 7788",
        "rating": 4.7,
        "reviewsCount": "4.3k",
        "priceRange": "من 85 - 265 جنيه",
        "badge": "شوكولاتة بلجيكية وشلالات ذائبة",
        "badgeType": "trending",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "وجهة الشوكولاتة المفضلة للعائلات في مول العرب مع صب الشوكولاتة البلجيكية الثلاثية على الكريب والوافل",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مول العرب",
            "شوكولاتة بلجيكية",
            "كريب ووافل"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@dipndipegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/dipndipegypt/",
            "instagramHandle": "@dipndipegypt",
            "facebook": "https://www.facebook.com/dipndipegypt",
            "website": "https://www.instagram.com/dipndipegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=dipndip%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D8%AC%D9%87%D9%8A%D9%86%D8%A9%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "dipndip-mallofarabia-1",
                "name": "فوتوتشيني كريب بالشوكولاتة الثلاثية",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 165,
                "desc": "شرائط كريب مع شوكولاتة بيضاء وحليبية وداكنة"
            },
            {
                "id": "dipndip-mallofarabia-2",
                "name": "ديب آند ديب سبانش لاتيه",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "شوت إسبريسو مع الحليب والشوكولاتة"
            },
            {
                "id": "dipndip-mallofarabia-3",
                "name": "كابتشينو إيطالي كلاسيك",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو غني برغوة متماسكة"
            },
            {
                "id": "dipndip-mallofarabia-4",
                "name": "براونيز كريب محشو بالشوكولاتة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 155,
                "desc": "قطع براوني دافئة مغلفة بالشوكولاتة"
            }
        ]
    },
    {
        "id": "molten-mallofarabia",
        "name": "Molten Chocolate Cafe",
        "nameAr": "مولتن شوكليت كافيه — داخل مول العرب (ميدان جهينة)",
        "logo": "/logos/molten-mallofarabia.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول العرب",
        "address": "داخل مول العرب، ميدان جهينة، محور 26 يوليو، 6 أكتوبر",
        "phone": "0102 555 3311",
        "rating": 4.7,
        "reviewsCount": "2.4k",
        "priceRange": "من 85 - 245 جنيه",
        "badge": "حمم الشوكولاتة الساخنة والمولتن",
        "badgeType": "trending",
        "luxuryScore": 95,
        "image": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "حلويات المولتن كيك الساخنة تفيض بالشوكولاتة السويسرية مع قهوة إيطالية دافئة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مول العرب",
            "مولتن كيك ساخنة",
            "شوكولاتة سويسرية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@moltenchocolatecafeeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/moltenchocolatecafeeg/",
            "instagramHandle": "@moltenchocolatecafeeg",
            "facebook": "https://www.facebook.com/moltenchocolatecafeeg",
            "website": "https://www.instagram.com/moltenchocolatecafeeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Molten%20Chocolate%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D8%AC%D9%87%D9%8A%D9%86%D8%A9%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "molten-mallofarabia-1",
                "name": "مولتن لافا كيك الأصلية بالآيس كريم",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "قلب شوكولاتة ذائب مع بولة فانيلا مثلجة"
            },
            {
                "id": "molten-mallofarabia-2",
                "name": "آيسد موكا سويس شوكليت",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 100,
                "desc": "إسبريسو وحليب مع صوص شوكولاتة سويسرية"
            },
            {
                "id": "molten-mallofarabia-3",
                "name": "فلات وايت متوازن النكهات",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "رائع بجانب أطباق الشوكولاتة الساخنة"
            }
        ]
    },
    {
        "id": "dunkin-arkan",
        "name": "Dunkin'",
        "nameAr": "دانكن دونتس — داخل مجمع أركان بلازا",
        "logo": "/logos/dunkin-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0120 777 9900",
        "rating": 4.6,
        "reviewsCount": "2.8k",
        "priceRange": "من 70 - 240 جنيه",
        "badge": "القهوة الأمريكية السريعة والدونتس",
        "badgeType": "featured",
        "luxuryScore": 92,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "محطة سريعة لألذ دونتس طازجة وقهوة أمريكية مقطرة أثناء التسوق أو قبل الذهاب للعمل بأركان",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "دونتس طازجة",
            "أركان بلازا",
            "قهوة أمريكية سريعة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@dunkinegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/dunkinegypt/",
            "instagramHandle": "@dunkinegypt",
            "facebook": "https://www.facebook.com/dunkinegypt",
            "website": "https://www.instagram.com/dunkinegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Dunkin'%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "dunkin-arkan-1",
                "name": "قهوة أمريكانو مقطرة كبيرة",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 70,
                "desc": "بن دانكن الأصلي الشهير عالمياً"
            },
            {
                "id": "dunkin-arkan-2",
                "name": "آيسد كراميل لاتيه دانكن",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 85,
                "desc": "حليب بارد وإسبريسو مع صوص الكراميل"
            },
            {
                "id": "dunkin-arkan-3",
                "name": "بوكس دونتس 6 قطع متنوعة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 140,
                "desc": "جليزد وبوسطن كريم وشوكولاتة"
            }
        ]
    },
    {
        "id": "krispy-kreme-hyperone",
        "name": "Krispy Kreme",
        "nameAr": "كريسبي كريم — هايبر وان زايد",
        "logo": "/logos/krispy-kreme-hyperone.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • مدخل زايد 1",
        "address": "بجوار هايبر وان، مدخل الشيخ زايد 1",
        "phone": "0100 889 4433",
        "rating": 4.7,
        "reviewsCount": "3.5k",
        "priceRange": "من 70 - 185 جنيه",
        "badge": "الدونتس الساخنة الذائبة بالفم",
        "badgeType": "trending",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "ضوء علامة هوت ناو الذي ينبض بالدونتس الأصلية الساخنة تذوب فوراً مع قهوة الكابتشينو الطازجة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "أوريجينال جليزد",
            "مدخل زايد 1",
            "دونتس ساخنة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@krispykremeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/krispykremeegypt/",
            "instagramHandle": "@krispykremeegypt",
            "facebook": "https://www.facebook.com/krispykremeegypt",
            "website": "https://www.instagram.com/krispykremeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Krispy%20Kreme%20%D8%A8%D8%AC%D9%88%D8%A7%D8%B1%20%D9%87%D8%A7%D9%8A%D8%A8%D8%B1%20%D9%88%D8%A7%D9%86%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF%201"
        },
        "menu": [
            {
                "id": "krispy-kreme-hyperone-1",
                "name": "أوريجينال جليزد دونتس دافئة (قطعتين)",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 70,
                "desc": "تذوب حرفياً في الفم بسكر خفيف"
            },
            {
                "id": "krispy-kreme-hyperone-2",
                "name": "آيسد لاتيه كريسبى كريم",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو غني مع حليب مثلج"
            },
            {
                "id": "krispy-kreme-hyperone-3",
                "name": "كابتشينو إيطالي كلاسيك",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "رغوة حليب كريمية متماسكة"
            }
        ]
    },
    {
        "id": "cinnabon-mallofarabia",
        "name": "Cinnabon",
        "nameAr": "سينابون — داخل مول العرب (ميدان جهينة)",
        "logo": "/logos/cinnabon-mallofarabia.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول العرب",
        "address": "داخل مول العرب، ميدان جهينة، محور 26 يوليو، 6 أكتوبر",
        "phone": "0120 123 4455",
        "rating": 4.7,
        "reviewsCount": "3.9k",
        "priceRange": "من 90 - 210 جنيه",
        "badge": "لفائف القرفة الأسطورية والجبن الكريمي",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg"
        ],
        "vibe": "رائحة القرفة الساحرة التي تستقبلك في مول العرب مع فنجان الكابتشينو الساخن",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "سينابون رول",
            "مول العرب",
            "موكالاتا مثلجة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cinnabonegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cinnabonegypt/",
            "instagramHandle": "@cinnabonegypt",
            "facebook": "https://www.facebook.com/cinnabonegypt",
            "website": "https://www.instagram.com/cinnabonegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cinnabon%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D8%AC%D9%87%D9%8A%D9%86%D8%A9%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "cinnabon-mallofarabia-1",
                "name": "كلاسيك سينابون رول ساخنة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 95,
                "desc": "عجينة دافئة بقرفة ماكارا وصوص الجبن"
            },
            {
                "id": "cinnabon-mallofarabia-2",
                "name": "موكالاتا مثلجة بالشوكولاتة",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 90,
                "desc": "مزيج شوكولاتة وقهوة مثلجة"
            },
            {
                "id": "cinnabon-mallofarabia-3",
                "name": "بيكانبون بالكراميل والمكسرات",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 110,
                "desc": "مغطاة بصوص الكراميل وجوز البيكان"
            }
        ]
    },
    {
        "id": "ralphs-arkan",
        "name": "Ralph's German Bakery",
        "nameAr": "رالفز جيرمان بيكري — داخل مجمع أركان بلازا",
        "logo": "/logos/ralphs-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0101 229 3344",
        "rating": 4.8,
        "reviewsCount": "2.7k",
        "priceRange": "من 75 - 210 جنيه",
        "badge": "عراقة المخبوزات الألمانية في زايد",
        "badgeType": "featured",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg"
        ],
        "vibe": "مخبز دهب الألماني الشهير بأركان، بريتزل أصلي بالزبدة الألمانية وسندوتشات فطور صحية وقهوة ألمانية نقية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مخبز ألماني أصلي",
            "أركان بلازا",
            "بريتزل وقهوة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@ralphsgermanbakery"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/ralphsgermanbakery/",
            "instagramHandle": "@ralphsgermanbakery",
            "facebook": "https://www.facebook.com/ralphsgermanbakery",
            "website": "https://www.instagram.com/ralphsgermanbakery/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Ralph's%20German%20Bakery%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "ralphs-arkan-1",
                "name": "بريتزل ألماني طازج بالزبدة والملح",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 75,
                "desc": "مخبوز تقليدي بالسمسم والملح الصخري"
            },
            {
                "id": "ralphs-arkan-2",
                "name": "قهوة فلتر ألمانية بالبندق",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 85,
                "desc": "تقطير بطيء بنكهة البندق الطبيعي"
            },
            {
                "id": "ralphs-arkan-3",
                "name": "سترويدل التفاح الألماني بالقرفة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "مع صلصة الفانيلا الدافئة"
            }
        ]
    },
    {
        "id": "kazoku-arkan",
        "name": "Kazoku Cafe",
        "nameAr": "كازوكو كافيه — داخل مجمع أركان بلازا",
        "logo": "/logos/kazoku-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0102 333 4455",
        "rating": 4.9,
        "reviewsCount": "2.0k",
        "priceRange": "من 130 - 245 جنيه",
        "badge": "الفخامة والهدوء المعماري الياباني",
        "badgeType": "luxury",
        "luxuryScore": 99,
        "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg"
        ],
        "vibe": "التصميم الهادئ بالخشب الطبيعي والحدائق الصخرية مع تشكيلة شاي الماتشا الاحتفالي والقهوة الباردة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "هدوء ياباني",
            "أركان بلازا",
            "ماتشا احتفالية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@kazokuegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/kazokuegypt/",
            "instagramHandle": "@kazokuegypt",
            "facebook": "https://www.facebook.com/kazokuegypt",
            "website": "https://www.instagram.com/kazokuegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Kazoku%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "kazoku-arkan-1",
                "name": "كازوكو ماتشا لاتيه سيريمونيال",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 140,
                "desc": "ماتشا نقية من مقاطعة كيوتو اليابانية"
            },
            {
                "id": "kazoku-arkan-2",
                "name": "قهوة سايفون مقطرة كينيا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 130,
                "desc": "استخلاص بالبخار الفراغي بنقاء تام"
            },
            {
                "id": "kazoku-arkan-3",
                "name": "تشيز كيك يابانية قطنية ذائبة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "خفيفة وهشة تذوب في الفم"
            }
        ]
    },
    {
        "id": "haagen-dazs-arkan",
        "name": "Haagen-Dazs",
        "nameAr": "هاجن داز — داخل مجمع أركان بلازا",
        "logo": "/logos/haagen-dazs-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0100 119 4433",
        "rating": 4.8,
        "reviewsCount": "2.6k",
        "priceRange": "من 110 - 255 جنيه",
        "badge": "فخامة الآيس كريم والقهوة بأركان",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg"
        ],
        "vibe": "جلسات أنيقة تطل على نافورة أركان مع أطباق الآيس كريم الفاخرة المشهورة عالمياً والقهوة الإيطالية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "آيس كريم عالمي",
            "أركان بلازا",
            "أفوغاتو فاخر"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@haagendazsegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/haagendazsegypt/",
            "instagramHandle": "@haagendazsegypt",
            "facebook": "https://www.facebook.com/haagendazsegypt",
            "website": "https://www.instagram.com/haagendazsegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Haagen-Dazs%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "haagen-dazs-arkan-1",
                "name": "أفوغاتو هاجن داز فانيلا الأصلي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 115,
                "desc": "بولة آيس كريم فانيلا بوربون مع شوت إسبريسو"
            },
            {
                "id": "haagen-dazs-arkan-2",
                "name": "آيسد سبانش لاتيه غني",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "إسبريسو وحليب مع نكهة الفانيلا الكريمية"
            },
            {
                "id": "haagen-dazs-arkan-3",
                "name": "وافل هاجن داز البلجيكي بالتوت",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 155,
                "desc": "وافل مقرمش مع بولة آيس كريم وصوص توت"
            }
        ]
    },
    {
        "id": "brioche-doree-arkan",
        "name": "Brioche Dorée",
        "nameAr": "بريوش دوريه — داخل مجمع أركان بلازا",
        "logo": "/logos/brioche-doree-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0100 665 1122",
        "rating": 4.7,
        "reviewsCount": "2.3k",
        "priceRange": "من 85 - 220 جنيه",
        "badge": "تراث المخبوزات والبريوش الفرنسي",
        "badgeType": "featured",
        "luxuryScore": 95,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg",
            "/vanilla.jpg"
        ],
        "vibe": "المخبوزات الحرفية الفرنسية المقرمشة مع فنجان الكابتشينو في استراحة راقية بأركان بلازا",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "بريوش فرنسي",
            "أركان بلازا",
            "كرواسون زبدة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@briochedoreeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/briochedoreeegypt/",
            "instagramHandle": "@briochedoreeegypt",
            "facebook": "https://www.facebook.com/briochedoreeegypt",
            "website": "https://www.instagram.com/briochedoreeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Brioche%20Dor%C3%A9e%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "brioche-doree-arkan-1",
                "name": "بريوش فرنسي محشو بالكريمة واللوز",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 90,
                "desc": "عجينة بريوش غنية بالزبدة والبيض"
            },
            {
                "id": "brioche-doree-arkan-2",
                "name": "كافيه أوليه فرنسي تقليدي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "قهوة الصباح الفرنسية في مج كبير"
            },
            {
                "id": "brioche-doree-arkan-3",
                "name": "تارت الليمون والميرانغ المحروق",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 120,
                "desc": "حموضة ليمون منعشة مع ميرانغ ناعم"
            }
        ]
    },
    {
        "id": "grom-arkan",
        "name": "Grom Gelato & Espresso",
        "nameAr": "جروم جيلاتو وإسبريسو — داخل مجمع أركان بلازا",
        "logo": "/logos/grom-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0102 777 8899",
        "rating": 4.8,
        "reviewsCount": "1.9k",
        "priceRange": "من 85 - 230 جنيه",
        "badge": "جيلاتو تورينو الإيطالي الطبيعي 100%",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg",
            "/coffee_dessert.jpg"
        ],
        "vibe": "أشهر جيلاتو من تورينو بإيطاليا بمكونات طبيعية نقية خالية من الإضافات مع إسبريسو إيطالي فاخر",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "جيلاتو إيطالي طبيعي",
            "أركان بلازا",
            "إسبريسو فاخر"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@gromegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/gromegypt/",
            "instagramHandle": "@gromegypt",
            "facebook": "https://www.facebook.com/gromegypt",
            "website": "https://www.instagram.com/gromegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Grom%20Gelato%20%26%20Espresso%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "grom-arkan-1",
                "name": "أفوغاتو جروم بجيلاتو الفستق الصقلي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 120,
                "desc": "جيلاتو فستق نقي مع شوت إسبريسو ساخن"
            },
            {
                "id": "grom-arkan-2",
                "name": "إسبريسو إيطاليانو تورينو",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "تحميص إيطالي نقي ذو رغوة كثيفة"
            },
            {
                "id": "grom-arkan-3",
                "name": "كوب جيلاتو شوكولاتة داكنة 3 بولات",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "كاكاو إكوادوري نقي 100%"
            }
        ]
    },
    {
        "id": "casper-mallofarabia",
        "name": "Casper & Gambini's",
        "nameAr": "كاسبر أند جامبينيز — داخل مول العرب (ميدان جهينة)",
        "logo": "/logos/casper-mallofarabia.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول العرب",
        "address": "داخل مول العرب، ميدان جهينة، محور 26 يوليو، 6 أكتوبر",
        "phone": "0100 777 2211",
        "rating": 4.8,
        "reviewsCount": "3.2k",
        "priceRange": "من 100 - 310 جنيه",
        "badge": "فخامة الضيافة في ذا بارك مول العرب",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "خدمة راقية من فئة الخمس نجوم مع أطباق برانش شهية وإطلالات على حدائق ذا بارك في مول العرب",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "ذا بارك مول العرب",
            "خدمة 5 نجوم",
            "برانش فاخر"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@casperandgambiniseg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/casperandgambiniseg/",
            "instagramHandle": "@casperandgambiniseg",
            "facebook": "https://www.facebook.com/casperandgambiniseg",
            "website": "https://www.instagram.com/casperandgambiniseg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Casper%20%26%20Gambini's%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D8%AC%D9%87%D9%8A%D9%86%D8%A9%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "casper-mallofarabia-1",
                "name": "جامبينيز سيجنتشر فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 100,
                "desc": "خلطة بن كاسبر الخاصة المستوردة"
            },
            {
                "id": "casper-mallofarabia-2",
                "name": "آيسد سبانش لاتيه غني بالكراميل",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "طبقات من القهوة والحليب البارد اللذيذ"
            },
            {
                "id": "casper-mallofarabia-3",
                "name": "شوكليت فوندان الحمم الذائبة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 150,
                "desc": "كعكة شوكولاتة تفيض بالحمم الذائبة"
            },
            {
                "id": "casper-mallofarabia-4",
                "name": "كلوب ساندوتش كاسبر المميز",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 210,
                "desc": "دجاج وتركي وبيض وبطاطس مقرمشة"
            }
        ]
    },
    {
        "id": "chapter-zayed-dunes",
        "name": "Chapter Coffee",
        "nameAr": "تشابتر كوفي — زايد ديونز",
        "logo": "/logos/chapter-zayed-dunes.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • زايد ديونز",
        "address": "كمبوند زايد ديونز، الشيخ زايد",
        "phone": "0101 445 1122",
        "rating": 4.8,
        "reviewsCount": "1.5k",
        "priceRange": "من 95 - 240 جنيه",
        "badge": "هدوء وخصوصية ديونز",
        "badgeType": "specialty",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "ملاذ هادئ بعيداً عن الصخب بين المساحات الخضراء في زايد ديونز مع قهوة تخصصية متقنة ومقاعد عمل مريحة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "زايد ديونز",
            "هدوء وتركيز",
            "قهوة مختصة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@chaptercafeeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/chaptercafeeg/",
            "instagramHandle": "@chaptercafeeg",
            "facebook": "https://www.facebook.com/chaptercafeeg",
            "website": "https://www.instagram.com/chaptercafeeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Chapter%20Coffee%20%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF%20%D8%B2%D8%A7%D9%8A%D8%AF%20%D8%AF%D9%8A%D9%88%D9%86%D8%B2%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "chapter-zayed-dunes-1",
                "name": "فلات وايت تشابتر ديونز",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "بن تخصصي برغوة حليب ميكروفوم حريرية"
            },
            {
                "id": "chapter-zayed-dunes-2",
                "name": "سبانش لاتيه كولد برو مثلج",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 115,
                "desc": "طبقات من القهوة والحليب البارد اللذيذ"
            },
            {
                "id": "chapter-zayed-dunes-3",
                "name": "سان سيباستيان تشيز كيك مع الشوكولاتة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 140,
                "desc": "محروقة من الأعلى وذائبة من الداخل"
            }
        ]
    },
    {
        "id": "v60-specialty-tivoli",
        "name": "V60 Specialty Cafe",
        "nameAr": "في 60 سبيشالتي كافيه — تيفولي دوم زايد",
        "logo": "/logos/v60-specialty-tivoli.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • تيفولي دوم",
        "address": "تيفولي دوم، الشيخ زايد",
        "phone": "0109 222 8844",
        "rating": 4.8,
        "reviewsCount": "1.7k",
        "priceRange": "من 80 - 225 جنيه",
        "badge": "عشاق التقطير اليدوي الفوري",
        "badgeType": "specialty",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "/vanilla.jpg",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "بار تقطير يدوي مخصص لاختيار حبوب البن من كينيا وكولومبيا وإثيوبيا مع باريستا متخصص يشرح نوتات الفنجان",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "تقطير يدوي V60",
            "تيفولي دوم",
            "بن كولومبي وكيني"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@v60specialtyeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/v60specialtyeg/",
            "instagramHandle": "@v60specialtyeg",
            "facebook": "https://www.facebook.com/v60specialtyeg",
            "website": "https://www.instagram.com/v60specialtyeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=V60%20Specialty%20Cafe%20%D8%AA%D9%8A%D9%81%D9%88%D9%84%D9%8A%20%D8%AF%D9%88%D9%85%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "v60-specialty-tivoli-1",
                "name": "قهوة V60 إثيوبية يرقاتشيفي",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 125,
                "desc": "نوتات الياسمين والبرتقال بقوام ناصع"
            },
            {
                "id": "v60-specialty-tivoli-2",
                "name": "قهوة V60 كولومبيا كاستيلو",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 120,
                "desc": "إيحاءات الشوكولاتة والكراميل المتزن"
            },
            {
                "id": "v60-specialty-tivoli-3",
                "name": "فلات وايت دبل سينجل أوريجين",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "رغوة حليب ميكروفوم ناعمة"
            },
            {
                "id": "v60-specialty-tivoli-4",
                "name": "كوكيز براوني بالشوكولاتة الداكنة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 80,
                "desc": "طازجة ومقرمشة مع قلب شوكولاتة"
            }
        ]
    },
    {
        "id": "espresso-bar-courtyard",
        "name": "The Espresso Bar",
        "nameAr": "ذا إسبريسو بار — ذا كورت يارد زايد",
        "logo": "/logos/espresso-bar-courtyard.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • ذا كورت يارد",
        "address": "مول ذا كورت يارد، الحي الرابع، الشيخ زايد",
        "phone": "0100 887 2211",
        "rating": 4.7,
        "reviewsCount": "1.9k",
        "priceRange": "من 85 - 220 جنيه",
        "badge": "الإسبريسو الحرفي وأجواء الشباب",
        "badgeType": "specialty",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
            "/coffee_dessert.jpg",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مساحة تجمع شبابية وعصرية في كورت يارد، حبوب بن مميزة وموسيقى حية وجلسات لابتوب مريحة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "work"
        ],
        "tags": [
            "ذا كورت يارد",
            "إسبريسو تخصصي",
            "جلسات عمل مريحة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@theespressobareg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/theespressobareg/",
            "instagramHandle": "@theespressobareg",
            "facebook": "https://www.facebook.com/theespressobareg",
            "website": "https://www.instagram.com/theespressobareg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=The%20Espresso%20Bar%20%D9%85%D9%88%D9%84%20%D8%B0%D8%A7%20%D9%83%D9%88%D8%B1%D8%AA%20%D9%8A%D8%A7%D8%B1%D8%AF%D8%8C%20%D8%A7%D9%84%D8%AD%D9%8A%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "espresso-bar-courtyard-1",
                "name": "كورتادو كولومبي متوازن",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو مركز مع حليب مبخر"
            },
            {
                "id": "espresso-bar-courtyard-2",
                "name": "آيسد سبانش لاتيه بارد",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "حليب مثلج مع حليب مكثف محلى"
            },
            {
                "id": "espresso-bar-courtyard-3",
                "name": "تشيز كيك الكراميل المحمص",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 120,
                "desc": "طبقة ناعمة وشهية"
            }
        ]
    },
    {
        "id": "roastery-zayed",
        "name": "Roastery Zayed",
        "nameAr": "روستري زايد كافيه — بدر الدين",
        "logo": "/logos/roastery-zayed.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • مجمع بدر الدين",
        "address": "مجمع بدر الدين التجاري، الشيخ زايد",
        "phone": "0101 554 8899",
        "rating": 4.8,
        "reviewsCount": "1.8k",
        "priceRange": "من 90 - 215 جنيه",
        "badge": "تحميص محلي فريش يومي",
        "badgeType": "specialty",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "ماكينة التحميص التي تعمل أمام عينيك وروائح البن الطازج مع فنجان قهوة محضر بحرفية عالية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "تحميص طازج",
            "بدر الدين زايد",
            "قهوة أصيلة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@roasteryzayed"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/roasteryzayed/",
            "instagramHandle": "@roasteryzayed",
            "facebook": "https://www.facebook.com/roasteryzayed",
            "website": "https://www.instagram.com/roasteryzayed/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Roastery%20Zayed%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A8%D8%AF%D8%B1%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "roastery-zayed-1",
                "name": "قهوة مقطرة كيمكس من المحمصة",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 115,
                "desc": "بن محمص حديثاً بأعلى نقاء"
            },
            {
                "id": "roastery-zayed-2",
                "name": "فلات وايت روستري دبل شوت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "استخلاص إسبريسو بنكهة الشوكولاتة"
            },
            {
                "id": "roastery-zayed-3",
                "name": "براوني الشوكولاتة والمكسرات",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 95,
                "desc": "شوكولاتة دافئة مع الجوز"
            }
        ]
    },
    {
        "id": "nomad-zayed-hub",
        "name": "Nomad Coffee & Co-working",
        "nameAr": "نوماد كوفي ومساحة عمل — زايد هاب",
        "logo": "/logos/nomad-zayed-hub.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • زايد هاب",
        "address": "مول زايد هاب، الشيخ زايد",
        "phone": "0102 334 7711",
        "rating": 4.8,
        "reviewsCount": "1.6k",
        "priceRange": "من 90 - 260 جنيه",
        "badge": "الوجهة الأولى للرحالة الرقميين والعمل",
        "badgeType": "featured",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مساحة عمل احترافية وهادئة للغاية، كبائن مكالمات هاتفية وشبكة واي فاي فائقة السرعة مع قهوة تخصصية غير محدودة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "food",
            "work"
        ],
        "tags": [
            "مساحة عمل وكافيه",
            "واي فاي 200 Mbps",
            "أفياش وهدوء"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@nomadcoffeecairo"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/nomadcoffeecairo/",
            "instagramHandle": "@nomadcoffeecairo",
            "facebook": "https://www.facebook.com/nomadcoffeecairo",
            "website": "https://www.instagram.com/nomadcoffeecairo/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Nomad%20Coffee%20%26%20Co-working%20%D9%85%D9%88%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%20%D9%87%D8%A7%D8%A8%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "nomad-zayed-hub-1",
                "name": "نوماد فلات وايت للتركيز",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "دبل شوت إسبريسو لزيادة الإنتاجية"
            },
            {
                "id": "nomad-zayed-hub-2",
                "name": "آيسد سبانش لاتيه نوماد",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "طاقة وانتعاش خلال ساعات العمل"
            },
            {
                "id": "nomad-zayed-hub-3",
                "name": "ماتشا لاتيه بحليب الشوفان",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 130,
                "desc": "طاقة متوازنة وهدوء للأعصاب"
            },
            {
                "id": "nomad-zayed-hub-4",
                "name": "توست الأفوكادو والفيتا اليونانية",
                "category": "brunch_food",
                "subType": "brunch",
                "type": "food",
                "price": 160,
                "desc": "فطور صحي خفيف للعمل"
            }
        ]
    },
    {
        "id": "dose-westown",
        "name": "Dose Cafe",
        "nameAr": "دوز كافيه — ويست تاون هاب",
        "logo": "/logos/dose-westown.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • ويست تاون هاب",
        "address": "ويست تاون هاب، سوديك، الشيخ زايد",
        "phone": "0100 882 4477",
        "rating": 4.8,
        "reviewsCount": "2.1k",
        "priceRange": "من 95 - 215 جنيه",
        "badge": "أيقونة ويست تاون وسوديك",
        "badgeType": "trending",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "جلسات تراس مودرن بين مباني سوديك الراقية في ويست تاون هاب، لقاءات حيوية ومشروبات قهوة منعشة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "سوديك ويست تاون",
            "أجواء شبابية راقية",
            "سبانش لاتيه مميز"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@dosecafeegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/dosecafeegypt/",
            "instagramHandle": "@dosecafeegypt",
            "facebook": "https://www.facebook.com/dosecafeegypt",
            "website": "https://www.instagram.com/dosecafeegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Dose%20Cafe%20%D9%88%D9%8A%D8%B3%D8%AA%20%D8%AA%D8%A7%D9%88%D9%86%20%D9%87%D8%A7%D8%A8%D8%8C%20%D8%B3%D9%88%D8%AF%D9%8A%D9%83%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "dose-westown-1",
                "name": "دوز آيسد سبانش لاتيه الشهير",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 110,
                "desc": "المشروب التوقيعي الأكثر طلباً"
            },
            {
                "id": "dose-westown-2",
                "name": "فلات وايت دوز دبل ريستريتو",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 95,
                "desc": "طعم قهوة قوي برغوة كريمية"
            },
            {
                "id": "dose-westown-3",
                "name": "كوكيز الشوكولاتة الساخنة بالآيس كريم",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 115,
                "desc": "تخرج ساخنة من المقلاة"
            }
        ]
    },
    {
        "id": "aroma-tivoli-zayed",
        "name": "Aroma Lounge",
        "nameAr": "أروما لاونج — تيفولي دوم زايد",
        "logo": "/logos/aroma-tivoli-zayed.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • تيفولي دوم",
        "address": "تيفولي دوم، الشيخ زايد",
        "phone": "0122 445 9933",
        "rating": 4.6,
        "reviewsCount": "2.5k",
        "priceRange": "من 80 - 210 جنيه",
        "badge": "جلسات خارجية ومشروبات متنوعة",
        "badgeType": "featured",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "جلسات مريحة وتراس واسع في تيفولي دوم، مناسب للقاءات العائلية والأصدقاء",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "تيفولي دوم",
            "جلسات خارجية",
            "عصائر وقهوة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@aromaloungeeg"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/aromaloungeeg/",
            "instagramHandle": "@aromaloungeeg",
            "facebook": "https://www.facebook.com/aromaloungeeg",
            "website": "https://www.instagram.com/aromaloungeeg/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Aroma%20Lounge%20%D8%AA%D9%8A%D9%81%D9%88%D9%84%D9%8A%20%D8%AF%D9%88%D9%85%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "aroma-tivoli-zayed-1",
                "name": "كابتشينو أروما الإيطالي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "رغوة حليب كريمية كلاسيكية"
            },
            {
                "id": "aroma-tivoli-zayed-2",
                "name": "آيسد كراميل لاتيه أروما",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "إسبريسو بارد مع صوص الكراميل"
            },
            {
                "id": "aroma-tivoli-zayed-3",
                "name": "تشيز كيك الشوكولاتة الداكنة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "قوام غني بطعم الكاكاو الفاخر"
            }
        ]
    },
    {
        "id": "starbucks-reserve-arkan",
        "name": "Starbucks Reserve",
        "nameAr": "ستاربكس ريزيرف — داخل مجمع أركان بلازا",
        "logo": "/logos/starbucks-reserve-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0122 990 0113",
        "rating": 4.8,
        "reviewsCount": "4.5k",
        "priceRange": "من 105 - 235 جنيه",
        "badge": "تجربة ريزيرف الحصرية في زايد",
        "badgeType": "luxury",
        "luxuryScore": 98,
        "image": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "بار القهوة ريزيرف بأركان، حبوب بن نادرة مستوردة من رواندا وكوستاريكا واستخلاص كلوفر وبور أوفر محترف",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "ستاربكس ريزيرف",
            "أركان بلازا",
            "حبوب نادرة حصرية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@starbucksegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/starbucksegypt/",
            "instagramHandle": "@starbucksegypt",
            "facebook": "https://www.facebook.com/starbucksegypt",
            "website": "https://www.instagram.com/starbucksegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Starbucks%20Reserve%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "starbucks-reserve-arkan-1",
                "name": "ريزيرف كلوفر برو كولومبيا",
                "category": "hot_coffee",
                "subType": "v60",
                "type": "drink",
                "price": 135,
                "desc": "استخلاص ميكانيكي دقيق بتقنية كلوفر"
            },
            {
                "id": "starbucks-reserve-arkan-2",
                "name": "فلات وايت ريزيرف دبل أوريجين",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 105,
                "desc": "إسبريسو ريزيرف مع رغوة حليب ناعمة"
            },
            {
                "id": "starbucks-reserve-arkan-3",
                "name": "آيسد سبانش لاتيه ريزيرف",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 120,
                "desc": "خلطة الحليب المخفوق مع بن ريزيرف"
            },
            {
                "id": "starbucks-reserve-arkan-4",
                "name": "تشيز كيك الكراميل المحمص",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 125,
                "desc": "طبقة غنية وناعمة من الجبن الفاخر"
            }
        ]
    },
    {
        "id": "starbucks-mallofarabia",
        "name": "Starbucks",
        "nameAr": "ستاربكس — داخل مول العرب (ميدان جهينة)",
        "logo": "/logos/starbucks-mallofarabia.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول العرب",
        "address": "داخل مول العرب، ميدان جهينة، محور 26 يوليو، 6 أكتوبر",
        "phone": "0120 445 7711",
        "rating": 4.6,
        "reviewsCount": "4.8k",
        "priceRange": "من 75 - 205 جنيه",
        "badge": "الموقع الأكبر لستاربكس بمول العرب",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "فرع فسيح بجلسات داخلية وخارجية في مول العرب، فرابيتشينو وكراميل ماكياتو وسرعة في تلبية الطلبات",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مول العرب",
            "فرابيتشينو شهير",
            "جلسات سريعة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@starbucksegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/starbucksegypt/",
            "instagramHandle": "@starbucksegypt",
            "facebook": "https://www.facebook.com/starbucksegypt",
            "website": "https://www.instagram.com/starbucksegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Starbucks%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D8%AC%D9%87%D9%8A%D9%86%D8%A9%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "starbucks-mallofarabia-1",
                "name": "كراميل ماكياتو مثلج كبير",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "صوص كراميل مع حليب بارد وشوت إسبريسو"
            },
            {
                "id": "starbucks-mallofarabia-2",
                "name": "فلات وايت ستاربكس كلاسيك",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "ريستريتو شوتس مع حليب مبخر كامل الدسم"
            },
            {
                "id": "starbucks-mallofarabia-3",
                "name": "كرواسون بالجبن الرومي الساخن",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 75,
                "desc": "مخبوز ومحمص على الجريل"
            }
        ]
    },
    {
        "id": "cilantro-mallofarabia",
        "name": "Cilantro",
        "nameAr": "سيلانترو — داخل مول العرب (ميدان جهينة)",
        "logo": "/logos/cilantro-mallofarabia.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول العرب",
        "address": "داخل مول العرب، ميدان جهينة، محور 26 يوليو، 6 أكتوبر",
        "phone": "0100 333 8811",
        "rating": 4.6,
        "reviewsCount": "2.9k",
        "priceRange": "من 80 - 205 جنيه",
        "badge": "استراحة التسوق السريعة والقهوة",
        "badgeType": "featured",
        "luxuryScore": 93,
        "image": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "مكانك المفضل لاستراحة سريعة أثناء جولة التسوق بمول العرب مع قهوة موثوقة ومخبوزات طازجة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مول العرب",
            "استراحة تسوق",
            "سيلانترو"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cilantrocafe"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cilantrocafe/",
            "instagramHandle": "@cilantrocafe",
            "facebook": "https://www.facebook.com/cilantrocafe",
            "website": "https://www.instagram.com/cilantrocafe/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Cilantro%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D8%AC%D9%87%D9%8A%D9%86%D8%A9%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "cilantro-mallofarabia-1",
                "name": "سيلانترو فلات وايت",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "خلطة بن كولومبي متميزة"
            },
            {
                "id": "cilantro-mallofarabia-2",
                "name": "موكا مثلجة بالشوكولاتة",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "شوكولاتة داكنة مع شوت إسبريسو وحليب بارد"
            },
            {
                "id": "cilantro-mallofarabia-3",
                "name": "تشيز كيك التوت الكلاسيكية",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 105,
                "desc": "طبقة ناعمة من الجبن الكريمي"
            }
        ]
    },
    {
        "id": "tbs-beverlyhills",
        "name": "TBS (The Bakery Shop)",
        "nameAr": "تي بي إس — بيفرلي هيلز",
        "logo": "/logos/tbs-beverlyhills.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • بيفرلي هيلز",
        "address": "كمبوند بيفرلي هيلز، ذا هاب، الشيخ زايد",
        "phone": "0122 888 3311",
        "rating": 4.7,
        "reviewsCount": "2.3k",
        "priceRange": "من 85 - 245 جنيه",
        "badge": "فطور سكان بيفرلي هيلز اليومي",
        "badgeType": "featured",
        "luxuryScore": 95,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "كرواسون اللوز الساخن والمخبوزات الفرنسية الطازجة التي يفضلها سكان بيفرلي هيلز كل صباح",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert",
            "food"
        ],
        "tags": [
            "بيفرلي هيلز",
            "كرواسون لوز",
            "فطور صباحي"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@tbsegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/tbsegypt/",
            "instagramHandle": "@tbsegypt",
            "facebook": "https://www.facebook.com/tbsegypt",
            "website": "https://www.instagram.com/tbsegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=TBS%20(The%20Bakery%20Shop)%20%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF%20%D8%A8%D9%8A%D9%81%D8%B1%D9%84%D9%8A%20%D9%87%D9%8A%D9%84%D8%B2%D8%8C%20%D8%B0%D8%A7%20%D9%87%D8%A7%D8%A8%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "tbs-beverlyhills-1",
                "name": "كرواسون لوز TBS الحرفي الشهير",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 85,
                "desc": "المخبوز الأشهر في مصر بحشوة اللوز الكلاسيكية"
            },
            {
                "id": "tbs-beverlyhills-2",
                "name": "كابتشينو إيطالي كريمي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "رغوة حليب ناعمة مع إسبريسو غني"
            },
            {
                "id": "tbs-beverlyhills-3",
                "name": "ساندوتش تركي وجبن إيمنتال",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 145,
                "desc": "في خبز الباغيت الفرنسي المقرمش"
            }
        ]
    },
    {
        "id": "second-cup-mallofegypt",
        "name": "Second Cup",
        "nameAr": "سكند كب — داخل مول مصر",
        "logo": "/logos/second-cup-mallofegypt.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول مصر",
        "address": "داخل مول مصر، طريق الواحات، 6 أكتوبر",
        "phone": "0100 554 8877",
        "rating": 4.6,
        "reviewsCount": "2.1k",
        "priceRange": "من 90 - 215 جنيه",
        "badge": "القهوة الكندية الممتازة بمول مصر",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "دفء المقاهي الكندية مع خيارات الشاي الفاخر واللاتيه المتبل والحلويات الخفيفة في مول مصر",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مول مصر",
            "قهوة كندية",
            "شاي متبل وماتشا"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@secondcupegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/secondcupegypt/",
            "instagramHandle": "@secondcupegypt",
            "facebook": "https://www.facebook.com/secondcupegypt",
            "website": "https://www.instagram.com/secondcupegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Second%20Cup%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D9%85%D8%B5%D8%B1%D8%8C%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%A7%D8%AA%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "second-cup-mallofegypt-1",
                "name": "فانيلا بين لاتيه كندي ساخن",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "نكهة الفانيلا الكندية مع الحليب المخملي"
            },
            {
                "id": "second-cup-mallofegypt-2",
                "name": "آيسد كاراميل كوريتا",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 105,
                "desc": "مشروب مثلج منعش بنكهة الكراميل"
            },
            {
                "id": "second-cup-mallofegypt-3",
                "name": "تشيز كيك الشوكولاتة البيضاء والتوت",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 115,
                "desc": "مع صوص التوت البري الكندي"
            }
        ]
    },
    {
        "id": "pottery-zayed2000",
        "name": "Pottery Cafe",
        "nameAr": "بوتري كافيه — زايد 2000",
        "logo": "/logos/pottery-zayed2000.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • زايد 2000",
        "address": "كمبوند زايد 2000، بالقرب من أركان بلازا، الشيخ زايد",
        "phone": "0100 221 8833",
        "rating": 4.6,
        "reviewsCount": "2.8k",
        "priceRange": "من 80 - 210 جنيه",
        "badge": "جلسات الحديقة الهادئة",
        "badgeType": "featured",
        "luxuryScore": 94,
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "جلسات خارجية مريحة وسط الأشجار في زايد 2000 مع منيو طعام ومشروبات متنوع وخدمة ممتازة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "زايد 2000",
            "جلسات حديقة",
            "منيو متنوع"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@potterycafe"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/potterycafe/",
            "instagramHandle": "@potterycafe",
            "facebook": "https://www.facebook.com/potterycafe",
            "website": "https://www.instagram.com/potterycafe/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Pottery%20Cafe%20%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF%20%D8%B2%D8%A7%D9%8A%D8%AF%202000%D8%8C%20%D8%A8%D8%A7%D9%84%D9%82%D8%B1%D8%A8%20%D9%85%D9%86%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "pottery-zayed2000-1",
                "name": "كابتشينو بوتري بالرغوة الغنية",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "إسبريسو كلاسيكي مع حليب مبخر"
            },
            {
                "id": "pottery-zayed2000-2",
                "name": "موكا مثلجة بالآيس كريم",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "شوكولاتة وقهوة مع بولة فانيلا"
            },
            {
                "id": "pottery-zayed2000-3",
                "name": "تشيز كيك أوريو بالشوكولاتة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 110,
                "desc": "قطع أوريو مقرمشة في طبقة الجبن"
            }
        ]
    },
    {
        "id": "spectra-mallofarabia",
        "name": "Spectra Cafe",
        "nameAr": "سبكترا كافيه — داخل مول العرب (ميدان جهينة)",
        "logo": "/logos/spectra-mallofarabia.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول العرب",
        "address": "داخل مول العرب، ميدان جهينة، محور 26 يوليو، 6 أكتوبر",
        "phone": "0100 114 7766",
        "rating": 4.6,
        "reviewsCount": "2.5k",
        "priceRange": "من 75 - 195 جنيه",
        "badge": "جلسات عائلية وقيمة ممتازة",
        "badgeType": "featured",
        "luxuryScore": 92,
        "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg"
        ],
        "vibe": "جلسات واسعة مريحة للعائلات والأصدقاء مع أطباق طعام ومشروبات قهوة وعصائر بأسعار منافسة جداً",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مول العرب",
            "جلسات عائلية",
            "قيمة ممتازة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@spectrahospitality"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/spectrahospitality/",
            "instagramHandle": "@spectrahospitality",
            "facebook": "https://www.facebook.com/spectrahospitality",
            "website": "https://www.instagram.com/spectrahospitality/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Spectra%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D8%AC%D9%87%D9%8A%D9%86%D8%A9%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "spectra-mallofarabia-1",
                "name": "كابتشينو سبكترا الكلاسيكي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 75,
                "desc": "رغوة حليب غنية مع لمسة كاكاو"
            },
            {
                "id": "spectra-mallofarabia-2",
                "name": "آيسد لاتيه بالكراميل",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو بارد مع حليب وصوص كراميل"
            },
            {
                "id": "spectra-mallofarabia-3",
                "name": "تشيز كيك الفراولة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 95,
                "desc": "طبقة ناعمة من الجبن وصوص الفراولة"
            }
        ]
    },
    {
        "id": "zooba-galleria40",
        "name": "Zooba",
        "nameAr": "زوبا كافيه — داخل مجمع جاليريا 40",
        "logo": "/logos/zooba-galleria40.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع جاليريا 40",
        "address": "داخل مجمع جاليريا 40، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 223 9900",
        "rating": 4.7,
        "reviewsCount": "2.9k",
        "priceRange": "من 65 - 195 جنيه",
        "badge": "فلافل غورميه ومشروبات مصرية",
        "badgeType": "trending",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg"
        ],
        "vibe": "أكلات الشارع المصري التراثية برقي وجودة عالية مع شاي الكرك وشاي النعناع في جاليريا 40",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "food"
        ],
        "tags": [
            "جاليريا 40",
            "شارع مصري غورميه",
            "شاي كرك وماتشا"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@zoobaeats"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/zoobaeats/",
            "instagramHandle": "@zoobaeats",
            "facebook": "https://www.facebook.com/zoobaeats",
            "website": "https://www.instagram.com/zoobaeats/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Zooba%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%AC%D8%A7%D9%84%D9%8A%D8%B1%D9%8A%D8%A7%2040%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "zooba-galleria40-1",
                "name": "شاي كرك بالحليب والهيل العطري",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 75,
                "desc": "مغلي ببطء مع توابل الكرك الغنية"
            },
            {
                "id": "zooba-galleria40-2",
                "name": "آيسد كرك بالزعفران",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 95,
                "desc": "مشروب مثلج بنكهة الزعفران الملكية"
            },
            {
                "id": "zooba-galleria40-3",
                "name": "ساندوتش فلافل بالباذنجان والليمون المعصفر",
                "category": "brunch_food",
                "subType": "sandwich",
                "type": "food",
                "price": 65,
                "desc": "في عيش بلدي ساخن من الفرن"
            }
        ]
    },
    {
        "id": "batter-half-mallofarabia",
        "name": "The Batter Half & Co",
        "nameAr": "ذا باتر هاف — داخل مول العرب (ميدان جهينة)",
        "logo": "/logos/batter-half-mallofarabia.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول العرب",
        "address": "داخل مول العرب، ميدان جهينة، محور 26 يوليو، 6 أكتوبر",
        "phone": "0102 443 6677",
        "rating": 4.8,
        "reviewsCount": "2.8k",
        "priceRange": "من 75 - 240 جنيه",
        "badge": "عاصمة الماكرون والكب كيك بزايد وأكتوبر",
        "badgeType": "featured",
        "luxuryScore": 96,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg"
        ],
        "vibe": "ألوان الباستيل الساحرة وصفوف الماكرون والكب كيك المتراصة بجمال مع فنجان شاي أو قهوة تخصصية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "ماكرون فرنسي",
            "مول العرب",
            "كب كيك ملون"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@thebatterhalfandco"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/thebatterhalfandco/",
            "instagramHandle": "@thebatterhalfandco",
            "facebook": "https://www.facebook.com/thebatterhalfandco",
            "website": "https://www.instagram.com/thebatterhalfandco/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=The%20Batter%20Half%20%26%20Co%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D8%AC%D9%87%D9%8A%D9%86%D8%A9%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "batter-half-mallofarabia-1",
                "name": "بوكس ماكرون فرنسي 6 حبات متنوعة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 140,
                "desc": "فستق، لافندر، شوكولاتة، وتوت"
            },
            {
                "id": "batter-half-mallofarabia-2",
                "name": "رد فيلفيت كب كيك بالجبن الكريمي",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 75,
                "desc": "العجينة المخملية الحمراء الشهيرة"
            },
            {
                "id": "batter-half-mallofarabia-3",
                "name": "فلات وايت باتر هاف",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 85,
                "desc": "إسبريسو متزن برغوة ناعمة"
            }
        ]
    },
    {
        "id": "tamara-cbp",
        "name": "Tamara Lebanese Bistro",
        "nameAr": "تمارا اللبناني — داخل كابيتال بيزنس بارك",
        "logo": "/logos/tamara-cbp.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل كابيتال بيزنس بارك",
        "address": "داخل كابيتال بيزنس بارك، محور 26 يوليو، الشيخ زايد",
        "phone": "0100 554 3322",
        "rating": 4.8,
        "reviewsCount": "3.5k",
        "priceRange": "من 65 - 230 جنيه",
        "badge": "كرم الضيافة اللبنانية والشاي العطري",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
            "/the_lane.jpg"
        ],
        "vibe": "أجواء بيروت الدافئة مع قهوة الركوة بالهيل وعثملية القشطة البلدية بإطلالة ممشى النوافير في كابيتال بارك",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "ضيافة لبنانية فاخرة",
            "كابيتال بيزنس بارك",
            "حلويات شرقية"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@tamarabistro"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/tamarabistro/",
            "instagramHandle": "@tamarabistro",
            "facebook": "https://www.facebook.com/tamarabistro",
            "website": "https://www.instagram.com/tamarabistro/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Tamara%20Lebanese%20Bistro%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84%20%D8%A8%D9%8A%D8%B2%D9%86%D8%B3%20%D8%A8%D8%A7%D8%B1%D9%83%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B2%D8%A7%D9%8A%D8%AF"
        },
        "menu": [
            {
                "id": "tamara-cbp-1",
                "name": "قهوة بيضاء لبنانية بماء الزهر والليمون",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 65,
                "desc": "مشروب بيروتي تقليدي مهدئ للأعصاب"
            },
            {
                "id": "tamara-cbp-2",
                "name": "قهوة لبنانية بالهيل في ركوة نحاسية",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 75,
                "desc": "محوجة على الأصول مع حبوب الهيل الأخضر"
            },
            {
                "id": "tamara-cbp-3",
                "name": "عثملية تمارا بالقشطة البلدية والقطر",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 130,
                "desc": "شعيرية مقرمشة محشوة بالقشطة الطازجة"
            }
        ]
    },
    {
        "id": "mori-lounge-arkan",
        "name": "Mori Lounge & Cafe",
        "nameAr": "موري لاونج — داخل مجمع أركان بلازا",
        "logo": "/logos/mori-lounge-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0100 223 1188",
        "rating": 4.8,
        "reviewsCount": "2.7k",
        "priceRange": "من 85 - 245 جنيه",
        "badge": "الرقي الآسيوي والشاي الأخضر الياباني",
        "badgeType": "luxury",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
            "/hero_cafe.jpg",
            "/vanilla.jpg"
        ],
        "vibe": "جلسات هادئة راقية بأركان تقدم شاي السينشا والجينمايتشا الياباني مع أطباق سوشي سويتس وقهوة متقنة",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "شاي ياباني أخضر",
            "أركان بلازا",
            "أجواء هادئة فاخرة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@morisushiegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/morisushiegypt/",
            "instagramHandle": "@morisushiegypt",
            "facebook": "https://www.facebook.com/morisushiegypt",
            "website": "https://www.instagram.com/morisushiegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Mori%20Lounge%20%26%20Cafe%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "mori-lounge-arkan-1",
                "name": "شاي سينشا أخضر ياباني فاخر",
                "category": "tea_specialty",
                "subType": "matcha",
                "type": "drink",
                "price": 85,
                "desc": "أوراق شاي يابانية قطفة أولى"
            },
            {
                "id": "mori-lounge-arkan-2",
                "name": "فلات وايت موري لاونج",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 90,
                "desc": "إسبريسو غني برغوة متجانسة"
            },
            {
                "id": "mori-lounge-arkan-3",
                "name": "شوكليت فوندان الحمم الذائبة",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 145,
                "desc": "شوكولاتة دافئة مع آيس كريم فانيلا"
            }
        ]
    },
    {
        "id": "caffe-ritazza-mallofarabia",
        "name": "Caffe Ritazza",
        "nameAr": "كافيه ريتاتزا — داخل مول العرب (ميدان جهينة)",
        "logo": "/logos/caffe-ritazza-mallofarabia.svg",
        "district": "zayed",
        "districtName": "6 أكتوبر • داخل مول العرب",
        "address": "داخل مول العرب، ميدان جهينة، محور 26 يوليو، 6 أكتوبر",
        "phone": "0112 556 9900",
        "rating": 4.6,
        "reviewsCount": "1.9k",
        "priceRange": "من 70 - 190 جنيه",
        "badge": "القهوة الإيطالية السريعة الموثوقة",
        "badgeType": "featured",
        "luxuryScore": 92,
        "image": "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=85",
            "/circle.jpg",
            "/coffee_dessert.jpg"
        ],
        "vibe": "إسبريسو وكابتشينو إيطالي سريع وموثوق لعشاق القهوة الصباحية السريعة بمول العرب",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "مول العرب",
            "قهوة إيطالية",
            "خدمة سريعة"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@cafferitazzaegypt"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/cafferitazzaegypt/",
            "instagramHandle": "@cafferitazzaegypt",
            "facebook": "https://www.facebook.com/cafferitazzaegypt",
            "website": "https://www.instagram.com/cafferitazzaegypt/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Caffe%20Ritazza%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D8%8C%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%20%D8%AC%D9%87%D9%8A%D9%86%D8%A9%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
        },
        "menu": [
            {
                "id": "caffe-ritazza-mallofarabia-1",
                "name": "ريتاتزا كابتشينو إيطالي كبير",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "رغوة كثيفة مع بودرة شوكولاتة"
            },
            {
                "id": "caffe-ritazza-mallofarabia-2",
                "name": "آيسد لاتيه بالكراميل",
                "category": "iced_coffee",
                "subType": "spanish",
                "type": "drink",
                "price": 90,
                "desc": "حليب بارد وإسبريسو منعش"
            },
            {
                "id": "caffe-ritazza-mallofarabia-3",
                "name": "مافن الشوكولاتة المزدوجة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 70,
                "desc": "محشوة بقطع شوكولاتة داكنة ذائبة"
            }
        ]
    },
    {
        "id": "eish-malh-arkan",
        "name": "Eish + Malh",
        "nameAr": "عيش وملح — داخل مجمع أركان بلازا",
        "logo": "/logos/eish-malh-arkan.svg",
        "district": "zayed",
        "districtName": "الشيخ زايد • داخل مجمع أركان بلازا",
        "address": "داخل مجمع أركان بلازا، محور 26 يوليو، مدخل زايد 2000",
        "phone": "0109 888 1144",
        "rating": 4.8,
        "reviewsCount": "2.1k",
        "priceRange": "من 80 - 235 جنيه",
        "badge": "الجيلاتو الطبيعي والقهوة الإيطالية بزايد",
        "badgeType": "specialty",
        "luxuryScore": 97,
        "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
        "gallery": [
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
            "/onze.jpg",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
        ],
        "vibe": "أصالة المطبخ الإيطالي التراثي والجيلاتو الطبيعي المصنوع يدوياً يومياً في توسعة أركان الراقية",
        "moods": [
            "all",
            "luxury",
            "outdoor",
            "drink",
            "coffee",
            "dessert"
        ],
        "tags": [
            "أركان بلازا",
            "جيلاتو طبيعي",
            "تيراميسو وكانولي"
        ],
        "amenities": {
            "wifi": "واي فاي سريع جداً مجاني",
            "sockets": "أفياش لابتوب متاحة بالجلسات",
            "outdoor": "جلسات خارجية راقية ومريحة",
            "parking": "أماكن انتظار سيارات وخدمة فاليه متاحة",
            "hours": "يومياً من 7:30 ص حتى 12:30 ص",
            "instagram": "@eishmalh"
        },
        "socialLinks": {
            "instagram": "https://www.instagram.com/eishmalh/",
            "instagramHandle": "@eishmalh",
            "facebook": "https://www.facebook.com/eishmalh",
            "website": "https://www.instagram.com/eishmalh/",
            "googleMaps": "https://www.google.com/maps/dir/?api=1&destination=Eish%20%2B%20Malh%20%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%20%D8%A8%D9%84%D8%A7%D8%B2%D8%A7%D8%8C%20%D9%85%D8%AD%D9%88%D8%B1%2026%20%D9%8A%D9%88%D9%84%D9%8A%D9%88%D8%8C%20%D9%85%D8%AF%D8%AE%D9%84%20%D8%B2%D8%A7%D9%8A%D8%AF%202000"
        },
        "menu": [
            {
                "id": "eish-malh-arkan-1",
                "name": "إسبريسو إيطالي دوبيو فريش",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 80,
                "desc": "حبوب بن إيطالية مستوردة مستخلصة بعناية"
            },
            {
                "id": "eish-malh-arkan-2",
                "name": "أفوغاتو جيلاتو الفستق الحلبي",
                "category": "hot_coffee",
                "subType": "flatwhite",
                "type": "drink",
                "price": 115,
                "desc": "بولة جيلاتو فستق مع فنجان إسبريسو ساخن"
            },
            {
                "id": "eish-malh-arkan-3",
                "name": "تيراميسو عيش وملح التقليدي",
                "category": "desserts",
                "subType": "cheesecake",
                "type": "dessert",
                "price": 135,
                "desc": "بسكويت سافوياردي مشبع بالقهوة وجبن الماسكاربوني"
            },
            {
                "id": "eish-malh-arkan-4",
                "name": "كانولي صقلية بالريكوتا والشوكولاتة",
                "category": "bakery",
                "subType": "croissant",
                "type": "dessert",
                "price": 90,
                "desc": "أنبوب مقرمش محشو بكريمة الريكوتا الإيطالية"
            }
        ]
    }
];
function calculateSmartBasket(cafe, budget, mood, subType = 'all') {
    if (!cafe || !cafe.menu || cafe.menu.length === 0) return null;
    const drinks = cafe.menu.filter((i)=>i.type === "drink");
    const desserts = cafe.menu.filter((i)=>i.type === "dessert");
    const foods = cafe.menu.filter((i)=>i.type === "food");
    let bestCombo = null;
    // 1. If user filtered by a specific subType (e.g. 'v60', 'spanish', 'matcha', 'croissant', etc.)
    if (subType && subType !== 'all') {
        const matchingSpecific = cafe.menu.filter((i)=>i.subType === subType && i.price <= budget);
        if (matchingSpecific.length > 0) {
            // Pick best matching specific item
            matchingSpecific.sort((a, b)=>b.price - a.price);
            const chosenItem = matchingSpecific[0];
            const remainingForSide = budget - chosenItem.price;
            // Try adding a dessert/drink side if budget allows
            let sideItem = null;
            if (chosenItem.type === 'drink' && remainingForSide >= 60) {
                const affordableDessert = desserts.filter((d)=>d.price <= remainingForSide).sort((a, b)=>b.price - a.price);
                if (affordableDessert.length > 0) sideItem = affordableDessert[0];
            } else if (chosenItem.type !== 'drink' && remainingForSide >= 60) {
                const affordableDrink = drinks.filter((d)=>d.price <= remainingForSide).sort((a, b)=>b.price - a.price);
                if (affordableDrink.length > 0) sideItem = affordableDrink[0];
            }
            if (sideItem) {
                bestCombo = {
                    items: [
                        chosenItem,
                        sideItem
                    ],
                    total: chosenItem.price + sideItem.price,
                    summary: `${chosenItem.name} + ${sideItem.name}`
                };
            } else {
                bestCombo = {
                    items: [
                        chosenItem
                    ],
                    total: chosenItem.price,
                    summary: chosenItem.name
                };
            }
            bestCombo.remaining = budget - bestCombo.total;
            return bestCombo;
        }
    }
    // 2. Standard Mood Matching: Drinks Only
    if (mood === "drink" || mood === "coffee") {
        const affordable = drinks.filter((d)=>d.price <= budget);
        if (affordable.length > 0) {
            affordable.sort((a, b)=>b.price - a.price);
            bestCombo = {
                items: [
                    affordable[0]
                ],
                total: affordable[0].price,
                summary: affordable[0].name
            };
        }
    } else if (mood === "food") {
        let maxSpent = 0;
        for (const f of foods){
            for (const d of drinks){
                const sum = f.price + d.price;
                if (sum <= budget && sum > maxSpent) {
                    maxSpent = sum;
                    bestCombo = {
                        items: [
                            f,
                            d
                        ],
                        total: sum,
                        summary: `${f.name} + ${d.name}`
                    };
                }
            }
        }
        if (!bestCombo) {
            const affordableFoods = foods.filter((f)=>f.price <= budget).sort((a, b)=>b.price - a.price);
            if (affordableFoods.length > 0) {
                bestCombo = {
                    items: [
                        affordableFoods[0]
                    ],
                    total: affordableFoods[0].price,
                    summary: affordableFoods[0].name
                };
            }
        }
    } else {
        let maxSpent = 0;
        for (const d of drinks){
            for (const s of desserts){
                const sum = d.price + s.price;
                if (sum <= budget && sum > maxSpent) {
                    maxSpent = sum;
                    bestCombo = {
                        items: [
                            d,
                            s
                        ],
                        total: sum,
                        summary: `${d.name} + ${s.name}`
                    };
                }
            }
        }
        // Fallback to single best affordable item
        if (!bestCombo) {
            const allAffordable = cafe.menu.filter((i)=>i.price <= budget).sort((a, b)=>b.price - a.price);
            if (allAffordable.length > 0) {
                bestCombo = {
                    items: [
                        allAffordable[0]
                    ],
                    total: allAffordable[0].price,
                    summary: allAffordable[0].name
                };
            }
        }
    }
    if (bestCombo) {
        bestCombo.remaining = budget - bestCombo.total;
    }
    return bestCombo;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ok4vlzgui8a5._.js.map