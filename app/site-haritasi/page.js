import bloglarData from '@/data/bloglar.json';
import hizmetlerData from '@/data/hizmetler.json';
import Link from 'next/link';

export const metadata = {
  title: 'Site Haritası | Çiçek Taksi',
  description: 'Çiçek Taksi Çerkezköy iletişim, ücret ve hizmet sayfalarına buradan ulaşın.',
  alternates: { canonical: '/site-haritasi' }
};

export default function SiteHaritasi() {
  return (
    <div className="container" style={{paddingTop: '120px', paddingBottom: '60px'}}>
      <h1 style={{fontSize: '2.5rem', marginBottom: '40px'}}>Site Haritası</h1>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
        <div>
          <h2>Rehber & Blog</h2>
          <ul>
            {bloglarData.map(b => (
              <li key={b.slug}><Link href={`/blog/${b.slug}`}>{b.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Kurumsal & Hizmetler</h2>
          <ul>
            <li><Link href="/">Ana Sayfa</Link></li>
            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
            <li><Link href="/fiyatlar">Fiyatlar</Link></li>
            <li><Link href="/taksi-ucreti-hesaplama">Taksi Ücreti Hesaplama</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
            <li><Link href="/yorumlar">Yorumlar</Link></li>
            <li><Link href="/ekibimiz">Hakkımızda</Link></li>
            <li><Link href="/subeler">Şubelerimiz</Link></li>
            {hizmetlerData.map(h => (
              <li key={h.slug}><Link href={`/hizmetler/${h.slug}`}>{h.title}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
