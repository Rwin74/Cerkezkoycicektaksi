"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, LocateFixed, MapPin, Navigation, Route, Search } from "lucide-react";
import { calculateTaxiFare } from "@/lib/taxiFare";

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

export default function FareCalculator({ compact = false }) {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromPlace, setFromPlace] = useState(null);
  const [toPlace, setToPlace] = useState(null);
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [locating, setLocating] = useState(false);

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

      const params = new URLSearchParams({
        fromLat: String(origin.lat),
        fromLon: String(origin.lon),
        toLat: String(destination.lat),
        toLon: String(destination.lon),
      });
      const response = await fetch(`/api/rota-hesapla?${params}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Rota hesaplanamadı.");

      setResult({
        ...data,
        fare: calculateTaxiFare(data.distanceKm),
      });
    } catch (error) {
      setStatus(error.message || "Hesaplama sırasında bir sorun oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`fare-calculator ${compact ? "fare-calculator--compact" : ""}`} aria-labelledby={compact ? "home-fare-title" : "fare-title"}>
      <div className="container">
        <div className="fare-calculator__shell">
          <div className="fare-calculator__intro">
            <span className="fare-calculator__eyebrow"><Calculator size={17} /> Ücretsiz hesapla</span>
            <h2 id={compact ? "home-fare-title" : "fare-title"}>
              Çerkezköy <em>taksi ücreti</em> ne kadar?
            </h2>
            <p>Başlangıç ve varış noktanızı seçin; yol mesafesine göre tahmini tutarı hemen görün.</p>
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
              onChange={(value) => { setToText(value); setToPlace(null); setResult(null); }}
              onSelect={selectTo}
            />
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
