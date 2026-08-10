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
      "Tensão : 3,6V | Torque max : 4,5 Nm | Rotação : 360 rpm | Mandril : 1/4\" hexagonal | Peso : 0,3 Kg | Acessórios : 2 pontas, cabo USB e maleta",
    image: boschGo.url,
  },

  // DeWalt
  {
    id: "dewalt-chave-impacto",
    name: "Chave de Impacto 20V XR Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V XR | Torque max : 205 Nm | Encaixe : 1/2\" | Motor : Brushless | Vel. : 3 | Bateria : Íon-lítio inclusa",
    image: p1.url,
  },
  {
    id: "dewalt-dcd796",
    name: "Parafusadeira / Furadeira de Impacto DCD796",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 18V/20V XR | Torque max : 70 Nm | Mandril : 13 mm | Motor : Brushless | Vel. : 2 | Impactos : 34.000 ipm",
    image: p2.url,
  },
  {
    id: "dewalt-dcd1007",
    name: "Furadeira de Impacto DCD1007 3 Velocidades",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Vel. : 3 | Impactos : 2.250 BPM | Mandril : 13 mm | Motor : Brushless | Luz de Led : Sim",
    image: p3.url,
  },
  {
    id: "dewalt-esmerilhadeira-7",
    name: "Esmerilhadeira Angular 7\" 2.200W",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Potência : 2.200W | Disco : 7\" (180 mm) | Rotação : 8.500 rpm | Tensão : 220V | Punho lateral : Sim | Proteção de disco : Sim",
    image: dewaltEsmerilhadeira.url,
  },
  {
    id: "dewalt-soprador",
    name: "Soprador de Ar Profissional",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tipo : Com fio | Vazão de ar : Regulável | Uso : Limpeza de oficinas e máquinas | Bico direcionador : Sim | Peso : Leve e compacto",
    image: dewaltSoprador.url,
  },
  {
    id: "dewalt-trena-8m",
    name: "Trena DeWalt 8m / 26\"",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Comprimento : 8 m | Largura da fita : 26 mm | Trava : Sim | Clipe de cinto : Sim | Corpo : Emborrachado | Uso : Obra e marcenaria",
    image: dewaltTrena.url,
  },
  {
    id: "dewalt-canivete-quickflip",
    name: "Canivete Quick Flip Lâmina Inox",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Lâmina : Aço inox | Abertura : Rápida com rolamento | Cabo : Alumínio | Trava de segurança : Sim | Clipe de bolso : Sim",
    image: dewaltCanivete.url,
  },
  {
    id: "dewalt-dwht66719",
    name: "Parafusadeira\u00a0 Manual\u00a0 Tipo\u00a0 Chave de Fenda DWHT66719",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tipo : Manual com catraca | Encaixe : 1/4\" | Posições da catraca : 3 (frente, trava e reverso) | Cabo : Emborrachado | Uso : Apertos precisos",
    image: dewaltDwht66719.url,
  },
  {
    id: "dewalt-dcf922",
    name: "Chave de Impacto 1/2\" 20V DCF922 Brushless\u00a0",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Torque max : 406 Nm | Encaixe : 1/2\" | Motor : Brushless | Vel. : 3 | Baterias : 2 x 2,0 Ah + carregador",
    image: dewaltDcf922.url,
  },
  {
    id: "dewalt-serra-circular-20v",
    name: "Serra Circular 20V XR Brushless 7.1/4\" 184mm",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V XR | Disco : 184 mm (7.1/4\") | Dentes : 24 | Rotação : 5.800 rpm | Motor : Brushless | Freio elétrico : Sim | Base ajustável : Sim",
    image: dewaltSerraCircular.url,
  },
  {
    id: "dewalt-dcb203",
    name: "Bateria 20V MAX XR Lítio 2.0Ah DCB203",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Capacidade : 2,0 Ah | Tecnologia : Íon-lítio | Indicador de carga : Sim | Compatibilidade : Toda a linha 20V",
    image: dewaltDcb203.url,
  },
  {
    id: "dewalt-dccs623b",
    name: "Eletroserra de Poda 20V DCCS623B 8\" Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Sabre : 8\" (20 cm) | Motor : Brushless | Lubrificação : Automática | Peso : 3,4 Kg | Bateria : Não inclusa",
    image: dewaltDccs623b.url,
  },
  {
    id: "dewalt-lanterna-18v",
    name: "Lanterna LED a Bateria 20V XR Power Stack",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V XR / Power Stack | Luminosidade : Até 1.000 lumens | Cabeçote giratório : Sim | Gancho de fixação : Sim | Bateria : Não inclusa",
    image: dewaltLanterna.url,
  },
  {
    id: "dewalt-12v-max",
    name: "Parafusadeira / Furadeira 12V MAX com Bateria 1.5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 12V MAX | Torque max : 26 Nm | Mandril : 10 mm | Vel. : 2 | Luz de Led : Sim | Bateria : 1,5 Ah inclusa | Peso : 1,1 Kg",
    image: dewalt12vMax.url,
  },
  {
    id: "dewalt-dcf894",
    name: "Chave de Impacto 1/2\" 20V | 4 Ah XR DCF894 Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V XR | Torque max : 447 Nm | Encaixe : 1/2\" com anel | Motor : Brushless | Vel. : 3 | Bateria : 4,0 Ah",
    image: dewaltDcf894.url,
  },
  {
    id: "dewalt-dcd796-xr-kit",
    name: "Parafusadeira / Furadeira\u00a0 20V |2 Baterias 2 Ah Motor Brushless\u00a0",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Torque max : 70 Nm | Pos. Torque: 15| Mandril : 13 mm | Vel. : 2 | Impacto : Sim | Bateria : 2,0 Ah inclusa | Luz de Led : Sim | Peso : 1,3Kg | Max. Madeira : 40mm | Max. aço : 13mm",
    image: dewaltDcd796Xr.url,
  },
  {
    id: "dewalt-dch263b",
    name: "Martelete Rotativo 3 Funções DCH263B SDS-Plus 20V",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Encaixe : SDS-Plus | Funções : 3 (furar, impacto e romper) | Energia de impacto : 2,6 J | Bateria : Não inclusa",
    image: dewaltDch263b.url,
  },
  {
    id: "dewalt-dcd1007-5ah",
    name: "Furadeira / Parafusadeira de Impacto 20V XR 1/2\" com Bateria 5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Mandril : 13 mm (1/2\") | Vel. : 3 | Impacto : Sim | Punho lateral : Sim | Bateria : 5,0 Ah + carregador",
    image: dewaltDcd1007_5ah.url,
  },
  {
    id: "dewalt-dcd1007-powerpack",
    name: "Parafusadeira / Furadeira de Impacto DCD1007 20V XR Powerpack",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V XR | Mandril : 13 mm (1/2\") | Vel. : 3 | Motor : Brushless | Embreagem : Precisão | Carregador : 220V | Versão : Powerpack",
    image: dewaltDcd1007Powerpack.url,
  },
  {
    id: "dewalt-dcd777-2ah",
    name: "Parafusadeira / Furadeira 20V de Impacto MAX Brushless com Bateria 2Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Torque max : 65 | pos. de torque : 22 | Vel. : 2 | Luz de Led : Sim | Peso : 2,3 Kg | Máx. Madeira : 38 mm | Máx. aço : 13mm | Máx. Alvenaria : 13 mm",
    image: dewaltDcd777.url,
  },
  {
    id: "dewalt-dcf512b",
    name: "Chave Catraca 1/2\" 20V DCF512B Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Torque max : 81 Nm | Encaixe : 1/2\" | Rotação : 250 rpm | Motor : Brushless | Bateria : Não inclusa | Uso : Mecânica automotiva",
    image: dewaltDcf512b.url,
  },
  {
    id: "dewalt-furadeira-fio-13mm",
    name: "Furadeira com Fio 1/2\" 13mm com Punho Lateral",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tipo : Com fio | Mandril : 13 mm (1/2\") de coroa | Vel. variável : Sim | Reversão : Sim | Punho lateral : Sim | Uso : Obra e marcenaria",
    image: dewaltFuradeiraFio.url,
  },
  {
    id: "dewalt-drywall-xr",
    name: "Parafusadeira Drywall 20V XR com Bateria 5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V XR | Rotação : 4.400 rpm | Motor : Brushless | Bico limitador de profundidade : Sim | Bateria : 5,0 Ah | Uso : Gesso acartonado",
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
      "Pressão : 1.600 psi | Vazão : 380 L/h | Potência : 1.500W | Mangueira : 5 m | Carrinho : Sim | Uso : Veículos, calçadas e fachadas",
    image: jactoJ7000.url,
  },
  {
    id: "jacto-j6800",
    name: "Lavadora de Alta Pressão J6800",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Pressão : 1.800 psi | Vazão : 400 L/h | Potência : 1.600W | Enrolador de mangueira : Sim | Uso : Doméstico e profissional",
    image: jactoJ6800.url,
  },
  {
    id: "jacto-j7000-plus",
    name: "Lavadora de Alta Pressão J7000 Plus",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Pressão : 2.000 psi | Vazão : 420 L/h | Stop Total : Sim | Mangueira : Reforçada 6 m | Uso : Limpeza pesada",
    image: jactoJ7000Plus.url,
  },
  {
    id: "jacto-j7-pro-s",
    name: "Lavadora de Alta Pressão J7 Pro-S",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Pressão : 2.200 psi | Vazão : 450 L/h | Stop Total : Sim | Carrinho de transporte : Sim | Pistola : Ergonômica | Uso : Profissional intenso",
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
      "Potência : 2.200W | Disco : 7\" (180 mm) | Rotação : 8.500 rpm | Tensão : 220V | Punho lateral : Sim | Proteção de disco : Sim",
    image: p4.url,
  },
  {
    id: "makita-furadeira",
    name: "Furadeira de Impacto com Fio 1/2\"",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Tipo : Com fio | Mandril : 13 mm (1/2\") de coroa | Impacto : Sim | Vel. variável : Sim | Reversão : Sim | Punho auxiliar : Sim",
    image: p5.url,
  },
  {
    id: "makita-serra-marmore",
    name: "Serra Mármore 110mm 1200W",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Potência : 1.200W | Disco : 110 mm | Rotação : 13.000 rpm | Tensão : 220V | Disco diamantado : Incluso | Uso : Porcelanato, mármore e granito",
    image: p6.url,
  },
  {
    id: "makita-soprador-dub186",
    name: "Soprador de Folhas a Bateria 18V DUB186",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Tensão : 18V LXT | Vazão de ar : 2,6 m³/min | Vel. : 3 | Bateria : 3,0 Ah + carregador | Peso : 1,7 Kg | Uso : Pátios e oficinas",
    image: makitaSoprador.url,
  },
  {
    id: "makita-rompedor-sds-max",
    name: "Rompedor / Martelete Makita com Maleta",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Tipo : Elétrico com fio | Encaixe : SDS | Impacto : Alto para demolição | Punho auxiliar : Sim | Maleta : Inclusa | Uso : Concreto e alvenaria",
    image: makitaRompedor.url,
  },
  {
    id: "makita-soprador-m4000g",
    name: "Soprador de Ar M4000G 530W 220V",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Potência : 530W | Tensão : 220V | Vazão de ar : 2,3 m³/min | Bico direcionador : Removível | Peso : 1,5 Kg | Uso : Bancadas e máquinas",
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
