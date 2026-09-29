import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PRODUCTS, type Product } from "@/data/products";

export const PRODUCT_SELECT_EVENT = "product-search:select";

const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const firstImage = (product: Product) =>
  Array.isArray(product.image) ? product.image[0] : product.image;

export function ProductSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];
    return PRODUCTS.filter((p) => {
      const haystack = normalize(`${p.name} ${p.brand} ${p.category} ${p.description}`);
      return terms.every((term) => haystack.includes(term));
    });
  }, [query]);

  const select = (product: Product) => {
    setOpen(false);
    setQuery("");
    window.dispatchEvent(new CustomEvent(PRODUCT_SELECT_EVENT, { detail: product.id }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="glass" size="icon" aria-label="Pesquisar produtos">
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="top-[10%] w-[calc(100vw-2rem)] max-w-lg translate-y-0 gap-0 overflow-hidden rounded-xl p-0 sm:rounded-xl">
        <DialogTitle className="sr-only">Pesquisar produtos</DialogTitle>
        <div className="flex items-center gap-2 border-b border-border px-4 py-3 pr-12">
          <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && results[0]) select(results[0]);
            }}
            placeholder="Buscar produto, marca..."
            aria-label="Buscar produto"
            className="w-full bg-transparent py-1 text-base text-navy outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() === "" ? (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">
              Digite o nome, a marca ou o tipo do produto.
            </p>
          ) : results.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">
              Nenhum produto encontrado. Fale com a gente pelo WhatsApp.
            </p>
          ) : (
            <ul>
              {results.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => select(product)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
                  >
                    <img
                      src={firstImage(product)}
                      alt=""
                      loading="lazy"
                      className="size-12 shrink-0 rounded-md bg-secondary object-contain p-1"
                    />
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-widest text-brand-red">
                        {product.brand}
                      </span>
                      <span className="line-clamp-2 text-sm font-semibold leading-snug text-navy">
                        {product.name}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
