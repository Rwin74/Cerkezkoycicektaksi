import Image from "next/image";
import Link from "next/link";
import hizmetlerData from '@/data/hizmetler.json';
import bloglarData from '@/data/bloglar.json';
import { getIcon } from '@/components/IconMap';
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';
import Branches from '@/components/Branches';

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.cerkezkoycicektaksi.com",
    "name": "Çiçek Taksi Çerkezköy",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.cerkezkoycicektaksi.com/arama?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
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
                    En Yakın<br/>
                    <span>Çerkezköy Taksi</span><br/>
                    Hizmeti
                </h1>
                
                <p className="home-hero__desc reveal" data-delay="200">
                    Gideceğin yere geç kalma! <strong>Çiçek Taksi</strong> ile güvenli ve konforlu bir yolculuk seni bekliyor. Çerkezköy'de kredi kartından <strong>komisyon almayan tek taksi</strong> durağıyız! 💳✨
                </p>
                
                <div className="home-hero__actions reveal" data-delay="300">
                    <a href="tel:+905464014751" className="btn btn--primary btn--lg">📞 0546 401 47 51</a>
                    <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">💬 WhatsApp'tan Çağır</a>
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
                        {(() => {
                            const CreditCardIcon = getIcon('CreditCard');
                            return <CreditCardIcon size={28} className="floating-card__icon" />;
                        })()}
                    </div>
                    <div className="floating-card__text">
                        <span style={{color: 'var(--taxi-yellow)', fontWeight: '800', letterSpacing: '0.5px'}}>KREDİ KARTI GEÇERLİ</span>
                        <strong style={{lineHeight: '1.4', fontWeight: '600', color: '#fff'}}>Çerkezköy'de <span style={{color: '#fff', padding: '2px 6px', background: '#44bd32', borderRadius: '4px', fontWeight: '800'}}>%0 KOMİSYON</span><br/>Alan Tek Taksi Durağı!</strong>
                    </div>
                </div>
                <Image 
                    src="/images/hero-taxi-59.png" 
                    alt="Çiçek Taksi Çerkezköy" 
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
                <a href="/hizmetler" className="btn btn--outline">Tüm Hizmetlerimize Göz At 🚀</a>
            </div>
        </div>
      </section>

      {/* Blog Bölümü */}
      <section className="section section--gray">
        <div className="container">
            <div className="sh sh--center reveal">
                <span className="sh__overtitle">Çerkezköy Rehberi</span>
                <h2 className="sh__title">Son <em>Yazılarımız</em> 📖</h2>
            </div>
            <p className="reveal" data-delay="100" style={{textAlign: 'center', maxWidth: '600px', margin: '-20px auto 48px', color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                Çerkezköy ve çevresindeki ulaşım, gezi ve yaşam rehberimizden faydalı bilgiler edinin.
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
                            <Link href={`/blog/${bloglarData[0].slug}`} className="blog-home-featured__link">
                                Devamını Oku <ArrowRight size={16} />
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
                <Link href="/blog" className="btn btn--outline">Tüm Yazıları Keşfet 📖</Link>
            </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#fff', padding: '60px 0', borderTop: '1px solid #eee'}}>
        <div className="container reveal">
            <h2 style={{fontSize: '1.8rem', marginBottom: '20px', color: '#333'}}>Çerkezköy Taksi ve Çevresi İçin Tek Adresiniz</h2>
            <div style={{color: '#555', lineHeight: '1.8', fontSize: '1.05rem'}}>
                <p style={{marginBottom: '15px'}}>Tekirdağ'ın kalbi Çerkezköy ve çevresinde, ulaşım ihtiyaçlarınız için güvenilir bir çözüm arıyorsanız doğru yerdesiniz. <strong>Çerkezköy Taksi</strong> durağı olarak, günün 24 saati kesintisiz ulaşım hizmeti veriyoruz. Amacımız, müşterilerimize konforlu, temiz araçlarımızla ve tecrübeli şoför kadromuzla eşsiz bir deneyim yaşatmaktır. İhtiyacınız olan an, bize ulaşmanız yeterli; size <strong>en yakın taksi</strong> anında kapınızda olacak.</p>
                <p style={{marginBottom: '15px'}}>Hizmet ağımız sadece merkezle sınırlı değildir. <strong>Kapaklı taksi</strong>, <strong>Kızılpınar taksi</strong> ve <strong>Veliköy taksi</strong> arayışlarınızda da ilk tercih edilen adres olmanın gururunu yaşıyoruz. Organize Sanayi Bölgeleri (OSB) ulaşımından, hastane ve otogar transferlerine kadar her alanda profesyonel destek sağlıyoruz. Çerkezköy ve çevresindeki yoğun tempoda, zaman kaybı yaşamamanız adına alternatif rotaları kullanarak gideceğiniz yere sizi hızlıca ve güvenle ulaştırıyoruz.</p>
                <p>Acil bir durum olduğunda <strong>Çerkezköy nöbetçi taksi</strong> hizmetimiz sayesinde gecenin bir yarısı bile yollarda mağdur olmazsınız. Üstelik araçlarımızda kredi kartı geçerli olup, bütçenizi zorlamayan uygun ve sabit fiyat garantisiyle ödemelerinizi kolayca yapabilirsiniz. "Hızlı, Güvenli ve Güleryüzlü" hizmet anlayışımızla; siz nereye isterseniz, biz oraya götürüyoruz.</p>
            </div>
        </div>
      </section>

      <section className="section section--yellow" style={{textAlign: 'center'}}>
        <div className="container">
            <h2 className="sh__title reveal" style={{marginBottom: '30px'}}>Hemen <em>Çerkezköy Taksi</em> Çağır 🚕</h2>
            <p className="reveal" style={{fontSize: '1.25rem', marginBottom: '30px'}}>Hiç bekleme, tek tıkla kapında!</p>
            <div className="home-hero__actions reveal" style={{justifyContent: 'center', marginBottom: 0}} data-delay="100">
                <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 0546 401 47 51</a>
                <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">💬 WhatsApp'tan Çağır</a>
            </div>
        </div>
      </section>
    </>
  );
}
