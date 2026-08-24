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

const TITLE = "Eletrotécnica Universal";
const DESCRIPTION =
  "A melhor assistência técnica e chaveiro em Nova Esperança - PR.";

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
          logo: "https://eletrotecnicauniversal.lovable.app/favicon.png",
          image: "https://eletrotecnicauniversal.lovable.app/favicon.png",
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
  const sections = [
    ["hero", <Hero key="hero" />],
    ["products", <Products key="products" />],
    ["brands", <Brands key="brands" />],
    ["services", <Services key="services" />],
    ["about", <About key="about" />],
    ["differentials", <Differentials key="differentials" />],
    ["reviews", <Reviews key="reviews" />],
    ["faq", <Faq key="faq" />],
    ["contact", <Contact key="contact" />],
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <SectionErrorBoundary fallback={null}>
        <Navbar />
      </SectionErrorBoundary>
      <main>
        {sections.map(([id, node]) => (
          <SectionErrorBoundary key={id}>{node}</SectionErrorBoundary>
        ))}
      </main>
      <SectionErrorBoundary fallback={null}>
        <Footer />
      </SectionErrorBoundary>
      <SectionErrorBoundary fallback={null}>
        <FloatingActions />
      </SectionErrorBoundary>
    </div>
  );
}
