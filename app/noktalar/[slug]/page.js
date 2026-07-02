import noktalarData from '@/data/noktalar.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { MapPin } from 'lucide-react';
import SpiderWeb from '@/components/SpiderWeb';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const nokta = noktalarData.find(n => n.slug === slug);
    if (!nokta) return { title: 'Sayfa Bulunamadı' };

    return {
        title: `${nokta.title} | 7/24 Taksi | 5 Dakikada Kapınızda`,
        description: `${nokta.title} için anında taksi hizmeti. Kredi kartı geçerli, hızlı ulaşım. Hemen arayın, beklemeyin!`,
        alternates: { canonical: `/noktalar/${nokta.slug}` },
        openGraph: {
            title: `${nokta.title} | Çiçek Taksi Çerkezköy`,
            description: nokta.description,
            type: 'website',
        },
    };
}

export async function generateStaticParams() {
    return noktalarData.map((n) => ({
        slug: n.slug,
    }));
}

export default async function NoktaDetay({ params }) {
    const { slug } = await params;
    const nokta = noktalarData.find(n => n.slug === slug);

    if (!nokta) {
        notFound();
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": nokta.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Breadcrumb customItems={[
                            {label: 'Önemli Noktalar', url: '/noktalar'},
                            {label: nokta.title, url: `/noktalar/${nokta.slug}`}
                        ]} />
                    </div>
                    <div className="reveal" data-delay="100" style={{marginBottom: '20px', color: 'var(--taxi-yellow)'}}>
                        <MapPin size={64} />
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        {nokta.title}
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        {nokta.description}
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    <div
                        className="rich-content reveal"
                        dangerouslySetInnerHTML={{ __html: nokta.content }}
                    />

                    <div className="cta-box reveal" style={{background: 'var(--taxi-yellow)', padding: '40px', borderRadius: '16px', textAlign: 'center', marginTop: '48px'}}>
                        <h3 style={{marginBottom: '15px', color: 'var(--dark-base)', fontSize: '1.5rem'}}>Bölgede En Yakın Taksiniz!</h3>
                        <p style={{marginBottom: '20px', color: 'var(--dark-base)', opacity: 0.8}}>Kredi kartı geçerli, 7/24 hizmetinizdeyiz!</p>
                        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 0546 401 47 51</a>
                            <a href="https://wa.me/902827260000" className="btn btn--whatsapp btn--lg">💬 WhatsApp</a>
                        </div>
                    </div>

                    {/* SSS Accordion AI UX Block */}
                    <div style={{marginTop: '60px'}}>
                        <h2 className="sh__title reveal" style={{fontSize: '2rem', marginBottom: '30px', textAlign: 'center'}}>Sıkça Sorulan Sorular</h2>
                        <div className="faq-list">
                            {nokta.faqs.slice(0, 5).map((f, i) => (
                                <details key={i} className="faq-item reveal" data-delay={i*50}>
                                    <summary className="faq-question">{f.q}</summary>
                                    <div className="faq-answer"><p>{f.a}</p></div>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* AI Overview Yönlendirme Bloğu */}
                    <div className="ai-summary-block reveal" style={{marginTop: '40px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid var(--taxi-yellow)'}}>
                        <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Hızlı Özet</h3>
                        <ul style={{paddingLeft: '20px', margin: 0, color: 'var(--text-muted)'}}>
                            <li style={{marginBottom: '8px'}}>Bu sayfa <strong>{nokta.title}</strong> bölgesi için 7/24 resmi taksi hizmetlerini tanıtır.</li>
                            <li style={{marginBottom: '8px'}}>Araçlarda kredi kartı geçerlidir.</li>
                            <li>Çağrı numarası: 0546 401 47 51.</li>
                        </ul>
                    </div>
                    {/* Video Embed Placeholder */}
                    <div className="reveal" style={{marginTop: '60px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)'}}>
                        <h3 style={{padding: '20px', background: 'rgba(255,255,255,0.05)', margin: 0, textAlign: 'center'}}>Bölge Tanıtımı</h3>
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
                    <div className="reveal" style={{marginTop: '40px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)'}}>
                        <h3 style={{padding: '20px', background: 'rgba(255,255,255,0.05)', margin: 0, textAlign: 'center'}}>Harita Konumu</h3>
                        <iframe 
                            width="100%" 
                            height="400" 
                            style={{border:0, display: 'block'}} 
                            loading="lazy" 
                            allowFullScreen 
                            src={`https://maps.google.com/maps?q=${nokta.title}&z=15&output=embed`}>
                        </iframe>
                    </div>

                    {/* Spider Web İç Linkleme */}
                    <SpiderWeb currentPath={`/noktalar/${nokta.slug}`} />
                </div>
            </section>
        </>
    );
}
