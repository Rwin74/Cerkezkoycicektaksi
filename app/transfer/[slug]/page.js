import transferlerData from '@/data/transferler.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIcon } from '@/components/IconMap';
import Breadcrumb from '@/components/Breadcrumb';
import SpiderWeb from '@/components/SpiderWeb';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const transfer = transferlerData.find(t => t.slug === slug);
    if (!transfer) return { title: 'Sayfa Bulunamadı' };

    return {
        title: `${transfer.title} | VIP & Ekonomik Araçlar | Rezervasyon Yapın`,
        description: `${transfer.origin} - ${transfer.dest} arası konforlu ve güvenilir transfer. Kredi kartı geçerli, 7/24 hizmet. Hemen fiyat alın!`,
        alternates: { canonical: `/transfer/${transfer.slug}` },
        openGraph: {
            title: `${transfer.title} | Çiçek Taksi`,
            description: transfer.description,
            type: 'website',
        },
    };
}

export async function generateStaticParams() {
    return transferlerData.map((transfer) => ({
        slug: transfer.slug,
    }));
}

export default async function TransferDetay({ params }) {
    const { slug } = await params;
    const transfer = transferlerData.find(t => t.slug === slug);

    if (!transfer) {
        notFound();
    }

    const MapPinIcon = getIcon('MapPin');
    const PlaneIcon = getIcon('Plane');

    // İlgili diğer transferler
    const relatedTransfers = transferlerData
        .filter(t => t.id !== transfer.id)
        .slice(0, 3);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `${transfer.title} için önceden rezervasyon yapabilir miyim?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, uçuş saatinizden en az 3 saat önce bizimle iletişime geçerek rezervasyon yapmanızı kesinlikle öneririz."
                }
            },
            {
                "@type": "Question",
                "name": "Kredi kartı geçerli mi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tüm transfer hizmetlerimizde araçlarımızda POS cihazı mevcuttur."
                }
            }
        ]
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
                            {label: 'Transfer Rotaları', url: '/transfer'},
                            {label: transfer.title, url: `/transfer/${transfer.slug}`}
                        ]} />
                    </div>
                    <div className="reveal" data-delay="100" style={{marginBottom: '20px', color: 'var(--taxi-yellow)'}}>
                        <PlaneIcon size={64} />
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        {transfer.title}
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        {transfer.description}
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    <div
                        className="rich-content reveal"
                        dangerouslySetInnerHTML={{ __html: transfer.content }}
                    />

                    <div className="cta-box reveal" style={{background: 'var(--taxi-yellow)', padding: '40px', borderRadius: '16px', textAlign: 'center', marginTop: '48px'}}>
                        <h3 style={{marginBottom: '15px', color: 'var(--dark-base)', fontSize: '1.5rem'}}>Hemen Transfer Rezervasyonu Yapın!</h3>
                        <p style={{marginBottom: '20px', color: 'var(--dark-base)', opacity: 0.8}}>Günün her saati garantili ulaşım.</p>
                        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <a href="tel:+902827260000" className="btn btn--dark btn--lg">📞 0282 726 00 00</a>
                            <a href="https://wa.me/902827260000" className="btn btn--whatsapp btn--lg">💬 WhatsApp'tan Teklif Al</a>
                        </div>
                    </div>
                    {/* Video Embed Placeholder */}
                    <div className="reveal" style={{marginTop: '60px', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)'}}>
                        <h3 style={{padding: '20px', background: 'rgba(255,255,255,0.05)', margin: 0, textAlign: 'center'}}>Transfer Tanıtımı</h3>
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
                        <h3 style={{padding: '20px', background: 'rgba(255,255,255,0.05)', margin: 0, textAlign: 'center'}}>Güzergah Haritası</h3>
                        <iframe 
                            width="100%" 
                            height="400" 
                            style={{border:0, display: 'block'}} 
                            loading="lazy" 
                            allowFullScreen 
                            src={`https://maps.google.com/maps?saddr=${transfer.origin}&daddr=${transfer.dest}&output=embed`}>
                        </iframe>
                    </div>

                    {/* Spider Web İç Linkleme */}
                    <SpiderWeb currentPath={`/transfer/${transfer.slug}`} />
                </div>
            </section>

            {/* İlgili Transferler */}
            <section className="section section--gray">
                <div className="container">
                    <div className="sh sh--center reveal">
                        <span className="sh__overtitle">Diğer Rotalar</span>
                        <h2 className="sh__title">Popüler <em>Transferler</em></h2>
                    </div>
                    <div className="grid grid--3 stagger">
                        {relatedTransfers.map((t, i) => {
                            return (
                                <Link href={`/transfer/${t.slug}`} key={t.id} style={{textDecoration: 'none', color: 'inherit'}}>
                                    <div className="card card--service reveal" data-delay={i * 100}>
                                        <div className="card__icon"><MapPinIcon size={32} /></div>
                                        <h3 className="card__title">{t.route}</h3>
                                        <p className="card__text" style={{fontSize: '0.9rem'}}>{t.distance} - {t.time}</p>
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
