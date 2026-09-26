import Link from "next/link";
import FareCalculator from "@/components/FareCalculator";

export const metadata = {
  title: "Çerkezköy Taksi Randevu ve Rezervasyon | Çiçek Taksi",
  description: "Çerkezköy taksi randevunuzu önceden planlayın. Alınış ve varış konumunu seçin, tahmini ücreti görün; tarih, saat ve notla yolculuk talebinizi WhatsApp'tan Çiçek Taksi'ye gönderin.",
  keywords: [
    "Çerkezköy taksi randevu",
    "Çerkezköy taksi rezervasyon",
    "önceden taksi çağırma Çerkezköy",
    "Çerkezköy planlı taksi",
    "Çerkezköy vardiya taksi",
    "Çerkezköy otogar taksi rezervasyonu",
  ],
  alternates: { canonical: "/cerkezkoy-taksi-randevu" },
  openGraph: {
    title: "Çerkezköy Taksi Randevu | Çiçek Taksi",
    description: "Yolculuğunuzu, saatinizi ve notunuzu belirleyin; tahmini ücreti görüp talebinizi WhatsApp'tan gönderin.",
    url: "/cerkezkoy-taksi-randevu",
    type: "website",
  },
};

const faqs = [
  {
    q: "Çerkezköy taksi randevusu nasıl oluşturulur?",
    a: "Alınış ve varış konumunu seçip tahmini ücreti hesaplayın. Yolculuk tarihi, saati ve ulaşılabilecek telefon numarasını girerek talebi WhatsApp'tan Çiçek Taksi'ye gönderin. Mesajı WhatsApp içinde sizin göndermeniz gerekir.",
  },
  {
    q: "WhatsApp'tan gönderince taksi rezervasyonu kesinleşir mi?",
    a: "Hayır. WhatsApp mesajı yolculuk talebinizi durağa iletir. Araç uygunluğu ve randevu, Çiçek Taksi talebinizi yanıtlayıp onayladığında kesinleşir.",
  },
  {
    q: "Hesaplanan taksi ücreti kesin fiyat mı?",
    a: "Hayır. Ücret, seçilen araç rotasının mesafesine göre tahmindir. Trafik, güzergâh, bekleme ve geçerli tarife son tutarı etkileyebilir; yolculuk öncesinde durakla teyit edin.",
  },
  {
    q: "Vardiya, hastane veya otogar yolculuğu için not ekleyebilir miyim?",
    a: "Evet. İsteğe bağlı not alanına vardiya çıkışı, buluşma tarifi veya yolcu ve bagaj bilgisi gibi ayrıntıları ekleyebilirsiniz. Araç ve saat uygunluğunu durak teyit eder.",
  },
];

export default function CerkezkoyTaxiAppointmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Çerkezköy Taksi Randevu ve Rezervasyon",
        url: "https://www.cerkezkoycicektaksi.com/cerkezkoy-taksi-randevu",
        description: "Çerkezköy'de taksi yolculuğu planlama, rota ücreti tahmini ve WhatsApp ile yolculuk talebi gönderme sayfası.",
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
          { "@type": "ListItem", position: 2, name: "Çerkezköy Taksi Randevu", item: "https://www.cerkezkoycicektaksi.com/cerkezkoy-taksi-randevu" },
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
            <Link href="/">Ana Sayfa</Link><span>›</span><span>Çerkezköy Taksi Randevu</span>
          </div>
          <h1 className="page-hero__title">Çerkezköy Taksi <em>Randevu ve Rezervasyon</em></h1>
          <p className="page-hero__desc">Yolculuk yerlerini seçin, yaklaşık ücreti hesaplayın ve istediğiniz gün ile saat için talebinizi Çiçek Taksi&apos;ye WhatsApp&apos;tan gönderin.</p>
        </div>
      </header>

      <FareCalculator bookingPage />

      <section className="section section--gray">
        <div className="container container--sm rich-content fare-seo-content">
          <span className="sh__overtitle">Planlı yolculuk talebi</span>
          <h2>Çerkezköy&apos;de taksiyi önceden planlayın</h2>
          <p>Vardiya saati, hastane randevusu, tren veya otogar yolculuğu gibi önceden belli olan bir yolculuk için bu sayfadan alınış ve varış noktanızı seçebilirsiniz. Rota hesabı yaklaşık mesafeyi ve tahmini ücreti gösterir; planladığınız tarih ve saati girince talep mesajı hazırlanır.</p>
          <p>WhatsApp açıldığında yolculuk ayrıntılarını ve tahmini tutarı kontrol edip mesajı kendiniz gönderirsiniz. Talep, durakla WhatsApp üzerinden iletişime geçmenizi sağlar; araç uygunluğu ve rezervasyon, durak onay verdiğinde kesinleşir. WhatsApp mesajı gönderilmeden bilgiler durağa iletilmez.</p>
          <h2>Yolculuk talebine hangi bilgileri ekleyebilirsiniz?</h2>
          <p>Alınış konumu, varış yeri, planlanan tarih ve saat ile size ulaşılabilecek telefon numarası mesaja eklenir. İsteğe bağlı not alanına vardiya çıkışı, buluşma tarifi veya yolcu ve bagaj bilgisi yazabilirsiniz. Konum için adresi elle girebilir ya da cihazınızın konum iznini kullanabilirsiniz.</p>
          <p>Gösterilen tutar mesafeye dayalı tahmindir; trafik, seçilen güzergâh, bekleme ve geçerli tarife son ücreti değiştirebilir. Ücret ve araç uygunluğunu yolculuk öncesinde durakla teyit edin. Anlık taksi çağrısı için <Link href="/">ana sayfadaki taksi çağırma seçeneklerini</Link>, yalnızca rota hesabı için de <Link href="/taksi-ucreti-hesaplama">Çerkezköy taksi ücreti hesaplama sayfasını</Link> kullanabilirsiniz.</p>
        </div>
      </section>

      <section className="section fare-faq">
        <div className="container container--sm">
          <div className="sh sh--center">
            <span className="sh__overtitle">Sık sorulanlar</span>
            <h2 className="sh__title">Taksi randevusu hakkında <em>bilgi</em></h2>
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
