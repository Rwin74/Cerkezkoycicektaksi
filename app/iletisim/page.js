import Link from 'next/link';
import LazyMap from '@/components/LazyMap';

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
                        Çerkezköy ve çevresinde 7/24 taksi hizmeti için şubelerimiz bir telefon uzağınızda.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info reveal stagger" style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                            <div className="contact-item" style={{padding: '24px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
                                <h3 style={{fontSize: '1.4rem', marginBottom: '10px'}}>📍 Gazi MKP Şubesi</h3>
                                <p style={{color: 'var(--text-muted)', marginBottom: '16px'}}>Anfi Tiyatro Önü, Malkoçoğlu Cd. Çerkezköy / Tekirdağ</p>
                                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                                    <a href="tel:+905304014751" className="btn btn--outline" style={{flex: 1, padding: '12px'}}>📞 0530 401 47 51</a>
                                    <a href="https://wa.me/905304014751" className="btn btn--whatsapp" style={{flex: 1, padding: '12px'}}>💬 WhatsApp</a>
                                </div>
                            </div>
                            
                            <div className="contact-item" style={{padding: '24px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
                                <h3 style={{fontSize: '1.4rem', marginBottom: '10px'}}>📍 Bağlık Şubesi</h3>
                                <p style={{color: 'var(--text-muted)', marginBottom: '16px'}}>Bağlık Mahallesi, 59500 Çerkezköy / Tekirdağ</p>
                                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                                    <a href="tel:+905464014751" className="btn btn--outline" style={{flex: 1, padding: '12px'}}>📞 0546 401 47 51</a>
                                    <a href="https://wa.me/905464014751" className="btn btn--whatsapp" style={{flex: 1, padding: '12px'}}>💬 WhatsApp</a>
                                </div>
                            </div>

                            <div className="contact-item" style={{padding: '24px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
                                <h3 style={{fontSize: '1.4rem', marginBottom: '10px'}}>🕒 Çalışma Saatleri</h3>
                                <p><strong>Durum:</strong> 7 Gün 24 Saat Açık (Nöbetçi Taksi Mevcut)</p>
                            </div>
                        </div>
                        
                        <div className="contact-map reveal" data-delay="100" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div style={{borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', background: '#fff'}}>
                                <h4 style={{padding: '16px 20px', margin: 0, borderBottom: '1px solid rgba(0,0,0,0.05)'}}>🗺️ Gazi MKP Şubesi Konumu</h4>
                                <div style={{height: '300px', width: '100%', position: 'relative'}}>
                                    <LazyMap src="https://maps.google.com/maps?q=41.302861,28.001444&z=15&output=embed" title="Gazi MKP Şubesi Konumu" />
                                </div>
                            </div>
                            <div style={{borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', background: '#fff'}}>
                                <h4 style={{padding: '16px 20px', margin: 0, borderBottom: '1px solid rgba(0,0,0,0.05)'}}>🗺️ Bağlık Şubesi Konumu</h4>
                                <div style={{height: '300px', width: '100%', position: 'relative'}}>
                                    <LazyMap src="https://maps.google.com/maps?q=41.286712,28.002467&z=15&output=embed" title="Bağlık Şubesi Konumu" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
