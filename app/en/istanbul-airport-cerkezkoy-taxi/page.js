export const metadata = {
  title: 'Istanbul Airport - Cerkezkoy | Journey Information',
  description: 'Call Cicek Taxi to confirm vehicle availability, pickup time, fare calculation, and luggage arrangements for an Istanbul Airport journey from Cerkezkoy.',
  alternates: { canonical: '/en/istanbul-airport-cerkezkoy-taxi' },
  robots: { index: false, follow: true },
};

export default function IstanbulAirportCerkezkoyTaxi() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container relative z-10">
          <h1 className="page-hero__title">Istanbul Airport Journey from Cerkezkoy</h1>
          <p className="page-hero__desc">Confirm journey details and availability before travel.</p>
        </div>
      </header>
      <section className="section">
        <div className="container container--sm">
          <div className="rich-content">
            <h2>Before you call</h2>
            <ul>
              <li>Share your pickup address, terminal, flight time, passenger count, and luggage needs.</li>
              <li>Confirm vehicle availability and an estimated pickup time.</li>
              <li>Ask how the fare will be calculated and whether road or bridge tolls apply.</li>
            </ul>
            <p>Travel time and final fare depend on traffic, route, and the applicable tariff. The website calculator provides a distance-based estimate.</p>
          </div>
          <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px'}}>
            <a href="tel:+905304014751" className="btn btn--dark btn--lg">Gazi MKP: +90 530 401 47 51</a>
            <a href="tel:+905464014751" className="btn btn--dark btn--lg">Baglik: +90 546 401 47 51</a>
            <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
