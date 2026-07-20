import { notFound } from 'next/navigation';
import landingPages from '@/data/landingPages.json';
import Link from 'next/link';

export function generateMetadata({ params }) {
  const page = landingPages.find(p => p.slug === params.landing);
  if (!page) return {};
  
  return {
    title: `${page.title} | Çiçek Taksi`,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    }
  };
}

export function generateStaticParams() {
  return landingPages.map((page) => ({
    landing: page.slug,
  }));
}

export default function LandingPage({ params }) {
  const page = landingPages.find(p => p.slug === params.landing);
  if (!page) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": page.title,
    "description": page.description,
    "author": {
      "@type": "Organization",
      "name": "Çiçek Taksi"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <Link href="/" style={{ color: 'var(--taxi-yellow)', fontWeight: 'bold' }}>Ana Sayfa</Link> / 
            <span style={{ color: 'var(--text-muted)' }}> {page.title}</span>
          </div>
          <h1 className="sh__title" style={{ fontSize: '3rem', marginBottom: '20px' }}>{page.title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{page.description}</p>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <div 
            className="seo-content-block"
            dangerouslySetInnerHTML={{ __html: page.content }} 
            style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}
          />
        </div>
      </section>
    </>
  );
}
