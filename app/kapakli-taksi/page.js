import Link from 'next/link';
import AreaRideGuide from '@/components/AreaRideGuide';

export const metadata = {
  title: "Kapaklı Taksi | Çiçek Taksi",
  description: "Çerkezköy'den Kapaklı yönüne yolculuk için adres, araç uygunluğu ve ücret bilgisini telefonla teyit edin.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/kapakli-taksi",
  }
};

export default function kapakli_taksi_Page() {
  return (
    <><main className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <Link href="/" style={{ color: 'var(--taxi-yellow)', fontWeight: 'bold' }}>Ana Sayfa</Link> / 
            <span style={{ color: 'var(--text-muted)' }}> Kapaklı Taksi</span>
          </div>
          <h1 className="sh__title" style={{ fontSize: '3rem', marginBottom: '20px' }}>Kapaklı Taksi</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Çerkezköy'den Kapaklı yönüne yolculuk için adres, araç uygunluğu ve ücret bilgisini telefonla teyit edin.</p>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <AreaRideGuide area="Kapaklı" kind="local" />
        </div>
      </section>
    </>
  );
}
