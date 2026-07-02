import Link from 'next/link';
import hizmetlerData from '@/data/hizmetler.json';
import { getIcon } from '@/components/IconMap';

export const metadata = {
    title: 'Hizmetlerimiz | Çiçek Taksi Çerkezköy',
    description: 'Çerkezköy taksi hizmetleri: Şehir içi taksi, havalimanı transfer, VIP transfer ve daha fazlası.',
    alternates: { canonical: '/hizmetler' },
};

export default function Hizmetler() {
    return (
        <>
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Link href="/">Ana Sayfa</Link> / Hizmetlerimiz
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        Profesyonel <em>Taksi Hizmetleri</em> 🚕
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        Çerkezköy ve çevresinde, her türlü ulaşım ihtiyacınıza özel, güvenilir ve konforlu çözümler sunuyoruz.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="grid grid--3 stagger">
                        {hizmetlerData.map((hizmet, index) => {
                            const IconComponent = getIcon(hizmet.icon);
                            return (
                                <Link href={`/hizmetler/${hizmet.slug}`} key={hizmet.id} style={{textDecoration: 'none', color: 'inherit'}}>
                                    <article className="card card--service reveal" data-delay={(index % 3) * 100}>
                                        <div className="card__icon"><IconComponent size={32} /></div>
                                        <h3 className="card__title">{hizmet.title}</h3>
                                        <p className="card__text">{hizmet.description}</p>
                                        {hizmet.tag && <span className="card__tag">{hizmet.tag}</span>}
                                    </article>
                                </Link>
                            );
                        })}
                    </div>
                    
                    <div className="divider reveal">
                        <div className="divider__icon">🚕 💨 💨</div>
                    </div>
                </div>
            </section>

            <section className="section section--yellow" style={{textAlign: 'center'}}>
                <div className="container">
                    <h2 className="sh__title reveal" style={{marginBottom: '30px'}}>Hemen Bizi <em>Arayın</em> 📞</h2>
                    <p className="reveal" style={{fontSize: '1.25rem', marginBottom: '30px'}}>Hangi hizmete ihtiyacınız varsa, bir telefon uzağınızdayız.</p>
                    <div className="home-hero__actions reveal" style={{justifyContent: 'center', marginBottom: '0'}} data-delay="100">
                        <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 0546 401 47 51</a>
                    </div>
                </div>
            </section>
        </>
    );
}
