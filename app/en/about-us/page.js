import Link from 'next/link';

export const metadata = {
  title: 'About Cicek Taxi Cerkezkoy | Executive Fleet & Airport Transfer',
  description: 'Learn about Cicek Taxi, Cerkezkoy\'s premier licensed taxi service provider with modern vehicles, experienced drivers, and 0% commission credit card payments.',
  alternates: {
    canonical: '/en/about-us',
  }
};

export default function EnglishAboutUs() {
  return (
    <>
      <main className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: '#111', color: '#fff' }}>
        <div className="container">
          <h1 className="sh__title" style={{ fontSize: '3rem', color: '#fff' }}>
            About <span style={{ color: 'var(--taxi-yellow)' }}>Cicek Taxi Cerkezkoy</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '15px' }}>
            Your trusted local & airport transportation partner in Thrace since day one.
          </p>
        </div>
      </main>

      <section className="section" style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#222' }}>Premier Transport in Cerkezkoy & Kapakli</h2>
            <p style={{ marginBottom: '20px' }}>
              Cicek Taxi is a fully licensed and insured executive taxi & transfer company operating in Cerkezkoy, Kapakli, Kizilpinar, and the Cerkezkoy Industrial Region (ÇOSB). We specialize in providing reliable, prompt, and comfortable transportation for both local residents and international corporate visitors.
            </p>

            <h3 style={{ fontSize: '1.5rem', margin: '30px 0 15px', color: '#222' }}>Our Commitment to International Guests</h3>
            <p style={{ marginBottom: '20px' }}>
              We understand that arriving in a foreign country can present navigation and language challenges. That is why we equip our airport transfer fleet with English-speaking drivers, GPS tracking, and contactless credit card payment POS devices. Whether you are traveling for a factory inspection or a holiday, we ensure a seamless door-to-door journey.
            </p>

            <div style={{ background: '#f9f9f9', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--taxi-yellow)', marginTop: '30px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Our Fleet Standards:</h4>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                <li>Regular technical inspections and daily sanitation</li>
                <li>Climate-controlled air conditioning in all vehicles</li>
                <li>Spacious luggage space for airport transfers</li>
                <li>Mercedes Vito VIP 7-seater vans available upon request</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
