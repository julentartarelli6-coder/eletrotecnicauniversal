import { MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { PRODUCTS, type Product } from "@/data/products";
import { whatsappLink } from "@/lib/site";


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
  return (
    <section id="produtos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Produtos"
          title="Catálogo digital de ferramentas e equipamentos"
          description="Fale com a gente pelo WhatsApp para consultar disponibilidade e valores."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal as="li" key={product.id} delay={(i % 3) * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
