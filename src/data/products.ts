import p1 from "@/assets/p1.jpg.asset.json";
import p2 from "@/assets/p2.jpg.asset.json";
import p3 from "@/assets/p3.jpg.asset.json";
import p4 from "@/assets/p4.jpg.asset.json";
import p5 from "@/assets/p5.jpg.asset.json";
import p6 from "@/assets/p6.jpg.asset.json";
import p7 from "@/assets/p7.jpg.asset.json";
import p8 from "@/assets/p8.jpg.asset.json";

export type ProductCategory = "Ferramentas" | "Eletrodomésticos" | "Peças" | "Acessórios";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  description: string;
  /** Opcional: deixe vazio para exibir "Consulte o valor" */
  price?: string;
  image: string;
}

/**
 * Catálogo de produtos.
 * Para adicionar um novo produto basta incluir um objeto nesta lista —
 * o layout do site se adapta automaticamente.
 */
export const PRODUCTS: Product[] = [
  {
    id: "dewalt-chave-impacto",
    name: "Chave de Impacto 20V XR Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Alto torque para montagens e manutenção pesada. Acompanha bateria de lítio 20V e motor sem escovas.",
    image: p1.url,
  },
  {
    id: "dewalt-dcd796",
    name: "Parafusadeira / Furadeira de Impacto DCD796",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Mandril 1/2\", duas velocidades e motor brushless. Ideal para uso profissional diário.",
    image: p2.url,
  },
  {
    id: "dewalt-dcd1007",
    name: "Furadeira de Impacto DCD1007 3 Velocidades",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Linha XR com 3 velocidades, 2.250 BPM e bateria 20V MAX de alta durabilidade.",
    image: p3.url,
  },
  {
    id: "makita-esmerilhadeira",
    name: "Esmerilhadeira Angular 7\"",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Potência para corte e desbaste em metal e alvenaria, com empunhadura lateral e proteção de disco.",
    image: p4.url,
  },
  {
    id: "makita-furadeira",
    name: "Furadeira de Impacto com Fio 1/2\"",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Mandril de coroa, punho auxiliar e reversão. Robusta para obra e marcenaria.",
    image: p5.url,
  },
  {
    id: "makita-serra-marmore",
    name: "Serra Mármore 110mm 1200W",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Corte preciso em porcelanato, mármore e granito. Disco diamantado incluso, 220V.",
    image: p6.url,
  },
  {
    id: "lorenzetti-chuveiro",
    name: "Loren Shower Eletrônica",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro eletrônico com grande espalhador, temperatura ajustável e ducha manual.",
    image: p7.url,
  },
  {
    id: "elgin-split",
    name: "Ar-condicionado Split Inverter R32",
    brand: "Elgin",
    category: "Eletrodomésticos",
    description:
      "Economia de energia com tecnologia inverter, controle remoto e gás ecológico R32.",
    image: p8.url,
  },
];

export const CATEGORIES: ProductCategory[] = [
  "Ferramentas",
  "Eletrodomésticos",
  "Peças",
  "Acessórios",
];
