import Link from 'next/link';

export const metadata = {
  title: 'Taxi & Transfer Services in Cerkezkoy | Cicek Taxi',
  description: 'Explore our 24/7 taxi services in Cerkezkoy: Airport Transfer (IST/SAW), Corporate OSB Rides, VIP Vito Vans, and Intercity Private Taxi.',
  alternates: {
    canonical: '/en/services',
  }
};

export default function EnglishServices() {
  const services = [
    {
      title: "Airport VIP Transfer (IST & SAW)",
      desc: "Fixed rate pickup and drop-off to Istanbul Airport (IST) and Sabiha Gokcen Airport (SAW) with live flight monitoring and terminal meet & greet.",
      link: "/en/istanbul-airport-cerkezkoy-taxi"
    },
    {
      title: "Cerkezkoy OSB Corporate Taxi",
      desc: "Dedicated corporate transport for industrial region (ÇOSB) factory staff, engineers, international delegations and business guests.",
      link: "tel:+905464014751"
    },
    {
      title: "Intercity Private Taxi",
      desc: "Door-to-door long-distance private transportation to Istanbul, Edirne, Tekirdag center, Bursa, Kırklareli and all across Turkey.",
      link: "/en/rates"
    },
    {
      title: "24/7 City & Regional Taxi",
      desc: "Fast 3-5 minute dispatch across Cerkezkoy, Kapakli, Velikoy, Kizilpinar, train station, and local hospitals.",
      link: "tel:+905464014751"
    }
  ];

  return (
    <>
      <main className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: '#111', color: '#fff' }}>
        <div className="container">
          <h1 className="sh__title" style={{ fontSize: '3rem', color: '#fff' }}>
            Our <span style={{ color: 'var(--taxi-yellow)' }}>Taxi & Transfer Services</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '15px' }}>
            Reliable, 24/7 transportation solutions tailored for international travelers and corporate needs.
          </p>
        </div>
      </main>

      <section className="section" style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container">
          <div className="grid grid--2" style={{ gap: '30px' }}>
            {services.map((s, idx) => (
              <div key={idx} className="card" style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#222' }}>{s.title}</h2>
                <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>{s.desc}</p>
                <a href={s.link} className="btn btn--primary btn--sm">Learn More / Book</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
