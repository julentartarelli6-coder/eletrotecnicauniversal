import p1 from "@/assets/p1.jpg.asset.json";
import p2 from "@/assets/p2.jpg.asset.json";
import p3 from "@/assets/p3.jpg.asset.json";
import p4 from "@/assets/p4.jpg.asset.json";
import p5 from "@/assets/p5.jpg.asset.json";
import p6 from "@/assets/p6.jpg.asset.json";
import p7 from "@/assets/p7.jpg.asset.json";
import p8 from "@/assets/p8.jpg.asset.json";
import boschGo from "@/assets/bosch-go.webp.asset.json";
import dewaltEsmerilhadeira from "@/assets/dewalt-esmerilhadeira.webp.asset.json";
import dewaltSoprador from "@/assets/dewalt-soprador.webp.asset.json";
import jactoJ7000 from "@/assets/jacto-j7000.webp.asset.json";
import jactoJ6800 from "@/assets/jacto-j6800.webp.asset.json";
import lorenzettiDuoShower from "@/assets/lorenzetti-duo-shower.webp.asset.json";
import lorenzettiAcquaDuo from "@/assets/lorenzetti-acqua-duo.webp.asset.json";
import makitaSoprador from "@/assets/makita-soprador.webp.asset.json";
import nigroPanela from "@/assets/nigro-panela.png.asset.json";
import zagonelTorneira from "@/assets/zagonel-torneira.jpg.asset.json";

export type ProductCategory = "Ferramentas" | "Eletrodomésticos" | "Outros";

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
 * Catálogo de produtos, organizado por marca.
 * Para adicionar um novo produto basta incluir um objeto nesta lista —
 * o layout do site se adapta automaticamente.
 */
export const PRODUCTS: Product[] = [
  // Bosch
  {
    id: "bosch-go",
    name: "Parafusadeira Bosch GO 3,6V com Maleta",
    brand: "Bosch",
    category: "Ferramentas",
    description:
      "Parafusadeira a bateria compacta com 2 pontas, cabo USB e maleta. Ideal para montagens e reparos rápidos.",
    image: boschGo.url,
  },

  // DeWalt
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
    id: "dewalt-esmerilhadeira-7",
    name: "Esmerilhadeira Angular 7\" 2.200W",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Potência de 2.200W para corte e desbaste pesado em metal e alvenaria, com punho lateral e proteção de disco.",
    image: dewaltEsmerilhadeira.url,
  },
  {
    id: "dewalt-soprador",
    name: "Soprador de Ar Profissional",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Soprador com fio para limpeza de oficinas, bancadas e máquinas. Vazão de ar regulável.",
    image: dewaltSoprador.url,
  },

  // Elgin
  {
    id: "elgin-split",
    name: "Ar-condicionado Split Inverter R32",
    brand: "Elgin",
    category: "Eletrodomésticos",
    description:
      "Economia de energia com tecnologia inverter, controle remoto e gás ecológico R32.",
    image: p8.url,
  },

  // Jacto
  {
    id: "jacto-j7000",
    name: "Lavadora de Alta Pressão J7000",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Lavadora com carrinho, mangueira longa e alta pressão para limpeza de veículos, calçadas e fachadas.",
    image: jactoJ7000.url,
  },
  {
    id: "jacto-j6800",
    name: "Lavadora de Alta Pressão J6800",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Compacta e resistente, com enrolador de mangueira e ótimo desempenho para uso doméstico e profissional.",
    image: jactoJ6800.url,
  },

  // Lorenzetti
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
    id: "lorenzetti-duo-shower",
    name: "Duo Shower Multitemperaturas",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro e ducha em um só produto, com espalhador amplo e seleção de temperatura.",
    image: lorenzettiDuoShower.url,
  },
  {
    id: "lorenzetti-acqua-duo",
    name: "Acqua Duo Ultra Chuveiro e Ducha",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Design cromado com chuveiro e ducha independentes, acionamento eletrônico e alta vazão.",
    image: lorenzettiAcquaDuo.url,
  },

  // Makita
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
    id: "makita-soprador-dub186",
    name: "Soprador de Folhas a Bateria 18V DUB186",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Kit com bateria 3.0Ah e carregador. Leve, silencioso e ideal para limpeza de pátios e oficinas.",
    image: makitaSoprador.url,
  },

  // Nigro
  {
    id: "nigro-panela-pressao",
    name: "Panela de Pressão Expressa 4,5L",
    brand: "Nigro",
    category: "Outros",
    description:
      "Panela de pressão em alumínio polido com 4,5 litros, cabo ergonômico e sistema de segurança.",
    image: nigroPanela.url,
  },

  // Zagonel
  {
    id: "zagonel-torneira",
    name: "Torneira Elétrica iPrima Touch",
    brand: "Zagonel",
    category: "Eletrodomésticos",
    description:
      "Torneira eletrônica com acionamento touch, bica giratória e instalação em bancada ou parede.",
    image: zagonelTorneira.url,
  },
];

export const CATEGORIES: ProductCategory[] = [
  "Ferramentas",
  "Eletrodomésticos",
  "Outros",
];
