import bloglarData from '@/data/bloglar.json';
import hizmetlerData from '@/data/hizmetler.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SpiderWeb from '@/components/SpiderWeb';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = bloglarData.find(b => b.slug === slug);
    if (!blog) return { title: 'Yazı Bulunamadı' };

    return {
        title: `${blog.title} | Çiçek Taksi Rehberi (2026)`,
        description: blog.excerpt + " Tüm ulaşım sırları ve detaylı bilgiler için rehberimizi okuyun.",
        alternates: { canonical: `/blog/${blog.slug}` },
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            type: 'article',
            publishedTime: blog.date,
        },
    };
}

export async function generateStaticParams() {
    return bloglarData.map((b) => ({
        slug: b.slug,
    }));
}

export default async function BlogDetay({ params }) {
    const { slug } = await params;
    const blog = bloglarData.find(b => b.slug === slug);

    if (!blog) {
        notFound();
    }

    // İlgili bloglar (aynı kategoriden)
    const relatedBlogs = bloglarData
        .filter(b => b.id !== blog.id && b.category === blog.category)
        .slice(0, 3);

    // İlgili hizmetler
    const relatedServices = hizmetlerData.slice(0, 3);

    const richSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": blog.title,
                "datePublished": blog.date,
                "author": {
                    "@type": "Organization",
                    "name": "Çiçek Taksi"
                },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "xpath": [
                        "//h1",
                        "//div[@class='rich-content']/p[1]"
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Çiçek Taksi'de kredi kartı geçerli mi?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Evet, Çiçek Taksi'de tüm yolculuklarınızda %0 komisyon ile kredi kartı geçerlidir."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Taksi çağırdığımda ortalama kaç dakikada gelir?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Bulunduğunuz konuma göre değişmekle birlikte, taksimiz genellikle 5-10 dakika içerisinde kapınızda olur."
                        }
                    }
                ]
            },
            {
                "@type": "HowTo",
                "name": "Çerkezköy'de Nasıl Taksi Çağırılır?",
                "step": [
                    {
                        "@type": "HowToStep",
                        "name": "Adım 1: Bizi Arayın veya WhatsApp'tan Yazın",
                        "text": "0546 401 47 51 numaralı telefonu arayın veya WhatsApp üzerinden konumunuzu gönderin."
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Adım 2: Taksimizi Bekleyin",
                        "text": "Taksi şoförümüz bulunduğunuz konuma en kısa sürede ulaşmak için yola çıkacaktır."
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Adım 3: Konforlu Yolculuk",
                        "text": "Kredi kartı geçerli, güvenli ve konforlu araçlarımızla gitmek istediğiniz yere ulaşın."
                    }
                ]
            },
            {
                "@type": "ImageObject",
                "url": "https://www.cerkezkoycicektaksi.com/logo.png",
                "name": blog.title
            },
            {
                "@type": "VideoObject",
                "name": "Çiçek Taksi Tanıtım Videosu",
                "description": "Çerkezköy'de konforlu ve güvenli taksi hizmetinin adresi Çiçek Taksi'nin kısa tanıtım videosu.",
                "thumbnailUrl": "https://www.cerkezkoycicektaksi.com/logo.png",
                "uploadDate": "2026-01-01T08:00:00+03:00",
                "contentUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(richSchema) }}
            />
            <header className="page-hero" style={{paddingBottom: '40px'}}>
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Link href="/">Ana Sayfa</Link> / <Link href="/blog">Blog</Link> / {blog.category}
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100" style={{fontSize: '2.5rem', maxWidth: '800px', margin: '0 auto 20px'}}>
                        {blog.title}
                    </h1>
                    <div className="reveal" data-delay="200" style={{color: 'var(--taxi-yellow)', fontWeight: 'bold'}}>
                        📅 {blog.date} • ⏱️ {blog.readTime} • 🏷️ {blog.category}
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    <div 
                        className="rich-content reveal" 
                        dangerouslySetInnerHTML={{ __html: blog.content }} 
                    />
                    
                    <hr style={{margin: '48px 0', borderColor: 'var(--bg-gray)'}} />
                    
                    {/* CTA */}
                    <div className="cta-box reveal" style={{background: 'var(--taxi-yellow)', padding: '40px', borderRadius: '16px', textAlign: 'center'}}>
                        <h3 style={{marginBottom: '15px', color: 'var(--dark-base)', fontSize: '1.5rem'}}>Ulaşıma mı ihtiyacınız var?</h3>
                        <p style={{marginBottom: '20px', color: 'var(--dark-base)', opacity: 0.8}}>Yazımızdaki lokasyonlara veya havalimanına gitmek için bizi hemen arayın.</p>
                        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 0546 401 47 51</a>
                            <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">💬 WhatsApp</a>
                        </div>
                    </div>
                    {/* Spider Web İç Linkleme */}
                    <SpiderWeb currentPath={`/blog/${blog.slug}`} />
                </div>
            </section>

            {/* İlgili Bloglar */}
            {relatedBlogs.length > 0 && (
                <section className="section section--gray">
                    <div className="container">
                        <div className="sh sh--center reveal">
                            <span className="sh__overtitle">{blog.category}</span>
                            <h2 className="sh__title">İlgili <em>Yazılar</em></h2>
                        </div>
                        <div className="grid grid--3 stagger">
                            {relatedBlogs.map((b, i) => (
                                <Link href={`/blog/${b.slug}`} key={b.id} style={{textDecoration: 'none', color: 'inherit'}}>
                                    <article className="card card--blog reveal" data-delay={i * 100}>
                                        <div className="card__img">
                                            <div className="card__img-inner" style={{background: 'linear-gradient(135deg, var(--dark-base), #333)'}}>
                                                <div style={{fontSize: '3rem'}}>📰</div>
                                            </div>
                                            <span className="card__category">{b.category}</span>
                                        </div>
                                        <div className="card__body">
                                            <div className="card__meta">
                                                <span>📅 {b.date}</span>
                                                <span>⏱️ {b.readTime}</span>
                                            </div>
                                            <h3 className="card__title">{b.title}</h3>
                                            <p className="card__excerpt">{b.excerpt}</p>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* İlgili Hizmetler */}
            <section className="section">
                <div className="container">
                    <div className="sh sh--center reveal">
                        <span className="sh__overtitle">Hizmetlerimiz</span>
                        <h2 className="sh__title">Size Nasıl <em>Yardımcı Olalım?</em></h2>
                    </div>
                    <div className="grid grid--3 stagger">
                        {relatedServices.map((s, i) => (
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
        </>
    );
}
