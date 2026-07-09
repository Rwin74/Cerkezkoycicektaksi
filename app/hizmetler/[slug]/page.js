import hizmetlerData from '@/data/hizmetler.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIcon } from '@/components/IconMap';
import Breadcrumb from '@/components/Breadcrumb';
import SpiderWeb from '@/components/SpiderWeb';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const hizmet = hizmetlerData.find(h => h.slug === slug);
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

    if (!hizmet) {
        notFound();
    }

    const IconComponent = getIcon(hizmet.icon);

    // İlgili diğer hizmetler
    const relatedServices = hizmetlerData
        .filter(h => h.id !== hizmet.id)
        .slice(0, 3);

    const combinedSchema = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": `${hizmet.title} için önceden rezervasyon yapabilir miyim?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Evet, yolculuk tarihinizden günler öncesinde bile bizimle iletişime geçerek aracınızı ayırtabilirsiniz."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Araçlarda kredi kartı geçerli mi?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Kesinlikle. Tüm araçlarımızda POS cihazı bulunmaktadır. Temassız ödeme ile hızlıca işleminizi tamamlayabilirsiniz."
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `${hizmet.title} | Çiçek Taksi`,
            "image": "https://cerkezkoycicektaksi.com/icon.svg",
            "telephone": "0546 401 47 51",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Çerkezköy",
                "addressRegion": "Tekirdağ",
                "addressCountry": "TR"
            },
            "description": hizmet.description,
            "provider": {
                "@type": "LocalBusiness",
                "name": "Çiçek Taksi Çerkezköy"
            },
            "offers": {
                "@type": "Offer",
                "priceCurrency": "TRY",
                "price": "50.00",
                "availability": "https://schema.org/InStock",
                "acceptedPaymentMethod": [
                    "http://purl.org/goodrelations/v1#Cash",
                    "http://purl.org/goodrelations/v1#PaymentMethodCreditCard"
                ]
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "128"
            },
            "review": {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Ayşe Y."
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": `${hizmet.title} hizmetini kullandım, çok memnun kaldım. Araç tertemizdi ve şoför çok kibardı.`
            }
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
            />
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

                    {/* Video Embed Placeholder */}
                    <div className="reveal" style={{marginTop: '60px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)'}}>
                        <h3 style={{padding: '20px', background: 'rgba(255,255,255,0.05)', margin: 0, textAlign: 'center'}}>Hizmet Tanıtım Videosu</h3>
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

                    {/* AI Overview Yönlendirme Bloğu */}
                    <div className="ai-summary-block reveal" style={{marginTop: '40px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid var(--taxi-yellow)'}}>
                        <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>🤖 Yapay Zeka (AI) İçin Özet</h3>
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
