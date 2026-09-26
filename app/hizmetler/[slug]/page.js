import hizmetlerData from '@/data/hizmetler.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const hizmet = hizmetlerData.find((item) => item.slug === slug);
  if (!hizmet) return { title: 'Hizmet bulunamadı', robots: { index: false } };

  return {
    title: `${hizmet.title} | Çiçek Taksi Çerkezköy`,
    description: `${hizmet.title} için araç uygunluğunu, yolculuk ayrıntılarını ve ücret hesabını telefonla teyit edin.`,
    alternates: { canonical: `/hizmetler/${hizmet.slug}` },
    robots: { index: false, follow: true },
  };
}

export function generateStaticParams() {
  return hizmetlerData.map(({ slug }) => ({ slug }));
}

export default async function HizmetDetay({ params }) {
  const { slug } = await params;
  const hizmet = hizmetlerData.find((item) => item.slug === slug);
  if (!hizmet) notFound();

  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container relative z-10">
          <div className="page-hero__breadcrumb reveal"><Link href="/">Ana Sayfa</Link> / <Link href="/hizmetler">Hizmetler</Link></div>
          <h1 className="page-hero__title reveal">{hizmet.title}</h1>
          <p className="page-hero__desc reveal" data-delay="100">{hizmet.description}</p>
        </div>
      </header>
      <section className="section">
        <div className="container container--sm">
          <div className="rich-content">
            <h2>Yolculuk bilgilerini önceden netleştirin</h2>
            <p>Alınış ve varış noktalarını, istediğiniz saati, yolcu sayısını ve bagaj durumunu belirtin. Bu hizmetin ve uygun araç türünün yolculuğunuz için müsait olup olmadığını ararken sorun.</p>
            <p>Ücret hesabını, ödeme seçeneklerini ve varsa otoyol geçiş masraflarını yolculuktan önce teyit edin. Sitedeki <Link href="/taksi-ucreti-hesaplama">ücret hesaplama aracı</Link> mesafeye dayalı tahmin verir; son tutar güzergâh ve geçerli tarifeye göre değişebilir.</p>
          </div>
          <div className="cta-box" style={{background: 'var(--taxi-yellow)', padding: '32px', borderRadius: '16px', textAlign: 'center', marginTop: '28px'}}>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="tel:+905304014751" className="btn btn--dark btn--lg">Gazi MKP: 0530 401 47 51</a>
              <a href="tel:+905464014751" className="btn btn--dark btn--lg">Bağlık: 0546 401 47 51</a>
              <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
