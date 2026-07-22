const fs = require('fs');
const path = require('path');

const landingPages = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'landingPages.json'), 'utf8'));

landingPages.forEach((page) => {
  const dirPath = path.join(__dirname, 'app', page.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const pageContent = `import Link from 'next/link';

export const metadata = {
  title: "${page.title} | Çiçek Taksi",
  description: "${page.description.replace(/"/g, '\\"')}",
  alternates: {
    canonical: "/${page.slug}",
  }
};

export default function ${page.slug.replace(/-/g, '_')}_Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${page.title.replace(/"/g, '\\"')}",
    "description": "${page.description.replace(/"/g, '\\"')}",
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
            <span style={{ color: 'var(--text-muted)' }}> ${page.title}</span>
          </div>
          <h1 className="sh__title" style={{ fontSize: '3rem', marginBottom: '20px' }}>${page.title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>${page.description}</p>
        </div>
      </main>

      <section className="section">
        <div className="container">
          <div 
            className="seo-content-block"
            dangerouslySetInnerHTML={{ __html: ${JSON.stringify(page.content)} }} 
            style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}
          />
        </div>
      </section>
    </>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.js'), pageContent);
});

console.log('✅ Generated 9 physical static landing routes successfully!');
