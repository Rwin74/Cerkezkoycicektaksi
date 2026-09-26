import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/ekibimiz' },
  title: 'Çiçek Taksi Hakkında | Çerkezköy',
  description: 'Çerkezköy Çiçek Taksi iletişim ve yolculuk bilgileri.',
};

export default function EkibimizIndex() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container relative z-10">
          <h1 className="page-hero__title reveal">Çiçek Taksi Hakkında</h1>
          <p className="page-hero__desc reveal" data-delay="100">
            Çerkezköy ve çevresinde taksi çağırmak için bize telefonla ulaşabilir veya WhatsApp üzerinden konumunuzu paylaşabilirsiniz.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container container--sm">
          <div className="rich-content">
            <h2>Yolculuk öncesi</h2>
            <p>Ararken bulunduğunuz açık adresi ya da yakındaki bilinen bir noktayı belirtin. Gideceğiniz yeri, yolculuk öncesinde ve ücret hesaplaması için kullanacağımız güzergâhı birlikte netleştirebilirsiniz. Araç ve varış süresi konuma ve mevcut duruma göre değişebilir; telefonda bilgi alabilirsiniz.</p>
            <p>Ücret tahmini için sitemizdeki hesaplama aracını kullanabilir, kesin tutar ve ödeme seçeneklerini yolculuk öncesinde sorabilirsiniz.</p>
            <h2>Bize ulaşın</h2>
            <p>Çerkezköy Gazi Mustafa Kemal Paşa ve Bağlık şubelerimize aşağıdaki numaralardan ulaşabilirsiniz.</p>
          </div>
          <div className="cta-box" style={{background: 'var(--taxi-yellow)', padding: '32px', borderRadius: '16px', textAlign: 'center', marginTop: '24px'}}>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="tel:+905304014751" className="btn btn--dark btn--lg">Gazi MKP: 0530 401 47 51</a>
              <a href="tel:+905464014751" className="btn btn--dark btn--lg">Bağlık: 0546 401 47 51</a>
              <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">WhatsApp</a>
            </div>
            <p style={{marginTop: '16px', color: 'var(--dark-base)'}}>Daha fazla bilgi için <Link href="/iletisim">iletişim sayfamızı</Link> ziyaret edin.</p>
          </div>
        </div>
      </section>
    </>
  );
}
