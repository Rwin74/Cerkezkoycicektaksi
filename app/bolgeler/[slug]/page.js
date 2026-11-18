import bolgelerData from '@/data/bolgeler.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LazyMap from '@/components/LazyMap';
import Breadcrumb from '@/components/Breadcrumb';
import { searchTitleBase } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const bolge = bolgelerData.find((area) => area.slug === slug);
  if (!bolge) return { title: 'Sayfa Bulunamadı' };

  return {
    title: searchTitleBase(`${bolge.neighborhood} Taksi`),
    description: `${bolge.neighborhood} bölgesinden taksi talebi ve iletişim bilgileri. Araç uygunluğunu ve tahmini varış süresini ararken teyit edin.`,
    robots: { index: false, follow: true },
  };
}

export function generateStaticParams() {
  return bolgelerData.map(({ slug }) => ({ slug }));
}

export default async function BolgeDetay({ params }) {
  const { slug } = await params;
  const bolge = bolgelerData.find((area) => area.slug === slug);
  if (!bolge) notFound();

  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container relative z-10">
          <div className="page-hero__breadcrumb reveal">
            <Breadcrumb customItems={[
              { label: 'Bölgeler', url: '/site-haritasi' },
              { label: bolge.neighborhood, url: `/bolgeler/${bolge.slug}` },
            ]} />
          </div>
          <h1 className="page-hero__title reveal"><em>{bolge.neighborhood}</em> için taksi bilgisi</h1>
          <p className="page-hero__desc reveal" data-delay="100">
            Çerkezköy {bolge.neighborhood} mahallesinden taksi talebi için adresinizi telefonla bildirin veya WhatsApp üzerinden konum gönderin.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container container--sm">
          <div className="rich-content">
            <h2>{bolge.neighborhood} mahallesinden taksi çağırma</h2>
            <p>{bolge.neighborhood} mahallesinden yolculuk talebi oluştururken bulunduğunuz caddeyi, bina numarasını veya harita konumunu paylaşın. Yakındaki bilinen bir noktayı belirtmek, alınış yerinin doğru anlaşılmasına yardımcı olur.</p>
            <h3>Gideceğiniz yeri ve yolculuk ayrıntılarını bildirin</h3>
            <ul>
              <li>Varış adresi ve varsa tercih ettiğiniz saat</li>
              <li>Yolcu sayısı ile büyük bagaj gibi ihtiyaçlar</li>
              <li>İletişim için kullanacağınız telefon numarası</li>
            </ul>
            <h3>Ücret ve araç uygunluğunu teyit edin</h3>
            <p>Araç uygunluğu ve tahmini varış süresi konuma, trafiğe ve o anki talebe göre değişebilir; çağrı sırasında teyit edin. Yolculuk öncesi yaklaşık tutarı görmek için <Link href="/taksi-ucreti-hesaplama">taksi ücreti hesaplama aracını</Link> kullanın. Hesaplanan tutar tahminidir; geçerli tarife ve güzergâha göre son ücreti duraktan doğrulayın.</p>
          </div>
          <div className="cta-box" style={{background: 'var(--taxi-yellow)', padding: '32px', borderRadius: '16px', textAlign: 'center', marginTop: '32px'}}>
            <h2 style={{color: 'var(--dark-base)'}}>{bolge.neighborhood} için taksi çağırın</h2>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="tel:+905304014751" className="btn btn--dark btn--lg">Gazi MKP: 0530 401 47 51</a>
              <a href="tel:+905464014751" className="btn btn--dark btn--lg">Bağlık: 0546 401 47 51</a>
              <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">WhatsApp'tan konum gönderin</a>
            </div>
          </div>
          {bolge.lat && bolge.lng && (
            <div style={{marginTop: '36px', borderRadius: '16px', overflow: 'hidden'}}>
              <h2>{bolge.neighborhood} haritası</h2>
              <div style={{height: '360px', width: '100%', position: 'relative'}}>
                <LazyMap src={`https://maps.google.com/maps?q=${bolge.lat},${bolge.lng}&z=14&output=embed`} title={`${bolge.neighborhood} haritası`} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
