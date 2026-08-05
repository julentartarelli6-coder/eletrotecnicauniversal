import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { CATEGORIES, PRODUCTS, type Product } from "@/data/products";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const INITIAL_COUNT = 6;

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
  const [category, setCategory] = useState<string>("Todos");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (category === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)),
    [category],
  );
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const filters = ["Todos", ...CATEGORIES];

  return (
    <section id="produtos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Produtos"
          title="Catálogo digital de ferramentas e equipamentos"
          description="Selecione uma categoria e fale com a gente pelo WhatsApp para consultar disponibilidade e valores."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setShowAll(false);
              }}
              aria-pressed={category === item}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300",
                category === item
                  ? "border-transparent bg-navy text-navy-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:border-brand-red/50 hover:text-navy",
              )}
            >
              {item}
            </button>
          ))}
        </Reveal>

        {visible.length > 0 ? (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product, i) => (
              <Reveal as="li" key={product.id} delay={(i % 3) * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="mt-12">
            <div className="rounded-2xl border border-dashed border-border bg-secondary/50 p-12 text-center">
              <p className="text-base font-semibold text-navy">
                Novos produtos desta categoria em breve.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fale com a gente no WhatsApp e consulte a disponibilidade.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-6">
                <a href={whatsappLink(`Olá! Vocês têm produtos da categoria ${category}?`)}>
                  Consultar no WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        )}

        {!showAll && filtered.length > INITIAL_COUNT ? (
          <div className="mt-12 flex justify-center">
            <Button variant="navy" size="xl" onClick={() => setShowAll(true)}>
              Ver todos os produtos
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
