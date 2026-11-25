// Sabai Cat colouring books sold on Payhip, Etsy and Gumroad. Prices and links
// must match the stores; edit here and the /sabai-cat page follows.

export type Store = "payhip" | "etsy" | "gumroad";

export type Edition = {
  id: string;
  en: string;
  th: string;
  pages: number;
  priceUsd: string;
  links: Partial<Record<Store, string>>;
};

export type Book = {
  id: string;
  title: string;
  tagEn: string;
  tagTh: string;
  blurbEn: string;
  blurbTh: string;
  cover: { src: string; width: number; height: number; altEn: string };
  editions: Edition[];
  // True while an Amazon paperback is on its way; hides the note otherwise.
  paperbackSoon: boolean;
  isbn?: string;
};

export type FreePage = { href: string; en: string; th: string };

// Payhip first: lowest fees and paid to Arm directly.
export const STORE_ORDER: Store[] = ["payhip", "etsy", "gumroad"];

export const STORE_LABEL: Record<Store, string> = {
  payhip: "Payhip",
  etsy: "Etsy",
  gumroad: "Gumroad",
};

export const SHOP_LINKS = {
  etsy: "https://sabaicatcoloring.etsy.com",
  gumroad: "https://sabaicat.gumroad.com",
  pinterest: "https://www.pinterest.com/sabaicatcoloring/",
};

