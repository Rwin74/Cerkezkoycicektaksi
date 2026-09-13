export const TAXI_OPENING_FARE = 185;
export const TAXI_INCLUDED_KM = 1;
export const TAXI_PER_KM = 46;

export function calculateTaxiFare(distanceKm) {
  const distance = Number(distanceKm);

  if (!Number.isFinite(distance) || distance < 0) {
    throw new TypeError("Mesafe sıfır veya daha büyük bir sayı olmalıdır.");
  }

  const chargedDistance = Math.max(0, distance - TAXI_INCLUDED_KM);
  return Math.round(TAXI_OPENING_FARE + chargedDistance * TAXI_PER_KM);
}

