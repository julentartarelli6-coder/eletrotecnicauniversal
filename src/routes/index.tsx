import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Products } from "@/components/site/products";
import { Brands } from "@/components/site/brands";
import { Differentials } from "@/components/site/differentials";
import { Reviews } from "@/components/site/reviews";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

const TITLE = "Eletrotécnica Universal | Assistência Técnica em Nova Esperança-PR";
const DESCRIPTION =
  "Assistência técnica especializada em eletrodomésticos e ferramentas elétricas em Nova Esperança - PR. Conserto com garantia, orçamento sem compromisso e atendimento rápido.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Eletrotécnica Universal",
          description: DESCRIPTION,
          telephone: "+55 44 99814-7575",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Pres. Castelo Branco, 184",
            addressLocality: "Nova Esperança",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "30",
          },
          openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Brands />
        <Differentials />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
