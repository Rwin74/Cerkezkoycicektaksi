import Link from 'next/link';
import subelerData from '@/data/subeler.json';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
    title: 'Şubelerimiz | Çiçek Taksi Çerkezköy',
    description: 'Çiçek Taksi şubeleri ve durak lokasyonları. Size en yakın taksi durağını bulun.',
};

export default function SubelerListesi() {
    return (
        <>
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Breadcrumb customItems={[{label: 'Şubelerimiz', url: '/subeler'}]} />
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        Şubelerimiz
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        Çerkezköy ve çevresinde size en yakın noktadan 7/24 hizmet veriyoruz.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container container--sm">
                    <div className="grid grid--2 stagger">
                        {subelerData.map((sube, i) => (
                            <div key={sube.id} className="card reveal" data-delay={i * 100} style={{padding: '32px', display: 'flex', flexDirection: 'column'}}>
                                <h2 style={{fontSize: '1.5rem', marginBottom: '12px'}}>{sube.title}</h2>
                                <p style={{color: 'var(--text-muted)', marginBottom: '24px', flex: 1}}>{sube.address}</p>
                                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                                    <Link href={`/subeler/${sube.slug}`} className="btn btn--outline" style={{flex: 1}}>
                                        Şubeyi İncele
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
