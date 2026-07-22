"use client";
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const isEnglish = pathname.startsWith('/en');

  const routeMapEnToTr = {
    '/en': '/',
    '/en/services': '/hizmetler',
    '/en/about-us': '/hakkimizda',
    '/en/rates': '/fiyatlar',
    '/en/contact': '/iletisim',
    '/en/istanbul-airport-cerkezkoy-taxi': '/en/istanbul-airport-cerkezkoy-taxi'
  };

  const routeMapTrToEn = {
    '/': '/en',
    '/hizmetler': '/en/services',
    '/hakkimizda': '/en/about-us',
    '/fiyatlar': '/en/rates',
    '/iletisim': '/en/contact'
  };

  const switchToTr = () => {
    const target = routeMapEnToTr[pathname] || '/';
    router.push(target);
  };

  const switchToEn = () => {
    const target = routeMapTrToEn[pathname] || '/en';
    router.push(target);
  };

  return (
    <div className="lang-switcher" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(255,255,255,0.12)', borderRadius: '20px', padding: '3px 8px', border: '1px solid rgba(255,255,255,0.2)' }}>
      <button 
        type="button" 
        onClick={switchToTr}
        style={{ 
          background: !isEnglish ? 'var(--taxi-yellow)' : 'transparent', 
          color: !isEnglish ? '#111' : '#fff', 
          border: 'none', 
          borderRadius: '12px', 
          padding: '2px 8px', 
          fontWeight: '700', 
          fontSize: '0.8rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        title="Türkçe Sürüme Geç"
      >
        🇹🇷 TR
      </button>
      <button 
        type="button" 
        onClick={switchToEn}
        style={{ 
          background: isEnglish ? 'var(--taxi-yellow)' : 'transparent', 
          color: isEnglish ? '#111' : '#fff', 
          border: 'none', 
          borderRadius: '12px', 
          padding: '2px 8px', 
          fontWeight: '700', 
          fontSize: '0.8rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        title="Switch to English Version"
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
