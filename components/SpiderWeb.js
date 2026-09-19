import Link from 'next/link';

export default function SpiderWeb({ currentPath }) {
    const links = [
        { title: 'Taksi Ücreti Hesaplama', url: '/taksi-ucreti-hesaplama', type: 'Ücret' },
        { title: 'Havalimanı Transferi', url: '/hizmetler/havalimani-transfer', type: 'Transfer' },
        { title: 'Şubeler ve Telefonlar', url: '/subeler', type: 'İletişim' },
        { title: 'Taksi Hizmetleri', url: '/hizmetler', type: 'Hizmet' }
    ].filter(l => l.url !== currentPath); // prevent linking to itself

    return (
        <div className="spider-web reveal" style={{marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center'}}>Yolculuğunuzu Planlayın</h3>
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
