import "./globals.css";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollObserver from "@/components/ScrollObserver";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Çiçek Taksi Çerkezköy | 7/24 Taksi Hizmeti",
  description: "Çerkezköy'de 7/24 güvenilir taksi hizmeti. Kredi kartı geçerli, temiz araçlar, profesyonel şoförler. Hemen arayın, kapınıza gelelim.",
  metadataBase: new URL("https://www.cicektaksi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Çiçek Taksi Çerkezköy | 7/24 Taksi Hizmeti",
    description: "Çerkezköy'de 7/24 güvenilir taksi hizmeti. Kredi kartı geçerli, temiz araçlar. Hemen arayın!",
    url: "https://www.cicektaksi.com",
    siteName: "Çiçek Taksi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Çiçek Taksi Çerkezköy | 7/24 Taksi Hizmeti",
    description: "Çerkezköy'de 7/24 güvenilir taksi hizmeti. Kredi kartı geçerli!",
  },
  other: {
    "theme-color": "#FFCC00",
    "author": "Çiçek Taksi",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TaxiService",
        "name": "Çiçek Taksi Çerkezköy",
        "image": "https://www.cicektaksi.com/logo.png",
        "@id": "https://www.cicektaksi.com/#localbusiness",
        "url": "https://www.cicektaksi.com",
        "telephone": "+905464014751",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Çerkezköy Merkez",
          "addressLocality": "Çerkezköy",
          "addressRegion": "Tekirdağ",
          "postalCode": "59500",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.2858,
          "longitude": 28.0003
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "$$"
      },
      {
        "@type": "Organization",
        "name": "Çiçek Taksi",
        "url": "https://www.cicektaksi.com",
        "logo": "https://www.cicektaksi.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+905464014751",
          "contactType": "customer service"
        }
      }
    ]
  };

  return (
    <html lang="tr" className={outfit.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Placeholder for Search Console and GA4 */}
        <meta name="google-site-verification" content="HTML_DOGRULAMA_KODUNUZU_BURAYA_EKLEYIN" />
      </head>
      <body className={outfit.className}>
        <Preloader />
        <ScrollObserver />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Phone Float */}
        <a href="tel:+905464014751" className="phone-float" aria-label="Taksi Çağır">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span className="phone-float__tip">Hemen Bizi Ara</span>
        </a>
      </body>
    </html>
  );
}
