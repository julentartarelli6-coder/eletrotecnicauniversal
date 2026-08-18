import p2 from "@/assets/dewalt2.png";
import p22 from "@/assets/p22.png";
import p4 from "@/assets/makita1.png";
import p5 from "@/assets/makita2.png";
import p6 from "@/assets/makita3.png";
import p7 from "@/assets/lorenzetti1.png";
import p8 from "@/assets/elgin.png";
import boschGo from "@/assets/bosch.png";
import dewaltEsmerilhadeira from "@/assets/esmerilhadeira.png";
import esmerilhadeira1 from "@/assets/esmerilhadeira1.png";
import dewaltSoprador from "@/assets/soprador.png";
import soprador from "@/assets/soprador1.png";
import jactoJ7000 from "@/assets/jacto1.png";
import jactoJ6800 from "@/assets/jacto2.png";
import lorenzettiDuoShower from "@/assets/lorenzetti2.png";
import lorenzettiAcquaDuo from "@/assets/lorenzetti3.png";
import makitaSoprador from "@/assets/makita4.png";
import makitaRompedor from "@/assets/makita5.png";
import makitaM4000g from "@/assets/makita6.png";
import nigroPanela from "@/assets/nigro3.png";
import zagonelTorneira from "@/assets/zagonel1.png";
import dewaltTrena from "@/assets/trena.png";
import dewaltCanivete from "@/assets/canivete.png";
import dewaltDwht66719 from "@/assets/parafusadeira.png";
import dewaltDcf922 from "@/assets/chaveimpacto.png";
import dewaltSerraCircular from "@/assets/serra.png";
import dewaltDcb203 from "@/assets/bateria.png";
import dewaltDccs623b from "@/assets/eletroserra.png";
import dewaltLanterna from "@/assets/lanterna.png";
import dewalt12vMax from "@/assets/furadeira.png";
import dewaltDcf894 from "@/assets/chaveimpacto2.png";
import dewaltDcd796Xr from "@/assets/parafusadeira2.png";
import dewaltDch263b from "@/assets/martelete.png";
import nigropequena from "@/assets/nigropequena.png";
import nigroEterna60 from "@/assets/nigro2.png";
import jactoJ7Pro from "@/assets/jacto4.png";
import jactoJ7000Plus from "@/assets/jacto3.png";
import zagonelQuadratta from "@/assets/zagonel2.webp";
import zagonelMomentiBlack from "@/assets/zagonel3.png";
import zagonelFluir from "@/assets/zagonel4.png";
import lorenzettiLorenEasy from "@/assets/lorenzetti5.png";
import roaFogaoIndustrial from "@/assets/fogao.png";
import vithoryEspremedor from "@/assets/espremedor.png";
import vithoryLiquidificador from "@/assets/liquitificador.png";
import dewaltDcd1007_5ah from "@/assets/dewalt4.png";
import dewaltDcd777 from "@/assets/dewalt5.png";
import dewaltDcf512b from "@/assets/dewalt6.png";
import dewaltFuradeiraFio from "@/assets/dewalt7.png";
import dewaltDrywall from "@/assets/dewalt8.png";
import lorenzettiAquecedorVersatil from "@/assets/aquecedor.png";
import lorenzettiDuchaHigienica from "@/assets/ducha.png";
import lorenzettiAdvancedHaste from "@/assets/lorenzetti4.png";
import lorenzettiLorenComfort from "@/assets/lorenzetti5.png";
import lorenzettiMaxiBanhoUltra from "@/assets/lorenzetti6.png";
import lorenzettiTradicao from "@/assets/lorenzetti7.png";
import lorenzettiAcquaStorm from "@/assets/lorenzetti8.png";
import lorenzettiDuchaFashion from "@/assets/lorenzetti9.png";
import dewaltpinto from "@/assets/pinto.png";
import moto from "@/assets/moto.png";
import moto1 from "@/assets/moto1.png";
import trena1 from "@/assets/trena1.png";
import canivete from "@/assets/canivete1.png";
import parafusadeira1 from "@/assets/parafusadeira1.png";
import chave1 from "@/assets/chave1.png";
import serra1 from "@/assets/serra1.png";
import bateria1 from "@/assets/bateria1.png";
import eletroserra1 from "@/assets/eletroserra1.png";
import lanterna1 from "@/assets/lanterna1.png";
import dewalt12v from "@/assets/12v.png";
import chave2 from "@/assets/chave2.png";
import parafusadeira3 from "@/assets/parafusadeira3.png";
import martelete1 from "@/assets/martelete1.png";
import lixadeira from "@/assets/lixadeira.png";
import lixadeira1 from "@/assets/lixadeira1.png";
import parafusadeira4 from "@/assets/parafusadeira4.png";
import catraca from "@/assets/catraca.png";
import furadeira1 from "@/assets/furadeira1.png";
import parafusadeira5 from "@/assets/parafusadeira5.png";
import aj32 from "@/assets/aj32.png";
import mserra from "@/assets/mserra.png";
import nigro20 from "@/assets/nigro20.png";




