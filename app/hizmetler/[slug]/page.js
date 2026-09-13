import hizmetlerData from '@/data/hizmetler.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LazyMap from '@/components/LazyMap';
import { getIcon } from '@/components/IconMap';
import Breadcrumb from '@/components/Breadcrumb';
import SpiderWeb from '@/components/SpiderWeb';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const hizmet = hizmetlerData.find(h => h.slug === slug);

    if (!hizmet) {
        notFound();
    }
    if (!hizmet) return { title: 'Sayfa Bulunamadı' };

    return {
        title: `${hizmet.title} | 7/24 Çerkezköy Taksi | Hemen Arayın`,
        description: `${hizmet.title} için en güvenilir tercih. Çiçek Taksi ile kredi kartı geçerli, hızlı ve konforlu ulaşım. Tıklayın ve 5 dakikada kapınızda olalım!`,
        alternates: { canonical: `/hizmetler/${hizmet.slug}` },
        openGraph: {
            title: `${hizmet.title} Çerkezköy | Çiçek Taksi`,
            description: hizmet.description,
            type: 'website',
        },
    };
}

export async function generateStaticParams() {
    return hizmetlerData.map((hizmet) => ({
        slug: hizmet.slug,
    }));
}

export default async function HizmetDetay({ params }) {
    const { slug } = await params;
    const hizmet = hizmetlerData.find(h => h.slug === slug);

    
    

    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": hizmet.title,
        "description": hizmet.description,
        "provider": { "@type": "TaxiService", "name": "Çiçek Taksi" },
        "url": `https://www.cerkezkoycicektaksi.com/hizmetler/${hizmet.slug}`
    };

    const IconComponent = getIcon(hizmet.icon);

    // İlgili diğer hizmetler
    const relatedServices = hizmetlerData
        .filter(h => h.id !== hizmet.id)
        .slice(0, 3);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Breadcrumb customItems={[
                            {label: 'Hizmetlerimiz', url: '/hizmetler'},
                            {label: hizmet.title, url: `/hizmetler/${hizmet.slug}`}
                        ]} />
                    </div>
                    <div className="reveal" data-delay="100" style={{marginBottom: '20px', color: 'var(--taxi-yellow)'}}>
                        <IconComponent size={64} />
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        {hizmet.title}
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        {hizmet.description}
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    {/* AI Overview Answer Block */}
                    <div className="ai-answer-block reveal" style={{background: 'rgba(255, 204, 0, 0.05)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--taxi-yellow)', marginBottom: '40px'}}>
                        <h2 style={{fontSize: '1.25rem', marginBottom: '15px', color: 'var(--text-light)'}}>💡 {hizmet.title} Hizmetinden Nasıl Yararlanabilirim?</h2>
                        <p style={{fontSize: '1rem', lineHeight: '1.6', opacity: 0.9, margin: 0}}>
                            <strong>Kısa Cevap:</strong> Çiçek Taksi'nin sunduğu <strong>{hizmet.title}</strong> hizmetinden faydalanmak için 7 gün 24 saat kesintisiz çalışan <strong>0546 401 47 51</strong> çağrı merkezimize ulaşabilirsiniz. Profesyonel şoförlerimiz, temiz araçlarımız ve kredi kartı ile ödeme kolaylığımız sayesinde {hizmet.title.toLowerCase()} ihtiyaçlarınızı en hızlı ve güvenli şekilde çözüyoruz. Hemen arayın veya WhatsApp'tan konum gönderin.
                        </p>
                    </div>

                    {hizmet.content ? (
                        <div
                            className="rich-content reveal"
                            dangerouslySetInnerHTML={{ __html: hizmet.content }}
                        />
                    ) : (
                        <div className="reveal">
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                                Çiçek Taksi olarak <strong>{hizmet.title}</strong> alanında yılların tecrübesiyle yanınızdayız.
                            </p>
                        </div>
                    )}

                    <div className="cta-box reveal" style={{background: 'var(--taxi-yellow)', padding: '40px', borderRadius: '16px', textAlign: 'center', marginTop: '48px'}}>
                        <h3 style={{marginBottom: '15px', color: 'var(--dark-base)', fontSize: '1.5rem'}}>Hemen Taksi Çağırın!</h3>
                        <p style={{marginBottom: '20px', color: 'var(--dark-base)', opacity: 0.8}}>7/24 hizmetinizdeyiz. Bir telefon uzağınızdayız.</p>
                        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 0546 401 47 51</a>
                            <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">💬 WhatsApp</a>
                        </div>
                    </div>

                    {/* Kullanıcıların hızlı karar vermesi için özet */}
                    <div className="ai-summary-block reveal" style={{marginTop: '40px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid var(--taxi-yellow)'}}>
                        <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Hizmet Özeti</h3>
                        <ul style={{paddingLeft: '20px', margin: 0, color: 'var(--text-muted)'}}>
                            <li style={{marginBottom: '8px'}}>Çiçek Taksi, Çerkezköy bölgesinde profesyonel <strong>{hizmet.title}</strong> sunmaktadır.</li>
                            <li style={{marginBottom: '8px'}}>Araçların tamamında kredi kartı / temassız ödeme geçerlidir.</li>
                            <li>Tüm araçlarımız 7/24 hizmetinizdedir. 0546 401 47 51 numarasından ulaşabilirsiniz.</li>
                        </ul>
                    </div>

                    <SpiderWeb currentPath={`/hizmetler/${hizmet.slug}`} />
                </div>
            </section>

            {/* İlgili Hizmetler */}
            <section className="section section--gray">
                <div className="container">
                    <div className="sh sh--center reveal">
                        <span className="sh__overtitle">Diğer Hizmetler</span>
                        <h2 className="sh__title">Bunlara da <em>Göz Atın</em></h2>
                    </div>
                    <div className="grid grid--3 stagger">
                        {relatedServices.map((s, i) => {
                            const SIcon = getIcon(s.icon);
                            return (
                                <Link href={`/hizmetler/${s.slug}`} key={s.id} style={{textDecoration: 'none', color: 'inherit'}}>
                                    <div className="card card--service reveal" data-delay={i * 100}>
                                        <div className="card__icon"><SIcon size={32} /></div>
                                        <h3 className="card__title">{s.title}</h3>
                                        <p className="card__text" style={{fontSize: '0.9rem'}}>{s.description}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
