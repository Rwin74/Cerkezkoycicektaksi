import Link from 'next/link';
import { MapPin, Phone, Calculator } from 'lucide-react';
import subelerData from '@/data/subeler.json';

export const metadata = {
  title: 'Çerkezköy Taksi Numarası',
  description: 'Çerkezköy taksi numaraları: Bağlık 0546 401 47 51, Gazi MKP 0530 401 47 51. Hemen arayın; kartla ödemede komisyon yok. Araç uygunluğunu telefonda teyit edin.',
  alternates: { canonical: '/cerkezkoy-taksi-numarasi' },
};

export default function CerkezkoyTaksiNumarasiPage() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg" />
        <div className="container relative z-10">
          <div className="page-hero__breadcrumb"><Link href="/">Ana Sayfa</Link> / Taksi Numarası</div>
          <h1 className="page-hero__title">Çerkezköy Taksi <em>Numarası</em></h1>
          <p className="page-hero__desc">
            Taksi çağırmak için size uygun şubeyi arayın. Araç uygunluğunu, tahmini varış süresini ve yolculuk ücretini telefonda teyit edin.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {subelerData.map((sube) => (
              <article key={sube.id} className="contact-item" style={{ padding: 24, background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                <h2 style={{ fontSize: '1.35rem', marginBottom: 8 }}>{sube.title}</h2>
                <p style={{ color: 'var(--text-muted)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <MapPin size={18} aria-hidden="true" /> {sube.address}
                </p>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: '18px 0' }}>{sube.phone}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <a className="btn btn--primary" href={`tel:+90${sube.phoneLink.slice(1)}`}>
                    <Phone size={18} aria-hidden="true" /> Hemen ara
                  </a>
                  <a className="btn btn--outline" href={sube.mapsLink} target="_blank" rel="noopener noreferrer">
                    <MapPin size={18} aria-hidden="true" /> Yol tarifi
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="container container--sm rich-content" style={{ paddingTop: 48 }}>
            <h2>Çerkezköy’de taksi çağırma ve ödeme</h2>
            <p>
              Gazi Mustafa Kemalpaşa ve Bağlık şubelerinin numaraları yukarıdadır. Ararken alınış konumunuzu ve gideceğiniz yeri paylaşın; araç uygunluğu ile tahmini varış süresini duraktan öğrenin.
            </p>
            <p>
              Araçlarda kredi kartıyla ödeme yapılabilir ve kart ödemesinde komisyon alınmaz. Güzergâha göre yaklaşık tutar için ücret hesaplama aracını kullanabilir, planlı yolculuk talebinizi randevu sayfasından oluşturabilirsiniz.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link className="btn btn--outline" href="/taksi-ucreti-hesaplama"><Calculator size={18} aria-hidden="true" /> Ücret hesapla</Link>
              <Link className="btn btn--outline" href="/cerkezkoy-taksi-randevu">Planlı yolculuk oluştur</Link>
              <Link className="btn btn--outline" href="/iletisim">Tüm iletişim bilgileri</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
