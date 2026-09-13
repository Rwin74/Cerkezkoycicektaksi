import fiyatlarData from '@/data/fiyatlar.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { Calculator } from 'lucide-react';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const fiyat = fiyatlarData.find(f => f.slug === slug);
    if (!fiyat) return { title: 'Sayfa Bulunamadı' };

    return {
        title: `${fiyat.title} | Güncel Taksi Ücretleri 2026`,
        description: fiyat.description,
        alternates: { canonical: `/fiyatlar/${fiyat.slug}` },
        robots: { index: false, follow: true },
    };
}

export async function generateStaticParams() {
    return fiyatlarData.map((f) => ({
        slug: f.slug,
    }));
}

export default async function FiyatDetay({ params }) {
    const { slug } = await params;
    const fiyat = fiyatlarData.find(f => f.slug === slug);

    if (!fiyat) {
        notFound();
    }

    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": fiyat.title,
        "description": fiyat.description,
        "url": `https://www.cerkezkoycicektaksi.com/fiyatlar/${fiyat.slug}`
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Breadcrumb customItems={[
                            {label: 'Fiyat Listesi', url: '/fiyatlar'},
                            {label: fiyat.title, url: `/fiyatlar/${fiyat.slug}`}
                        ]} />
                    </div>
                    <div className="reveal" data-delay="100" style={{marginBottom: '20px', color: 'var(--taxi-yellow)'}}>
                        <Calculator size={64} />
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        {fiyat.title}
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        {fiyat.description}
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    <div
                        className="rich-content reveal"
                        dangerouslySetInnerHTML={{ __html: fiyat.content }}
                    />
                    
                    <div className="reveal" style={{background: 'rgba(255, 204, 0, 0.1)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(255,204,0,0.3)', margin: '40px 0'}}>
                        <h3 style={{color: 'var(--taxi-yellow)', marginBottom: '15px'}}>Güzergâha Özel Bilgi Alın</h3>
                        <p style={{fontSize: '1.1rem', lineHeight: 1.8}}>
                            Güncel yol ve araç koşullarına göre bilgi almak için bizi arayın. Tarife katsayıları sitede yayımlanmamaktadır.
                        </p>
                    </div>

                    <div className="cta-box reveal" style={{textAlign: 'center', marginTop: '48px'}}>
                        <a href="tel:+905464014751" className="btn btn--primary btn--lg">☎ Net Fiyat Almak İçin Arayın</a>
                    </div>
                </div>
            </section>
        </>
    );
}
