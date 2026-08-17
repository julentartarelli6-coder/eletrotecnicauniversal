import p1 from "@/assets/dewalt1.png";
import p2 from "@/assets/dewalt2.png";
import p3 from "@/assets/dewalt3.png";
import p4 from "@/assets/makita1.png";
import p5 from "@/assets/makita2.png";
import p6 from "@/assets/makita3.png";
import p7 from "@/assets/lorenzetti1.png";
import p8 from "@/assets/elgin.png";
import boschGo from "@/assets/bosch.png";
import dewaltEsmerilhadeira from "@/assets/esmerilhadeira.png";
import dewaltSoprador from "@/assets/soprador.png";
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
import nigroEterna45 from "@/assets/nigro1.png";
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
import dewaltDcd1007Powerpack from "@/assets/dewalt9.png";

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
      "Tensão : 3,6V (bateria interna de lítio) | Torque max : 4,5 Nm | Pos. de torque : 5 + modo direto | Vel. sem carga : 360 RPM | Encaixe : 1/4\" hexagonal | Acionamento : Push & Go automático | Luz de Led : Sim | Peso : 0,3 Kg | Carga : Cabo micro USB (~3 h) | Acompanha : 33 pontas, cabo USB, manual e maleta | Embalagem : Maleta plástica | Uso : Montagem de móveis e reparos domésticos",
    image: boschGo,
  },

  // DeWalt
  {
    id: "dewalt-chave-impacto",
    name: "Chave de Impacto 20V XR Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Torque max : 205 Nm | Encaixe : 1/2\" com pino de retenção | Motor : Brushless | Vel. : 3 + modo precision wrench | Vel. sem carga : 0-900 \\ 0-2.000 \\ 0-3.250 RPM | Impactos : até 3.600 IPM | Luz de Led : Sim (3 pontos) | Peso : 1,6 Kg | Bateria : Íon-lítio 20V inclusa | Acompanha : Manual, bateria, carregador e maleta | Uso : Mecânica automotiva e montagem industrial",
    image: [p1, p2],
  },
  {
    id: "dewalt-dcd796",
    name: "Parafusadeira / Furadeira de Impacto DCD796",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Torque max : 70 Nm | Pos. de torque : 15 + furar/impacto | Mandril : 13 mm de aperto rápido | Motor : Brushless | Vel. : 2 | Vel. sem carga : 0-550 \\ 0-2.000 RPM | Impactos : até 34.000 IPM | Máx. madeira : 40 mm | Máx. aço : 13 mm | Máx. alvenaria : 13 mm | Luz de Led : Sim | Peso : 1,6 Kg | Acompanha : Manual, punho lateral e maleta",
    image: p2,
  },
  {
    id: "dewalt-dcd1007",
    name: "Furadeira de Impacto DCD1007 3 Velocidades",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Torque max : 90 Nm | Mandril : 13 mm de aperto rápido | Motor : Brushless | Vel. : 3 | Vel. sem carga : 0-450 \\ 0-1.300 \\ 0-2.000 RPM | Impactos : até 38.250 BPM | Máx. madeira : 40 mm | Máx. aço : 13 mm | Máx. alvenaria : 16 mm | Luz de Led : Sim | Punho lateral : Sim | Peso : 1,8 Kg | Uso : Furação pesada em concreto e metal",
    image: p3,
  },
  {
    id: "dewalt-esmerilhadeira-7",
    name: "Esmerilhadeira Angular 7\" 2.200W",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Potência : 2.200W | Tensão : 220V | Disco : 7\" (180 mm) | Rosca do eixo : M14 | Vel. sem carga : 8.500 RPM | Partida suave : Sim | Proteção contra rearme : Sim | Punho lateral : 3 posições | Protetor de disco : Ajuste sem ferramenta | Peso : 5,3 Kg | Acompanha : Punho lateral, chave e protetor | Uso : Corte e desbaste em obra",
    image: dewaltEsmerilhadeira,
  },
  {
    id: "dewalt-soprador",
    name: "Soprador de Ar Profissional",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tipo : Com fio | Tensão : 220V | Potência : 530W | Vazão de ar : até 2,3 m³/min | Velocidade do ar : até 90 m/s | Vel. variável : Sim | Bico direcionador : Removível | Peso : 1,6 Kg | Acompanha : Bico soprador e manual | Uso : Limpeza de oficinas, máquinas e bancadas",
    image: dewaltSoprador,
  },
  {
    id: "dewalt-trena-8m",
    name: "Trena DeWalt 8m / 26\"",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Comprimento : 8 m | Largura da fita : 26 mm | Alcance sem apoio : até 2,8 m | Trava : Sim | Gancho : Reforçado e magnético | Corpo : Emborrachado antiqueda | Clipe de cinto : Sim | Graduação : Métrica e em polegadas | Peso : 0,4 Kg | Uso : Obra, marcenaria e instalação",
    image: dewaltTrena,
  },
  {
    id: "dewalt-canivete-quickflip",
    name: "Canivete Quick Flip Lâmina Inox",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Lâmina : Aço inox 3\" | Abertura : Rápida assistida (Quick Flip) | Cabo : Alumínio com pegada emborrachada | Trava de segurança : Sim | Clipe de bolso : Reversível | Peso : 0,12 Kg | Uso : Corte de fitas, cabos e uso geral em obra",
    image: dewaltCanivete,
  },
  {
    id: "dewalt-dwht66719",
    name: "Parafusadeira\u00a0 Manual\u00a0 Tipo\u00a0 Chave de Fenda DWHT66719",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tipo : Manual com catraca | Encaixe : 1/4\" hexagonal | Posições da catraca : 3 (frente, trava e reverso) | Torque : Manual de alta precisão | Cabo : Emborrachado bimaterial | Armazenamento : Compartimento de pontas no cabo | Peso : 0,3 Kg | Uso : Apertos precisos em eletrônicos, móveis e elétrica",
    image: dewaltDwht66719,
  },
  {
    id: "dewalt-dcf922",
    name: "Chave de Impacto 1/2\" 20V DCF922 Brushless\u00a0",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Torque max : 406 Nm | Torque de rompimento : até 610 Nm | Encaixe : 1/2\" com anel de retenção | Motor : Brushless | Vel. : 3 | Vel. sem carga : 0-900 \\ 0-1.900 \\ 0-2.400 RPM | Impactos : até 3.400 IPM | Luz de Led : Sim | Peso : 1,5 Kg | Acompanha : 2 baterias 2,0 Ah, carregador e maleta | Embalagem : Maleta plástica",
    image: dewaltDcf922,
  },
  {
    id: "dewalt-serra-circular-20v",
    name: "Serra Circular 20V XR Brushless 7.1/4\" 184mm",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Disco : 184 mm (7.1/4\") com 24 dentes | Furo do disco : 20 mm | Vel. sem carga : 5.800 RPM | Motor : Brushless | Prof. de corte a 90° : 65 mm | Prof. de corte a 45° : 49 mm | Base : Alumínio com ajuste de ângulo 0-57° | Freio elétrico : Sim | Saída de pó : Sim | Peso : 3,4 Kg | Bateria : Consulte versão",
    image: dewaltSerraCircular,
  },
  {
    id: "dewalt-dcb203",
    name: "Bateria 20V MAX XR Lítio 2.0Ah DCB203",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Capacidade : 2,0 Ah | Tecnologia : Íon-lítio | Energia : 40 Wh | Indicador de carga : 3 Leds | Tempo de carga : ~30 min (carregador rápido) | Peso : 0,4 Kg | Sem efeito memória : Sim | Compatibilidade : Toda a linha 20V MAX DeWalt",
    image: dewaltDcb203,
  },
  {
    id: "dewalt-dccs623b",
    name: "Eletroserra de Poda 20V DCCS623B 8\" Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Sabre : 8\" (20 cm) | Motor : Brushless | Vel. da corrente : 7,6 m/s | Tensionamento : Sem ferramentas | Lubrificação : Automática com reservatório | Capacidade de corte : até 15 cm de diâmetro | Peso : 3,4 Kg | Bateria : Não inclusa (vendida separadamente) | Uso : Poda de galhos e jardinagem",
    image: dewaltDccs623b,
  },
  {
    id: "dewalt-lanterna-18v",
    name: "Lanterna LED a Bateria 20V XR Power Stack",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR / Power Stack | Luminosidade : até 1.000 lumens | Modos : 3 níveis de intensidade | Autonomia : até 30 h (modo econômico) | Cabeçote : Giratório 360° | Gancho de fixação : Sim | Corpo : Alumínio resistente a impacto | Peso : 0,7 Kg | Bateria : Não inclusa",
    image: dewaltLanterna,
  },
  {
    id: "dewalt-12v-max",
    name: "Parafusadeira / Furadeira 12V MAX com Bateria 1.5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 12V MAX | Torque max : 24 Nm | Pos. de torque : 15 + furar | Mandril : 10 mm de aperto rápido | Vel. : 2 | Vel. sem carga : 0-400 \\ 0-1.500 RPM | Máx. madeira : 25 mm | Máx. aço : 10 mm | Luz de Led : Sim | Peso : 1,1 Kg | Acompanha : Bateria 1,5 Ah, carregador e maleta | Uso : Montagem e reparos leves",
    image: dewalt12vMax,
  },
  {
    id: "dewalt-dcf894",
    name: "Chave de Impacto 1/2\" 20V | 4 Ah XR DCF894 Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Torque max : 447 Nm | Torque de rompimento : até 610 Nm | Encaixe : 1/2\" com anel de retenção | Motor : Brushless | Vel. : 3 + modo precision wrench | Vel. sem carga : 0-900 \\ 0-2.000 \\ 0-3.250 RPM | Impactos : até 3.600 IPM | Luz de Led : Sim | Peso : 1,7 Kg | Bateria : 4,0 Ah | Uso : Rodas, chassis e manutenção pesada",
    image: dewaltDcf894,
  },
  {
    id: "dewalt-dcd796-xr-kit",
    name: "Parafusadeira / Furadeira\u00a0 20V |2 Baterias 2 Ah Motor Brushless\u00a0",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Torque max : 70 Nm | Pos. Torque: 15| Mandril : 13 mm - Aperto rápido | Vel. : 2 | Vel. sem carga : 0-550 \\ 0-2000 RPM | Impacto : Sim | Bateria : 2,0 Ah inclusa | Luz de Led : Sim | Peso : 1,3Kg | Max. Madeira : 40mm | Max. aço : 13mm | Opções :DCD791D2-B2 (220V) DCD791D2-BR (127V) | Acompanha : Manual , 2 baterias 20V MAX - 2Ah , carregador e maleta de transporte | Embalagem : Maleta Plástica .",
    image: dewaltDcd796Xr,
  },
  {
    id: "dewalt-dch263b",
    name: "Martelete Rotativo 3 Funções DCH263B SDS-Plus 20V",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Encaixe : SDS-Plus | Funções : 3 (furar, furar com impacto e romper) | Energia de impacto : 2,6 J | Vel. sem carga : 0-1.100 RPM | Impactos : até 4.600 BPM | Máx. concreto : 26 mm | Controle de vibração : Sim | Embreagem de segurança : Sim | Punho lateral : 360° | Peso : 3,0 Kg | Bateria : Não inclusa",
    image: dewaltDch263b,
  },
  {
    id: "dewalt-dcd1007-5ah",
    name: "Furadeira / Parafusadeira de Impacto 20V XR 1/2\" com Bateria 5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Torque max : 90 Nm | Mandril : 13 mm (1/2\") de aperto rápido | Motor : Brushless | Vel. : 3 | Vel. sem carga : 0-450 \\ 0-1.300 \\ 0-2.000 RPM | Impacto : Sim | Máx. madeira : 40 mm | Máx. aço : 13 mm | Máx. alvenaria : 16 mm | Punho lateral : Sim | Luz de Led : Sim | Peso : 1,9 Kg | Acompanha : Bateria 5,0 Ah, carregador e maleta",
    image: dewaltDcd1007_5ah,
  },
  {
    id: "dewalt-dcd1007-powerpack",
    name: "Parafusadeira / Furadeira de Impacto DCD1007 20V XR Powerpack",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Torque max : 90 Nm | Mandril : 13 mm (1/2\") de aperto rápido | Motor : Brushless | Vel. : 3 | Vel. sem carga : 0-450 \\ 0-1.300 \\ 0-2.000 RPM | Impacto : Sim | Máx. madeira : 40 mm | Máx. aço : 13 mm | Máx. alvenaria : 16 mm | Luz de Led : Sim | Peso : 1,9 Kg | Carregador : 220V | Versão : Powerpack (bateria Power Stack)",
    image: dewaltDcd1007Powerpack,
  },
  {
    id: "dewalt-dcd777-2ah",
    name: "Parafusadeira / Furadeira 20V de Impacto MAX Brushless com Bateria 2Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Torque max : 65 | pos. de torque : 22 | Vel. : 2 | Luz de Led : Sim | Peso : 2,3 Kg | Máx. Madeira : 38 mm | Máx. aço : 13mm | Máx. Alvenaria : 13 mm",
    image: dewaltDcd777,
  },
  {
    id: "dewalt-dcf512b",
    name: "Chave Catraca 1/2\" 20V DCF512B Brushless",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX | Torque max : 81 Nm | Encaixe : 1/2\" | Vel. sem carga : 250 RPM | Motor : Brushless | Reversão : Sim | Luz de Led : Sim | Comprimento : 28 cm (acesso a locais estreitos) | Peso : 1,3 Kg | Bateria : Não inclusa | Uso : Mecânica automotiva e manutenção industrial",
    image: dewaltDcf512b,
  },
  {
    id: "dewalt-furadeira-fio-13mm",
    name: "Furadeira com Fio 1/2\" 13mm com Punho Lateral",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tipo : Com fio | Tensão : 220V | Potência : 710W | Mandril : 13 mm (1/2\") de coroa com chave | Vel. sem carga : 0-2.800 RPM | Vel. variável : Sim (gatilho) | Reversão : Sim | Máx. madeira : 25 mm | Máx. aço : 13 mm | Punho lateral : 360° | Cabo : 2 m | Peso : 2,2 Kg",
    image: dewaltFuradeiraFio,
  },
  {
    id: "dewalt-drywall-xr",
    name: "Parafusadeira Drywall 20V XR com Bateria 5Ah",
    brand: "DeWalt",
    category: "Ferramentas",
    description:
      "Tensão : 20V MAX XR | Vel. sem carga : 0-4.400 RPM | Motor : Brushless | Encaixe : 1/4\" hexagonal | Embreagem : Silenciosa com desligamento automático | Bico limitador de profundidade : Ajustável e removível | Reversão : Sim | Luz de Led : Sim | Gancho de cinto : Sim | Peso : 1,5 Kg | Acompanha : Bateria 5,0 Ah, carregador e maleta | Uso : Gesso acartonado e steel frame",
    image: dewaltDrywall,
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
    name: "Panela de Pressão Eterna 4,5L Vermelha",
    brand: "Nigro",
    category: "Outros",
    description:
      "Panela de pressão Nigro Eterna 4,5L com acabamento colorido, tampa em alumínio e sistema de segurança.",
    image: nigroEterna45,
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
    brand: "Roa",
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
