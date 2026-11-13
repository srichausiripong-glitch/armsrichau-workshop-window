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
  id: "thai-street-food" | "meowody";
  title: string;
  tagEn: string;
  tagTh: string;
  blurbEn: string;
  blurbTh: string;
  cover: { src: string; width: number; height: number; altEn: string };
  editions: Edition[];
  isbn: string;
};

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
    isbn: "9798142092946",
  },
];
