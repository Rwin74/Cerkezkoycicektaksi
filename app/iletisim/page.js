import Link from 'next/link';

export const metadata = {
    title: 'İletişim | Çiçek Taksi Çerkezköy',
    description: "Çerkezköy Taksi durağımıza 7/24 ulaşabilirsiniz. Taksi çağırmak için hemen telefon numaralarımızdan bizi arayın."
};

export default function Iletisim() {
    return (
        <>
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Link href="/">Ana Sayfa</Link> / İletişim
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        Bize <em>Ulaşın</em> 📞
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        Çerkezköy ve çevresinde 7/24 taksi hizmeti için bir telefon uzağınızdayız.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info reveal stagger">
                            <div className="contact-item">
                                <h3>📍 Adres</h3>
                                <p>Çerkezköy Merkez, Tekirdağ</p>
                            </div>
                            <div className="contact-item">
                                <h3>📞 Telefon</h3>
                                <p><a href="tel:+902827260000" style={{color: 'var(--taxi-yellow)', fontWeight: 'bold'}}>0282 726 00 00</a></p>
                            </div>
                            <div className="contact-item">
                                <h3>💬 WhatsApp</h3>
                                <p><a href="https://wa.me/902827260000" style={{color: 'var(--taxi-yellow)', fontWeight: 'bold'}}>0532 XXX XX XX</a></p>
                            </div>
                            <div className="contact-item">
                                <h3>📧 E-posta</h3>
                                <p><a href="mailto:info@cicektaksi.com" style={{color: 'var(--taxi-yellow)', fontWeight: 'bold'}}>info@cicektaksi.com</a></p>
                            </div>
                            <div className="contact-item">
                                <h3>🕐 Çalışma Saatleri</h3>
                                <p>7 Gün 24 Saat (Nöbetçi Taksi Mevcut)</p>
                            </div>
                        </div>
                        
                        <div className="contact-map reveal" data-delay="100" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div>
                                <h4 style={{marginBottom: '10px', color: 'var(--dark-base)'}}>Şube 1: Merkez</h4>
                                <iframe 
                                    src="https://maps.google.com/maps?q=Gazi+Mustafa+Kemal+Pa%C5%9Fa+Mah.,+Malko%C3%A7o%C4%9Flu+Cad.,+No:+7,+%C3%87erkezk%C3%B6y,+Tekirda%C4%9F&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                    width="100%" 
                                    height="300" 
                                    style={{border:0, borderRadius: '16px'}} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    title="Şube 1: Merkez"
                                ></iframe>
                            </div>
                            <div>
                                <h4 style={{marginBottom: '10px', color: 'var(--dark-base)'}}>Şube 2: İstasyon</h4>
                                <iframe 
                                    src="https://maps.google.com/maps?q=41.302861,28.001444&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                    width="100%" 
                                    height="300" 
                                    style={{border:0, borderRadius: '16px'}} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    title="Şube 2: İstasyon"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
