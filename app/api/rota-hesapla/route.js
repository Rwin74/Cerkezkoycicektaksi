const ROUTE_ENDPOINT = "https://router.project-osrm.org/route/v1/driving";

function validCoordinate(value, min, max) {
  if (value === null || value === "") return false;
  const number = Number(value);
  return Number.isFinite(number) && number >= min && number <= max;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const fromLat = searchParams.get("fromLat");
  const fromLon = searchParams.get("fromLon");
  const toLat = searchParams.get("toLat");
  const toLon = searchParams.get("toLon");

  if (
    !validCoordinate(fromLat, -90, 90) ||
    !validCoordinate(toLat, -90, 90) ||
    !validCoordinate(fromLon, -180, 180) ||
    !validCoordinate(toLon, -180, 180)
  ) {
    return Response.json({ error: "Geçersiz konum bilgisi." }, { status: 400 });
  }

  try {
    const coordinates = `${fromLon},${fromLat};${toLon},${toLat}`;
    const url = `${ROUTE_ENDPOINT}/${coordinates}?overview=false&alternatives=false&steps=false`;
    const response = await fetch(url, {
      headers: { "User-Agent": "CicekTaksiRouteCalculator/1.0" },
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Rota servisi yanıt vermedi.");
    const data = await response.json();
    const route = data.routes?.[0];

    if (!route) {
      return Response.json({ error: "Bu iki konum arasında araç rotası bulunamadı." }, { status: 404 });
    }

    return Response.json({
      distanceKm: Number((route.distance / 1000).toFixed(1)),
      durationMinutes: Math.max(1, Math.round(route.duration / 60)),
    });
  } catch {
    return Response.json(
      { error: "Rota servisine ulaşılamadı. Lütfen biraz sonra tekrar deneyin." },
      { status: 502 },
    );
  }
}
