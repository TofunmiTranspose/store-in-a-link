import assets from "./assets";
const data = [
  {
    id: "product-1",
    img: assets.sneaker1,
    title: "Stylish Shoe 1",
    Star: "AiFillStar",
    reviews: "145 reviews",
    prevPrice: "141",
    newPrice: "42",
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    id: "product-2",
    img: assets.sneaker2,
    title: "Stylish Shoe 2",
    star: "AiFillStar",
    reviews: "165 reviews",
    prevPrice: "166",
    newPrice: "101",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },
  {
    id: "product-3",
    img: assets.sneaker3,
    title: "Stylish Shoe 3",
    star: "AiFillStar",
    reviews: "173 reviews",
    prevPrice: "106",
    newPrice: "91",
    company: "Adidas",
    color: "green",
    category: "sneakers",
  },
  {
    id: "product-4",
    img: assets.flat,
    title: "Stylish Shoe 4",
    star: "AiFillStar",
    reviews: "180 reviews",
    prevPrice: "173",
    newPrice: "134",
    company: "Nike",
    color: "black",
    category: "flats",
  },
  {
    id: "product-5",
    img: assets.sneaker1,
    title: "Stylish Shoe 5",
    star: "AiFillStar",
    reviews: "100 reviews",
    prevPrice: "167",
    newPrice: "156",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    id: "product-6",
    img: assets.sneaker2,
    title: "Stylish Shoe 6",
    star: "AiFillStar",
    reviews: "151 reviews",
    prevPrice: "150",
    newPrice: "108",
    company: "Adidas",
    color: "red",
    category: "sneakers",
  },
  {
    id: "product-7",
    img: assets.sneaker3,
    title: "Stylish Shoe 7",
    star: "AiFillStar",
    reviews: "168 reviews",
    prevPrice: "157",
    newPrice: "126",
    company: "Martens",
    color: "green",
    category: "sneakers",
  },
  {
    id: "product-8",
    img: assets.flat,
    title: "Stylish Shoe 8",
    star: "AiFillStar",
    reviews: "187 reviews",
    prevPrice: "122",
    newPrice: "58",
    company: "Adidas",
    color: "black",
    category: "flats",
  },
  {
    id: "product-9",
    img: assets.sneaker1,
    title: "Stylish Shoe 9",
    star: "AiFillStar",
    reviews: "148 reviews",
    prevPrice: "170",
    newPrice: "155",
    company: "Adidas",
    color: "blackck",
    category: "sneakers",
  },
  {
    id: "product-10",
    img: assets.sneaker2,
    title: "Stylish Shoe 10",
    star: "AiFillStar",
    reviews: "141 reviews",
    prevPrice: "131",
    newPrice: "105",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },
  {
    id: "product-11",
    img: assets.sneaker3,
    title: "Stylish Shoe 11",
    star: "AiFillStar",
    reviews: "100 reviews",
    prevPrice: "248",
    newPrice: "109",
    company: "Martens",
    color: "green",
    category: "sneakers",
  },
  {
    id: "product-12",
    img: assets.flat,
    title: "Stylish Shoe 12",
    star: "AiFillStar",
    reviews: "129 reviews",
    prevPrice: "220",
    newPrice: "175",
    company: "Nike",
    color: "black",
    category: "flats",
  },
  {
    id: "product-13",
    img: assets.sneaker1,
    title: "Stylish Shoe 13",
    star: "AiFillStar",
    reviews: "108 reviews",
    prevPrice: "189",
    newPrice: "102",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    id: "product-14",
    img: assets.sneaker2,
    title: "Stylish Shoe 14",
    star: "AiFillStar",
    reviews: "167 reviews",
    prevPrice: "102",
    newPrice: "71",
    company: "Adidas",
    color: "red",
    category: "sneakers",
  },
  {
    id: "product-15",
    img: assets.sneaker3,
    title: "Stylish Shoe 15",
    star: "AiFillStar",
    reviews: "194 reviews",
    prevPrice: "125",
    newPrice: "102",
    company: "Martens",
    color: "green",
    category: "sneakers",
  },
  {
    id: "product-16",
    img: assets.flat,
    title: "Stylish Shoe 16",
    star: "AiFillStar",
    reviews: "120 reviews",
    prevPrice: "121",
    newPrice: "91",
    company: "Puma",
    color: "black",
    category: "flats",
  },
  {
    id: "product-17",
    img: assets.sneaker1,
    title: "Stylish Shoe 17",
    star: "AiFillStar",
    reviews: "105 reviews",
    prevPrice: "226",
    newPrice: "102",
    company: "Nike",
    color: "black",
    category: "sneakers",
  },
  {
    id: "product-18",
    img: assets.sneaker2,
    title: "Stylish Shoe 18",
    star: "AiFillStar",
    reviews: "136 reviews",
    prevPrice: "166",
    newPrice: "115",
    company: "Adidas",
    color: "red",
    category: "sneakers",
  },
  {
    id: "product-19",
    img: assets.sneaker3,
    title: "Stylish Shoe 19",
    star: "AiFillStar",
    reviews: "180 reviews",
    prevPrice: "197",
    newPrice: "831",
    company: "Martens",
    color: "green",
    category: "sneakers",
  },
  {
    id: "product-20",
    img: assets.flat,
    title: "Stylish Shoe 20",
    star: "AiFillStar",
    reviews: "196 reviews",
    prevPrice: "187",
    newPrice: "165",
    company: "Nike",
    color: "black",
    category: "flats",
  },
];

