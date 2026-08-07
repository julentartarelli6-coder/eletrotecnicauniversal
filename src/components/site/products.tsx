import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { PRODUCTS, CATEGORIES, type Product, type ProductCategory } from "@/data/products";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Filter = "Todos" | ProductCategory;

const FILTERS: Filter[] = ["Todos", ...CATEGORIES];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative aspect-4/3 overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={`${product.name} — ${product.brand}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-widest text-navy-foreground backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
          {product.brand}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <p className="mt-4 font-display text-lg font-extrabold text-navy">
          {product.price ?? (
            <span className="text-sm font-semibold text-muted-foreground">Consulte o valor</span>
          )}
        </p>
        <Button asChild variant="whats" size="default" className="mt-4 w-full">
          <a
            href={whatsappLink(
              `Olá! Tenho interesse no produto: ${product.name} (${product.brand}).`,
            )}
          >
            <MessageCircle aria-hidden="true" />
            Solicitar pelo WhatsApp
          </a>
        </Button>
      </div>
    </article>
  );
}

export function Products() {
  const [active, setActive] = useState<Filter>("Todos");
  const filtered =
    active === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="produtos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Produtos"
          title="Catálogo digital de ferramentas e equipamentos"
          description="Fale com a gente pelo WhatsApp para consultar disponibilidade e valores."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === filter
                  ? "bg-navy text-white"
                  : "border border-border bg-card text-muted-foreground hover:text-navy",
              )}
              aria-pressed={active === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <Reveal as="li" key={product.id} delay={(i % 3) * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Nenhum produto nesta categoria no momento. Fale com a gente pelo WhatsApp.
          </p>
        )}
      </div>
    </section>
  );
}
