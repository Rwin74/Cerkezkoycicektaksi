import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Shield, Clock, CreditCard, Plane, MapPin, CheckCircle, Car, Star } from 'lucide-react';

export const metadata = {
  title: "Cerkezkoy Taxi & Airport VIP Transfer Service | Cicek Taxi",
  description: "24/7 Premium taxi service in Cerkezkoy, Kapakli, OSB & Airport transfers (IST & SAW). Fast arrival, fixed rates, English speaking drivers & credit card accepted.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    title: "Cerkezkoy Taxi & Airport VIP Transfer Service | Cicek Taxi",
    description: "24/7 Premium taxi service in Cerkezkoy, Kapakli, OSB & Airport transfers (IST & SAW). Fast arrival, fixed rates, English speaking drivers & credit card accepted.",
    url: "https://www.cerkezkoycicektaksi.com/en",
    locale: "en_US",
    type: "website",
  }
};

export default function EnglishHome() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": "https://www.cerkezkoycicektaksi.com/en",
        "name": "Cicek Taxi Cerkezkoy",
        "inLanguage": "en-US"
      },
      {
        "@type": "TaxiService",
        "name": "Cicek Taxi Cerkezkoy",
        "telephone": "+905464014751",
        "areaServed": ["Cerkezkoy", "Kapakli", "Velikoy", "Kizilpinar", "Cerkezkoy OSB", "Istanbul Airport (IST)", "Sabiha Gokcen (SAW)"]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* English Hero */}
      <header className="home-hero">
        <div className="home-hero__bg"></div>
        <div className="container home-hero__inner">
          <div className="home-hero__content">
            <div className="home-hero__badge">
              <span className="home-hero__badge-dot"></span>24/7 Available & On The Road!
            </div>
            
            <h1 className="home-hero__title">
              Reliable<br/>
              <span>Cerkezkoy Taxi</span><br/>
              & Airport Transfer
            </h1>
            
            <p className="home-hero__desc">
              Don't be late! Experience safe and executive transport in Cerkezkoy & Kapakli. <strong>0% Extra Commission</strong> on all international Credit Card payments. 💳✨
            </p>
            
            <div className="home-hero__actions">
              <a href="tel:+905464014751" className="btn btn--primary btn--lg">📞 +90 546 401 47 51</a>
              <a href="https://wa.me/905464014751?text=Hello,%20I%20need%20a%20taxi" className="btn btn--whatsapp btn--lg">💬 Book on WhatsApp</a>
            </div>
            
            <div className="home-hero__stats">
              <div className="stat-box">
                <span className="stat-num">10,000+</span>
                <span className="stat-label">Happy Passengers</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">24/7</span>
                <span className="stat-label">Non-Stop Service</span>
              </div>
            </div>
          </div>
          
          <div className="home-hero__visual">
            <Image 
              src="/images/cerkezkoy-taksi.png" 
              alt="Cerkezkoy Taxi Service" 
              width={800} 
              height={450} 
              className="home-hero__car-img"
              style={{ width: '100%', height: 'auto', borderRadius: '24px' }}
              priority
            />
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="section" style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <div className="sh sh--center">
            <span className="sh__overtitle">Our Services</span>
            <h2 className="sh__title">Where Are We <em>Heading?</em> 🚕</h2>
          </div>

          <div className="grid grid--3" style={{ gap: '30px', marginTop: '40px' }}>
            <div className="card" style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>✈️</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Airport Transfer (IST & SAW)</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Direct VIP & standard transfers from Istanbul Airport (IST) and Sabiha Gokcen Airport (SAW) with flight delay tracking and meet & greet.
              </p>
              <Link href="/en/istanbul-airport-cerkezkoy-taxi" style={{ color: 'var(--taxi-yellow)', fontWeight: 'bold', marginTop: '15px', display: 'inline-block' }}>
                View Airport Rates →
              </Link>
            </div>

            <div className="card" style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>🏭</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Cerkezkoy OSB Corporate Taxi</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Reliable executive transport for factory visits, engineers, audit delegations and corporate guests in Cerkezkoy Industrial Region.
              </p>
              <a href="tel:+905464014751" style={{ color: 'var(--taxi-yellow)', fontWeight: 'bold', marginTop: '15px', display: 'inline-block' }}>
                Call Corporate Desk →
              </a>
            </div>

            <div className="card" style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #eee' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>🚘</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Intercity Long-Distance Taxi</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Comfortable private long-distance rides from Cerkezkoy to Istanbul, Edirne, Tekirdag center, Bursa and all major cities.
              </p>
              <Link href="/en/rates" style={{ color: 'var(--taxi-yellow)', fontWeight: 'bold', marginTop: '15px', display: 'inline-block' }}>
                Check Intercity Rates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* English FAQ */}
      <section className="section section--gray" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="sh sh--center">
            <span className="sh__overtitle">Customer Support</span>
            <h2 className="sh__title">Frequently Asked <em>Questions</em> ❓</h2>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <details style={{ padding: '15px', background: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}>
              <summary style={{ fontWeight: 'bold' }}>How fast will a taxi arrive after booking?</summary>
              <p style={{ marginTop: '10px', color: '#555' }}>Our nearest taxi is dispatched immediately upon your call or WhatsApp message. Average arrival time within Cerkezkoy is 3 to 5 minutes.</p>
            </details>
            <details style={{ padding: '15px', background: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}>
              <summary style={{ fontWeight: 'bold' }}>Can I pay by international credit card?</summary>
              <p style={{ marginTop: '10px', color: '#555' }}>Yes, all our fleet vehicles carry contactless POS terminals accepting Visa, Mastercard, and AMEX with 0% extra commission.</p>
            </details>
            <details style={{ padding: '15px', background: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}>
              <summary style={{ fontWeight: 'bold' }}>Do drivers speak English?</summary>
              <p style={{ marginTop: '10px', color: '#555' }}>Yes, we assign English-communicating drivers for all airport transfers and international corporate bookings.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--yellow" style={{ textAlign: 'center', padding: '60px 0' }}>
        <div className="container">
          <h2 className="sh__title">Book Your <em>Cerkezkoy Taxi</em> Now 🚕</h2>
          <p style={{ fontSize: '1.2rem', margin: '20px 0 30px' }}>Instant dispatch within 3-5 minutes!</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+905464014751" className="btn btn--dark btn--lg">📞 +90 546 401 47 51</a>
            <a href="https://wa.me/905464014751" className="btn btn--whatsapp btn--lg">💬 Text on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
