const SEARCH_ENDPOINT = "https://nominatim.openstreetmap.org/search";
const REVERSE_ENDPOINT = "https://nominatim.openstreetmap.org/reverse";

const headers = {
  "User-Agent": "CicekTaksiRouteCalculator/1.0 (https://www.cerkezkoycicektaksi.com)",
  "Accept-Language": "tr-TR,tr;q=0.9",
};

function normalizePlace(item) {
  return {
    id: String(item.place_id),
    label: item.display_name,
    lat: Number(item.lat),
    lon: Number(item.lon),
  };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();
  const latParam = searchParams.get("lat");
  const lonParam = searchParams.get("lon");
  const lat = Number(latParam);
  const lon = Number(lonParam);

  try {
    if (latParam !== null && lonParam !== null && Number.isFinite(lat) && Number.isFinite(lon)) {
      const url = new URL(REVERSE_ENDPOINT);
      url.searchParams.set("format", "jsonv2");
      url.searchParams.set("lat", String(lat));
      url.searchParams.set("lon", String(lon));
      url.searchParams.set("zoom", "18");

      const response = await fetch(url, { headers, next: { revalidate: 86400 } });
      if (!response.ok) throw new Error("Konum bilgisi alınamadı.");
      const result = await response.json();
      return Response.json({ results: [normalizePlace(result)] });
    }

    if (!query || query.length < 3 || query.length > 160) {
      return Response.json({ results: [] });
    }

    const url = new URL(SEARCH_ENDPOINT);
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("q", `${query}, Türkiye`);
    url.searchParams.set("countrycodes", "tr");
    url.searchParams.set("limit", "5");
    url.searchParams.set("addressdetails", "1");

    const response = await fetch(url, { headers, next: { revalidate: 86400 } });
    if (!response.ok) throw new Error("Adres araması şu anda kullanılamıyor.");
    const results = (await response.json()).map(normalizePlace);

    return Response.json({ results });
  } catch {
    return Response.json(
      { results: [], error: "Konum servisine ulaşılamadı. Lütfen tekrar deneyin." },
      { status: 502 },
    );
  }
}
