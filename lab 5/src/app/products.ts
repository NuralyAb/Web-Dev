export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  url: string;
  rating: number;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'BMW A-bike 26.2 inch 2024 white',
    price: 59241 ,
    description: 'Saddle material leather  Package contents: wings, lock, lantern, bicycle bag, bottle Features of wings The color is whiteCountry of origin Germany',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hf8/hb5/85749502443550.jpg?format=preview-large',
    url: 'https://kaspi.kz/shop/p/a-bike-bmw-26-2-djuim-2024-belyi-118424682/?c=750000000',
    rating: 5,
    category: 'Bicycles',
    likes: 10
  },
  {
    id: 2,
    name: 'Bike Stels STELS 28 inch 2022 21 inch green',
    price: 51838,
    description: 'Complete set of pump, basket, footrest, trunk, fenders Features fenders, front fender, footrest The color is green Country of origin Russia The assembly is delivered disassembled.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h1e/85994169892894.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/stels-stels-28-djuim-2022-21-djuim-zelenyi-109799892/?c=750000000',
    rating: 4,
    category: 'Bicycles',
    likes: 120
  },
  {
    id: 3,
    name: 'VETRO Bike ALL BLACK/BLUE 29 inch 2024 black-blue',
    price: 115000,
    description: 'Saddle material artificial leather Package contents: pump, wings, lock, bell, bicycle bag, light reflector, bottle Features holder for containers, bicycle pockets Color black-blue Manufacturer Country China Manufacturer VETRO',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/he3/87133814259742.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/vetro-a3l-black-blue-29-djuim-2024-chernyi-sinii-123617371/?c=750000000',
    rating: 5,
    category: 'Bicycles',
    likes: 30
  },
  {
    id: 4,
    name: 'Bike Land Rover 2023 26 inches 2023 18 inches Black',
    price: 57943,
    description: 'Saddle material artificial leather There is a steering wheel position setting Package contents: pump, footrest, fenders, lock, lantern, bicycle bag, bottle Features fenders, chain guard, front fender, container holder, rear fender, footrest, bicycle lock',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h11/81283438968862.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/land-rover-2023-26-djuim-2023-18-djuimov-chernyi-110868755/?c=750000000',
    rating: 3,
    category: 'Bicycles',
    likes: 28
  },
  {
    id: 5,
    name: 'Bicycle Princess Childrens Bicycle Princess-20 20 inch 2020 M Pink',
    price: 27989,
    description: 'Complete set basket, footrest, trunk, bell Features missing The color is pink Manufacturer Country China The assembly is delivered assembled',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h56/hf5/86137541132318.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/printsessa-detskii-velosiped-printsessa-20-20-djuim-2020-m-rozovyi-109237652/?c=750000000',
    rating: 4,
    category: 'Bicycles',
    likes: 64
  },
  {
    id: 6,
    name: 'Laptop ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 GB / SSD 512 GB / Win 11 Pro /',
    price: 529735,
    description: 'The maximum processor frequency is 4400.0 MHz Intel Core i5-12450H processor The base frequency of the processor is 2000.0 MHz Number of processor cores 8 cores L312 MB Cache Size',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
    rating: 5,
    category: 'Laptops',
    likes: 63
  },
  {
    id: 7,
    name: 'Apple MacBook Air 13 2022 13.6" Laptop / 8GB / 256GB SSD / macOS / MLXW3',
    price: 495798,
    description: 'The maximum processor frequency is 3400.0 MHz Apple M2 Processor The base frequency of the processor is 2000.0 MHz Number of processor cores 8 cores',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
    rating: 4,
    category: 'Laptops',
    likes: 50
  },
  {
    id: 8,
    name: 'Lenovo IdeaPad 3 15.6" Laptop / 4GB / 256GB SSD / Without OS / 15IGL05 / 81WQ00EMRK',
    price: 172600 ,
    description: 'The maximum processor frequency is 2800.0 MHz Process technology 14.0 nm Intel Celeron N4020 processor The base frequency of the processor is 1100.0 MHz Number of processor cores 2 cores',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
    url: 'http://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',
    rating: 3,
    category: 'Laptops',
    likes: 35
  },
  {
    id: 9,
    name: 'Laptop Thunderbolt 911 SCoreD 15.6" / 16 GB / SSD 512 GB / Without OS / JT009K00F',
    price: 388678 ,
    description: 'The maximum processor frequency is 4400.0 MHz Intel Core i5-12450H processor The base frequency of the processor is 2000.0 MHz Number of processor cores 8 cores L312 MB Cache Size',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
    rating: 5,
    category: 'Laptops',
    likes: 69
  },
  {
    id: 10,
    name: 'Lenovo LOQ 15.6" Laptop / 16 GB / 512GB SSD / Without OS / 15IAX9 / 83GS005NRK',
    price: 393206,
    description: 'The maximum processor frequency is 4400.0 MHz Intel Core i5-12450HX processor The base frequency of the processor is 3100.0 MHz Number of processor cores 8 cores L312 MB Cache Size',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/lenovo-loq-15-6-16-gb-ssd-512-gb-bez-os-15iax9-83gs005nrk-120581412/?c=750000000',
    rating: 5,
    category: 'Laptops',
    likes: 18
  },
  {
    id: 11,
    name: 'Ball Tennis ball GF00214 3 pcs',
    price: 699 ,
    description: 'Type for the hall, for the street Appointment for lawn tennis Material rubber Size one size One size diameter The shape is round',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h4c/85988553490462.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/tenisnyi-mjach-gf00214-3-sht-106320557/?c=750000000',
    rating: 5,
    category: 'Sports balls',
    likes: 325
  },
  {
    id: 12,
    name: 'Mikasa V200W Volleyball Ball 5 D67',
    price: 45000,
    description: 'Original!!! APPROVED BY FIVB The weight and diameter of the ball meet the requirements of the International Volleyball Federation FIVB. BALL CONTROL The soft non-slip coating material ensures clear contact with the ball when receiving and serving. ESPECIALLY FOR THE GYM',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h86/hef/63852919095326.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/mikasa-v200w-dlja-voleibola-5-d67-100134795/?c=750000000',
    rating: 5,
    category: 'Sports balls',
    likes: 726
  },
  {
    id: 13,
    name: 'Lawn Tennis Ball',
    price: 499,
    description: 'Type for the hall, for the street Appointment for lawn tennis Material Polyester Diameter 10=10 The shape is round Additional information 2 balls manufactured in Russia. Polyester, Nylon',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/hc7/82788534288414.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/dlja-bol-shogo-tennisa--112510658/?c=750000000',
    rating: 4,
    category: 'Sports balls',
    likes: 692
  },
  {
    id: 14,
    name: 'Lawn tennis ball 18544099_133218',
    price: 340,
    description: 'Type for the hall, for the street Appointment for lawn tennis Material synthetic Size one size Diameter 20 The shape is round',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/had/hef/82768190996510.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/dlja-bol-shogo-tennisa-18544099-133218-112486658/?c=750000000',
    rating: 5,
    category: 'Sports balls',
    likes: 79
  },
  {
    id: 15,
    name: 'AAT Teamgeist Soccer Ball 5 D68 +Pump',
    price: 4461 ,
    description: 'Type for the street Destination for football Material artificial leather, rubber Size 5 Diameter 68 The shape is round',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/hf4/85364071628830.png?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/aat-temgeist-dlja-futbola-5-d68-nasos-117221927/?c=750000000',
    rating: 5,
    category: 'Sports balls',
    likes: 8
  },
  {
    id: 16,
    name: 'Set Errea 2244 blue 48',
    price: 7390,
    description: 'and the p set Features breathability, wicks away moisture For whom for men Size 48 Composition polyester',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h66/hb7/86332778905630.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/komplekt-errea-2244-sinii-48-120625110/?c=750000000',
    rating: 4,
    category: 'Football uniform',
    likes: 465
  },
  {
    id: 17,
    name: 'JOMA FC Kairat T-shirt 103081.901 Yellow 48',
    price: 8500 ,
    description: 'Type of T-shirt There are no special features For whom for men Size 48 Size to Manufacturers Type of fastener without fastener',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h85/85093812371486.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/futbolka-joma-fk-kairat-103081-901-zheltyi-48-116433957/?c=750000000',
    rating: 4,
    category: 'Football uniform',
    likes: 96
  },
  {
    id: 18,
    name: 'ALPIKA forma011 kit blue 50',
    price: 5322,
    description: 'Type of kit There are no special features For whom for men Size 50 Type of fastener without fastener',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h04/84536336318494.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/komplekt-alpika-forma011-goluboi-50-110858809/?c=750000000',
    rating: 5,
    category: 'Football uniform',
    likes:294
  },
  {
    id: 19,
    name: 'Barcelona 24-25 Soccer Uniform Set red, blue 46',
    price: 6500,
    description: 'Type of kit There are no special features For whom for men Size 46 Size to Manufacturers Composition polyester',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/p47/pdf/20137665.PNG?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/komplekt-futbol-naja-forma-barcelona-24-25-krasnyi-sinii-46-133440077/?c=750000000',
    rating: 3,
    category: 'Football uniform',
    likes: 63
  },
  {
    id: 20,
    name: 'ALPIKA Arsenal FormaV010-2XL red 50',
    price: 5499,
    description: 'Type of kit There are no special features For whom for men Size 50 Manufacturers size is 2XL Type of fastener without fastener',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hfa/84538593411102.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/alpika-arsenal-formav010-2xl-krasnyi-50-110856875/?c=750000000',
    rating: 5,
    category: 'Football uniform',
    likes: 63
  }
];
