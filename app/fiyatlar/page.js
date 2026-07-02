export const metadata = {
    title: 'Çerkezköy Transfer Fiyatları | Çiçek Taksi',
    description: "Çerkezköy'den havalimanlarına, İstanbul ve Edirne gibi şehirlere sabit fiyatlı, sürprizsiz taksi fiyatlarımız."
};

export default function Fiyatlar() {
    return (
        <>
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <a href="/">Ana Sayfa</a> / Fiyatlar
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        Transfer <em>Fiyatları</em> 🏷️
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        Gideceğiniz yere ne kadar ödeyeceğinizi baştan bilin! Sürpriz yok, gizli masraf yok.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    <div className="sh sh--center reveal">
                        <span className="sh__overtitle">Fiyatlandırma</span>
                        <h2 className="sh__title">Popüler <em>Rotalar</em> 📍</h2>
                    </div>
                    
                    <div className="grid stagger">
                        <div className="card card--price reveal">
                            <div className="card__route">
                                <span className="card__route-from">Çerkezköy</span>
                                <span className="card__route-arrow">✈️</span>
                                <span className="card__route-to">İstanbul Havalimanı</span>
                            </div>
                            <div className="card__price-info">
                                <span className="card__distance">~180 km</span>
                                <span className="card__price-badge">Sabit Fiyat</span>
                            </div>
                        </div>
                        <div className="card card--price reveal">
                            <div className="card__route">
                                <span className="card__route-from">Çerkezköy</span>
                                <span className="card__route-arrow">✈️</span>
                                <span className="card__route-to">Sabiha Gökçen Havalimanı</span>
                            </div>
                            <div className="card__price-info">
                                <span className="card__distance">~150 km</span>
                                <span className="card__price-badge">Sabit Fiyat</span>
                            </div>
                        </div>
                        <div className="card card--price reveal">
                            <div className="card__route">
                                <span className="card__route-from">Çerkezköy</span>
                                <span className="card__route-arrow">✈️</span>
                                <span className="card__route-to">Çorlu Havalimanı</span>
                            </div>
                            <div className="card__price-info">
                                <span className="card__distance">~35 km</span>
                                <span className="card__price-badge">Sabit Fiyat</span>
                            </div>
                        </div>
                        <div className="card card--price reveal">
                            <div className="card__route">
                                <span className="card__route-from">Çerkezköy</span>
                                <span className="card__route-arrow">🛣️</span>
                                <span className="card__route-to">Tekirdağ Merkez</span>
                            </div>
                            <div className="card__price-info">
                                <span className="card__distance">~45 km</span>
                                <span className="card__price-badge">Sabit Fiyat</span>
                            </div>
                        </div>
                        <div className="card card--price reveal">
                            <div className="card__route">
                                <span className="card__route-from">Çerkezköy</span>
                                <span className="card__route-arrow">🛣️</span>
                                <span className="card__route-to">İstanbul (Avrupa)</span>
                            </div>
                            <div className="card__price-info">
                                <span className="card__distance">~130 km</span>
                                <span className="card__price-badge">Sabit Fiyat</span>
                            </div>
                        </div>
                        <div className="card card--price reveal">
                            <div className="card__route">
                                <span className="card__route-from">Çerkezköy</span>
                                <span className="card__route-arrow">🛣️</span>
                                <span className="card__route-to">İstanbul (Anadolu)</span>
                            </div>
                            <div className="card__price-info">
                                <span className="card__distance">~160 km</span>
                                <span className="card__price-badge">Sabit Fiyat</span>
                            </div>
                        </div>
                        <div className="card card--price reveal">
                            <div className="card__route">
                                <span className="card__route-from">Çerkezköy</span>
                                <span className="card__route-arrow">🛣️</span>
                                <span className="card__route-to">Edirne Merkez</span>
                            </div>
                            <div className="card__price-info">
                                <span className="card__distance">~130 km</span>
                                <span className="card__price-badge">Sabit Fiyat</span>
                            </div>
                        </div>
                        <div className="card card--price reveal">
                            <div className="card__route">
                                <span className="card__route-from">Çerkezköy</span>
                                <span className="card__route-arrow">🛣️</span>
                                <span className="card__route-to">Çorlu Merkez</span>
                            </div>
                            <div className="card__price-info">
                                <span className="card__distance">~25 km</span>
                                <span className="card__price-badge">Sabit Fiyat</span>
                            </div>
                        </div>
                    </div>
                    
                    <p className="reveal" style={{textAlign: 'center', marginTop: '40px', fontWeight: '500', color: 'var(--text-muted)', background: 'var(--bg-gray)', padding: '15px', borderRadius: '12px'}}>
                        💡 Güncel ve net fiyat bilgisi için lütfen bizi arayın. Fiyatlarımız tüm yol (otoyol, köprü vb.) masraflarını içermektedir.
                    </p>
                </div>
            </section>

            <section className="section section--yellow" style={{textAlign: 'center'}}>
                <div className="container">
                    <h2 className="sh__title reveal" style={{marginBottom: '30px'}}>Fiyat mı <em>Alacaksın?</em> 💬</h2>
                    <div className="home-hero__actions reveal" style={{justifyContent: 'center', marginBottom: '0'}} data-delay="100">
                        <a href="tel:+902827260000" className="btn btn--dark btn--lg">📞 Hemen Ara</a>
                        <a href="https://wa.me/902827260000" className="btn btn--whatsapp btn--lg">💬 WhatsApp'tan Sor</a>
                    </div>
                </div>
            </section>
        </>
    )
}
