import { Camera, Hammer, Store, Truck, Users, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";

/**
 * Galeria em masonry.
 * Para publicar fotos reais, basta preencher `image` (URL do asset) em cada item —
 * o card troca automaticamente do estado ilustrativo para a foto.
 */
interface GalleryItem {
  title: string;
  caption: string;
  icon: typeof Store;
  span: string;
  image?: string;
}

const ITEMS: GalleryItem[] = [
  { title: "Nossa loja", caption: "Rua Pres. Castelo Branco, 184", icon: Store, span: "sm:row-span-2" },
  { title: "Oficina", caption: "Bancada técnica equipada", icon: Wrench, span: "" },
  { title: "Serviços realizados", caption: "Antes e depois dos reparos", icon: Hammer, span: "" },
  { title: "Ferramentas", caption: "Marcas profissionais", icon: Camera, span: "sm:row-span-2" },
  { title: "Equipe", caption: "Técnicos especializados", icon: Users, span: "" },
  { title: "Equipamentos", caption: "Instrumentos de precisão", icon: Truck, span: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="Um pouco do nosso dia a dia"
          description="Loja, oficina, equipe e serviços realizados — espaço preparado para receber novas fotos."
        />

        <ul className="mt-14 grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 3) * 90}
              className={`${item.span} h-full`}
            >
              <figure className="group relative h-full overflow-hidden rounded-2xl border border-border surface-navy shadow-soft">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="grid h-full place-items-center">
                    <item.icon
                      className="size-14 text-navy-foreground/25 transition-transform duration-500 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,var(--navy-deep),transparent_65%)] opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-extrabold text-navy-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 translate-y-1 text-sm text-navy-foreground/70 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
