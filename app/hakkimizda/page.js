import Link from 'next/link';
import subelerData from '@/data/subeler.json';

export const metadata = {
  alternates: { canonical: '/hakkimizda' },
  title: 'Çiçek Taksi Hakkında',
  description: 'Çiçek Taksi’nin Çerkezköy’deki şubeleri, ulaşım ve iletişim bilgileri.',
};

export default function Hakkimizda() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg" />
        <div className="container relative z-10">
          <div className="page-hero__breadcrumb"><Link href="/">Ana Sayfa</Link> / Hakkımızda</div>
          <h1 className="page-hero__title">Çiçek Taksi <em>hakkında</em></h1>
          <p className="page-hero__desc">Çerkezköy’deki şubelerimiz ve yolculuk öncesi bilmeniz gerekenler.</p>
        </div>
      </header>

      <section className="section">
        <div className="container container--sm rich-content">
          <h2>Çerkezköy’de taksi ulaşımı</h2>
          <p>
            Çiçek Taksi, Çerkezköy’de Gazi Mustafa Kemal Paşa ve Bağlık şubeleri üzerinden telefonla taksi talebi alır. Alınış noktanızı ve gideceğiniz yeri paylaşarak araç uygunluğu, tahmini varış süresi ve yolculuk ücretlendirmesi hakkında bilgi alabilirsiniz.
          </p>
          <p>
            Sitedeki ücret hesaplama aracı rota mesafesine dayalı yaklaşık bir tutar gösterir. Trafik, bekleme, güzergâh ve geçerli tarife son ücreti değiştirebilir. Planlı yolculuk talebinizi <Link href="/cerkezkoy-taksi-randevu">randevu sayfasından</Link> WhatsApp’a hazırlayabilir; talebin kesinleşmesi için duraktan onay bekleyebilirsiniz.
          </p>

          <h2>Şubelerimiz</h2>
          {subelerData.map((sube) => (
            <div key={sube.id} style={{ marginBottom: '24px' }}>
              <h3>{sube.title}</h3>
              <p>{sube.address}</p>
              <p><a href={`tel:+90${sube.phoneLink.slice(1)}`}>{sube.phone}</a></p>
              <p><a href={sube.mapsLink} target="_blank" rel="noopener noreferrer">Haritada görüntüle</a></p>
            </div>
          ))}

          <p>Şubeler ve iletişim seçenekleri için <Link href="/iletisim">iletişim sayfamızı</Link> inceleyin.</p>
        </div>
      </section>
    </>
  );
}
