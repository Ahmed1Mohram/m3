import './globals.css';

export const metadata = {
  title: 'CaféLens | كافيه لينس — دليلك لأفخم كافيهات التجمع والشيخ زايد على قد ميزانيتك',
  description:
    'دليل حصري موثق بالأسعار الرسمية لأفخم 120 كافيه في التجمع الخامس والشيخ زايد. احسب خروجتك بالمليم مع توليفة طلب ذكية ومقارنة كافيهات تفاعلية.',
  keywords: [
    'كافيهات التجمع',
    'كافيهات الشيخ زايد',
    'أسعار كافيهات القاهرة',
    'كافيهات ووترواي',
    'كافيهات اركان بلازا',
    'كافيه لينس',
    'CaféLens'
  ],
  icons: {
    icon: '/favicon.svg'
  }
};

export const viewport = {
  themeColor: '#060709',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#060709] text-[#F3F4F6] min-h-screen selection:bg-[#F3C06B]/30 selection:text-[#F3C06B] antialiased">
        {children}
      </body>
    </html>
  );
}
