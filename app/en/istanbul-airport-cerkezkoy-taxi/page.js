import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquare, Clock, Shield, CreditCard, Plane, MapPin, CheckCircle, Car } from 'lucide-react';

export const metadata = {
  title: 'Istanbul Airport to Cerkezkoy Taxi & VIP Transfer | Cicek Taxi 24/7',
  description: 'Book 24/7 reliable taxi & VIP transfer from Istanbul Airport (IST) & Sabiha Gokcen (SAW) to Cerkezkoy Industrial Zone (OSB). Fixed rates, English-speaking drivers, credit card accepted.',
  keywords: ['Istanbul Airport to Cerkezkoy Taxi', 'Cerkezkoy Taxi', 'Istanbul Airport Transfer Cerkezkoy', 'Cerkezkoy OSB Taxi', 'Sabiha Gokcen to Cerkezkoy VIP Transfer'],
  alternates: {
    canonical: '/en/istanbul-airport-cerkezkoy-taxi',
  },
  openGraph: {
    title: 'Istanbul Airport to Cerkezkoy Taxi & VIP Transfer',
    description: 'Fast, comfortable & fixed price airport transfer to Cerkezkoy & Kapakli. Available 24/7.',
    url: 'https://www.cerkezkoycicektaksi.com/en/istanbul-airport-cerkezkoy-taxi',
    locale: 'en_US',
    type: 'website',
  }
};

