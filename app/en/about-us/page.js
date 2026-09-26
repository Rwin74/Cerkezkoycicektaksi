import Link from 'next/link';

export const metadata = {
  title: 'About Cicek Taxi | Cerkezkoy',
  description: 'Contact Cicek Taxi in Cerkezkoy to confirm pickup availability, estimated arrival time, fare calculation, and payment options.',
  alternates: { canonical: '/en/about-us' },
};

export default function EnglishAboutUs() {
  return (
    <>
      <main className="page-header" style={{paddingTop: '120px', paddingBottom: '60px', background: '#111', color: '#fff'}}>
        <div className="container">
          <h1 className="sh__title" style={{fontSize: '3rem', color: '#fff'}}>About Cicek Taxi Cerkezkoy</h1>
          <p style={{fontSize: '1.2rem', color: '#ccc', marginTop: '15px'}}>
            Call us to discuss your pickup, destination, and journey requirements.
          </p>
        </div>
      </main>
      <section className="section">
        <div className="container container--sm">
          <div className="rich-content">
            <h2>Plan your journey</h2>
            <p>Tell us your pickup address, destination, preferred time, passenger count, and luggage needs. Ask us to confirm vehicle availability, estimated arrival time, fare calculation, and payment options before the trip.</p>
            <p>Use the <Link href="/taksi-ucreti-hesaplama">fare estimate tool</Link> for a distance-based estimate. The final amount can vary with the route and applicable tariff.</p>
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