/** Segunda foto usada nos carrosséis dos produtos DeWalt */
const dewaltSpecs = dewaltSpecsAsset.url;

export type ProductCategory = "Ferramentas" | "Eletrodomésticos" | "Outros";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  description: string;
  /** Opcional: deixe vazio para exibir "Consulte o valor" */
  price?: string;
  /** Uma foto, ou uma lista de fotos para exibir em carrossel */
  image: string | string[];
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
      "Tensão : 3,6V (bateria interna de lítio) | Torque max : 4,5 Nm | Pos. de torque : 5 + modo direto | Vel. sem carga : 360 RPM | Encaixe : 1/4\" hexagonal | Uso : Montagem de móveis e reparos domésticos",
    image: boschGo,
  },

  // DeWalt
  {
    id: "dewalt-chave-impacto",
    name: "Aparador de cerca viva a bateria 20V Sem Bateria",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : O Aparador de cerca viva a bateria da Dewalt é essencial para manter suas cercas vivas impecáveis e bem cuidadas. Este aparador não só garante eficiência, como também oferece conforto e segurança no uso prolongado",
    image: [moto, moto1],
  },
  {
    id: "dewalt-dcd796",
    name: "Parafusadeira / Furadeira de Impacto DCD796",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Parafusadeira / Furadeira de Impacto  com Motor brushless. Ideal para uso profissional diário.",
    image: [p2, p22],
  },
  {
    id: "dewalt-dcd1007-powerpack",
    name: "Parafusadeira / Furadeira de Impacto DCD1007 20V XR",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Linha XR e bateria 20V MAX de alta durabilidade.",
    image: [dewaltDcd1007_5ah, dewaltpinto],
  },
  {
    id: "dewalt-esmerilhadeira-7",
    name: "Esmerilhadeira Angular 7\" 2.200W",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Potência, resistência e desempenho profissional para aplicações pesadas. ",
    image: [dewaltEsmerilhadeira, esmerilhadeira1],
  },
  {
    id: "dewalt-soprador",
    name: "Soprador de Ar Profissional",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Indicado para uso em marcenarias, limpeza de casas e oficinas, aspirar/soprar poeiras e serragens.",
    image: [dewaltSoprador, soprador],
  },
  {
    id: "dewalt-trena-8m",
    name: "Trena DeWalt 8m / 26\"",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "A Trena Dewalt é ideal para qualquer tipo de medição, seja em casa, no trabalho ou para profissionais.",
    image: [dewaltTrena, trena1],
  },
  {
    id: "dewalt-canivete-quickflip",
    name: "Canivete Quick Flip Lâmina Inox",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Canivete dobrável com lâmina em aço inox, abertura rápida com rolamento e cabo em alumínio",
    image: [dewaltCanivete, canivete],
  },
  {
    id: "dewalt-dwht66719",
    name: "Parafusadeira\u00a0 Manual\u00a0 Tipo\u00a0 Chave de Fenda DWHT66719",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Parafusadeira manual com catraca e cabo emborrachado, ideal para apertos precisos em espaços reduzidos.",
    image: [dewaltDwht66719, parafusadeira1],
  },
  {
    id: "dewalt-dcf922",
    name: "Chave de Impacto 1/2\" 20V DCF922 Brushless\u00a0",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Motor brushless compacto com alto torque para montagem e manutenção automotiva.",
    image: [dewaltDcf922, chave1],
  },
  {
    id: "dewalt-serra-circular-20v",
    name: "Serra Circular 20V XR Brushless 7.1/4\" 184mm",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Serra circular a bateria com disco de 184mm e 24 dentes, freio elétrico e base ajustável para cortes em madeira.",
    image: [dewaltSerraCircular, serra1],
  },
  {
    id: "dewalt-dcb203",
    name: "Bateria 20V MAX XR Lítio 2.0Ah DCB203",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Bateria compacta de íon-lítio 20V MAX com indicador de carga, compatível com toda a linha 20V da DeWalt.",
    image: [dewaltDcb203, bateria1],
  },
  {
    id: "dewalt-dccs623b",
    name: "Eletroserra de Poda 20V DCCS623B 8\" Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Motosserra de poda a bateria com sabre de 8 polegadas, motor brushless, protetor e chave. Leve e ideal para jardinagem.",
    image: [dewaltDccs623b, eletroserra1],
  },
  {
    id: "dewalt-lanterna-18v",
    name: "Lanterna LED a Bateria 20V XR Power Stack",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Lanterna de trabalho LED com cabeçote giratório e gancho de fixação. Alta luminosidade para oficinas e obras.",
    image: [dewaltLanterna, lanterna1],
  },
  {
    id: "dewalt-12v-max",
    name: "Parafusadeira / Furadeira 12V MAX com Bateria 1.5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Compacta e leve, com mandril de aperto rápido e embreagem ajustável. Perfeita para montagens e serviços leves.",
    image: [dewalt12vMax, dewalt12v],
  },
  {
    id: "dewalt-dcf892",
    name: "Chave de Impacto 1/2\" 20V Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Motor brushless de alto torque para uso pesado.",
    image: [dewaltDcf894, chave2],
  },
  {
    id: "dewalt-dcd796-xr-kit",
    name: "Parafusadeira / Furadeira 20V |2 Baterias 2 Ah Motor Brushless\u00a0",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Modelo XR brushless com mandril de 13mm, duas velocidades e função impacto. Acompanha bateria 20V MAX.",
    image: [dewaltDcd796Xr, parafusadeira3],
  },
  {
    id: "dewalt-dch263b",
    name: "Martelete DCH263B SDS-Plus 20V",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Martelete a bateria com encaixe .",
    image: [dewaltDch263b, martelete1],
  },
  {
    id: "dewalt-politriz",
    name: "Politriz/Lixadeira Angular 180MM 1250W Dewalt DWP849X-B2",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Possui controle eletrônico preciso de velocidade variável e mantém a rotação constante para aplicação em diversos processos de polimento.",
    image: [lixadeira, lixadeira1],
  },
  {
    id: "dewalt-dcd777-2ah",
    name: "Parafusadeira / Furadeira 20V de Impacto MAX Brushless com Bateria",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "ferramenta perfeita para todos os seus projetos de bricolagem.",
    image: [dewaltDcd777, parafusadeira4],
  },
  {
    id: "dewalt-dcf512b",
    name: "Chave Catraca 1/2\" 20V DCF512B Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Cabeça compacta para espaços reduzidos com motor Brushless",
    image: [dewaltDcf512b, catraca],
  },
  {
    id: "dewalt-furadeira-fio-13mm",
    name: "Furadeira com Fio 1/2\" 13mm com Punho Lateral",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Furadeira elétrica robusta com mandril de coroa 13mm, velocidade variável, reversão e punho auxiliar para maior controle.",
    image: [dewaltFuradeiraFio, furadeira1],
  },
  {
    id: "dewalt-drywall-xr",
    name: "Parafusadeira Drywall 20V XR",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Parafusadeira para gesso acartonado com bico limitador de profundidade, motor brushless e alta autonomia. Acompanha bateria XR.",
    image: [dewaltDrywall, parafusadeira5],
  },


  // Makita
  {
    id: "makita-esmerilhadeira",
    name: "Esmerilhadeira Angular 7\"",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Potência : 2.200W | Tensão : 220V | Disco : 7\" (180 mm) | Rosca do eixo : M14 | Vel. sem carga : 8.500 RPM | Partida suave : Sim | Trava do eixo : Sim | Punho lateral : 3 posições | Protetor de disco : Ajustável | Cabo : 2,5 m | Peso : 5,1 Kg | Uso : Corte e desbaste em metal e concreto",
    image: p4,
  },
  {
    id: "makita-furadeira",
    name: "Furadeira de Impacto com Fio 1/2\"",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Tipo : Com fio | Tensão : 220V | Potência : 710W | Mandril : 13 mm (1/2\") de coroa | Vel. sem carga : 0-2.800 RPM | Impactos : até 44.800 BPM | Vel. variável : Sim | Reversão : Sim | Máx. madeira : 25 mm | Máx. aço : 13 mm | Máx. alvenaria : 16 mm | Punho auxiliar : 360° com limitador | Peso : 2,1 Kg",
    image: p5,
  },
  {
    id: "makita-serra-marmore",
    name: "Serra Mármore 110mm 1200W",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Potência : 1.200W | Tensão : 220V | Disco : 110 mm | Furo do disco : 20 mm | Vel. sem carga : 13.000 RPM | Prof. de corte : 34 mm | Base : Alumínio com ajuste de profundidade | Refrigeração : Saída para água | Disco diamantado : Incluso | Cabo : 2,5 m | Peso : 3,1 Kg | Uso : Porcelanato, mármore e granito",
    image: p6,
  },
  {
    id: "makita-serra-circular",
    name: "Serra Circular 7.1/4 1.600w Makita",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Ideal para setores de construção e marcenaria, esta serra suporta o trabalho pesado diário com uma capacidade de corte impressionante de até 67mm de profundidade.",
    image: mserra,
  },
  {
    id: "makita-soprador-dub186",
    name: "Soprador de Folhas a Bateria 18V DUB186",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Tensão : 18V LXT | Vazão de ar : 2,6 m³/min | Velocidade do ar : até 54 m/s | Vel. : 3 | Autonomia : até 40 min (3,0 Ah) | Bico : Removível | Peso : 1,7 Kg (com bateria) | Acompanha : Bateria 3,0 Ah, carregador e bico | Uso : Pátios, jardins e oficinas",
    image: makitaSoprador,
  },
  {
    id: "makita-rompedor-sds-max",
    name: "Rompedor / Martelete Makita com Maleta",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Tipo : Elétrico com fio | Tensão : 220V | Potência : 1.500W | Encaixe : SDS | Energia de impacto : 20 J | Impactos : até 1.900 BPM | Controle de vibração : Sim | Punho auxiliar : Ajustável 360° | Acompanha : Ponteiro, talhadeira, graxa e maleta | Peso : 10 Kg | Uso : Demolição de concreto e alvenaria",
    image: makitaRompedor,
  },
  {
    id: "makita-soprador-m4000g",
    name: "Soprador de Ar M4000G 530W 220V",
    brand: "Makita",
    category: "Ferramentas",
    description:
      "Potência : 530W | Tensão : 220V | Vazão de ar : 2,3 m³/min | Velocidade do ar : até 90 m/s | Vel. variável : Sim | Bico direcionador : Removível | Cabo : 2 m | Peso : 1,5 Kg | Uso : Limpeza de bancadas, máquinas e painéis elétricos",
    image: makitaM4000g,
  },

  // Elgin
  {
    id: "elgin-split",
    name: "Ar-condicionado Elgin Split Inverter R32",
    brand: "Elgin",
    category: "Eletrodomésticos",
    description:
      "Economia de energia com tecnologia inverter, controle remoto e gás ecológico R32.",
    image: p8,
  },

  // Jacto
  {
    id: "jacto-j6000",
    name: "Aspirador pó/água AJ32 220V",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "O AJ32 é o aspirador de pó e líquidos ideal para quem busca robustez, eficiência e praticidade nas mais diversas aplicações profissionais.",
    image: aj32,
  },
  {
    id: "jacto-j6000",
    name: "Lavadora de Alta Pressão J6000",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Pressão : 1.600 psi | Vazão : 380 L/h | Potência : 1.500W | Tensão : 127V ou 220V | Motor : Universal com bomba de 3 pistões | Mangueira : 5 m | Bico : Regulável (leque e concentrado) | Reservatório de detergente : Sim | Carrinho : Sim com alça retrátil | Peso : 8 Kg | Uso : Veículos, calçadas e fachadas",
    image: jactoJ7000,
  },
  {
    id: "jacto-j6800",
    name: "Lavadora de Alta Pressão J6800",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Pressão : 1.800 psi | Vazão : 400 L/h | Potência : 1.600W | Tensão : 127V ou 220V | Mangueira : 5 m com enrolador | Stop Total : Sim | Bico : Regulável | Aplicador de detergente : Sim | Filtro de entrada : Sim | Peso : 9 Kg | Uso : Doméstico e profissional leve",
    image: jactoJ6800,
  },
  {
    id: "jacto-j7000-plus",
    name: "Lavadora de Alta Pressão J7000 Plus",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Pressão : 2.000 psi | Vazão : 420 L/h | Potência : 1.800W | Tensão : 127V ou 220V | Mangueira : Reforçada 6 m | Stop Total : Sim | Bico : Turbo + regulável | Reservatório de detergente : Sim | Enrolador de mangueira : Sim | Peso : 10 Kg | Uso : Limpeza pesada e uso frequente",
    image: jactoJ7000Plus,
  },
  {
    id: "jacto-j7-pro-s",
    name: "Lavadora de Alta Pressão J7 Pro-S",
    brand: "Jacto",
    category: "Ferramentas",
    description:
      "Pressão : 2.200 psi | Vazão : 450 L/h | Potência : 2.000W | Tensão : 127V ou 220V | Mangueira : Reforçada 8 m | Stop Total : Sim | Pistola : Ergonômica com trava | Bicos : Turbo e leque regulável | Carrinho : Com rodas e alça | Peso : 12 Kg | Uso : Profissional intenso",
    image: jactoJ7Pro,
  },

  // Lorenzetti
  {
    id: "lorenzetti-chuveiro",
    name: "Loren Shower Eletrônica",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro eletrônico com grande espalhador, temperatura ajustável e ducha manual.",
    image: p7,
  },
  {
    id: "lorenzetti-duo-shower",
    name: "Duo Shower Multitemperaturas",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro e ducha em um só produto, com espalhador amplo e seleção de temperatura.",
    image: lorenzettiDuoShower,
  },
  {
    id: "lorenzetti-acqua-duo",
    name: "Acqua Duo Ultra Chuveiro e Ducha",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Design cromado com chuveiro e ducha independentes, acionamento eletrônico e alta vazão.",
    image: lorenzettiAcquaDuo,
  },
  {
    id: "lorenzetti-loren-easy",
    name: "Torneira Elétrica Loren Easy Parede",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Torneira elétrica branca de parede com bica alta giratória e três temperaturas de aquecimento.",
    image: lorenzettiLorenEasy,
  },
  {
    id: "lorenzetti-aquecedor-versatil",
    name: "Aquecedor Versátil Lorenzetti",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Aquecedor de água compacto para torneiras e duchas, com controle de temperatura e instalação versátil em parede.",
    image: lorenzettiAquecedorVersatil,
  },
  {
    id: "lorenzetti-ducha-higienica-3t",
    name: "Ducha Higiênica 3T",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Ducha higiênica com aquecimento elétrico de 3 temperaturas, gatilho ergonômico e mangueira flexível cromada.",
    image: lorenzettiDuchaHigienica,
  },
  {
    id: "lorenzetti-advanced-eletronica",
    name: "Chuveiro Advanced Eletrônica com Haste",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro eletrônico com haste, espalhador amplo e ajuste contínuo de temperatura para banhos confortáveis.",
    image: lorenzettiAdvancedHaste,
  },
  {
    id: "lorenzetti-loren-comfort",
    name: "Chuveiro Loren Comfort Eletrônico",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Modelo eletrônico com haste e espalhador redondo de grande diâmetro, proporcionando jatos suaves e temperatura ajustável.",
    image: lorenzettiLorenComfort,
  },
  {
    id: "lorenzetti-maxi-banho-ultra",
    name: "Chuveiro Maxi Banho Ultra 127V 4600W",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro com três posições (Inverno, Desliga e Verão), 4600W e jatos abundantes. Resistência de fácil substituição.",
    image: lorenzettiMaxiBanhoUltra,
  },
  {
    id: "lorenzetti-tradicao",
    name: "Chuveiro Tradição 220V 5700W Cromado",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Chuveiro e ducha com acabamento cromado, três temperaturas (Quente, Morno e Super Quente) e 5700W. Design clássico e resistente.",
    image: lorenzettiTradicao,
  },
  {
    id: "lorenzetti-acqua-storm",
    name: "Chuveiro Acqua Storm Ultra Branco/Cromado",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Ducha de teto com espalhador retangular tipo chuva, controle eletrônico de temperatura e acabamento branco com cromado.",
    image: lorenzettiAcquaStorm,
  },
  {
    id: "lorenzetti-ducha-fashion",
    name: "Ducha Fashion 220V 7500W Branca",
    brand: "Lorenzetti",
    category: "Eletrodomésticos",
    description:
      "Ducha com quatro temperaturas, 7500W e espalhador amplo em ABS branco. Resistência de fácil troca.",
    image: lorenzettiDuchaFashion,
  },

  // Nigro
  {
    id: "nigro-panela-pressao",
    name: "Panela de Pressão Expressa 4,5L",
    brand: "Nigro",
    category: "Outros",
    description:
      "Panela de pressão em alumínio polido com 4,5 litros, cabo ergonômico e sistema de segurança.",
    image: nigroPanela,
  },
  {
    id: "nigro-eterna-45",
    name: "Panela de Pressão Eterna 3L Preta",
    brand: "Nigro",
    category: "Outros",
    description:
      "Panela de pressão Nigro Eterna 3L , tampa em alumínio e sistema de segurança.",
    image: nigropequena,
  },
  {
    id: "nigro-20litro",
    name: "Panela de Pressão Eterna 20 Litros",
    brand: "Nigro",
    category: "Outros",
    description:
      "Seja uma cozinha doméstica ou industrial é possível preparar uma grande quantidade de comida com praticidade",
    image: nigro20,
  },
  {
    id: "nigro-eterna-60",
    name: "Panela de Pressão Eterna Polida 6L",
    brand: "Nigro",
    category: "Outros",
    description:
      "Panela de pressão Nigro Eterna 6 litros em alumínio polido, ideal para famílias maiores.",
    image: nigroEterna60,
  },

  // Roa
  {
    id: "roa-fogao-industrial-2-bocas",
    name: "Fogão Industrial  2  Bocas ",
    brand: "Outros",
    category: "Eletrodomésticos",
    description:
      "Fogão industrial de 2 bocas em chapa reforçada, com queimadores de alta pressão, bandejas removíveis e cavalete de apoio.",
    image: roaFogaoIndustrial,
  },

  // Vithory
  {
    id: "vithory-espremedor-inox",
    name: "Espremedor / Extrator de Sucos Inox Profissional Vithory",
    brand: "Vithory",
    category: "Eletrodomésticos",
    description:
      "Extrator profissional em aço inox para laranja e limão, com alto rendimento e fácil limpeza para uso comercial.",
    image: vithoryEspremedor,
  },
  {
    id: "vithory-liquidificador-2l",
    name: "Liquidificador Industrial Inox 2 Litros Vithory",
    brand: "Vithory",
    category: "Eletrodomésticos",
    description:
      "Liquidificador de alta rotação com copo em aço inox de 2 litros, sistema de fácil limpeza e motor reforçado.",
    image: vithoryLiquidificador,
  },

  // Zagonel
  {
    id: "zagonel-torneira",
    name: "Torneira Elétrica iPrima Touch",
    brand: "Zagonel",
    category: "Eletrodomésticos",
    description:
      "Torneira eletrônica com acionamento touch, bica giratória e instalação em bancada ou parede.",
    image: zagonelTorneira,
  },
  {
    id: "zagonel-quadratta",
    name: "Ducha Quadratta Eletrônica 5500W 127V",
    brand: "Zagonel",
    category: "Eletrodomésticos",
    description:
      "Ducha branca de design quadrado com temperatura eletrônica, grande espalhador e alta vazão.",
    image: zagonelQuadratta,
  },
  {
    id: "zagonel-momenti-black",
    name: "Ducha Momenti Black Eletrônica",
    brand: "Zagonel",
    category: "Eletrodomésticos",
    description:
      "Acabamento preto brilhante, espalhador redondo amplo e ajuste eletrônico de temperatura.",
    image: zagonelMomentiBlack,
  },
  {
    id: "zagonel-fluir",
    name: "Ducha Fluir 4 Temperaturas 6800W 220V",
    brand: "Zagonel",
    category: "Eletrodomésticos",
    description:
      "Chuveiro econômico com 4 temperaturas, jatos intensos e kit com mangueira e desviador.",
    image: zagonelFluir,
  },
];

export const CATEGORIES: ProductCategory[] = [
  "Ferramentas",
  "Eletrodomésticos",
  "Outros",
];
