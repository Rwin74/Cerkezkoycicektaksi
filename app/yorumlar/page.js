import Link from 'next/link';

export const metadata = {
    title: 'Müşteri Yorumları | Çiçek Taksi Çerkezköy',
    description: "Çerkezköy'de binlerce mutlu müşterimizin Çiçek Taksi hizmetleri hakkındaki yorumları."
};

export default function Yorumlar() {
    return (
        <>
            <header className="page-hero">
                <div className="page-hero__bg"></div>
                <div className="container relative z-10">
                    <div className="page-hero__breadcrumb reveal">
                        <Link href="/">Ana Sayfa</Link> / Müşteri Yorumları
                    </div>
                    <h1 className="page-hero__title reveal" data-delay="100">
                        Müşterilerimiz <em>Ne Diyor?</em> 🌟
                    </h1>
                    <p className="page-hero__desc reveal" data-delay="200">
                        Bizi tercih eden binlerce yolcumuzun deneyimleri. İşimiz sadece sizi bir yere götürmek değil, mutlu etmek!
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="grid grid--2 stagger">
                        <div className="card card--testimonial reveal">
                            <div className="card__stars">★★★★★</div>
                            <p className="card__quote">"Çerkezköy'den İstanbul Havalimanı'na transfer için Çiçek Taksi'yi tercih ettik. Araç çok temizdi, şoför abimiz çok güler yüzlüydü. Sabit fiyat garantisi harika."</p>
                            <div className="card__author">
                                <div className="card__avatar">AY</div>
                                <div>
                                    <div className="card__author-name">Ahmet Yılmaz</div>
                                    <div className="card__author-role">Havalimanı Transfer Müşterisi</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card card--testimonial reveal" data-delay="100">
                            <div className="card__stars">★★★★★</div>
                            <p className="card__quote">"Kapaklı ve Çerkezköy arası gece nöbetlerinden dönerken hep Çiçek Taksi'yi arıyorum. Kredi kartı geçmesi çok büyük rahatlık, 7/24 güvenilir taksi hizmeti sunuyorlar."</p>
                            <div className="card__author">
                                <div className="card__avatar">FK</div>
                                <div>
                                    <div className="card__author-name">Fatma Kaya</div>
                                    <div className="card__author-role">Çerkezköy - Kapaklı Yolcusu</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card card--testimonial reveal">
                            <div className="card__stars">★★★★★</div>
                            <p className="card__quote">"Çerkezköy taksi durakları arasında en hızlısı! Aradığımda '2 dakikaya oradayız' deyip gerçekten hemen geldiler. Kızılpınar'a en ucuz ve konforlu ulaşım."</p>
                            <div className="card__author">
                                <div className="card__avatar">MÖ</div>
                                <div>
                                    <div className="card__author-name">Mehmet Özdemir</div>
                                    <div className="card__author-role">Kızılpınar Taksi Müşterisi</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card card--testimonial reveal" data-delay="100">
                            <div className="card__stars">★★★★★</div>
                            <p className="card__quote">"Çerkezköy OSB'deki fabrikamızın VIP ve personel transferi için aylık kurumsal anlaştık. Faturalı çalışmaları ve lüks taksi araçları iş hayatımızı çok kolaylaştırdı."</p>
                            <div className="card__author">
                                <div className="card__avatar">SB</div>
                                <div>
                                    <div className="card__author-name">Selin Başak</div>
                                    <div className="card__author-role">Çerkezköy OSB Kurumsal Müşteri</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
