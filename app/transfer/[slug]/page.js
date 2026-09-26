import transferlerData from '@/data/transferler.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const transfer = transferlerData.find((item) => item.slug === slug);
  if (!transfer) return { title: 'Rota bulunamadı', robots: { index: false } };

  return {
    title: `${transfer.origin} - ${transfer.dest} | Yolculuk Bilgisi`,
    description: `${transfer.origin} - ${transfer.dest} yolculuğu için uygunluk, süre ve ücret bilgisini telefonla teyit edin.`,
    robots: { index: false, follow: true },
  };
}

export function generateStaticParams() {
  return transferlerData.map(({ slug }) => ({ slug }));
}

export default async function TransferDetay({ params }) {
  const { slug } = await params;
  const transfer = transferlerData.find((item) => item.slug === slug);
  if (!transfer) notFound();

  const directionsUrl = `https://maps.google.com/maps?saddr=${encodeURIComponent(transfer.origin)}&daddr=${encodeURIComponent(transfer.dest)}&output=embed`;

  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container relative z-10">
          <div className="page-hero__breadcrumb reveal"><Link href="/">Ana Sayfa</Link> / Yolculuk Bilgisi</div>
          <h1 className="page-hero__title reveal">{transfer.origin} - {transfer.dest}</h1>
          <p className="page-hero__desc reveal" data-delay="100">Yolculuk ayrıntılarını arama sırasında teyit edin.</p>
        </div>
      </header>
      <section className="section">
        <div className="container container--sm">
          <div className="rich-content">
            <h2>Yolculuk öncesinde netleştirin</h2>
            <p>Alınış adresinizi, istediğiniz saati, yolcu sayısını ve bagaj durumunu paylaşın. Araç uygunluğunu, tahmini varış süresini, ücret hesabını ve varsa otoyol geçiş masraflarını telefonla teyit edin.</p>
            <p>Harita önerilen rotayı gösterir; trafik, yol çalışmaları ve seçilen güzergâh gerçek süreyi ve ücreti etkileyebilir.</p>
          </div>
          <div className="cta-box" style={{background: 'var(--taxi-yellow)', padding: '32px', borderRadius: '16px', textAlign: 'center', marginTop: '28px'}}>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="tel:+905304014751" className="btn btn--dark btn--lg">Gazi MKP: 0530 401 47 51</a>
              <a href="tel:+905464014751" className="btn btn--dark btn--lg">Bağlık: 0546 401 47 51</a>
              <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">WhatsApp</a>
            </div>
          </div>
          <div style={{marginTop: '36px', borderRadius: '16px', overflow: 'hidden'}}>
            <h2>Önerilen rota haritası</h2>
            <iframe title={`${transfer.origin} - ${transfer.dest} rota haritası`} width="100%" height="380" style={{border: 0, display: 'block'}} loading="lazy" src={directionsUrl}></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
