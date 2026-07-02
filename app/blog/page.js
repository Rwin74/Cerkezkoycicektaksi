import Link from 'next/link';
import bloglarData from '@/data/bloglar.json';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Çerkezköy Blog - Ulaşım ve Gezi Rehberi | Çiçek Taksi',
    description: "Çerkezköy hakkında bilmeniz gereken her şey. Ulaşım rehberi, OSB taksi, havalimanı transfer, gezilecek yerler ve daha fazlası.",
    alternates: { canonical: '/blog' },
};

export default function Blog() {
    // Kategorileri çıkar
    const categories = [...new Set(bloglarData.map(b => b.category))];

    return (
        <>
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Link href="/">Ana Sayfa</Link> / Blog
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        Çerkezköy <em>Rehberi</em> 📖
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        Şehri bizimle keşfedin! Ulaşım tüyoları, gezi rehberleri, transfer bilgileri ve çok daha fazlası...
                    </p>
                </div>
            </header>

            {/* Kategori Etiketleri */}
            <section style={{padding: '32px 0 0'}}>
                <div className="container" style={{display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {categories.map(cat => (
                        <span key={cat} className="sh__overtitle" style={{fontSize: '0.8rem'}}>
                            {cat}
                        </span>
                    ))}
                </div>
            </section>

            {/* Öne Çıkan Yazı */}
            <section className="section" style={{paddingBottom: '0'}}>
                <div className="container">
                    <article className="blog-home-featured reveal" style={{maxWidth: '100%'}}>
                        <div className="blog-home-featured__gradient"></div>
                        <div className="blog-home-featured__content">
                            <span className="blog-home-featured__cat">
                                ⭐ Editörün Seçimi • {bloglarData[0].category}
                            </span>
                            <h2 className="blog-home-featured__title" style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'}}>{bloglarData[0].title}</h2>
                            <p className="blog-home-featured__excerpt">{bloglarData[0].excerpt}</p>
                            <div className="blog-home-featured__meta">
                                <span><Clock size={14} /> {bloglarData[0].readTime} • 📅 {bloglarData[0].date}</span>
                                <Link href={`/blog/${bloglarData[0].slug}`} className="blog-home-featured__link">
                                    Devamını Oku <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* Tüm Yazılar */}
            <section className="section">
                <div className="container">
                    <div className="sh sh--center reveal">
                        <span className="sh__overtitle">Tüm Yazılar</span>
                        <h2 className="sh__title">{bloglarData.length} <em>Yazı</em> Sizi Bekliyor</h2>
                    </div>

                    <div className="grid grid--2 stagger">
                        {bloglarData.slice(1).map((blog, index) => (
                            <Link href={`/blog/${blog.slug}`} key={blog.id} style={{textDecoration: 'none', color: 'inherit'}}>
                                <article className="card card--blog reveal" data-delay={(index % 2) * 100}>
                                    <div className="card__img">
                                        <div className="card__img-inner" style={{background: 'linear-gradient(135deg, var(--dark-base), #333)'}}>
                                            <div style={{fontSize: '3rem'}}>📰</div>
                                        </div>
                                        <span className="card__category">{blog.category}</span>
                                    </div>
                                    <div className="card__body">
                                        <div className="card__meta">
                                            <span>📅 {blog.date}</span>
                                            <span>⏱️ {blog.readTime}</span>
                                        </div>
                                        <h3 className="card__title">{blog.title}</h3>
                                        <p className="card__excerpt">{blog.excerpt}</p>
                                        <span className="card__link">Yazıyı Oku →</span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
