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
import makitaRompedor from "@/assets/makita-rompedor.png.asset.json";
import makitaM4000g from "@/assets/makita-m4000g.png.asset.json";
import nigroPanela from "@/assets/nigro-panela.png.asset.json";
import zagonelTorneira from "@/assets/zagonel-torneira.jpg.asset.json";
import dewaltTrena from "@/assets/dewalt-trena.jpg.asset.json";
import dewaltCanivete from "@/assets/dewalt-canivete.jpg.asset.json";
import dewaltDwht66719 from "@/assets/dewalt-dwht66719.png.asset.json";
import dewaltDcf922 from "@/assets/dewalt-dcf922.png.asset.json";
import dewaltSerraCircular from "@/assets/dewalt-serra-circular.png.asset.json";
import dewaltDcb203 from "@/assets/dewalt-dcb203.png.asset.json";
import dewaltDccs623b from "@/assets/dewalt-dccs623b.png.asset.json";
import dewaltLanterna from "@/assets/dewalt-lanterna.png.asset.json";
import dewalt12vMax from "@/assets/dewalt-12v-max.png.asset.json";
import dewaltDcf894 from "@/assets/dewalt-dcf894.png.asset.json";
import dewaltDcd796Xr from "@/assets/dewalt-dcd796-xr.png.asset.json";
import dewaltDch263b from "@/assets/dewalt-dch263b.png.asset.json";
import nigroEterna45 from "@/assets/nigro-eterna-45.png.asset.json";
import nigroEterna60 from "@/assets/nigro-eterna-60.webp.asset.json";
import jactoJ7Pro from "@/assets/jacto-j7-pro.jpg.asset.json";
import jactoJ7000Plus from "@/assets/jacto-j7000-plus.jpg.asset.json";
import zagonelQuadratta from "@/assets/zagonel-quadratta.webp.asset.json";
import zagonelMomentiBlack from "@/assets/zagonel-momenti-black.webp.asset.json";
import zagonelFluir from "@/assets/zagonel-fluir.webp.asset.json";
import lorenzettiLorenEasy from "@/assets/lorenzetti-loren-easy.png.asset.json";
import roaFogaoIndustrial from "@/assets/roa-fogao-industrial.png.asset.json";
import vithoryEspremedor from "@/assets/vithory-espremedor.png.asset.json";
import vithoryLiquidificador from "@/assets/vithory-liquidificador.png.asset.json";
import dewaltDcd1007_5ah from "@/assets/dewalt-dcd1007-5ah.png.asset.json";
import dewaltDcd777 from "@/assets/dewalt-dcd777-2ah.png.asset.json";
import dewaltDcf512b from "@/assets/dewalt-dcf512b.png.asset.json";
import dewaltFuradeiraFio from "@/assets/dewalt-furadeira-fio.png.asset.json";
import dewaltDrywall from "@/assets/dewalt-drywall-xr.png.asset.json";
import lorenzettiAquecedorVersatil from "@/assets/lorenzetti-aquecedor-versatil.png.asset.json";
import lorenzettiDuchaHigienica from "@/assets/lorenzetti-ducha-higienica-3t.png.asset.json";
import lorenzettiAdvancedHaste from "@/assets/lorenzetti-advanced-haste.png.asset.json";
import lorenzettiLorenComfort from "@/assets/lorenzetti-loren-comfort.png.asset.json";
import lorenzettiMaxiBanhoUltra from "@/assets/lorenzetti-maxi-banho-ultra.png.asset.json";
import lorenzettiTradicao from "@/assets/lorenzetti-tradicao.png.asset.json";
import lorenzettiAcquaStorm from "@/assets/lorenzetti-acqua-storm-branco-cromado.png.asset.json";
import lorenzettiDuchaFashion from "@/assets/lorenzetti-ducha-fashion-branco.png.asset.json";
import dewaltDcd1007Powerpack from "@/assets/dewalt-dcd1007-powerpack.png.asset.json";

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
  {
    id: "dewalt-trena-8m",
    name: "Trena DeWalt 8m / 26\"",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Trena de 8 metros com fita resistente, trava firme e corpo emborrachado para uso em obra.",
    image: dewaltTrena.url,
  },
  {
    id: "dewalt-canivete-quickflip",
    name: "Canivete Quick Flip Lâmina Inox",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Canivete dobrável com lâmina em aço inox, abertura rápida com rolamento e cabo em alumínio.",
    image: dewaltCanivete.url,
  },
  {
    id: "dewalt-dwht66719",
    name: "Parafusadeira\u00a0 Manual\u00a0 Tipo\u00a0 Chave de Fenda DWHT66719",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Parafusadeira manual com catraca e cabo emborrachado, ideal para apertos precisos em espaços reduzidos.",
    image: dewaltDwht66719.url,
  },
  {
    id: "dewalt-dcf922",
    name: "Chave de Impacto 1/2\" 20V DCF922 Brushless\u00a0",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Kit com duas baterias 20V 2.0Ah e carregador. Motor brushless compacto com alto torque para montagem e manutenção automotiva.",
    image: dewaltDcf922.url,
  },
  {
    id: "dewalt-serra-circular-20v",
    name: "Serra Circular 20V XR Brushless 7.1/4\" 184mm",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Serra circular a bateria com disco de 184mm e 24 dentes, freio elétrico e base ajustável para cortes em madeira.",
    image: dewaltSerraCircular.url,
  },
  {
    id: "dewalt-dcb203",
    name: "Bateria 20V MAX XR Lítio 2.0Ah DCB203",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Bateria compacta de íon-lítio 20V MAX com indicador de carga, compatível com toda a linha 20V da DeWalt.",
    image: dewaltDcb203.url,
  },
  {
    id: "dewalt-dccs623b",
    name: "Eletroserra de Poda 20V DCCS623B 8\" Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Motosserra de poda a bateria com sabre de 8 polegadas, motor brushless, protetor e chave. Leve e ideal para jardinagem.",
    image: dewaltDccs623b.url,
  },
  {
    id: "dewalt-lanterna-18v",
    name: "Lanterna LED a Bateria 20V XR Power Stack",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Lanterna de trabalho LED com cabeçote giratório e gancho de fixação. Alta luminosidade para oficinas e obras.",
    image: dewaltLanterna.url,
  },
  {
    id: "dewalt-12v-max",
    name: "Parafusadeira / Furadeira 12V MAX com Bateria 1.5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Compacta e leve, com mandril de aperto rápido e embreagem ajustável. Perfeita para montagens e serviços leves.",
    image: dewalt12vMax.url,
  },
  {
    id: "dewalt-dcf894",
    name: "Chave de Impacto 1/2\" 20V | 4 Ah XR DCF894 Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Encaixe quadrado de 1/2\" com anel de retenção, três velocidades e motor brushless de alto torque para uso pesado.",
    image: dewaltDcf894.url,
  },
  {
    id: "dewalt-dcd796-xr-kit",
    name: "Parafusadeira / Furadeira de Impacto 20V | 2 Ah XR com Bateria",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Modelo XR brushless com mandril de 13mm, duas velocidades e função impacto. Acompanha bateria 20V MAX.",
    image: dewaltDcd796Xr.url,
  },
  {
    id: "dewalt-dch263b",
    name: "Martelete Rotativo 3 Funções DCH263B SDS-Plus 20V",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Martelete a bateria com encaixe SDS-Plus e três funções (furar, furar com impacto e romper). Vendido sem bateria e carregador.",
    image: dewaltDch263b.url,
  },
  {
    id: "dewalt-dcd1007-5ah",
    name: "Furadeira / Parafusadeira de Impacto 20V XR 1/2\" com Bateria 5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Modelo XR de alta performance com mandril de 1/2\", punho lateral e três velocidades. Acompanha bateria 20V MAX 5.0Ah e carregador.",
    image: dewaltDcd1007_5ah.url,
  },
  {
    id: "dewalt-dcd777-2ah",
    name: "Parafusadeira / Furadeira 20V MAX Brushless com Bateria 2Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Motor brushless, mandril de aperto rápido de 13mm e embreagem de 15 posições. Leve e equilibrada para o uso diário.",
    image: dewaltDcd777.url,
  },
  {
    id: "dewalt-dcf512b",
    name: "Chave Catraca 1/2\" 20V DCF512B Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Catraca a bateria com encaixe de 1/2\", cabeça compacta para espaços reduzidos e motor brushless. Ideal para mecânica automotiva.",
    image: dewaltDcf512b.url,
  },
  {
    id: "dewalt-furadeira-fio-13mm",
    name: "Furadeira com Fio 1/2\" 13mm com Punho Lateral",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Furadeira elétrica robusta com mandril de coroa 13mm, velocidade variável, reversão e punho auxiliar para maior controle.",
    image: dewaltFuradeiraFio.url,
  },
  {
    id: "dewalt-drywall-xr",
    name: "Parafusadeira Drywall 20V XR com Bateria 5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Parafusadeira para gesso acartonado com bico limitador de profundidade, motor brushless e alta autonomia. Acompanha bateria XR.",
    image: dewaltDrywall.url,
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
    id: "jacto-j6000",
    name: "Lavadora de Alta Pressão J6000",
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
  {
    id: "jacto-j7000-plus",
    name: "Lavadora de Alta Pressão J7000 Plus",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Lavadora com sistema Stop Total, alta pressão e mangueira reforçada para limpeza pesada.",
    image: jactoJ7000Plus.url,
  },
  {
    id: "jacto-j7-pro-s",
    name: "Lavadora de Alta Pressão J7 Pro-S",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Modelo profissional com carrinho de transporte, pistola ergonômica e Stop Total para uso intenso.",
    image: jactoJ7Pro.url,
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
  {
    id: "lorenzetti-loren-easy",
    name: "Torneira Elétrica Loren Easy Parede",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Torneira elétrica branca de parede com bica alta giratória e três temperaturas de aquecimento.",
    image: lorenzettiLorenEasy.url,
  },
  {
    id: "lorenzetti-aquecedor-versatil",
    name: "Aquecedor Versátil Lorenzetti",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Aquecedor de água compacto para torneiras e duchas, com controle de temperatura e instalação versátil em parede.",
    image: lorenzettiAquecedorVersatil.url,
  },
  {
    id: "lorenzetti-ducha-higienica-3t",
    name: "Ducha Higiênica 3T",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Ducha higiênica com aquecimento elétrico de 3 temperaturas, gatilho ergonômico e mangueira flexível cromada.",
    image: lorenzettiDuchaHigienica.url,
  },
  {
    id: "lorenzetti-advanced-eletronica",
    name: "Chuveiro Advanced Eletrônica com Haste",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro eletrônico com haste, espalhador amplo e ajuste contínuo de temperatura para banhos confortáveis.",
    image: lorenzettiAdvancedHaste.url,
  },
  {
    id: "lorenzetti-loren-comfort",
    name: "Chuveiro Loren Comfort Eletrônico",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Modelo eletrônico com haste e espalhador redondo de grande diâmetro, proporcionando jatos suaves e temperatura ajustável.",
    image: lorenzettiLorenComfort.url,
  },
  {
    id: "lorenzetti-maxi-banho-ultra",
    name: "Chuveiro Maxi Banho Ultra 127V 4600W",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro com três posições (Inverno, Desliga e Verão), 4600W e jatos abundantes. Resistência de fácil substituição.",
    image: lorenzettiMaxiBanhoUltra.url,
  },
  {
    id: "lorenzetti-tradicao",
    name: "Chuveiro Tradição 220V 5700W Cromado",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro e ducha com acabamento cromado, três temperaturas (Quente, Morno e Super Quente) e 5700W. Design clássico e resistente.",
    image: lorenzettiTradicao.url,
  },
  {
    id: "lorenzetti-acqua-storm",
    name: "Chuveiro Acqua Storm Ultra Branco/Cromado",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Ducha de teto com espalhador retangular tipo chuva, controle eletrônico de temperatura e acabamento branco com cromado.",
    image: lorenzettiAcquaStorm.url,
  },
  {
    id: "lorenzetti-ducha-fashion",
    name: "Ducha Fashion 220V 7500W Branca",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Ducha com quatro temperaturas, 7500W e espalhador amplo em ABS branco. Resistência de fácil troca.",
    image: lorenzettiDuchaFashion.url,
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
  {
    id: "makita-rompedor-sds-max",
    name: "Rompedor / Martelete Makita com Maleta",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Martelete rompedor elétrico com encaixe SDS, alto impacto para demolição e perfuração em concreto. Acompanha maleta de transporte.",
    image: makitaRompedor.url,
  },
  {
    id: "makita-soprador-m4000g",
    name: "Soprador de Ar M4000G 530W 220V",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Soprador elétrico compacto de 530W, ideal para limpeza de bancadas, máquinas e oficinas. Bico direcionador removível.",
    image: makitaM4000g.url,
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
  {
    id: "nigro-eterna-45",
    name: "Panela de Pressão Eterna 4,5L Vermelha",
    brand: "Nigro",
    category: "Outros",
    description:
      "Panela de pressão Nigro Eterna 4,5L com acabamento colorido, tampa em alumínio e sistema de segurança.",
    image: nigroEterna45.url,
  },
  {
    id: "nigro-eterna-60",
    name: "Panela de Pressão Eterna Polida 6L",
    brand: "Nigro",
    category: "Outros",
    description:
      "Panela de pressão Nigro Eterna 6 litros em alumínio polido, ideal para famílias maiores.",
    image: nigroEterna60.url,
  },

  // Roa
  {
    id: "roa-fogao-industrial-2-bocas",
    name: "Fogão Industrial  2  Bocas ",
    brand: "Roa",
    category: "Eletrodomésticos",
    description:
      "Fogão industrial de 2 bocas em chapa reforçada, com queimadores de alta pressão, bandejas removíveis e cavalete de apoio.",
    image: roaFogaoIndustrial.url,
  },

  // Vithory
  {
    id: "vithory-espremedor-inox",
    name: "Espremedor / Extrator de Sucos Inox Profissional Vithory",
    brand: "Vithory",
    category: "Eletrodomésticos",
    description:
      "Extrator profissional em aço inox para laranja e limão, com alto rendimento e fácil limpeza para uso comercial.",
    image: vithoryEspremedor.url,
  },
  {
    id: "vithory-liquidificador-2l",
    name: "Liquidificador Industrial Inox 2 Litros Vithory",
    brand: "Vithory",
    category: "Eletrodomésticos",
    description:
      "Liquidificador de alta rotação com copo em aço inox de 2 litros, sistema de fácil limpeza e motor reforçado.",
    image: vithoryLiquidificador.url,
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
  {
    id: "zagonel-quadratta",
    name: "Ducha Quadratta Eletrônica 5500W 127V",
    brand: "Zagonel",
    category: "Eletrodomésticos",
    description:
      "Ducha branca de design quadrado com temperatura eletrônica, grande espalhador e alta vazão.",
    image: zagonelQuadratta.url,
  },
  {
    id: "zagonel-momenti-black",
    name: "Ducha Momenti Black Eletrônica",
    brand: "Zagonel",
    category: "Eletrodomésticos",
    description:
      "Acabamento preto brilhante, espalhador redondo amplo e ajuste eletrônico de temperatura.",
    image: zagonelMomentiBlack.url,
  },
  {
    id: "zagonel-fluir",
    name: "Ducha Fluir 4 Temperaturas 6800W 220V",
    brand: "Zagonel",
    category: "Eletrodomésticos",
    description:
      "Chuveiro econômico com 4 temperaturas, jatos intensos e kit com mangueira e desviador.",
    image: zagonelFluir.url,
  },
];

export const CATEGORIES: ProductCategory[] = [
  "Ferramentas",
  "Eletrodomésticos",
  "Outros",
];
