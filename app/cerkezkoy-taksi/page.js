import Link from 'next/link';
import AreaRideGuide from '@/components/AreaRideGuide';

export const metadata = {
  title: "Çerkezköy Taksi | Çiçek Taksi",
  description: "Çerkezköy'den Çerkezköy yönüne yolculuk için adres, araç uygunluğu ve ücret bilgisini telefonla teyit edin.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/cerkezkoy-taksi",
  }
};

export default function cerkezkoy_taksi_Page() {
  return (
    <><main className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <Link href="/" style={{ color: 'var(--taxi-yellow)', fontWeight: 'bold' }}>Ana Sayfa</Link> / 
            <span style={{ color: 'var(--text-muted)' }}> Çerkezköy Taksi</span>
          </div>
          <h1 className="sh__title" style={{ fontSize: '3rem', marginBottom: '20px' }}>Çerkezköy Taksi</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Çerkezköy'den Çerkezköy yönüne yolculuk için adres, araç uygunluğu ve ücret bilgisini telefonla teyit edin.</p>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <AreaRideGuide area="Çerkezköy" kind="local" />
        </div>
      </section>
    </>
  );
}
