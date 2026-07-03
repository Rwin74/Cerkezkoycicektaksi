import routesData from '@/data/routes.json';

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
                        {routesData.map((route, index) => (
                            <div className="card card--price reveal" key={route.slug || index}>
                                <div className="card__route">
                                    <span className="card__route-from">{route.from}</span>
                                    <span className="card__route-arrow">{route.icon}</span>
                                    <span className="card__route-to">{route.to}</span>
                                </div>
                                <div className="card__price-info">
                                    <span className="card__distance">{route.distance} km</span>
                                    <span className="card__price-badge">Sabit Fiyat</span>
                                </div>
                            </div>
                        ))}
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
                        <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 Hemen Ara</a>
                        <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">💬 WhatsApp'tan Sor</a>
                    </div>
                </div>
            </section>
        </>
    )
}
