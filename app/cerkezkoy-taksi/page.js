import Link from 'next/link';

export const metadata = {
  title: "Çerkezköy Taksi | Çiçek Taksi",
  description: "Çerkezköy Taksi ile Çerkezköy bölgesinde 7/24 kesintisiz ulaşım. Hızlı, güvenilir ve uygun fiyatlı taksi çağır.",
  alternates: {
    canonical: "/cerkezkoy-taksi",
  }
};

export default function cerkezkoy_taksi_Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Çerkezköy Taksi",
    "description": "Çerkezköy Taksi ile Çerkezköy bölgesinde 7/24 kesintisiz ulaşım. Hızlı, güvenilir ve uygun fiyatlı taksi çağır.",
    "author": {
      "@type": "Organization",
      "name": "Çiçek Taksi"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <Link href="/" style={{ color: 'var(--taxi-yellow)', fontWeight: 'bold' }}>Ana Sayfa</Link> / 
            <span style={{ color: 'var(--text-muted)' }}> Çerkezköy Taksi</span>
          </div>
          <h1 className="sh__title" style={{ fontSize: '3rem', marginBottom: '20px' }}>Çerkezköy Taksi</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Çerkezköy Taksi ile Çerkezköy bölgesinde 7/24 kesintisiz ulaşım. Hızlı, güvenilir ve uygun fiyatlı taksi çağır.</p>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <div 
            className="seo-content-block"
            dangerouslySetInnerHTML={{ __html: "<h2>Çerkezköy Taksi - Çerkezköy Ulaşım Rehberi</h2><p><strong>Çerkezköy Taksi</strong> hizmetimiz ile Çerkezköy bölgesindeki tüm ulaşım ihtiyaçlarınızı en üst düzey kalite standartlarında karşılıyoruz. Bilindiği üzere günümüz metropol yaşantısında zaman en kıymetli hazinemiz. Bölge sakinleri ve misafirler için Gazi Mustafa Kemal Paşa, Bağlık, Gazi Osman Paşa gibi kilit noktalarda hazır bekleyen araçlarımızla, saniyeler içinde kapınızdayız.</p><p>Güvenli bir yolculuk deneyimi arayanlar için Çerkezköy Taksi en doğru tercih. Şehir içi trafik yoğunluğundan etkilenmeden, deneyimli şoförlerimizin bildiği alternatif rotalar üzerinden Çerkezköy güzergahında kesintisiz hizmet veriyoruz. Ticari taksi ararken en çok dikkat edilen hijyen ve güvenlik konularında, filomuzu her gün dezenfekte ediyor ve düzenli bakıma sokuyoruz.</p><p>Peki ya fiyatlandırma? Çerkezköy Taksi olarak her zaman bütçe dostu ve şeffaf bir tarife izliyoruz. Çerkezköy merkezinden Gazi Mustafa Kemal Paşa veya diğer mahallelere giderken sürpriz ücretlerle karşılaşmazsınız. Üstelik tüm araçlarımızda komisyonsuz olarak kredi kartı ile ödeme kolaylığı sağlıyoruz. Acil bir toplantıya, hastaneye ya da otogara yetişmeniz gerektiğinde tek yapmanız gereken iletişim numaramızdan taksi çağırmak.</p><p>Özellikle gece saatlerinde Çerkezköy sokaklarında ulaşım zorlaşabilir. Ancak nöbetçi araç sistemimiz sayesinde haftanın 7 günü 24 saat Fevzipaşa ve Yıldırım Beyazıt bölgelerinde dahi hızla yanınızda oluyoruz. Amacımız sadece sizi bir yerden bir yere götürmek değil; konforlu, huzurlu ve güvenilir bir transfer deneyimi yaşatmaktır. Rezervasyon işlemleriniz için WhatsApp destek hattımızı da kullanabilirsiniz.</p><p>Kısa mesafe veya uzun mesafe fark etmeksizin Çerkezköy içi tüm noktalar (Gazi Mustafa Kemal Paşa, Bağlık, Gazi Osman Paşa, Fevzipaşa, Yıldırım Beyazıt) güzergahımızdadır. İşe gidiş ve dönüş saatlerindeki yoğunlukta zaman kaybetmemeniz için şoförlerimiz canlı trafik uygulamalarından anlık veri alarak hareket eder.</p>\n    <div style=\"margin-top:40px; background:#f5f5f5; padding:20px; border-radius:10px;\">\n        <h3>Çerkezköy Bölgesi Sık Sorulan Sorular</h3>\n        <ul>\n            <li><strong>Çerkezköy taksi çağırdığımda ne kadar sürede gelir?</strong><br/> Ortalama 3-5 dakika içinde adresinize yönlendirilir.</li>\n            <li><strong>Gazi Mustafa Kemal Paşa mahallesinden taksi bulabilir miyim?</strong><br/> Evet, 7/24 hizmet ağımız dahilindedir.</li>\n            <li><strong>Bagaj kapasiteniz yeterli mi?</strong><br/> Geniş hacimli araç seçeneklerimiz mevcuttur. Lütfen rezervasyon sırasında belirtin.</li>\n            <li><strong>Fiyatlar nasıl hesaplanıyor?</strong><br/> Taksimetre açılışından itibaren yasal tarife üzerinden net olarak hesaplanır, ek ücret talep edilmez.</li>\n        </ul>\n    </div>" }} 
            style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}
          />
        </div>
      </section>
    </>
  );
}
