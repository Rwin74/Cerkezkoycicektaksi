import { Phone, MessageSquare, MapPin, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Cicek Taxi Cerkezkoy | 24/7 Dispatch Phone & WhatsApp',
  description: 'Need a taxi in Cerkezkoy? Call +90 546 401 47 51 or WhatsApp us for immediate dispatch and airport transfer bookings.',
  alternates: {
    canonical: '/en/contact',
  }
};

export default function EnglishContact() {
  return (
    <>
      <main className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: '#111', color: '#fff' }}>
        <div className="container">
          <h1 className="sh__title" style={{ fontSize: '3rem', color: '#fff' }}>
            Contact <span style={{ color: 'var(--taxi-yellow)' }}>Cicek Taxi</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '15px' }}>
            Available 24/7 for immediate dispatch and airport reservations.
          </p>
        </div>
      </main>

      <section className="section" style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="grid grid--2" style={{ gap: '30px' }}>
            <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Direct Contact Info</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ padding: '10px', background: 'var(--taxi-yellow)', borderRadius: '8px' }}><Phone size={24} /></div>
                  <div>
                    <strong>24/7 Hotline:</strong><br />
                    <a href="tel:+905464014751" style={{ fontSize: '1.2rem', color: '#111', fontWeight: 'bold' }}>+90 546 401 47 51</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ padding: '10px', background: '#25D366', color: '#fff', borderRadius: '8px' }}><MessageSquare size={24} /></div>
                  <div>
                    <strong>WhatsApp Booking:</strong><br />
                    <a href="https://wa.me/905464014751" style={{ fontSize: '1.2rem', color: '#25D366', fontWeight: 'bold' }}>Text +90 546 401 47 51</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ padding: '10px', background: '#111', color: '#fff', borderRadius: '8px' }}><MapPin size={24} /></div>
                  <div>
                    <strong>Address:</strong><br />
                    <span>Cerkezkoy Center, Tekirdag, Turkey 59500</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '30px', background: 'linear-gradient(135deg, #111 0%, #222 100%)', color: '#fff', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--taxi-yellow)', marginBottom: '15px' }}>Need Immediate Airport Pickup?</h3>
              <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '25px' }}>
                Send us your flight number and landing time on WhatsApp. Our driver will be waiting at the airport terminal gate with your name sign!
              </p>
              <a href="https://wa.me/905464014751?text=Hello,%20I%20need%20an%20airport%20pickup" className="btn btn--whatsapp btn--lg" style={{ textAlign: 'center' }}>
                💬 Message Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
