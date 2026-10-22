import Link from "next/link";
import FareCalculator from "@/components/FareCalculator";

export const metadata = {
  title: "Çerkezköy Taksi Ücreti Hesaplama | Ücretsiz Tahmin",
  description: "Çerkezköy taksi ücreti hesaplama aracıyla başlangıç ve varış noktanızı seçin. Araç rotasının mesafesini ve tahmini taksi ücretini ücretsiz görün.",
  keywords: [
    "Çerkezköy taksi ücreti hesaplama",
    "taksi fiyat hesaplama",
    "Çerkezköy taksi fiyatları",
    "taksi yol parası hesaplama",
    "Çerkezköy taksimetre hesaplama",
  ],
  alternates: { canonical: "/taksi-ucreti-hesaplama" },
  openGraph: {
    title: "Çerkezköy Taksi Ücreti Hesaplama",
    description: "Çerkezköy’de başlangıç ve varış konumunu seçin; rota mesafesine göre tahmini taksi ücretini ücretsiz hesaplayın.",
    url: "/taksi-ucreti-hesaplama",
    type: "website",
  },
};

const faqs = [
  {
    q: "Çerkezköy taksi ücreti nasıl hesaplanır?",
    a: "Başlangıç ve varış konumunu seçtiğinizde araç rotasının yaklaşık mesafesi bulunur ve hesaplayıcının ücret formülüne göre tahmini tutar gösterilir. Bu sonuç taksimetre garantisi veya sabit fiyat teklifi değildir.",
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
          <p className="page-hero__desc">Çerkezköy’de taksi yol ücretini hesaplayın: başlangıç ve varış noktanızı seçin, araç rotasının mesafesine göre tahmini tutarı görün.</p>
        </div>
      </header>
      <FareCalculator />

      <section className="section section--gray">
        <div className="container container--sm rich-content fare-seo-content">
          <span className="sh__overtitle">Çerkezköy yolculuk rehberi</span>
          <h2>Çerkezköy taksi ücreti nasıl hesaplanır?</h2>
          <p>
            Çerkezköy taksi ücreti hesaplama aracında alınış ve varış noktalarını seçtiğinizde araç rotasının yaklaşık mesafesi hesaplanır. Sonuç, mesafeye dayalı bir yol ücreti tahminidir; sabit fiyat teklifi veya taksimetre garantisi değildir.
          </p>
          <h2>Çerkezköy içinde taksi fiyatı ve yol parası hesaplama</h2>
          <p>
            Çerkezköy merkezindeki yolculuğunuz için adresleri yazarak veya konum izni vererek başlangıç noktasını seçebilirsiniz. Bağlık ve Kızılpınar gibi Çerkezköy mahallelerindeki adresleri de aratabilir; favori varış noktalarından birini seçerek hesabı başlatabilirsiniz. Konum izni vermek istemiyorsanız adresi elle yazmanız yeterlidir.
          </p>
          <p>
            Taksi fiyatı hesaplama sonucu yaklaşık bilgi verir. Trafik, bekleme süresi, yol çalışmaları, seçilen güzergâh ve geçerli tarife gerçek yol ücretini değiştirebilir. Havalimanı ve şehirler arası transferler için <Link href="/fiyatlar">Çerkezköy çıkışlı transfer fiyatlarını</Link> inceleyin; şehir içi yolculuk için bu sayfadaki hesaplayıcıyı kullanın.
          </p>
          <p>
            Yolculuğunuzun günü ve saati belliyse <Link href="/cerkezkoy-taksi-randevu">Çerkezköy taksi randevu sayfamızdan</Link> alınış ve varış yerini, planladığınız saati ve notunuzu ekleyip talebinizi WhatsApp üzerinden durağa iletebilirsiniz. Randevu, araç uygunluğu durak tarafından onaylandığında kesinleşir.
          </p>
          <p>
            Çerkezköy taksi fiyatları hakkında belirli bir rota için bilgi almak isterseniz tahmini hesabınızla birlikte <Link href="tel:+905464014751">Çiçek Taksi’yi arayıp</Link> araç uygunluğunu ve güncel ücret bilgisini teyit edebilirsiniz.
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
