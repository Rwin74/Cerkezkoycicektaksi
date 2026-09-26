export const metadata = {
  alternates: { canonical: '/yorumlar' },
  title: 'Müşteri Değerlendirmeleri | Çiçek Taksi Çerkezköy',
  description: 'Çiçek Taksi hakkındaki müşteri değerlendirmelerini Google Haritalar üzerinden görüntüleyin.',
};

export default function Yorumlar() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container relative z-10">
          <h1 className="page-hero__title reveal">Müşteri Değerlendirmeleri</h1>
          <p className="page-hero__desc reveal" data-delay="100">
            Çiçek Taksi hakkındaki değerlendirmeleri Google Haritalar'daki işletme profilimizde görüntüleyebilirsiniz.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container container--sm" style={{textAlign: 'center'}}>
          <p>Yolculuğunuzdan sonra kendi deneyiminizi paylaşmak isterseniz, değerlendirmenizi Google Haritalar üzerinden bırakabilirsiniz.</p>
          <a
            className="btn btn--dark btn--lg"
            href="https://www.google.com/maps/search/?api=1&query=%C3%87i%C3%A7ek%20Taksi%20%C3%87erkezk%C3%B6y"
            target="_blank"
            rel="noopener noreferrer"
          >Google Haritalar'da görüntüle</a>
        </div>
      </section>
    </>
  );
}