export const BOOKS: Book[] = [
  {
    id: "thai-street-food",
    title: "Thai Street Food",
    tagEn: "Cozy cat coloring pages",
    tagTh: "สมุดระบายสีแมวกับอาหารริมทาง",
    blurbEn:
      "Kati, a round little Thai street cat, eats her way through mango sticky rice, Thai iced tea, pad thai, tuk-tuk rides, floating markets and night markets. Bold, easy outlines for adults and teens.",
    blurbTh:
      "กะทิ แมวกลม ๆ ตะลอนกินข้าวเหนียวมะม่วง ชาไทย ผัดไทย นั่งตุ๊กตุ๊ก ตลาดน้ำ และตลาดกลางคืน ลายเส้นหนา ช่องใหญ่ ระบายง่าย",
    cover: {
      src: "/img/sabai-cat-street-food.webp",
      width: 1200,
      height: 1200,
      altEn:
        "Kati the cat selling snacks from a street-food cart under an orange and green umbrella",
    },
    editions: [
      {
        id: "mini",
        en: "Mini Pack",
        th: "ชุดเล็ก",
        pages: 12,
        priceUsd: "3.50",
        links: {
          payhip: "https://payhip.com/b/qQyB4",
          etsy: "https://www.etsy.com/listing/4615639252",
          gumroad: "https://sabaicat.gumroad.com/l/sabai-cat-mini",
        },
      },
      {
        id: "full",
        en: "Full Collection",
        th: "ชุดเต็ม",
        pages: 40,
        priceUsd: "5.99",
        links: {
          payhip: "https://payhip.com/b/PH3Np",
          etsy: "https://www.etsy.com/listing/4615628891",
          gumroad: "https://sabaicat.gumroad.com/l/sabai-cat-full",
        },
      },
    ],
    paperbackSoon: true,
    isbn: "9798141978265",
  },
  {
    id: "meowody",
    title: "Meowody",
    tagEn: "A Thai soap opera starring cats",
    tagTh: "ละครหลังข่าว ฉบับเหมียว ๆ",
    blurbEn:
      "Slaps, evil twins and slow-motion runs in the rain: every Thai prime-time drama trope, played by cats. A funny caption under every scene.",
    blurbTh:
      "ตบนุ่ม ๆ แฝดสลับตัว วิ่งสโลว์โมชันกลางสายฝน ครบทุกมุกละครหลังข่าว แต่เล่นโดยแมวทั้งเรื่อง ทุกภาพมีประโยคเด็ดใต้ภาพ",
    cover: {
      src: "/img/sabai-cat-meowody.webp",
      width: 1200,
      height: 1200,
      altEn: "Three cartoon cats gasping on a theatre stage under red curtains",
    },
    editions: [
      {
        id: "en",
        en: "English edition",
        th: "ฉบับภาษาอังกฤษ",
        pages: 30,
        priceUsd: "4.99",
        links: {
          payhip: "https://payhip.com/b/DOpuB",
          etsy: "https://www.etsy.com/listing/4615655065",
          gumroad: "https://sabaicat.gumroad.com/l/meowody",
        },
      },
      {
        id: "th",
        en: "Thai edition",
        th: "ฉบับภาษาไทย",
        pages: 30,
        priceUsd: "2.99",
        links: { payhip: "https://payhip.com/b/9lMSs" },
      },
    ],
    paperbackSoon: true,
    isbn: "9798142092946",
  },
  {
    id: "katis-cafe",
    title: "Kati's Café",
    tagEn: "A year of Thai festivals",
    tagTh: "ร้านกาแฟของกะทิ ตลอดปีแห่งเทศกาลไทย",
    blurbEn:
      "Kati's tiny café changes its decorations and treats for every Thai festival of the year: Songkran water fights, Chinese New Year in Yaowarat, Loy Krathong by the river and New Year's Eve fireworks.",
    blurbTh:
      "ร้านเล็ก ๆ ของกะทิเปลี่ยนของตกแต่งและขนมไปตามเทศกาลไทยทั้งปี ตั้งแต่สงกรานต์ ตรุษจีนที่เยาวราช ลอยกระทงริมน้ำ จนถึงพลุคืนส่งท้ายปี",
    cover: {
      src: "/img/sabai-cat-katis-cafe.webp",
      width: 1200,
      height: 1200,
      altEn:
        "Kati the cat holding a krathong in her café, with lanterns and a full moon over the river",
    },
    editions: [
      {
        id: "en",
        en: "Printable PDF, English",
        th: "ไฟล์ PDF ภาษาอังกฤษ",
        pages: 30,
        priceUsd: "4.99",
        links: {
          payhip: "https://payhip.com/b/Y5nJO",
          etsy: "https://www.etsy.com/listing/4616187839",
          gumroad: "https://sabaicat.gumroad.com/l/katis-cafe",
        },
      },
    ],
    paperbackSoon: false,
  },
  {
    id: "tropical-christmas",
    title: "A Tropical Thai Christmas",
    tagEn: "Cozy cat Christmas coloring pages",
    tagTh: "คริสต์มาสแบบเมืองร้อน ฉบับแมว",
    blurbEn:
      "No snow, just sunshine and Santa hats. Kati delivers gifts by tuk-tuk, builds a sandman on the beach and decorates a coconut tree. Includes printable gift tags and cards.",
    blurbTh:
      "ไม่มีหิมะ มีแต่แดดกับหมวกซานต้า กะทิขี่ตุ๊กตุ๊กส่งของขวัญ ปั้นตุ๊กตาทรายริมหาด และแต่งต้นมะพร้าว มีป้ายห้อยของขวัญและการ์ดให้พิมพ์ด้วย",
    cover: {
      src: "/img/sabai-cat-christmas.webp",
      width: 1200,
      height: 1200,
      altEn: "Kati the cat in a Santa hat driving a tuk-tuk full of presents under palm trees",
    },
    editions: [
      {
        id: "en",
        en: "Printable PDF, English, with craft pages",
        th: "ไฟล์ PDF ภาษาอังกฤษ พร้อมหน้างานฝีมือ",
        pages: 38,
        priceUsd: "4.99",
        links: {
          payhip: "https://payhip.com/b/OeS1L",
          etsy: "https://www.etsy.com/listing/4617581069",
          gumroad: "https://sabaicat.gumroad.com/l/tropical-christmas",
        },
      },
    ],
    paperbackSoon: false,
  },
  {
    id: "thai-market-game",
    title: "Kati's Thai Market Game",
    tagEn: "A Thai-English game for kids aged 4 to 7",
    tagTh: "กะทิฝากซื้ออะไรนะ? เกมสองภาษาสำหรับเด็ก 4–7 ขวบ",
    blurbEn:
      "Color the stalls, learn six Thai food words and play shop with Kati. A printable family game in Thai and English.",
    blurbTh:
      "ระบายสีร้าน ทายคำศัพท์อาหารไทย 6 คำ แล้วเล่นขายของกับกะทิ เกมพิมพ์เล่นในบ้าน สองภาษาไทยและอังกฤษ",
    cover: {
      src: "/img/sabai-cat-market-game.webp",
      width: 1200,
      height: 1200,
      altEn: "Cover of Kati's Thai Market Game with coloring pages and a mango word card",
    },
    editions: [
      {
        id: "home",
        en: "Home edition",
        th: "ฉบับเล่นที่บ้าน",
        pages: 12,
        priceUsd: "2.99",
        links: {
          payhip: "https://payhip.com/b/pYF3g",
          etsy: "https://www.etsy.com/listing/4622248074",
          gumroad: "https://sabaicat.gumroad.com/l/thai-market-game",
        },
      },
      {
        id: "classroom",
        en: "Classroom licence, one school",
        th: "ฉบับห้องเรียน ใช้ได้ 1 โรงเรียน",
        pages: 12,
        priceUsd: "12.99",
        links: { payhip: "https://payhip.com/b/m1GCH" },
      },
    ],
    paperbackSoon: true,
    isbn: "9798144741163",
  },
];

// Free printable packs on Payhip (checkout asks for an email address).
export const FREE_PAGES: FreePage[] = [
  { href: "https://payhip.com/b/nvDFV", en: "3-page sampler", th: "ชุดตัวอย่าง 3 ภาพ" },
  { href: "https://payhip.com/b/4Knl9", en: "5 cozy cat pages", th: "แมวน่ารัก 5 ภาพ" },
  { href: "https://payhip.com/b/1TAka", en: "Christmas gift tags", th: "ป้ายห้อยของขวัญคริสต์มาส" },
];
