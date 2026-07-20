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
    "@graph": [
      {
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
      },
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
            "name": "Çerkezköy Taksi kaç dakika sürer?",
            "acceptedAnswer": { "@type": "Answer", "text": "Bulunduğunuz konuma göre değişmekle birlikte, çağrı merkezimize ulaştıktan sonra ortalama 3 ile 5 dakika içerisinde size en yakın aracımız kapınızda olmaktadır." }
          },
          {
            "@type": "Question",
            "name": "Gece taksi var mı?",
            "acceptedAnswer": { "@type": "Answer", "text": "Evet, Çiçek Taksi olarak 7 gün 24 saat kesintisiz nöbetçi taksi hizmeti sunuyoruz. Gecenin her saatinde bize ulaşabilirsiniz." }
          },
          {
            "@type": "Question",
            "name": "Araçlarda kredi kartı geçiyor mu?",
            "acceptedAnswer": { "@type": "Answer", "text": "Tüm araçlarımızda pos cihazı bulunmaktadır. Kredi kartı veya banka kartı ile %0 komisyon avantajıyla ödeme yapabilirsiniz." }
          },
          {
            "@type": "Question",
            "name": "İstanbul Havalimanı kaç TL?",
            "acceptedAnswer": { "@type": "Answer", "text": "İstanbul Havalimanı transfer ücretlerimiz sabit fiyat garantisi altındadır. Güncel fiyatlar için lütfen iletişim numaramızdan bilgi alınız." }
          },
          {
            "@type": "Question",
            "name": "Sabiha Gökçen transferi var mı?",
            "acceptedAnswer": { "@type": "Answer", "text": "Evet, Çerkezköy'den Sabiha Gökçen Havalimanı'na VIP ve standart araç seçeneklerimizle doğrudan transfer hizmeti sağlıyoruz." }
          },
          {
            "@type": "Question",
            "name": "Rezervasyon gerekiyor mu?",
            "acceptedAnswer": { "@type": "Answer", "text": "Anlık çağrılar için rezervasyon gerekmemektedir. Ancak havalimanı transferleri veya VIP hizmetler için önceden rezervasyon yaptırmanızı öneririz." }
          },
          {
            "@type": "Question",
            "name": "VIP taksi fiyatları farklı mı?",
            "acceptedAnswer": { "@type": "Answer", "text": "VIP transfer hizmetlerimiz standart taksimetre ücretlendirmesinden farklıdır. Mesafe ve araç tercihine göre özel fiyatlandırma yapılır." }
          },
          {
            "@type": "Question",
            "name": "Büyük bagajlı araç isteyebilir miyim?",
            "acceptedAnswer": { "@type": "Answer", "text": "Kesinlikle. Geniş bagaj hacmine sahip hafif ticari taksi (Doblo vb.) araç seçeneklerimizle kalabalık eşyalarınızı kolayca taşıyabilirsiniz." }
          },
          {
            "@type": "Question",
            "name": "Şehirlerarası taksi hizmetiniz var mı?",
            "acceptedAnswer": { "@type": "Answer", "text": "Evet, Edirne, Tekirdağ merkez, İstanbul, Bursa başta olmak üzere Türkiye'nin tüm illerine konforlu şehirlerarası yolculuk imkanı sunuyoruz." }
          },
          {
            "@type": "Question",
            "name": "Kapaklı veya Kızılpınar'a taksi çağırabilir miyim?",
            "acceptedAnswer": { "@type": "Answer", "text": "Elbette. Sadece merkezde değil, Kapaklı, Kızılpınar, Veliköy ve Çerkezköy OSB dahil tüm çevre bölgelere hizmet veriyoruz." }
          },
          {
            "@type": "Question",
            "name": "Araçta unutulan eşyalar için ne yapmalıyım?",
            "acceptedAnswer": { "@type": "Answer", "text": "Tüm araçlarımız merkezden kayıtlıdır. Unutulan eşyalarınız için durağımızı arayarak aracın plakasını veya saati belirtmeniz durumunda anında yardımcı oluyoruz." }
          },
          {
            "@type": "Question",
            "name": "Çocuk koltuğu temin ediyor musunuz?",
            "acceptedAnswer": { "@type": "Answer", "text": "Önceden belirtmeniz durumunda, havalimanı veya şehirlerarası transferleriniz için aracımıza çocuk/bebek koltuğu monte edebiliyoruz." }
          },
          {
            "@type": "Question",
            "name": "Taksiye evcil hayvanımla binebilir miyim?",
            "acceptedAnswer": { "@type": "Answer", "text": "Kafesinde olduğu sürece evcil hayvan dostlarımızla birlikte seyahat etmenizde hiçbir sakınca yoktur." }
          },
          {
            "@type": "Question",
            "name": "Kurumsal fatura kesiyor musunuz?",
            "acceptedAnswer": { "@type": "Answer", "text": "Evet, şirketiniz veya şahsınız adına taksi fişi veya kurumsal fatura düzenleyebiliyoruz. Kurumsal taşıma anlaşmaları yapmaktayız." }
          },
          {
            "@type": "Question",
            "name": "Havalimanında bizi karşılıyor musunuz?",
            "acceptedAnswer": { "@type": "Answer", "text": "Dönüş yolculuklarınız için havalimanı yolcu karşılama (meet and greet) hizmetimiz bulunmaktadır. Şoförümüz terminal çıkışında sizi bekliyor olacaktır." }
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
                <a href="/hizmetler" className="btn btn--outline" title="Tüm Çerkezköy Taksi Hizmetleri">Tüm Çerkezköy Taksi Hizmetlerimizi İncele 🚀</a>
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
              { q: "Ulaşım için ne kadar süre beklemem gerekir?", a: "Bulunduğunuz noktaya en yakın aracımız, çağrınızdan hemen sonra yola çıkar. Genellikle şehir içi transferlerde ortalama 3 ile 5 dakika içerisinde size ulaşıyoruz." },
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

      {/* Yorumlar / Sosyal Kanıt */}
      <section className="section section--gray">
        <div className="container">
          <div className="sh sh--center reveal">
              <span className="sh__overtitle">Müşteri Yorumları</span>
              <h2 className="sh__title">Bizi Tercih Edenlerin <em>Deneyimleri</em> ⭐</h2>
          </div>
          <div className="grid grid--3 stagger" style={{marginTop: '40px'}}>
            {[
              { name: "Ahmet Y.", comment: "Havaalanı transferi için tercih ettim. Tam vaktinde geldiler, araç çok temizdi. Kesinlikle tavsiye ederim." },
              { name: "Ayşe K.", comment: "Gece geç saatte taksi çağırdım, 3 dakikada kapıdaydılar. Şoför bey çok kibar ve ilgiliydi. Kredi kartı geçmesi de büyük avantaj." },
              { name: "Mehmet D.", comment: "Çerkezköy içi ulaşımda her zaman ilk tercihim. Hızlı, güvenilir ve uygun fiyatlı. Teşekkürler Çiçek Taksi!" }
            ].map((review, idx) => (
              <div key={idx} className="card reveal" data-delay={idx * 100} style={{padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'}}>
                <div style={{color: '#f1c40f', marginBottom: '10px'}}>★★★★★</div>
                <p style={{fontStyle: 'italic', color: '#555', marginBottom: '15px'}}>"{review.comment}"</p>
                <strong style={{color: '#333'}}>- {review.name}</strong>
              </div>
            ))}
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
