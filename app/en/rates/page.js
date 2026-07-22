import Link from 'next/link';

export const metadata = {
  title: 'Cerkezkoy Taxi Rates & Airport Transfer Pricing | Cicek Taxi',
  description: 'Transparent fixed rates and official taxi meter tariffs for Cerkezkoy, Kapakli, OSB, and Istanbul Airport transfers. No hidden fees.',
  alternates: {
    canonical: '/en/rates',
  }
};

export default function EnglishRates() {
  return (
    <>
      <main className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: '#111', color: '#fff' }}>
        <div className="container">
          <h1 className="sh__title" style={{ fontSize: '3rem', color: '#fff' }}>
            Taxi Tariffs & <span style={{ color: 'var(--taxi-yellow)' }}>Transfer Rates</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '15px' }}>
            Transparent pricing, official meter rates & zero commission credit card payments.
          </p>
        </div>
      </main>

      <section className="section" style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f9f9f9', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
              <thead>
                <tr style={{ background: '#111', color: '#fff', textAlign: 'left' }}>
                  <th style={{ padding: '16px 20px' }}>Transfer Route</th>
                  <th style={{ padding: '16px 20px' }}>Est. Travel Time</th>
                  <th style={{ padding: '16px 20px' }}>Distance</th>
                  <th style={{ padding: '16px 20px' }}>Payment Option</th>
                  <th style={{ padding: '16px 20px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 'bold' }}>Istanbul Airport (IST) ↔ Cerkezkoy OSB</td>
                  <td style={{ padding: '16px 20px' }}>55 - 65 Mins</td>
                  <td style={{ padding: '16px 20px' }}>~ 90 km</td>
                  <td style={{ padding: '16px 20px' }}>Fixed Rate / Credit Card</td>
                  <td style={{ padding: '16px 20px' }}><a href="https://wa.me/905464014751" className="btn btn--primary btn--sm">Book</a></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 'bold' }}>Sabiha Gokcen Airport (SAW) ↔ Cerkezkoy</td>
                  <td style={{ padding: '16px 20px' }}>110 - 130 Mins</td>
                  <td style={{ padding: '16px 20px' }}>~ 145 km</td>
                  <td style={{ padding: '16px 20px' }}>Fixed Rate / Credit Card</td>
                  <td style={{ padding: '16px 20px' }}><a href="https://wa.me/905464014751" className="btn btn--primary btn--sm">Book</a></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 'bold' }}>Corlu Airport (TEQ) ↔ Cerkezkoy</td>
                  <td style={{ padding: '16px 20px' }}>25 - 30 Mins</td>
                  <td style={{ padding: '16px 20px' }}>~ 32 km</td>
                  <td style={{ padding: '16px 20px' }}>Meter Tariff / Credit Card</td>
                  <td style={{ padding: '16px 20px' }}><a href="https://wa.me/905464014751" className="btn btn--primary btn--sm">Book</a></td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 20px', fontWeight: 'bold' }}>Cerkezkoy Center ↔ Kapakli Center</td>
                  <td style={{ padding: '16px 20px' }}>8 - 12 Mins</td>
                  <td style={{ padding: '16px 20px' }}>~ 7 km</td>
                  <td style={{ padding: '16px 20px' }}>Official Meter Rate</td>
                  <td style={{ padding: '16px 20px' }}><a href="tel:+905464014751" className="btn btn--primary btn--sm">Call Taxi</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
