const SEARCH_TITLE_BASE_LIMIT = 35;

export function searchTitleBase(value) {
  const title = String(value ?? "")
    .replace(/\s*\|\s*(?:Çiçek Taksi(?: Çerkezköy)?|Cicek Taxi|Yolculuk Bilgisi|Güncel Taksi Ücretleri 2026).*$/i, "")
    .replace(/\b(Taksi)(?:\s+\1)+\b/gi, "$1")
    .replace(/\s+/g, " ")
    .trim();

  if (title.length <= SEARCH_TITLE_BASE_LIMIT) return title;

  const shortened = title.slice(0, SEARCH_TITLE_BASE_LIMIT);
  const wordBoundary = shortened.lastIndexOf(" ");
  return (wordBoundary > 20 ? shortened.slice(0, wordBoundary) : shortened).trim();
}