const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    img: "images/products/athletic-cotton-socks-6-pairs.jpg",
    title: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    img: "images/products/intermediate-composite-basketball.jpg",
    title: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    img: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    title: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    img: "images/products/black-2-slot-toaster.jpg",
    title: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    img: "images/products/6-piece-white-dinner-plate-set.jpg",
    title: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    img: "images/products/6-piece-non-stick-baking-set.webp",
    title: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    img: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    title: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    img: "images/products/luxury-tower-set-6-piece.jpg",
    title: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    img: "images/products/liquid-laundry-detergent-plain.jpg",
    title: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    img: "images/products/knit-athletic-sneakers-gray.jpg",
    title: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    img: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    title: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    img: "images/products/round-sunglasses-black.jpg",
    title: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    img: "images/products/women-beach-sandals.jpg",
    title: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    img: "images/products/blackout-curtain-set-beige.webp",
    title: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    img: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    title: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    img: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    title: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    img: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    title: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    img: "images/products/straw-sunhat.webp",
    title: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    img: "images/products/sky-flower-stud-earrings.webp",
    title: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    img: "images/products/women-stretch-popover-hoodie-black.jpg",
    title: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    img: "images/products/bathroom-rug.jpg",
    title: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    img: "images/products/women-knit-ballet-flat-black.jpg",
    title: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    img: "images/products/men-golf-polo-t-shirt-blue.jpg",
    title: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    img: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    title: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    img: "images/products/duvet-cover-set-blue-twin.jpg",
    title: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    img: "images/products/women-chunky-beanie-gray.webp",
    title: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    img: "images/products/men-chino-pants-beige.jpg",
    title: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    img: "images/products/men-athletic-shoes-green.jpg",
    title: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    img: "images/products/men-navigator-sunglasses-brown.jpg",
    title: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    img: "images/products/non-stick-cooking-set-15-pieces.webp",
    title: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    img: "images/products/vanity-mirror-silver.jpg",
    title: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    img: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    title: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    img: "images/products/double-elongated-twist-french-wire-earrings.webp",
    title: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    img: "images/products/round-airtight-food-storage-containers.jpg",
    title: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    img: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    title: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    img: "images/products/blackout-curtains-black.jpg",
    title: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    img: "images/products/cotton-bath-towels-teal.webp",
    title: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    img: "images/products/knit-athletic-sneakers-pink.webp",
    title: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    img: "images/products/countertop-blender-64-oz.jpg",
    title: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    img: "images/products/floral-mixing-bowl-set.jpg",
    title: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    img: "images/products/kitchen-paper-towels-30-pack.jpg",
    title: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    img: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    title: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
];
export default data;
