export const SITE = {
  name: "Eletrotécnica Universal",
  city: "Nova Esperança - PR",
  address: "Rua Pres. Castelo Branco, 184 — Nova Esperança - PR",
  phoneLabel: "(44) 99814-7575",
  phoneHref: "tel:+5544998147575",
  whatsappNumber: "5544998147575",
  instagram: "https://www.instagram.com/eletrotecnicauniversal",
  mapsQuery: "Rua Pres. Castelo Branco, 184, Nova Esperança - PR",
  hours: [
    { day: "Segunda a Sexta", time: "08h00 — 18h00" },
    { day: "Sábado", time: "08h00 — 12h00" },
    { day: "Domingo e feriados", time: "Fechado" },
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapsQuery,
)}&output=embed`;

export const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  SITE.mapsQuery,
)}`;

export const REVIEWS_URL = `https://www.google.com/search?q=${encodeURIComponent(
  "Eletrotécnica Universal Nova Esperança PR avaliações",
)}`;
