import ekibimizData from '@/data/ekibimiz.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { User } from 'lucide-react';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const personel = ekibimizData.find(e => e.slug === slug);
    if (!personel) return { title: 'Sayfa Bulunamadı' };

    return {
        title: `${personel.name} - Şoför Profili | Çiçek Taksi`,
        description: personel.description,
        alternates: { canonical: `/ekibimiz/${personel.slug}` },
    };
}

export async function generateStaticParams() {
    return ekibimizData.map((e) => ({
        slug: e.slug,
    }));
}

export default async function EkipDetay({ params }) {
    const { slug } = await params;
    const personel = ekibimizData.find(e => e.slug === slug);

    if (!personel) {
        notFound();
    }

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": personel.name,
        "jobTitle": "Profesyonel Şoför",
        "worksFor": {
            "@type": "Organization",
            "name": "Çiçek Taksi Çerkezköy"
        },
        "description": personel.bio,
        "knowsAbout": personel.specialties
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Breadcrumb customItems={[
                            {label: 'Ekibimiz', url: '/ekibimiz'},
                            {label: personel.name, url: `/ekibimiz/${personel.slug}`}
                        ]} />
                    </div>
                    <div className="reveal" data-delay="100" style={{marginBottom: '20px', color: 'var(--taxi-yellow)'}}>
                        <User size={64} />
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        {personel.name}
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        Deneyim: {personel.experience}
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    <div className="rich-content reveal">
                        <h2>Hakkında</h2>
                        <p>{personel.bio}</p>
                        
                        <h3 style={{marginTop: '30px'}}>Uzmanlık Alanları</h3>
                        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px'}}>
                            {personel.specialties.map((spec, i) => (
                                <span key={i} style={{background: 'rgba(255,255,255,0.1)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem'}}>{spec}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="cta-box reveal" style={{background: 'var(--taxi-yellow)', padding: '40px', borderRadius: '16px', textAlign: 'center', marginTop: '48px'}}>
                        <h3 style={{marginBottom: '15px', color: 'var(--dark-base)', fontSize: '1.5rem'}}>{personel.name} ile Güvenli Yolculuk</h3>
                        <p style={{marginBottom: '20px', color: 'var(--dark-base)', opacity: 0.8}}>Güleryüzlü hizmet ve ileri sürüş teknikleri ile 7/24 hizmetinizdeyiz.</p>
                        <div style={{display: 'flex', gap: '12px', justifyContent: 'center'}}>
                            <a href="tel:+902827260000" className="btn btn--dark btn--lg">📞 Taksiyi Çağır</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
