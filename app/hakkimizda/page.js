import Link from 'next/link';

export const metadata = {
    title: 'Hakkımızda | Çiçek Taksi Çerkezköy',
    description: "Çerkezköy'de yılların tecrübesiyle, 7/24 güvenli, konforlu ve müşteri memnuniyeti odaklı taksi hizmeti."
};

export default function Hakkimizda() {
    return (
        <>
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Link href="/">Ana Sayfa</Link> / Hakkımızda
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        Neden <em>Çiçek Taksi?</em> 🌸
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        Sizi sadece bir yerden bir yere değil, sevdiklerinize güvenle kavuşturuyoruz.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="features grid grid--3 stagger">
                        <div className="feature reveal">
                            <div className="feature__icon">💳</div>
                            <h3 className="feature__title">Nakit Derdine Son!</h3>
                            <p className="feature__text">Tüm araçlarımızda kredi kartı, banka kartı ve temassız ödeme (Troy dahil) geçerlidir. "Üstümde nakit yok" stresi bitti!</p>
                        </div>
                        <div className="feature reveal" data-delay="100">
                            <div className="feature__icon">🕐</div>
                            <h3 className="feature__title">7/24 Kesintisiz</h3>
                            <p className="feature__text">Gecenin bir yarısı veya bayram sabahı... Çiçek Taksi uyumaz! Her an kapınızdayız.</p>
                        </div>
                        <div className="feature reveal" data-delay="200">
                            <div className="feature__icon">🛡️</div>
                            <h3 className="feature__title">Ailenizin Taksisi</h3>
                            <p className="feature__text">Tüm şoförlerimiz deneyimli, araçlarımız bakımlı ve sigortalıdır. Ailenizi güvenle emanet edebilirsiniz.</p>
                        </div>
                        <div className="feature reveal">
                            <div className="feature__icon">💰</div>
                            <h3 className="feature__title">Sürpriz Fiyat Yok</h3>
                            <p className="feature__text">Taksimetre kapınızda açılır. Havalimanı veya şehirler arası yollarda sabit fiyat garantisi veriyoruz.</p>
                        </div>
                        <div className="feature reveal" data-delay="100">
                            <div className="feature__icon">🚗</div>
                            <h3 className="feature__title">Pırıl Pırıl Araçlar</h3>
                            <p className="feature__text">Araç filomuz geniş, temiz ve klimalıdır. Konforunuzdan asla ödün vermiyoruz.</p>
                        </div>
                        <div className="feature reveal" data-delay="200">
                            <div className="feature__icon">⚡</div>
                            <h3 className="feature__title">Anında Kapında</h3>
                            <p className="feature__text">Bizi aradığınızda 'Araç yok' demeyiz. En yakın taksimiz ışık hızında size yönlendirilir.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--gray text-center">
                <div className="container container--sm">
                    <h2 className="sh__title reveal">Ödeme <em>Kolaylığı</em> 💳</h2>
                    <p className="reveal" style={{fontSize: '1.1rem', marginBottom: '40px', color: 'var(--text-muted)'}}>
                        Sektördeki en büyük yeniliğimiz: Tüm araçlarımızda pos cihazı bulunuyor. Güvenli ve hızlı ödeme!
                    </p>
                    <div className="payment-grid grid grid--2 stagger" style={{maxWidth: '600px', margin: '0 auto'}}>
                        <div className="payment-card reveal">💳 VISA</div>
                        <div className="payment-card reveal" data-delay="100">💳 Mastercard</div>
                        <div className="payment-card reveal" data-delay="200">💳 TROY</div>
                        <div className="payment-card reveal" data-delay="300">📱 Temassız Ödeme</div>
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container">
                    <div className="grid grid--2" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                        <div className="stat-box reveal">
                            <span className="stat-num">10.000+</span>
                            <span className="stat-label">Mutlu Müşteri</span>
                        </div>
                        <div className="stat-box reveal" data-delay="100">
                            <span className="stat-num">12+</span>
                            <span className="stat-label">Yıllık Tecrübe</span>
                        </div>
                        <div className="stat-box reveal" data-delay="200">
                            <span className="stat-num">10+</span>
                            <span className="stat-label">Araç Filosu</span>
                        </div>
                        <div className="stat-box reveal" data-delay="300">
                            <span className="stat-num">50.000+</span>
                            <span className="stat-label">Güvenli Yolculuk</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
