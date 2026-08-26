import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { PRODUCTS, CATEGORIES, type Product, type ProductCategory } from "@/data/products";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Filter = "Todos" | ProductCategory;

const FILTERS: Filter[] = ["Todos", ...CATEGORIES];

function Lightbox({
  images,
  index,
  alt,
  onClose,
  onNav,
}: {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onNav: (dir: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy-deep/95 p-0 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar zoom"
        className="absolute right-4 top-4 z-10 rounded-full bg-card/95 p-2.5 text-navy shadow-lift transition-colors hover:bg-brand-red hover:text-brand-red-foreground"
      >
        <X className="size-6" aria-hidden="true" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/95 p-3 text-navy shadow-lift transition-colors hover:bg-brand-red hover:text-brand-red-foreground sm:left-8"
          >
            <ChevronLeft className="size-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/95 p-3 text-navy shadow-lift transition-colors hover:bg-brand-red hover:text-brand-red-foreground sm:right-8"
          >
            <ChevronRight className="size-6" aria-hidden="true" />
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="h-[80vh] w-[80vw] object-contain p-0"
      />
    </div>
  );

  return typeof document !== "undefined" ? createPortal(content, document.body) : null;
}

function ProductCard({ product }: { product: Product }) {
  const images = Array.isArray(product.image) ? product.image : [product.image];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const hasCarousel = images.length > 1;

  const go = (dir: number) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative aspect-4/3 overflow-hidden bg-secondary">
        <img
          src={images[index]}
          alt={`${product.name} — ${product.brand}`}
          loading="lazy"
          decoding="async"
          onClick={() => setZoom(true)}
          className="h-full w-full cursor-zoom-in object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {zoom && (
          <Lightbox
            images={images}
            index={index}
            alt={`${product.name} — ${product.brand}`}
            onClose={() => setZoom(false)}
            onNav={go}
          />
        )}

        <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-widest text-navy-foreground backdrop-blur">
          {product.category}
        </span>

        {hasCarousel && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-navy/85 p-2 text-navy-foreground shadow-lift transition-colors hover:bg-brand-red"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-navy/85 p-2 text-navy-foreground shadow-lift transition-colors hover:bg-brand-red"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((img, i) => (
                <span
                  key={img}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    i === index ? "bg-brand-red" : "bg-navy/30",
                  )}
                />
              ))}
            </div>
          </>
        )}
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
