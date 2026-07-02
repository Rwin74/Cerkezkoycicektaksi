import ekibimizData from '@/data/ekibimiz.json';
import Link from 'next/link';
import { User } from 'lucide-react';

export const metadata = {
    title: 'Profesyonel Şoför Ekibimiz | Çiçek Taksi Çerkezköy',
    description: 'Çerkezköy Çiçek Taksi ailesi olarak, uzun yıllar tecrübesi olan, ileri sürüş teknikleri eğitimi almış profesyonel şoför kadromuzla güvenli ulaşım sunuyoruz.',
};

export default function EkibimizIndex() {
    return (
        <>
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <h1 className="page-hero__title reveal">Profesyonel Ekibimiz</h1>
                    <p className="page-hero__desc reveal" data-delay="100">
                        Güvenliğiniz ve konforunuz için özenle seçilmiş, tecrübeli şoför kadromuz.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="grid grid--3 stagger">
                        {ekibimizData.map((personel, i) => (
                            <Link href={`/ekibimiz/${personel.slug}`} key={personel.id} style={{textDecoration: 'none', color: 'inherit'}}>
                                <div className="card card--service reveal" data-delay={i * 100}>
                                    <div className="card__icon"><User size={32} /></div>
                                    <h3 className="card__title">{personel.name}</h3>
                                    <p className="card__text" style={{fontSize: '0.9rem', marginBottom: '10px'}}><strong>Deneyim:</strong> {personel.experience}</p>
                                    <div style={{display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'center'}}>
                                        {personel.specialties.slice(0, 2).map((spec, j) => (
                                            <span key={j} style={{background: 'var(--taxi-yellow)', color: 'var(--dark-base)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 'bold'}}>{spec}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
