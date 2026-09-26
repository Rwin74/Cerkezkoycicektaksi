import Image from "next/image";
import Link from "next/link";
import hizmetlerData from '@/data/hizmetler.json';
import bloglarData from '@/data/bloglar.json';
import { getIcon } from '@/components/IconMap';
import { BookOpen, ArrowRight, Clock, Tag, CreditCard } from 'lucide-react';
import Branches from '@/components/Branches';
import FareCalculator from '@/components/FareCalculator';
import subelerData from '@/data/subeler.json';

export const metadata = {
  alternates: {
    canonical: "/",
    languages: { tr: "/", en: "/en", "x-default": "/" },
  },
  keywords: [
    "Çerkezköy taksi",
    "Çerkezköy taksi ücreti hesaplama",
    "taksi fiyat hesaplama",
    "Çerkezköy taksi fiyatları",
    "Kapaklı taksi ücreti",
    "taksi yol parası hesaplama",
  ],
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      ...subelerData.map((sube) => ({
        "@type": "TaxiService",
        "@id": `https://www.cerkezkoycicektaksi.com/subeler/${sube.slug}#localbusiness`,
        "name": `Çiçek Taksi - ${sube.title}`,
        "image": "https://www.cerkezkoycicektaksi.com/images/hero-taxi-59.png",
        "url": `https://www.cerkezkoycicektaksi.com/subeler/${sube.slug}`,
        "telephone": `+90${sube.phoneLink.slice(1)}`,
        "parentOrganization": {
          "@id": "https://www.cerkezkoycicektaksi.com/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": sube.address,
          "addressLocality": "Çerkezköy",
          "addressRegion": "Tekirdağ",
          "postalCode": "59500",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": sube.lat,
          "longitude": sube.lng
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": ["Çerkezköy", "Bağlık", "Gazi Mustafa Kemalpaşa", "Kızılpınar", "Veliköy", "Kapaklı"]
      })),
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Çerkezköy Taksi",
          "item": "https://www.cerkezkoycicektaksi.com"
        }]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Ulaşım için ne kadar süre beklemem gerekir?",
            "acceptedAnswer": { "@type": "Answer", "text": "Aracın uygunluğu ve tahmini varış süresi konuma, trafiğe ve mevcut talebe göre değişir. Çağrı sırasında bilgi alabilirsiniz." }
          },
          {
            "@type": "Question",
            "name": "Gece saatlerinde ticari taksi bulabilir miyim?",
            "acceptedAnswer": { "@type": "Answer", "text": "Kesinlikle. 7/24 kesintisiz hizmet veriyoruz. Gece rezervasyon gerekmeksizin ulaşım ihtiyacınızı karşılıyoruz." }
          },
          {
            "@type": "Question",
            "name": "Havaalanı transferi için rezervasyon şart mı?",
            "acceptedAnswer": { "@type": "Answer", "text": "Şart değil ancak uçuş saatinizi riske atmamak adına, havalimanı rotaları için en az birkaç saat önceden haber vermeniz konforlu bir yolculuk planlaması sağlar." }
          },
          {
            "@type": "Question",
            "name": "Araçlarda kredi kartı ile ödeme yapabilir miyim?",
            "acceptedAnswer": { "@type": "Answer", "text": "Evet, tüm araçlarımızda pos cihazı bulunur ve kredi kartınızla komisyonsuz olarak ödeme yapabilirsiniz." }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <header className="home-hero">
        <div className="home-hero__bg"></div>
        <div className="home-hero__particles" id="heroParticles"></div>
        
        <div className="container home-hero__inner">
            <div className="home-hero__content">
                <div className="home-hero__badge reveal">
                    <span className="home-hero__badge-dot"></span>7/24 Açık ve Yollardayız!
                </div>
                
                <h1 className="home-hero__title reveal" data-delay="100">
                    <span>Çerkezköy Taksi</span> Durağı
                </h1>
                
                <p className="home-hero__desc reveal" data-delay="200">
                    Gideceğin yere geç kalma! <strong>Çerkezköy taksi</strong> arayanlar için en güvenilir durak olan Çiçek Taksi ile 7/24 konforlu bir yolculuk seni bekliyor. Kredi kartıyla ödeme seçeneğini arama sırasında şubemizden öğrenebilirsiniz. 💳✨
                </p>
                
                <div className="home-hero__actions reveal" data-delay="300">
                    <a href="tel:+905464014751" className="btn btn--primary btn--lg">📞 0546 401 47 51</a>
                    <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">💬 WhatsApp üzerinden Çağır</a>
                </div>
                
                <div className="home-hero__stats reveal stagger" data-delay="400">
                    <div className="stat-box">
                        <span className="stat-num" data-count="10000">10.000+</span>
                        <span className="stat-label">Mutlu Yolcu</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-num" data-count="10">10+</span>
                        <span className="stat-label">Araç Filosu</span>
                    </div>
                </div>
            </div>
            
            <div className="home-hero__visual reveal reveal--right" data-delay="500">
                <div className="floating-card" style={{background: 'rgba(15, 15, 15, 0.95)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', backdropFilter: 'blur(10px)'}}>
                    <div className="floating-card__icon-wrapper" style={{background: 'var(--taxi-yellow)', color: '#111'}}>
                        <CreditCard size={28} className="floating-card__icon" />
                    </div>
                    <div className="floating-card__text">
                        <span style={{color: 'var(--taxi-yellow)', fontWeight: '800', letterSpacing: '0.5px'}}>KREDİ KARTI GEÇERLİ</span>
                        <strong style={{lineHeight: '1.4', fontWeight: '600', color: '#fff'}}>Çiçek Taksi durağı olarak <span style={{color: '#fff', padding: '2px 6px', background: '#44bd32', borderRadius: '4px', fontWeight: '800'}}>%0 KOMİSYON</span><br/>Alıyoruz!</strong>
                    </div>
                </div>
                <Image 
                    src="/images/cerkezkoy-taksi.png" 
                    alt="Çerkezköy Taksi" 
                    title="Çerkezköy Taksi 7/24 Ulaşım"
                    width={800} 
                    height={450} 
                    className="home-hero__car-img"
                    style={{
                        width: '100%', 
                        height: 'auto', 
                        borderRadius: '24px',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(255,255,255,0.4)',
                        objectFit: 'cover'
                    }}
                    priority
                />
            </div>
        </div>
      </header>

      <FareCalculator compact />

      <Branches />

      <section className="section">
        <div className="container">
            <div className="sh sh--center reveal">
                <span className="sh__overtitle">Hizmetlerimiz</span>
                <h2 className="sh__title">Nereye <em>Gidiyoruz?</em> 🚕</h2>
            </div>
            
            <div className="grid grid--3 stagger">
                {hizmetlerData.slice(0, 3).map((hizmet, index) => {
                    const IconComponent = getIcon(hizmet.icon);
                    return (
                        <article className="card card--service reveal" key={hizmet.id} data-delay={(index % 3) * 100}>
                            <div className="card__icon"><IconComponent size={32} /></div>
                            <h3 className="card__title">{hizmet.title}</h3>
                            <p className="card__text">{hizmet.description}</p>
                            {hizmet.tag && <span className="card__tag">{hizmet.tag}</span>}
                        </article>
                    );
                })}
            </div>
            
            <div style={{textAlign: 'center', marginTop: '40px'}} className="reveal" data-delay="300">
                <Link href="/hizmetler" className="btn btn--outline" title="Tüm Çerkezköy Taksi Hizmetleri">Tüm Çerkezköy Taksi Hizmetlerimizi İncele 🚀</Link>
            </div>
        </div>
      </section>

      {/* Blog Bölümü */}
      <section className="section section--gray">
        <div className="container">
            <div className="sh sh--center reveal">
                <span className="sh__overtitle">Çerkezköy Taksi Rehberi</span>
                <h2 className="sh__title">En Son <em>Taksi Yazılarımız</em> 📖</h2>
            </div>
            <p className="reveal" data-delay="100" style={{textAlign: 'center', maxWidth: '600px', margin: '-20px auto 48px', color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                <strong>Çerkezköy taksi numarası</strong>, taksi ücretleri, havaalanı transferleri ve ulaşım hakkında aradığınız tüm detaylar Çerkezköy Taksi rehberimizde.
            </p>

            <div className="blog-home-grid">
                {/* Sol: Featured (büyük kart) */}
                <article className="blog-home-featured reveal">
                    <div className="blog-home-featured__gradient"></div>
                    <div className="blog-home-featured__content">
                        <span className="blog-home-featured__cat">
                            <Tag size={14} /> {bloglarData[0].category}
                        </span>
                        <h3 className="blog-home-featured__title">{bloglarData[0].title}</h3>
                        <p className="blog-home-featured__excerpt">{bloglarData[0].excerpt}</p>
                        <div className="blog-home-featured__meta">
                            <span><Clock size={14} /> {bloglarData[0].readTime}</span>
                            <Link href={`/blog/${bloglarData[0].slug}`} className="blog-home-featured__link" title={bloglarData[0].title}>
                                {bloglarData[0].title} Hakkında Oku <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </article>

                {/* Sağ: 3 küçük kart */}
                <div className="blog-home-list">
                    {bloglarData.slice(1, 4).map((blog, index) => (
                        <Link href={`/blog/${blog.slug}`} className="blog-home-item reveal" key={blog.id} data-delay={(index + 1) * 100}>
                            <div className="blog-home-item__icon">
                                <BookOpen size={22} />
                            </div>
                            <div className="blog-home-item__body">
                                <span className="blog-home-item__cat">{blog.category}</span>
                                <h4 className="blog-home-item__title">{blog.title}</h4>
                                <div className="blog-home-item__meta">
                                    <span><Clock size={12} /> {blog.readTime}</span>
                                    <span>📅 {blog.date}</span>
                                </div>
                            </div>
                            <ArrowRight size={18} className="blog-home-item__arrow" />
                        </Link>
                    ))}
                </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '48px'}} className="reveal" data-delay="400">
                <Link href="/blog" className="btn btn--outline" title="Çerkezköy Taksi Blog">Çerkezköy Taksi Ulaşım Rehberini Keşfet 📖</Link>
            </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular (FAQ) */}
      <section className="section" style={{backgroundColor: '#fff', padding: '60px 0'}}>
        <div className="container">
          <div className="sh sh--center reveal">
              <span className="sh__overtitle">Müşteri Destek</span>
              <h2 className="sh__title">Sık Sorulan <em>Sorular</em> ❓</h2>
          </div>
          <div className="faq-grid reveal" style={{display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '800px', margin: '0 auto'}}>
            {[
              { q: "Ulaşım için ne kadar süre beklemem gerekir?", a: "Aracın uygunluğu ve tahmini varış süresi konuma, trafiğe ve mevcut talebe göre değişir. Çağrı sırasında bilgi alabilirsiniz." },
              { q: "Gece saatlerinde ticari taksi bulabilir miyim?", a: "Kesinlikle. 7/24 kesintisiz hizmet veriyoruz. Gece rezervasyon gerekmeksizin ulaşım ihtiyacınızı karşılıyoruz." },
              { q: "Havaalanı transferi için rezervasyon şart mı?", a: "Şart değil ancak uçuş saatinizi riske atmamak adına, havalimanı rotaları için en az birkaç saat önceden haber vermeniz konforlu bir yolculuk planlaması sağlar." },
              { q: "Araçlarda kredi kartı ile ödeme yapabilir miyim?", a: "Evet, tüm araçlarımızda pos cihazı bulunur ve kredi kartınızla komisyonsuz olarak ödeme yapabilirsiniz." }
            ].map((faq, index) => (
              <details key={index} style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px', cursor: 'pointer', border: '1px solid #eaeaea' }}>
                <summary style={{ fontWeight: '600', fontSize: '1.1rem', color: '#333' }}>{faq.q}</summary>
                <p style={{ marginTop: '10px', color: '#555', lineHeight: '1.6' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri değerlendirmeleri */}
      <section className="section section--gray">
        <div className="container">
          <div className="sh sh--center reveal">
              <span className="sh__overtitle">Müşteri Değerlendirmeleri</span>
              <h2 className="sh__title">Yorumları <em>Google Haritalar'da</em> Görün</h2>
          </div>
          <div style={{marginTop: '24px', textAlign: 'center'}}>
            <p>Gerçek müşteri değerlendirmelerini işletme profilimizde okuyun; yolculuk sonrası kendi deneyiminizi paylaşabilirsiniz.</p>
            <a className="btn btn--dark btn--lg" href="https://www.google.com/maps/search/?api=1&query=%C3%87i%C3%A7ek%20Taksi%20%C3%87erkezk%C3%B6y" target="_blank" rel="noopener noreferrer">
              Google Haritalar'da yorumları aç
            </a>
          </div>
        </div>
      </section>
      <section className="section section--yellow" style={{textAlign: 'center'}}>
        <div className="container">
            <h2 className="sh__title reveal" style={{marginBottom: '30px'}}>Hemen En Yakın <em>Çerkezköy Taksi</em> Çağır 🚕</h2>
            <p className="reveal" style={{fontSize: '1.25rem', marginBottom: '30px'}}>Alınış konumunuzu ve gideceğiniz yeri paylaşın; araç uygunluğunu ve tahmini varış süresini ararken teyit edin.</p>
            <div className="home-hero__actions reveal" style={{justifyContent: 'center', marginBottom: 0}} data-delay="100">
                <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 0546 401 47 51</a>
                <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">💬 WhatsApp üzerinden Çağır</a>
            </div>
        </div>
      </section>
    </>
  );
}
