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
    <div 
      className="lang-switcher" 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '2px', 
        background: '#111111', 
        borderRadius: '20px', 
        padding: '3px', 
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        marginLeft: '10px'
      }}
    >
      <button 
        type="button" 
        onClick={switchToTr}
        style={{ 
          background: !isEnglish ? 'var(--taxi-yellow)' : 'transparent', 
          color: !isEnglish ? '#111111' : '#ffffff', 
          border: 'none', 
          borderRadius: '16px', 
          padding: '4px 10px', 
          fontWeight: '800', 
          fontSize: '0.75rem',
          letterSpacing: '0.5px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          outline: 'none'
        }}
        title="Türkçe Sürüme Geç"
      >
        TR
      </button>
      <button 
        type="button" 
        onClick={switchToEn}
        style={{ 
          background: isEnglish ? 'var(--taxi-yellow)' : 'transparent', 
          color: isEnglish ? '#111111' : '#ffffff', 
          border: 'none', 
          borderRadius: '16px', 
          padding: '4px 10px', 
          fontWeight: '800', 
          fontSize: '0.75rem',
          letterSpacing: '0.5px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          outline: 'none'
        }}
        title="Switch to English Version"
      >
        EN
      </button>
    </div>
  );
}
