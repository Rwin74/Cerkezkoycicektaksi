import noktalarData from '@/data/noktalar.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LazyMap from '@/components/LazyMap';
import Breadcrumb from '@/components/Breadcrumb';
import { searchTitleBase } from '@/lib/seo';
import { MapPin } from 'lucide-react';
import SpiderWeb from '@/components/SpiderWeb';

const focusedDestinationContent = {
    'cerkezkoy-devlet-hastanesi': {
        description: 'Çerkezköy Devlet Hastanesi için taksi çağırma, şube telefonları ve yolculuk öncesi ücret bilgisi.',
        content: `<h2>Çerkezköy Devlet Hastanesi’ne taksi</h2>
            <p>Hastaneye giderken veya hastaneden dönerken Çiçek Taksi’nin Gazi MKP ya da Bağlık şubesini arayabilirsiniz. Aramada hastanenin ana girişinde, poliklinik girişinde veya acil girişinde olduğunuzu belirtin; araç uygunluğunu ve tahmini bekleme süresini telefonda teyit edin.</p>
            <p>Yolculuk ücretini önceden yaklaşık görmek için <a href="/taksi-ucreti-hesaplama">taksi ücreti hesaplama aracını</a> kullanın. Hesaplanan tutar rota mesafesine dayalı tahmindir; geçerli tarife ve yol koşulları son ücreti etkileyebilir.</p>`,
        faqs: [
            { q: 'Hastaneye taksi çağırmak için hangi numarayı aramalıyım?', a: 'Gazi MKP şubesi 0530 401 47 51, Bağlık şubesi 0546 401 47 51 numarasından aranabilir. Araç uygunluğunu görüşmede teyit edin.' },
            { q: 'Taksi ne kadar sürede gelir?', a: 'Varış süresi konum, trafik ve o andaki araç uygunluğuna göre değişir. Ararken tahmini süreyi duraktan öğrenin.' },
            { q: 'Hastaneden dönüş için taksi isteyebilir miyim?', a: 'Evet. Hastane girişini ve alınış noktanızı paylaşarak taksi talep edebilirsiniz; araç yönlendirmesini telefonla teyit edin.' },
        ],
    },
    'cerkezkoy-otogar': {
        description: 'Çerkezköy Otogarı için taksi çağırma, şube telefonları ve tahmini yolculuk ücreti bilgisi.',
        content: `<h2>Çerkezköy Otogarı’na taksi</h2>
            <p>Otogara gidiş veya otogardan dönüş için Çiçek Taksi’nin Gazi MKP ya da Bağlık şubesini arayın. Otogarda hangi girişte veya belirlenmiş hangi noktada olduğunuzu paylaşın; araç uygunluğunu ve tahmini bekleme süresini duraktan teyit edin.</p>
            <p>Yaklaşık rota ücreti için <a href="/taksi-ucreti-hesaplama">taksi ücreti hesaplama aracına</a> başlangıç ve varış noktanızı yazabilirsiniz. Son tutar geçerli tarife ve yol koşullarına göre değişebilir.</p>`,
        faqs: [
            { q: 'Otogardan taksi çağırabilir miyim?', a: 'Evet. Gazi MKP 0530 401 47 51 veya Bağlık 0546 401 47 51 numarasını arayıp otogardaki alınış noktanızı paylaşın.' },
            { q: 'Gece otogara geldiğimde taksi bulabilir miyim?', a: 'Şubeler telefonla 7/24 taksi talebi alır. Gece yolculuğu için arayıp araç uygunluğunu ve tahmini bekleme süresini teyit edin.' },
            { q: 'Otogar yolculuğunun ücretini nasıl öğrenirim?', a: 'Sitedeki hesaplama aracı yaklaşık rota tutarını gösterir. Güncel tarife ve varsa yol koşullarını durakla teyit edin.' },
        ],
    },
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const nokta = noktalarData.find(n => n.slug === slug);
    if (!nokta) return { title: 'Sayfa Bulunamadı' };

    return {
        title: searchTitleBase(`${nokta.title} Taksi 7/24`),
        description: focusedDestinationContent[slug]?.description ?? `${nokta.title} için taksi çağırma bilgileri ve şube telefonları. Araç uygunluğunu ve tahmini varış süresini ararken teyit edin.`,
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

    const destination = focusedDestinationContent[slug];
    const pageContent = destination?.content ?? nokta.content;
    const pageFaqs = destination?.faqs ?? nokta.faqs.slice(0, 5);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pageFaqs.map(faq => ({
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
                        dangerouslySetInnerHTML={{ __html: pageContent }}
                    />

                    <div className="cta-box reveal" style={{background: 'var(--taxi-yellow)', padding: '40px', borderRadius: '16px', textAlign: 'center', marginTop: '48px'}}>
                        <h3 style={{marginBottom: '15px', color: 'var(--dark-base)', fontSize: '1.5rem'}}>{nokta.title} için taksi talep edin</h3>
                        <p style={{marginBottom: '20px', color: 'var(--dark-base)', opacity: 0.8}}>Kartla ödemede komisyon yok. Araç uygunluğunu ararken teyit edin.</p>
                        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 0546 401 47 51</a>
                            <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">💬 WhatsApp</a>
                        </div>
                    </div>

                    {/* SSS Accordion AI UX Block */}
                    <div style={{marginTop: '60px'}}>
                        <h2 className="sh__title reveal" style={{fontSize: '2rem', marginBottom: '30px', textAlign: 'center'}}>Sıkça Sorulan Sorular</h2>
                        <div className="faq-list">
                            {pageFaqs.map((f, i) => (
                                <details key={i} className="faq-item reveal" data-delay={i*50}>
                                    <summary className="faq-question">{f.q}</summary>
                                    <div className="faq-answer"><p>{f.a}</p></div>
                                </details>
                            ))}
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
