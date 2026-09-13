import "./globals.css";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollObserver from "@/components/ScrollObserver";
import PhoneFloat from "@/components/PhoneFloat";
import Script from "next/script";
import subelerData from "@/data/subeler.json";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Çerkezköy Taksi 🚕 En Yakın Taksi Durağı & Numarası | Çiçek Taksi",
  description: "Çerkezköy taksi numarası arıyorsanız, en yakın taksi durağı Çiçek Taksi 7/24 hizmetinizde. Çerkezköy otogar taksi, hastane taksi ve Kapaklı ulaşımlarınız için güvenilir adres.",
  metadataBase: new URL("https://www.cerkezkoycicektaksi.com"),
  openGraph: {
    title: "Çerkezköy Taksi 🚕 En Yakın Taksi Durağı & Numarası | Çiçek Taksi",
    description: "Çerkezköy taksi numarası arıyorsanız, en yakın taksi durağı Çiçek Taksi 7/24 hizmetinizde. Çerkezköy otogar taksi, hastane taksi ve Kapaklı ulaşımlarınız için güvenilir adres.",
    url: "https://www.cerkezkoycicektaksi.com",
    siteName: "Çiçek Taksi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Çerkezköy Taksi 🚕 En Yakın Taksi Durağı & Numarası | Çiçek Taksi",
    description: "Çerkezköy taksi numarası, otogar ve hastane taksi ulaşımlarınız için en yakın durak Çiçek Taksi. Hemen arayın: 0546 401 47 51.",
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
        "@type": "WebSite",
        "@id": "https://www.cerkezkoycicektaksi.com/#website",
        "url": "https://www.cerkezkoycicektaksi.com",
        "name": "Çiçek taksi Çerkezköy",
        "publisher": {
          "@id": "https://www.cerkezkoycicektaksi.com/#organization"
        },
        "inLanguage": "tr-TR"
      },
      {
        "@type": "Organization",
        "@id": "https://www.cerkezkoycicektaksi.com/#organization",
        "name": "Çiçek Taksi",
        "url": "https://www.cerkezkoycicektaksi.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cerkezkoycicektaksi.com/logo.png"
        },
        "contactPoint": subelerData.map((sube) => ({
          "@type": "ContactPoint",
          "telephone": `+90${sube.phoneLink.slice(1)}`,
          "contactType": "customer service",
          "areaServed": "TR",
          "availableLanguage": "Turkish"
        }))
      }
    ]
  };

  return (
    <html lang="tr" className={outfit.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="alternate" hrefLang="tr" href="https://www.cerkezkoycicektaksi.com" />
        <link rel="alternate" hrefLang="en" href="https://www.cerkezkoycicektaksi.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cerkezkoycicektaksi.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16495430463"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-16495430463');
            `,
          }}
        />
      </head>
      <body className={outfit.className}>
        <Preloader />
        <ScrollObserver />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <PhoneFloat />
        <Script
          id="conversion-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e) {
                var target = e.target.closest('a');
                if (target && target.href.startsWith('tel:')) {
                  if (typeof gtag === 'function') {
                    gtag('event', 'conversion', {'send_to': 'AW-16495430463/igYYCMvS39UcEL-W0bk9'});
                  }
                }
              });
            `
          }}
        />
      </body>
    </html>
  );
}
