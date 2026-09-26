import bolgelerData from '@/data/bolgeler.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LazyMap from '@/components/LazyMap';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const bolge = bolgelerData.find((area) => area.slug === slug);
  if (!bolge) return { title: 'Sayfa Bulunamadı' };

  return {
    title: `${bolge.neighborhood} Taksi Bilgisi | Çiçek Taksi`,
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
            Taksi talebi için telefonla ulaşın veya WhatsApp üzerinden alınış konumunuzu paylaşın.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container container--sm">
          <div className="rich-content">
            <h2>Çağrı sırasında paylaşın</h2>
            <ul>
              <li>Alınış adresi veya harita konumu</li>
              <li>Gideceğiniz yer ve istediğiniz saat</li>
              <li>Yolcu sayısı ve büyük bagaj bilgisi</li>
            </ul>
            <p>Araç uygunluğu ve tahmini varış süresi konuma, trafiğe ve mevcut talebe göre değişir. Ücretin nasıl hesaplanacağını ve ödeme seçeneklerini yolculuktan önce telefonda teyit edin.</p>
            <p>Ücret için sitemizdeki <Link href="/taksi-ucreti-hesaplama">taksi ücreti hesaplama aracını</Link> kullanabilirsiniz. Son tutar güzergâh ve geçerli tarifeye göre değişebilir.</p>
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
