import subelerData from '@/data/subeler.json';

export const metadata = {
  alternates: { canonical: '/yorumlar' },
  title: 'Çiçek Taksi Google Yorumları',
  description: 'Çiçek Taksi şubelerini Google Haritalar’da bulun; yayınlanmış müşteri değerlendirmelerini okuyun ve yolculuk deneyiminizi paylaşın.',
};

export default function Yorumlar() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container relative z-10">
          <h1 className="page-hero__title reveal">Müşteri Değerlendirmeleri</h1>
          <p className="page-hero__desc reveal" data-delay="100">
            Çiçek Taksi hakkındaki değerlendirmeleri Google Haritalar’daki işletme profilimizde görüntüleyebilirsiniz.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p style={{ maxWidth: 760, margin: '0 auto 32px', textAlign: 'center' }}>
            Google Haritalar’da şubenizi açarak yayınlanmış değerlendirmeleri okuyabilir; yolculuk yaptıysanız kendi deneyiminizi paylaşabilirsiniz.
          </p>
          <div className="grid grid--2">
            {subelerData.map((sube) => (
              <article key={sube.id} className="contact-item" style={{ padding: 24, background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)' }}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: 8 }}>{sube.title}</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: 18 }}>{sube.address}</p>
                <a
                  className="btn btn--dark"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Çiçek Taksi ${sube.title} ${sube.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Haritalar’da şubeyi aç
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
