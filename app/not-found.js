import Link from 'next/link';

export const metadata = {
  title: 'Sayfa Bulunamadı | Çiçek Taksi',
  description: 'Aradığınız sayfaya ulaşılamıyor. Çiçek Taksi ile güvenli ulaşım için ana sayfaya dönebilirsiniz.'
};

export default function NotFound() {
  return (
    <main className="page-header" style={{ paddingTop: '150px', paddingBottom: '100px', background: 'var(--bg-light)', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '5rem', color: 'var(--taxi-yellow)', marginBottom: '20px' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Sayfa Bulunamadı</h2>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px' }}>
          Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak ulaşılamıyor olabilir.
        </p>
        <Link href="/" className="btn btn--primary" style={{ display: 'inline-block' }}>
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}
