import Link from 'next/link';
import bolgelerData from '@/data/bolgeler.json';
import bloglarData from '@/data/bloglar.json';
import transferlerData from '@/data/transferler.json';
import hizmetlerData from '@/data/hizmetler.json';

export default function SpiderWeb({ currentPath }) {
    // Generate 4 random links from different categories to create the spider web effect
    const getRandomItems = (arr, num) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const randomBolge = getRandomItems(bolgelerData, 1)[0];
    const randomBlog = getRandomItems(bloglarData, 1)[0];
    const randomTransfer = getRandomItems(transferlerData, 1)[0];
    const randomHizmet = getRandomItems(hizmetlerData, 1)[0];

    const links = [
        { title: randomHizmet.title, url: `/hizmetler/${randomHizmet.slug}`, type: 'Hizmet' },
        { title: randomTransfer.title, url: `/transfer/${randomTransfer.slug}`, type: 'Transfer' },
        { title: `${randomBolge.neighborhood} Taksi`, url: `/bolgeler/${randomBolge.slug}`, type: 'Bölge' },
        { title: randomBlog.title, url: `/blog/${randomBlog.slug}`, type: 'Rehber' }
    ].filter(l => l.url !== currentPath); // prevent linking to itself

    return (
        <div className="spider-web reveal" style={{marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center'}}>Bölge Ulaşım Ağı (İlginizi Çekebilir)</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}}>
                {links.map((link, i) => (
                    <Link key={i} href={link.url} className="spider-link" style={{
                        background: 'rgba(255, 204, 0, 0.05)', 
                        border: '1px solid rgba(255, 204, 0, 0.2)', 
                        padding: '12px 20px', 
                        borderRadius: '30px', 
                        textDecoration: 'none', 
                        color: 'var(--text-light)',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease'
                    }}>
                        <span style={{opacity: 0.6, fontSize: '0.8rem', marginRight: '8px'}}>{link.type}</span>
                        <strong>{link.title}</strong>
                    </Link>
                ))}
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                .spider-link:hover {
                    background: var(--taxi-yellow) !important;
                    color: var(--dark-base) !important;
                }
            `}} />
        </div>
    );
}