export default function EnglishTransferPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TaxiService",
        "name": "Cicek Taxi Cerkezkoy Airport Transfer",
        "description": "24/7 Airport taxi & VIP transfer service from Istanbul Airport (IST) and Sabiha Gokcen (SAW) to Cerkezkoy Industrial Region.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Çiçek Taksi Çerkezköy",
          "telephone": "+905464014751"
        },
        "areaServed": ["Cerkezkoy", "Kapakli", "Cerkezkoy OSB", "Istanbul Airport (IST)", "Sabiha Gokcen Airport (SAW)"],
        "priceRange": "$$",
        "termsOfService": "Fixed rate airport transfer with credit card payment options."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take from Istanbul Airport (IST) to Cerkezkoy by taxi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The drive from Istanbul Airport (IST) to Cerkezkoy takes approximately 55 to 65 minutes (approx. 90 km) via the Northern Marmara Highway."
            }
          },
          {
            "@type": "Question",
            "name": "Do drivers speak English?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our dedicated airport transfer drivers communicate in English to assist international visitors and corporate guests smoothly."
            }
          },
          {
            "@type": "Question",
            "name": "Can I pay by international credit card?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our transfer vehicles carry contactless POS terminals accepting Visa, Mastercard, and American Express with 0% extra commission."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer Meet & Greet service at the airport terminal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Our driver will track your flight arrival time and meet you at the arrivals exit gate with a personalized name sign."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* English Header Banner */}
      <div style={{ background: '#111', color: '#fff', padding: '10px 0', borderBottom: '2px solid var(--taxi-yellow)', fontSize: '0.9rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <span>🌐 <strong>International Travelers:</strong> 24/7 Airport Pickups & Corporate Transfers to Cerkezkoy OSB</span>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="tel:+905464014751" style={{ color: 'var(--taxi-yellow)', fontWeight: 'bold' }}>📞 Call Us: +90 546 401 47 51</a>
            <a href="https://wa.me/905464014751" style={{ color: '#25D366', fontWeight: 'bold' }}>💬 WhatsApp Support</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #111111 0%, #222222 100%)', color: '#fff', padding: '80px 0 60px' }}>
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <span style={{ background: 'var(--taxi-yellow)', color: '#111', padding: '4px 12px', borderRadius: '20px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                Official Airport Taxi & VIP Transfer
              </span>
              <h1 style={{ fontSize: '2.8rem', lineHeight: '1.2', margin: '20px 0', fontWeight: '800' }}>
                Istanbul Airport to <span style={{ color: 'var(--taxi-yellow)' }}>Cerkezkoy</span> Taxi Transfer
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '30px' }}>
                Hassle-free, premium airport transfer service between Istanbul Airport (IST), Sabiha Gokcen (SAW), Corlu Airport and Cerkezkoy Industrial Zone (ÇOSB). Fixed rates & 24/7 flight tracking.
              </p>
              
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="tel:+905464014751" className="btn btn--primary btn--lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={20} /> Book Call Now (+90 546 401 47 51)
                </a>
                <a href="https://wa.me/905464014751?text=Hello,%20I%20need%20a%20taxi%20transfer%20from%20Istanbul%20Airport%20to%20Cerkezkoy" className="btn btn--whatsapp btn--lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <MessageSquare size={20} /> WhatsApp Instant Booking
                </a>
              </div>

              <div style={{ display: 'flex', gap: '20px', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '0.95rem', color: '#aaa' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={18} color="#44bd32" /> Fixed Price</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={18} color="#44bd32" /> Flight Tracking</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={18} color="#44bd32" /> Credit Card POS</span>
              </div>
            </div>

            <div>
              <Image 
                src="/images/cerkezkoy-taksi.png" 
                alt="Istanbul Airport to Cerkezkoy Taxi Transfer" 
                width={700} 
                height={420} 
                style={{ borderRadius: '16px', border: '2px solid rgba(255,255,255,0.2)', width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section" style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <div className="sh sh--center">
            <span className="sh__overtitle">Why International Business Travelers Choose Us</span>
            <h2 className="sh__title">Premium Airport Transfer <em>Features</em> 🚗</h2>
          </div>

          <div className="grid grid--3" style={{ gap: '30px', marginTop: '40px' }}>
            <div className="card" style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--taxi-yellow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Plane size={28} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Airport Meet & Greet</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                We monitor your flight in real-time. Even if your flight is delayed, your driver will be waiting at the arrival terminal gate with a name board.
              </p>
            </div>

            <div className="card" style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--taxi-yellow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <CreditCard size={28} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Credit Card & Receipt</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                No need for local currency. Pay safely with Visa, Mastercard, or AMEX via contactless POS. Invoices and official receipts provided for expense reporting.
              </p>
            </div>

            <div className="card" style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--taxi-yellow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Shield size={28} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>VIP Vito & Sedan Fleet</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Choose between standard executive sedans or luxury 7-seater Mercedes Vito VIP vans equipped with leather seats and high-speed Wi-Fi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Routes & Rates Overview */}
      <section className="section section--gray" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="sh sh--center">
            <span className="sh__overtitle">Popular Airport Routes</span>
            <h2 className="sh__title">Transfer Routes to <em>Cerkezkoy & OSB</em> 📍</h2>
          </div>

          <div style={{ overflowX: 'auto', marginTop: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <thead>
                <tr style={{ background: '#111', color: '#fff', textAlign: 'left' }}>
                  <th style={{ padding: '18px 24px' }}>Route / Origin</th>
                  <th style={{ padding: '18px 24px' }}>Destination</th>
                  <th style={{ padding: '18px 24px' }}>Est. Travel Time</th>
                  <th style={{ padding: '18px 24px' }}>Distance</th>
                  <th style={{ padding: '18px 24px' }}>Booking</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '18px 24px', fontWeight: 'bold' }}>✈️ Istanbul Airport (IST)</td>
                  <td style={{ padding: '18px 24px' }}>Cerkezkoy Center / OSB</td>
                  <td style={{ padding: '18px 24px' }}>55 - 65 Mins</td>
                  <td style={{ padding: '18px 24px' }}>~ 90 km</td>
                  <td style={{ padding: '18px 24px' }}><a href="https://wa.me/905464014751" className="btn btn--primary btn--sm">Book Now</a></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '18px 24px', fontWeight: 'bold' }}>✈️ Sabiha Gokcen Airport (SAW)</td>
                  <td style={{ padding: '18px 24px' }}>Cerkezkoy / Kapakli</td>
                  <td style={{ padding: '18px 24px' }}>110 - 130 Mins</td>
                  <td style={{ padding: '18px 24px' }}>~ 145 km</td>
                  <td style={{ padding: '18px 24px' }}><a href="https://wa.me/905464014751" className="btn btn--primary btn--sm">Book Now</a></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '18px 24px', fontWeight: 'bold' }}>✈️ Corlu Airport (TEQ)</td>
                  <td style={{ padding: '18px 24px' }}>Cerkezkoy Industrial Zone</td>
                  <td style={{ padding: '18px 24px' }}>25 - 30 Mins</td>
                  <td style={{ padding: '18px 24px' }}>~ 32 km</td>
                  <td style={{ padding: '18px 24px' }}><a href="https://wa.me/905464014751" className="btn btn--primary btn--sm">Book Now</a></td>
                </tr>
                <tr>
                  <td style={{ padding: '18px 24px', fontWeight: 'bold' }}>🏙️ Istanbul City Center (Taksim/Levent)</td>
                  <td style={{ padding: '18px 24px' }}>Cerkezkoy Corporate Hotels</td>
                  <td style={{ padding: '18px 24px' }}>75 - 90 Mins</td>
                  <td style={{ padding: '18px 24px' }}>~ 110 km</td>
                  <td style={{ padding: '18px 24px' }}><a href="https://wa.me/905464014751" className="btn btn--primary btn--sm">Book Now</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* English FAQ Section */}
      <section className="section" style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="sh sh--center">
            <span className="sh__overtitle">Frequently Asked Questions</span>
            <h2 className="sh__title">Everything You Need to <em>Know</em> ❓</h2>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              { q: "How do I meet my driver at Istanbul Airport (IST)?", a: "Upon landing, turn on your mobile phone or connect to free airport Wi-Fi. Our driver will send you a WhatsApp text with the exact meeting column number at the arrival exit." },
              { q: "What happens if my flight is delayed?", a: "We monitor all incoming flights via live radar systems. Your pickup time will automatically adjust according to your actual flight arrival time at no additional charge." },
              { q: "Can I get an official invoice for company expense reports?", a: "Yes! We issue electronic tax invoices and payment receipts suitable for international corporate expense filing." },
              { q: "Is pre-booking required?", a: "We strongly recommend booking at least 2 to 4 hours in advance for airport pickups to ensure immediate departure upon your exit." }
            ].map((faq, index) => (
              <details key={index} style={{ padding: '18px', background: '#f9f9f9', borderRadius: '10px', border: '1px solid #eaeaea', cursor: 'pointer' }}>
                <summary style={{ fontWeight: '700', fontSize: '1.1rem', color: '#222' }}>{faq.q}</summary>
                <p style={{ marginTop: '12px', color: '#555', lineHeight: '1.6' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* English Call to Action */}
      <section className="section section--yellow" style={{ textAlign: 'center', padding: '70px 0' }}>
        <div className="container">
          <h2 className="sh__title" style={{ marginBottom: '20px' }}>Need a Taxi Transfer to <em>Cerkezkoy Right Now?</em> 🧳</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '30px' }}>Our English-speaking operators are available 24/7 to assist you!</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 Call +90 546 401 47 51</a>
            <a href="https://wa.me/905464014751?text=Hello,%20I%20would%20like%20to%20book%20an%20airport%20transfer" className="btn btn--whatsapp btn--lg">💬 Text on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
