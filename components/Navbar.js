"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isEnglish = pathname.startsWith('/en');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('nav-open');
        } else {
            document.body.classList.remove('nav-open');
        }
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} id="nav">
            <div className="nav__inner">
                <Link href={isEnglish ? "/en" : "/"} className="nav__logo" onClick={closeMenu}>
                    <div className="nav__logo-icon">🚕</div>
                    Çiçek<span className="nav__logo-accent">Taksi</span>
                </Link>

                <ul className={`nav__links ${menuOpen ? 'open' : ''}`} id="navLinks">
                    {isEnglish ? (
                        <>
                            <li><Link href="/en" className="nav__link" onClick={closeMenu}>Home</Link></li>
                            <li><Link href="/en/services" className="nav__link" onClick={closeMenu}>Services</Link></li>
                            <li><Link href="/en/rates" className="nav__link" onClick={closeMenu}>Rates</Link></li>
                            <li><Link href="/en/istanbul-airport-cerkezkoy-taxi" className="nav__link" onClick={closeMenu}>Airport Transfer</Link></li>
                            <li><Link href="/en/about-us" className="nav__link" onClick={closeMenu}>About Us</Link></li>
                            <li><Link href="/en/contact" className="nav__link" onClick={closeMenu}>Contact</Link></li>
                            <li><a href="tel:+905464014751" className="nav__cta nav__cta--desktop">📞 Call Now</a></li>
                        </>
                    ) : (
                        <>
                            <li><Link href="/" className="nav__link" onClick={closeMenu}>Ana Sayfa</Link></li>
                            <li><Link href="/hizmetler" className="nav__link" onClick={closeMenu}>Hizmetler</Link></li>
                            <li><Link href="/hakkimizda" className="nav__link" onClick={closeMenu}>Hakkımızda</Link></li>
                            <li><Link href="/fiyatlar" className="nav__link" onClick={closeMenu}>Fiyatlar</Link></li>
                            <li><Link href="/blog" className="nav__link" onClick={closeMenu}>Blog</Link></li>
                            <li><Link href="/yorumlar" className="nav__link" onClick={closeMenu}>Yorumlar</Link></li>
                            <li><Link href="/iletisim" className="nav__link" onClick={closeMenu}>İletişim</Link></li>
                            <li><a href="tel:+905464014751" className="nav__cta nav__cta--desktop">📞 Hemen Ara</a></li>
                        </>
                    )}
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <LanguageSwitcher />
                    </li>
                </ul>

                <button 
                    className={`nav__hamburger ${menuOpen ? 'active' : ''}`} 
                    id="hamburger" 
                    aria-label="Menü"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
}
