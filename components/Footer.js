import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__about">
                        <div className="footer__brand">
                            <div className="footer__brand-icon">🚕</div>
                            Çiçek<span style={{color: 'var(--taxi-yellow)'}}>Taksi</span>
                        </div>
                        <p>Mahallenizin güvenilir, güler yüzlü ve en hızlı taksi durağı. Kredi kartı geçerlidir!</p>
                        <div className="footer__badges">
                            <span className="footer__badge">💳 Kredi Kartı</span>
                            <span className="footer__badge">💵 Nakit</span>
                            <span className="footer__badge">📱 Temassız</span>
                        </div>
                    </div>
                    {/* GBP Sync: Telefon, Adres, Çalışma Saati, Harita, Kategori, Hizmetler */}
                    <div className="footer__col">
                        <h4>İletişim Bilgileri</h4>
                        <ul>
                            <li><strong>Telefon:</strong> <a href="tel:+905464014751">0546 401 47 51</a></li>
                            <li style={{marginBottom: '4px', lineHeight: '1.4'}}><strong>Gazi MKP Şb:</strong> Anfi Tiyatro Önü, Çerkezköy</li>
                            <li style={{marginBottom: '4px', lineHeight: '1.4'}}><strong>Bağlık Şb:</strong> Bağlık Mah. Çerkezköy</li>
                            <li><strong>Çalışma Saatleri:</strong> 7 Gün 24 Saat Açık</li>
                        </ul>
                        {/* GEO Data */}
                        <div style={{display: 'none'}}>
                            <meta name="geo.position" content="41.2858;28.0003" />
                            <meta name="geo.placename" content="Çerkezköy" />
                            <meta name="geo.region" content="TR-59" />
                        </div>
                    </div>



                    <div className="footer__col">
                        <h4>İşletme Bilgileri</h4>
                        <ul>
                            <li><strong>Kategori:</strong> Taksi Durağı</li>
                            <li><Link href="/ekibimiz">Şoförlerimiz (EEAT)</Link></li>
                            <li><Link href="/noktalar">Bölgesel Duraklar</Link></li>
                            <li><Link href="/fiyatlar">Taksi Ücretleri</Link></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Hizmetler</h4>
                        <ul>
                            <li><Link href="/hizmetler/sehir-ici-taksi">Şehir İçi Taksi</Link></li>
                            <li><Link href="/hizmetler/havalimani-transfer">Havalimanı Transfer</Link></li>
                            <li><Link href="/transfer">Şehirler Arası Transfer</Link></li>
                            <li><Link href="/hizmetler/vip-transfer">VIP Transfer</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                        <p>&copy; {new Date().getFullYear()} Çiçek Taksi Çerkezköy. Tüm hakları saklıdır.</p>
                        <p style={{fontSize: '0.8rem'}}>Çerkezköy Taksi | Havalimanı Transfer | Şehirler Arası Taksi | Tekirdağ Taksi | Kapaklı Taksi</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)'}}>
                        <span>Tasarım ve Altyapı: <a href="https://atakanyagli.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--taxi-yellow)'}}>Atakan Yağlı</a></span>
                        <span>SEO ve Büyüme Stratejisi: <a href="https://atakanyagli.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--taxi-yellow)'}}>Atakan Yağlı</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
