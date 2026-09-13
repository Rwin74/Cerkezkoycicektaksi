import Link from "next/link";
import FareCalculator from "@/components/FareCalculator";

export const metadata = {
  title: "Çerkezköy Taksi Ücreti Hesaplama 2026 | Yol Parası Hesapla",
  description: "Çerkezköy taksi ücreti hesaplama aracıyla nereden nereye gideceğinizi seçin, rota mesafesini ve tahmini taksi fiyatını ücretsiz öğrenin.",
  keywords: [
    "Çerkezköy taksi ücreti hesaplama",
    "taksi fiyat hesaplama",
    "Çerkezköy taksi fiyatları",
    "taksi yol parası hesaplama",
    "Kapaklı taksi ücreti",
    "Çerkezköy taksimetre hesaplama",
  ],
  alternates: { canonical: "/taksi-ucreti-hesaplama" },
  openGraph: {
    title: "Çerkezköy Taksi Ücreti Hesaplama | Çiçek Taksi",
    description: "Başlangıç ve varış konumunu seç, rota mesafesine göre tahmini taksi ücretini anında gör.",
    url: "/taksi-ucreti-hesaplama",
    type: "website",
  },
};

const faqs = [
  {
    q: "Çerkezköy taksi ücreti nasıl hesaplanır?",
    a: "Hesaplayıcı seçtiğiniz iki konum arasındaki araç rotasını bulur ve yol mesafesine güncel ücretlendirmeyi uygulayarak tahmini toplamı gösterir.",
  },
  {
    q: "Hesaplanan taksi fiyatı kesin mi?",
    a: "Hayır. Gösterilen sonuç tahminidir. Trafik, bekleme, yol çalışması, güzergâh değişikliği ve güncel tarife gerçek taksimetre tutarını etkileyebilir.",
  },
  {
    q: "Kapaklı ve Kızılpınar için de hesaplama yapabilir miyim?",
    a: "Evet. Türkiye içindeki başlangıç ve varış noktalarını yazarak Çerkezköy, Kapaklı, Kızılpınar, Veliköy ve çevre bölgeler için rota hesaplayabilirsiniz.",
  },
];

export default function TaxiFareCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Çerkezköy Taksi Ücreti Hesaplama",
        url: "https://www.cerkezkoycicektaksi.com/taksi-ucreti-hesaplama",
        description: "Rota mesafesine göre ücretsiz tahmini Çerkezköy taksi ücreti hesaplama aracı.",
        isPartOf: { "@id": "https://www.cerkezkoycicektaksi.com/#website" },
        about: { "@id": "https://www.cerkezkoycicektaksi.com/#organization" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.cerkezkoycicektaksi.com" },
          { "@type": "ListItem", position: 2, name: "Taksi Ücreti Hesaplama", item: "https://www.cerkezkoycicektaksi.com/taksi-ucreti-hesaplama" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="page-hero fare-page-hero">
        <div className="page-hero__bg" />
        <div className="container relative z-10">
          <div className="page-hero__breadcrumb">
            <Link href="/">Ana Sayfa</Link><span>›</span><span>Taksi Ücreti Hesaplama</span>
          </div>
          <h1 className="page-hero__title">Çerkezköy Taksi Ücreti <em>Hesaplama</em></h1>
          <p className="page-hero__desc">Nereden nereye gideceğinizi seçin; rota mesafesini ve tahmini yol ücretini saniyeler içinde öğrenin.</p>
        </div>
      </header>

      <FareCalculator />

      <section className="section section--gray">
        <div className="container container--sm rich-content fare-seo-content">
          <span className="sh__overtitle">Güncel ücret rehberi</span>
          <h2>Çerkezköy taksi fiyatı nasıl hesaplanıyor?</h2>
          <p>
            Çiçek Taksi yol ücreti hesaplama aracı, seçtiğiniz iki adres arasındaki araç rotasını bulur ve mesafeye güncel ücretlendirmeyi uygulayarak tahmini toplamı gösterir.
          </p>
          <h2>Çerkezköy ve çevresinde ücretsiz rota hesabı</h2>
          <p>
            Araç; Çerkezköy merkez, Bağlık, Kızılpınar, Veliköy, Kapaklı ve Tekirdağ çevresinde taksi yol parası hesaplamak için kullanılabilir. Adresinizi yazabilir veya telefonunuzdan mevcut konumunuzu paylaşabilirsiniz. Konum izni vermek istemiyorsanız manuel adres girişi yeterlidir.
          </p>
          <p>
            Sonuç yaklaşık bilgi verir. Yolculuk sırasındaki trafik, bekleme süresi, yol çalışmaları ve sürücünün kullanmak zorunda kaldığı farklı güzergâhlar taksimetre tutarını değiştirebilir. Havalimanı ve şehirler arası sabit fiyatlar için <Link href="/fiyatlar">taksi fiyatları sayfamızı</Link> inceleyebilir veya bizi arayabilirsiniz.
          </p>
        </div>
      </section>

      <section className="section fare-faq">
        <div className="container container--sm">
          <div className="sh sh--center">
            <span className="sh__overtitle">Merak edilenler</span>
            <h2 className="sh__title">Taksi ücreti hakkında <em>sorular</em></h2>
          </div>
          <div className="fare-faq__list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
