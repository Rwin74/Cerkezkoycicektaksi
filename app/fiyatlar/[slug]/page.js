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

    const offerSchema = {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": fiyat.title,
        "description": fiyat.description,
        "priceCurrency": "TRY",
        "price": fiyat.pricingData.min || fiyat.pricingData.base || "0",
        "availability": "https://schema.org/InStock",
        "acceptedPaymentMethod": [
            "http://purl.org/goodrelations/v1#Cash",
            "http://purl.org/goodrelations/v1#PaymentMethodCreditCard"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
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
                        <h3 style={{color: 'var(--taxi-yellow)', marginBottom: '15px'}}>Tahmini Ücret Hesaplama Özeti</h3>
                        {fiyat.pricingData.base && (
                            <ul style={{fontSize: '1.1rem', lineHeight: 1.8}}>
                                <li><strong>Açılış Ücreti:</strong> {fiyat.pricingData.base} TL</li>
                                <li><strong>Kilometre Başına:</strong> {fiyat.pricingData.perKm} TL</li>
                            </ul>
                        )}
                        {fiyat.pricingData.min && (
                            <ul style={{fontSize: '1.1rem', lineHeight: 1.8}}>
                                <li><strong>Minimum Tutar:</strong> {fiyat.pricingData.min} TL</li>
                                <li><strong>Maksimum Tutar:</strong> {fiyat.pricingData.max} TL</li>
                                <li style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>* Fiyatlar araç tipi ve yoğunluğa göre değişiklik gösterebilir. Net fiyat için arayın.</li>
                            </ul>
                        )}
                    </div>

                    <div className="cta-box reveal" style={{textAlign: 'center', marginTop: '48px'}}>
                        <a href="tel:+902827260000" className="btn btn--primary btn--lg">☎ Net Fiyat Almak İçin Arayın</a>
                    </div>
                </div>
            </section>
        </>
    );
}
