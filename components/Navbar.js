"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
                <Link href="/" className="nav__logo" onClick={closeMenu}>
                    <div className="nav__logo-icon">🚕</div>
                    Çiçek<span className="nav__logo-accent">Taksi</span>
                </Link>
                <ul className={`nav__links ${menuOpen ? 'open' : ''}`} id="navLinks">
                    <li><Link href="/" className="nav__link" onClick={closeMenu}>Ana Sayfa</Link></li>
                    <li><Link href="/hizmetler" className="nav__link" onClick={closeMenu}>Hizmetler</Link></li>
                    <li><Link href="/hakkimizda" className="nav__link" onClick={closeMenu}>Hakkımızda</Link></li>
                    <li><Link href="/fiyatlar" className="nav__link" onClick={closeMenu}>Fiyatlar</Link></li>
                    <li><Link href="/blog" className="nav__link" onClick={closeMenu}>Blog</Link></li>
                    <li><Link href="/yorumlar" className="nav__link" onClick={closeMenu}>Yorumlar</Link></li>
                    <li><Link href="/iletisim" className="nav__link" onClick={closeMenu}>İletişim</Link></li>
                    <li><a href="tel:+905464014751" className="nav__cta nav__cta--desktop">📞 Hemen Ara</a></li>
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
