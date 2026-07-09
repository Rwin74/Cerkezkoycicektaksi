import { notFound } from 'next/navigation';
import Link from 'next/link';
import LazyMap from '@/components/LazyMap';
import subelerData from '@/data/subeler.json';
import Breadcrumb from '@/components/Breadcrumb';
import SpiderWeb from '@/components/SpiderWeb';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const sube = subelerData.find(s => s.slug === slug);
    if (!sube) return { title: 'Sayfa Bulunamadı' };

    return {
        title: `${sube.title} | 7/24 Taksi | Çiçek Taksi`,
        description: sube.description,
        alternates: { canonical: `/subeler/${sube.slug}` },
        openGraph: {
            title: `${sube.title} | Çiçek Taksi`,
            description: sube.description,
            type: 'website',
        },
    };
}

export async function generateStaticParams() {
    return subelerData.map((sube) => ({
        slug: sube.slug,
    }));
}

export default async function SubeDetay({ params }) {
    const { slug } = await params;
    const sube = subelerData.find(s => s.slug === slug);

    if (!sube) {
        notFound();
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": sube.title,
        "image": "https://www.cerkezkoycicektaksi.com/images/hero-taxi-59.png",
        "telephone": sube.phoneLink,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": sube.address,
            "addressLocality": "Çerkezköy",
            "addressRegion": "Tekirdağ",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": sube.lat,
            "longitude": sube.lng
        },
        "url": `https://www.cerkezkoycicektaksi.com/subeler/${sube.slug}`,
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": sube.faqs.slice(0, 5).map(faq => ({
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Breadcrumb customItems={[
                            {label: 'Şubelerimiz', url: '/subeler'},
                            {label: sube.title, url: `/subeler/${sube.slug}`}
                        ]} />
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        {sube.title}
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200" style={{marginBottom: '24px'}}>
                        {sube.description}
                    </p>
                    <div className="reveal" data-delay="300" style={{display: 'flex', gap: '12px', justifyContent: 'center'}}>
                        <a href={`tel:${sube.phoneLink}`} className="btn btn--primary">📞 Hemen Ara</a>
                        <a href={sube.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)'}}>📍 Yol Tarifi</a>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    <div className="rich-content reveal" dangerouslySetInnerHTML={{ __html: sube.content }} />

                    {/* Harita */}
                    <div className="reveal" style={{marginTop: '40px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)'}}>
                        <h3 style={{padding: '20px', background: 'rgba(255,255,255,0.05)', margin: 0, textAlign: 'center'}}>Şube Konumu</h3>
                        <iframe 
                            width="100%" 
                            height="400" 
                            style={{border:0, display: 'block'}} 
                            loading="lazy" 
                            allowFullScreen 
                            src={sube.embedSrc}>
                        </iframe>
                    </div>

                    <SpiderWeb currentPath={`/subeler/${sube.slug}`} />
                </div>
            </section>
        </>
    );
}
