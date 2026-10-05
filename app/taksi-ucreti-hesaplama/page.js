import Link from "next/link";
import FareCalculator from "@/components/FareCalculator";

export const metadata = {
  title: "Taksi Ücreti Hesapla 2026",
  description: "Çerkezköy taksi ücreti hesaplama aracıyla nereden nereye gideceğinizi seçin, rota mesafesini ve tahmini taksi fiyatını ücretsiz öğrenin.",
  keywords: [
    "Çerkezköy taksi ücreti hesaplama",
    "taksi fiyat hesaplama",
    "Çerkezköy taksi fiyatları",
    "taksi yol parası hesaplama",
    "Çerkezköy taksimetre hesaplama",
  ],
  alternates: { canonical: "/taksi-ucreti-hesaplama" },
  openGraph: {
    title: "Çerkezköy Taksi Ücreti Hesapla",
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
    q: "Çerkezköy çevresindeki bir adres için hesaplama yapabilir miyim?",
    a: "Evet. Başlangıç ve varış adreslerini yazarak araç rotasına göre yaklaşık mesafeyi ve tahmini ücreti hesaplayabilirsiniz. Hizmet uygunluğunu yolculuk öncesinde telefonla teyit edin.",
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

      <section aria-label="Hesaplama güncelleme bilgisi" className="container container--sm" style={{ paddingTop: "24px", paddingBottom: "0" }}>
        <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.9rem" }}>
          Son güncelleme: 01.10.2026
        </p>
      </section>
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
            Araç; Çerkezköy merkez, Bağlık, Kızılpınar, Veliköy ve Tekirdağ çevresindeki yolculuklar için rota tahmini sunar. Adresinizi yazabilir veya telefonunuzdan mevcut konumunuzu paylaşabilirsiniz. Konum izni vermek istemiyorsanız manuel adres girişi yeterlidir.
          </p>
          <p>
            Sonuç yaklaşık bilgi verir. Yolculuk sırasındaki trafik, bekleme süresi, yol çalışmaları ve sürücünün kullanmak zorunda kaldığı farklı güzergâhlar taksimetre tutarını değiştirebilir. Havalimanı ve şehirler arası sabit fiyatlar için <Link href="/fiyatlar">taksi fiyatları sayfamızı</Link> inceleyebilir veya bizi arayabilirsiniz.
          </p>
          <p>
            Yolculuğunuzun günü ve saati belliyse <Link href="/cerkezkoy-taksi-randevu">Çerkezköy taksi randevu sayfamızdan</Link> alınış ve varış yerini, planladığınız saati ve notunuzu ekleyip talebinizi WhatsApp üzerinden durağa iletebilirsiniz. Randevu, araç uygunluğu durak tarafından onaylandığında kesinleşir.
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
