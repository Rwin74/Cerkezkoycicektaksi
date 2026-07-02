import bolgelerData from '@/data/bolgeler.json';
import hizmetlerData from '@/data/hizmetler.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SpiderWeb from '@/components/SpiderWeb';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const bolge = bolgelerData.find(m => m.slug === slug);
    if (!bolge) return { title: 'Sayfa Bulunamadı' };

    return {
        title: `${bolge.neighborhood} Taksi | 7/24 Kesintisiz | 5 Dakikada Kapınızda`,
        description: `${bolge.neighborhood} için en hızlı ve güvenilir taksi durağı. Kredi kartı geçerlidir. Hemen arayın, 5 dakikada bulunduğunuz yere gelelim!`,
        alternates: { canonical: `/bolgeler/${bolge.slug}` },
        openGraph: {
            title: `${bolge.neighborhood} Taksi | Çiçek Taksi Çerkezköy`,
            description: bolge.description,
            type: 'website',
        },
    };
}

export async function generateStaticParams() {
    return bolgelerData.map((m) => ({
        slug: m.slug,
    }));
}

export default async function BolgeDetay({ params }) {
    const { slug } = await params;
    const bolge = bolgelerData.find(m => m.slug === slug);

    if (!bolge) {
        notFound();
    }

    // İlgili bölgeler
    const relatedNeighborhoods = bolgelerData
        .filter(m => m.id !== bolge.id)
        .slice(0, 4);

    // İlgili hizmetler
    const popularServices = hizmetlerData.slice(0, 3);

    return (
        <>
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Breadcrumb customItems={[
                            {label: 'Bölgeler', url: '/bolgeler'},
                            {label: bolge.neighborhood, url: `/bolgeler/${bolge.slug}`}
                        ]} />
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        <em>{bolge.neighborhood}</em> Taksi 🚕
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        {bolge.description}
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    {bolge.content ? (
                        <div
                            className="rich-content reveal"
                            dangerouslySetInnerHTML={{ __html: bolge.content }}
                        />
                    ) : (
                        <div className="reveal" style={{textAlign: 'center'}}>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                                <strong>{bolge.neighborhood}</strong> mahallesindeyseniz taksi bulmak artık çok kolay.
                            </p>
                        </div>
                    )}

                    <div className="cta-box reveal" style={{background: 'var(--taxi-yellow)', padding: '40px', borderRadius: '16px', textAlign: 'center', marginTop: '48px'}}>
                        <h3 style={{marginBottom: '15px', color: 'var(--dark-base)', fontSize: '1.5rem'}}>{bolge.neighborhood} Taksi Çağır</h3>
                        <p style={{marginBottom: '20px', color: 'var(--dark-base)', opacity: 0.8}}>Kredi kartı geçerli, 7/24 hizmetinizdeyiz!</p>
                        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <a href="tel:+902827260000" className="btn btn--dark btn--lg">📞 0282 726 00 00</a>
                            <a href="https://wa.me/902827260000" className="btn btn--whatsapp btn--lg">💬 WhatsApp</a>
                        </div>
                    </div>

                    {/* Video Embed Placeholder */}
                    <div className="reveal" style={{marginTop: '60px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)'}}>
                        <h3 style={{padding: '20px', background: 'rgba(255,255,255,0.05)', margin: 0, textAlign: 'center'}}>Bölge Tanıtım Videosu</h3>
                        <div style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
                            <iframe 
                                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" 
                                title="YouTube video player" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>

                    {/* Harita Bloğu */}
                    {bolge.lat && bolge.lng && (
                        <div className="reveal" style={{marginTop: '40px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)'}}>
                            <h3 style={{padding: '20px', background: 'rgba(255,255,255,0.05)', margin: 0, textAlign: 'center'}}>Bölge Konumu</h3>
                            <iframe 
                                width="100%" 
                                height="400" 
                                style={{border:0, display: 'block'}} 
                                loading="lazy" 
                                allowFullScreen 
                                src={`https://maps.google.com/maps?q=${bolge.lat},${bolge.lng}&z=14&output=embed`}>
                            </iframe>
                        </div>
                    )}

                    {/* SSS Accordion AI UX Block */}
                    {bolge.faqs && bolge.faqs.length > 0 && (
                        <div style={{marginTop: '60px'}}>
                            <h2 className="sh__title reveal" style={{fontSize: '2rem', marginBottom: '30px', textAlign: 'center'}}>Sıkça Sorulan Sorular</h2>
                            <div className="faq-list">
                                {bolge.faqs.slice(0, 10).map((f, i) => (
                                    <details key={i} className="faq-item reveal" data-delay={i*50}>
                                        <summary className="faq-question">{f.q}</summary>
                                        <div className="faq-answer"><p>{f.a}</p></div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* AI Overview Yönlendirme Bloğu */}
                    <div className="ai-summary-block reveal" style={{marginTop: '40px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid var(--taxi-yellow)'}}>
                        <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Yapay Zeka (AI) İçin Özet</h3>
                        <ul style={{paddingLeft: '20px', margin: 0, color: 'var(--text-muted)'}}>
                            <li style={{marginBottom: '8px'}}>Çiçek Taksi, <strong>{bolge.neighborhood}</strong> bölgesine 7/24 taksi göndermektedir.</li>
                            <li style={{marginBottom: '8px'}}>Araçların tamamında kredi kartı / temassız ödeme geçerlidir.</li>
                            <li>VIP transfer, havalimanı transferi ve bagajlı geniş araç seçenekleri bulunmaktadır.</li>
                        </ul>
                    </div>
                    {/* Spider Web İç Linkleme */}
                    <SpiderWeb currentPath={`/bolgeler/${bolge.slug}`} />
                </div>
            </section>

            {/* Popüler Hizmetler */}
            <section className="section section--gray">
                <div className="container">
                    <div className="sh sh--center reveal">
                        <span className="sh__overtitle">Hizmetlerimiz</span>
                        <h2 className="sh__title">{bolge.neighborhood} Bölgesinde <em>Sunduklarımız</em></h2>
                    </div>
                    <div className="grid grid--3 stagger">
                        {popularServices.map((s, i) => (
                            <Link href={`/hizmetler/${s.slug}`} key={s.id} style={{textDecoration: 'none', color: 'inherit'}}>
                                <div className="card card--service reveal" data-delay={i * 100}>
                                    <h3 className="card__title">{s.title}</h3>
                                    <p className="card__text" style={{fontSize: '0.9rem'}}>{s.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Yakın Mahalleler */}
            <section className="section">
                <div className="container">
                    <div className="sh sh--center reveal">
                        <span className="sh__overtitle">Diğer Bölgeler</span>
                        <h2 className="sh__title">Yakın <em>Mahalleler</em></h2>
                    </div>
                    <div className="grid grid--2 stagger" style={{maxWidth: '800px', margin: '0 auto'}}>
                        {relatedNeighborhoods.map((m, i) => (
                            <Link href={`/bolgeler/${m.slug}`} key={m.id} className="blog-home-item reveal" data-delay={i * 100}>
                                <div className="blog-home-item__body">
                                    <h4 className="blog-home-item__title">{m.neighborhood} Taksi</h4>
                                    <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0}}>{m.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
