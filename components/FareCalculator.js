"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, CalendarClock, ChevronDown, LocateFixed, MapPin, Navigation, Route, Search, Send, Star } from "lucide-react";
import { calculateTaxiFare } from "@/lib/taxiFare";
import { favoritePlaces } from "@/data/favoritePlaces";

function LocationField({ id, label, placeholder, value, onChange, onSelect, icon: Icon }) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const requestId = useRef(0);

  useEffect(() => {
    if (!open || value.trim().length < 3) {
      requestId.current += 1;
      return;
    }

    const currentRequest = ++requestId.current;
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/konum-ara?q=${encodeURIComponent(value.trim())}`);
        const data = await response.json();
        if (currentRequest === requestId.current) setSuggestions(data.results || []);
      } catch {
        if (currentRequest === requestId.current) setSuggestions([]);
      } finally {
        if (currentRequest === requestId.current) setLoading(false);
      }
    }, 550);

    return () => clearTimeout(timer);
  }, [open, value]);

  return (
    <div className="fare-field">
      <label htmlFor={id}>{label}</label>
      <div className="fare-field__control">
        <Icon size={20} aria-hidden="true" />
        <input
          id={id}
          type="search"
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          onFocus={() => setOpen(true)}
          onChange={(event) => {
            onChange(event.target.value);
            setSuggestions([]);
            setOpen(true);
          }}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
        />
        {loading && <span className="fare-field__spinner" aria-label="Adres aranıyor" />}
      </div>
      {open && value.trim().length >= 3 && suggestions.length > 0 && (
        <ul className="fare-field__suggestions" aria-label={`${label} önerileri`}>
          {suggestions.map((place) => (
            <li key={place.id}>
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  onSelect(place);
                  setOpen(false);
                  setSuggestions([]);
                }}
              >
                <MapPin size={16} aria-hidden="true" />
                <span>{place.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

async function findFirstPlace(query) {
  const response = await fetch(`/api/konum-ara?q=${encodeURIComponent(query.trim())}`);
  const data = await response.json();
  if (!response.ok || !data.results?.[0]) throw new Error("Yazdığınız adres bulunamadı. Listeden bir adres seçin.");
  return data.results[0];
}

export default function FareCalculator({ compact = false, bookingPage = false }) {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromPlace, setFromPlace] = useState(null);
  const [toPlace, setToPlace] = useState(null);
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [locating, setLocating] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState(null);
  const [bookingError, setBookingError] = useState("");

  const selectFrom = (place) => {
    setFromPlace(place);
    setFromText(place.label);
    setResult(null);
  };

  const selectTo = (place) => {
    setToPlace(place);
    setToText(place.label);
    setResult(null);
  };

  const chooseFavorite = async (favorite) => {
    setStatus("");
    setResult(null);
    setSelectedFavorite(favorite.name);
    setToText(favorite.name);
    setToPlace(null);
    setLoading(true);
    try {
      const destination = { id: `favorite-${favorite.name}`, label: `${favorite.name} (${favorite.area})`, lat: favorite.lat, lon: favorite.lon };
      selectTo(destination);
      setFavoritesOpen(false);
      const origin = fromPlace || (fromText.trim().length >= 3 ? await findFirstPlace(fromText) : null);
      if (!origin) {
        setStatus("Favori varış noktası seçildi. Ücreti görmek için başlangıç konumunuzu seçin veya mevcut konumunuzu kullanın.");
        return;
      }
      if (!fromPlace) selectFrom(origin);
      await calculateRoute(origin, destination);
    } catch (error) {
      setStatus(error.message || "Favori konum bulunamadı. Varış adresini elle seçebilirsiniz.");
    } finally {
      setLoading(false);
    }
  };

  const useCurrentLocation = () => {
    setStatus("");
    if (!navigator.geolocation) {
      setStatus("Tarayıcınız konum özelliğini desteklemiyor. Adresinizi yazarak devam edin.");
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const response = await fetch(`/api/konum-ara?lat=${coords.latitude}&lon=${coords.longitude}`);
          const data = await response.json();
          if (!response.ok || !data.results?.[0]) throw new Error();
          selectFrom(data.results[0]);
        } catch {
          selectFrom({
            id: "current-location",
            label: "Mevcut konumum",
            lat: coords.latitude,
            lon: coords.longitude,
          });
        } finally {
          setLocating(false);
        }
      },
      () => {
        setStatus("Konum izni alınamadı. Başlangıç adresinizi yazarak devam edebilirsiniz.");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  };

  const calculateRoute = async (origin, destination) => {
    const params = new URLSearchParams({
      fromLat: String(origin.lat), fromLon: String(origin.lon),
      toLat: String(destination.lat), toLon: String(destination.lon),
    });
    const response = await fetch(`/api/rota-hesapla?${params}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Rota hesaplanamadı.");
    setResult({ ...data, fare: calculateTaxiFare(data.distanceKm) });
  };

  const calculate = async (event) => {
    event.preventDefault();
    setStatus("");
    setResult(null);

    if (fromText.trim().length < 3 || toText.trim().length < 3) {
      setStatus("Başlangıç ve varış adreslerini girin.");
      return;
    }

    setLoading(true);
    try {
      const origin = fromPlace || (await findFirstPlace(fromText));
      const destination = toPlace || (await findFirstPlace(toText));
      if (!fromPlace) selectFrom(origin);
      if (!toPlace) selectTo(destination);

      await calculateRoute(origin, destination);
    } catch (error) {
      setStatus(error.message || "Hesaplama sırasında bir sorun oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  const sendAppointmentRequest = (event) => {
    event.preventDefault();
    setBookingError("");
    const form = new FormData(event.currentTarget);
    const dateValue = String(form.get("appointmentDate") || "");
    const passengerPhone = String(form.get("passengerPhone") || "").trim();
    if (!dateValue || new Date(dateValue) <= new Date()) {
      setBookingError("Lütfen ileri bir tarih ve saat seçin.");
      return;
    }

    const date = new Date(dateValue);
    const mapsLink = fromPlace?.lat && fromPlace?.lon
      ? `https://maps.google.com/?q=${fromPlace.lat},${fromPlace.lon}`
      : "";
    const message = [
      "Merhaba, Çiçek Taksi sitesinden planlı yolculuk talebi oluşturmak istiyorum.",
      `Alınış: ${fromText.trim()}`,
      mapsLink ? `Konum haritası: ${mapsLink}` : "",
      `Varış: ${toText.trim()}`,
      `Tarih ve saat: ${date.toLocaleString("tr-TR", { dateStyle: "long", timeStyle: "short" })}`,
      `Telefon: ${passengerPhone}`,
      `Tahmini ücret: ${result.fare.toLocaleString("tr-TR")} TL (${result.distanceKm.toLocaleString("tr-TR")} km) — kesin tutar durak tarafından teyit edilir.`,
      String(form.get("appointmentNote") || "").trim() ? `Not: ${String(form.get("appointmentNote")).trim()}` : "",
      "Araç uygunluğu ve rezervasyon teyidi rica ederim.",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/905464014751?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`fare-calculator ${compact ? "fare-calculator--compact" : ""}`} aria-labelledby={compact ? "home-fare-title" : "fare-title"}>
      <div className="container">
        <div className="fare-calculator__shell">
          <div className="fare-calculator__intro">
            <span className="fare-calculator__eyebrow">{bookingPage ? <CalendarClock size={17} /> : <Calculator size={17} />} {bookingPage ? "Yolculuğunu planla" : "Ücretsiz hesapla"}</span>
            <h2 id={compact ? "home-fare-title" : "fare-title"}>
              {bookingPage ? <>Çerkezköy <em>taksi randevusu</em> oluştur</> : <>Çerkezköy <em>taksi ücreti</em> ne kadar?</>}
            </h2>
            <p>{bookingPage ? "Alınış ve varış yerini seçin, tahmini ücreti görün ve istediğiniz tarih için yolculuk talebini WhatsApp'tan durağa iletin." : "Başlangıç ve varış noktanızı seçin; yol mesafesine göre tahmini tutarı hemen görün."}</p>
            {compact && (
              <Link href="/taksi-ucreti-hesaplama" className="fare-calculator__detail-link">
                Detaylı hesaplama sayfası <ArrowRight size={17} />
              </Link>
            )}
          </div>

          <form className="fare-calculator__form" onSubmit={calculate}>
            <LocationField
              id={compact ? "home-from" : "page-from"}
              label="Nereden?"
              placeholder="Mahalle, sokak veya konum yazın"
              value={fromText}
              icon={Navigation}
              onChange={(value) => { setFromText(value); setFromPlace(null); setResult(null); }}
              onSelect={selectFrom}
            />
            <button type="button" className="fare-calculator__locate" onClick={useCurrentLocation} disabled={locating}>
              <LocateFixed size={17} /> {locating ? "Konum alınıyor…" : "Mevcut konumumu kullan"}
            </button>
            <LocationField
              id={compact ? "home-to" : "page-to"}
              label="Nereye?"
              placeholder="Gitmek istediğiniz yeri yazın"
              value={toText}
              icon={MapPin}
              onChange={(value) => { setToText(value); setToPlace(null); setSelectedFavorite(null); setResult(null); }}
              onSelect={selectTo}
            />
            <div className="fare-favorites">
              <button type="button" className="fare-favorites__toggle" aria-expanded={favoritesOpen} aria-controls={compact ? "home-favorites" : "page-favorites"} onClick={() => setFavoritesOpen(!favoritesOpen)}>
                <span><Star size={18} fill="currentColor" /> Favori yerler <small>Hızlı varış seçimi</small></span>
                <ChevronDown size={19} className={favoritesOpen ? "fare-favorites__chevron fare-favorites__chevron--open" : "fare-favorites__chevron"} />
              </button>
              {favoritesOpen && <div id={compact ? "home-favorites" : "page-favorites"} className="fare-favorites__panel">
                <p>Gitmek istediğiniz yeri seçin. Şehir ve ilçe seçenekleri merkez noktasına hesaplanır; farklı bir adres için yukarıya adres yazın.</p>
                <div className="fare-favorites__grid">
                  {favoritePlaces.map((favorite) => <button key={favorite.name} type="button" className={`fare-favorites__place ${selectedFavorite === favorite.name ? "fare-favorites__place--selected" : ""}`} onClick={() => chooseFavorite(favorite)} disabled={loading}>
                    <MapPin size={16} aria-hidden="true" /><span><strong>{favorite.name}</strong><small>{favorite.area}</small></span>
                  </button>)}
                </div>
              </div>}
            </div>
            <button type="submit" className="btn btn--primary fare-calculator__submit" disabled={loading}>
              {loading ? <span className="fare-field__spinner fare-field__spinner--dark" /> : <Search size={19} />}
              {loading ? "Rota hesaplanıyor…" : "Yol ücretini hesapla"}
            </button>

            {status && <p className="fare-calculator__message" role="alert">{status}</p>}

            {result && (
              <div className="fare-result" aria-live="polite">
                <div className="fare-result__top">
                  <span>Tahmini yol ücreti</span>
                  <strong>{result.fare.toLocaleString("tr-TR")} TL</strong>
                </div>
                <div className="fare-result__meta">
                  <span><Route size={18} /> {result.distanceKm.toLocaleString("tr-TR")} km</span>
                  <span>Yaklaşık {result.durationMinutes} dk</span>
                </div>
                <p>Seçtiğiniz araç rotasının tahmini mesafesine göre hesaplandı.</p>
                <details className="fare-booking">
                  <summary><CalendarClock size={19} /> Bu yolculuk için önceden taksi planla</summary>
                  <div className="fare-booking__body">
                    <p className="fare-booking__intro">Alınış ve varış bilgileri hesaplamadan aktarılır. Zamanı, telefonunuzu ve varsa özel notunuzu ekleyin.</p>
                    <form onSubmit={sendAppointmentRequest}>
                      <label className="fare-booking__field">Yolculuk tarihi ve saati
                      <input type="datetime-local" name="appointmentDate" required />
                      </label>
                      <label className="fare-booking__field">Size ulaşabileceğimiz telefon
                        <input type="tel" name="passengerPhone" autoComplete="tel" placeholder="05xx xxx xx xx" minLength={10} maxLength={20} required />
                      </label>
                      <label className="fare-booking__field">Not <span>(isteğe bağlı)</span>
                        <textarea name="appointmentNote" rows={3} maxLength={300} placeholder="Vardiya çıkışı, yolcu/bagaj bilgisi veya buluşma tarifi" />
                      </label>
                      {bookingError && <p className="fare-calculator__message" role="alert">{bookingError}</p>}
                      <button type="submit" className="btn btn--whatsapp fare-booking__send"><Send size={17} /> WhatsApp&apos;ta durağa gönder</button>
                    </form>
                    <p className="fare-booking__disclaimer">WhatsApp açıldığında mesajı kontrol edip kendiniz gönderirsiniz. Bu bir yolculuk talebidir; araç uygunluğu ve randevu, durak WhatsApp üzerinden onaylayınca kesinleşir. Ücret tahminidir.</p>
                  </div>
                </details>
                <a href="tel:+905464014751" className="btn btn--dark">📞 Taksi çağır: 0546 401 47 51</a>
              </div>
            )}

            <p className="fare-calculator__note">
              Tahmini tutardır; trafik, bekleme, güzergâh değişikliği ve güncel tarife gerçek ücreti etkileyebilir. Adres verileri © OpenStreetMap katkıcıları.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
