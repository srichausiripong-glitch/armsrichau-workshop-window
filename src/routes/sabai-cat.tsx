import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import portfolioCss from "../portfolio.css?url";
import applyCss from "../apply.css?url";
import sabaiCss from "../sabai-cat.css?url";
import { SabaiBook } from "../components/SabaiBook";
import { SabaiFreePages } from "../components/SabaiFreePages";
import { SabaiShopLinks } from "../components/SabaiShopLinks";
import { BOOKS } from "../lib/sabai-cat";

const TITLE = "Sabai Cat Coloring — cozy cat coloring pages";
const DESCRIPTION =
  "Printable cat coloring books and a Thai-English kids' game by Arm Srichau, starring Kati the Thai street cat. Thai Street Food, Meowody, Kati's Café, A Tropical Thai Christmas and more on Payhip, Etsy or Gumroad.";
const PAGE_URL = "https://armsrichau.com/sabai-cat";
// 1200x630 JPG: the shape link previews expect, and readable by apps that skip webp.
const OG_IMAGE = "https://armsrichau.com/img/og-sabai-cat.jpg";

// Same pre-paint language pick as the home page; English unless ?lang=th or a saved choice.
const PRE_PAINT = `(function () {
  var d = document.documentElement;
  var lang = new URLSearchParams(location.search).get('lang');
  if (lang !== 'en' && lang !== 'th') { try { lang = localStorage.getItem('lang'); } catch (e) {} }
  d.dataset.lang = lang === 'th' ? 'th' : 'en';
  if (lang === 'th') d.lang = 'th';
  d.classList.add('js');
})();`;

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230E2233'/%3E%3Ctext x='32' y='45' font-family='Arial Black,Arial,sans-serif' font-weight='900' font-size='38' text-anchor='middle' fill='%23F7F9FB'%3EA%3C/text%3E%3C/svg%3E";

export const Route = createFileRoute("/sabai-cat")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#F7F9FB" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Covers of the Sabai Cat coloring books Thai Street Food and Meowody",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "icon", href: FAVICON },
      { rel: "canonical", href: PAGE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anuphan:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=IBM+Plex+Sans+Thai:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
      { rel: "stylesheet", href: portfolioCss },
      { rel: "stylesheet", href: applyCss },
      { rel: "stylesheet", href: sabaiCss },
    ],
    scripts: [{ children: PRE_PAINT }],
  }),
  component: SabaiCatPage,
});

type Lang = "en" | "th";

function SabaiCatPage() {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(document.documentElement.dataset["lang"] === "th" ? "th" : "en");
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    document.documentElement.dataset["lang"] = l;
    document.documentElement.lang = l;
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* storage blocked */
    }
  }

  return (
    <div className="portfolio">
      <header className="apply-top">
        <div className="apply-top-inner wrap">
          <a href="/" className="apply-back">
            <span aria-hidden="true">←</span>
            <span className="en">Arm Srichau</span>
            <span className="th" lang="th">
              อาร์ม ศรีเชื้อ
            </span>
          </a>
          <div className="lang" role="group" aria-label="Language">
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              EN
            </button>
            <button
              type="button"
              aria-pressed={lang === "th"}
              onClick={() => setLang("th")}
              lang="th"
            >
              ไทย
            </button>
          </div>
        </div>
      </header>

      <main className="sc-main">
        <div className="wrap">
          <div className="sc-intro">
            <h1 className="h-section">Sabai Cat Coloring</h1>
            <p className="lede">
              <span className="en">
                Cozy, bold and easy coloring pages starring Kati, a little Thai street cat. Designed
                in Bangkok.
              </span>
              <span className="th" lang="th">
                สมุดระบายสีลายเส้นหนา ระบายง่าย นำแสดงโดยกะทิ แมวริมทางตัวกลม ออกแบบที่กรุงเทพฯ
              </span>
            </p>
            <SabaiShopLinks />
          </div>

          <div className="sc-books">
            {BOOKS.map((book, i) => (
              <SabaiBook key={book.id} book={book} priority={i === 0} />
            ))}
          </div>

          <SabaiFreePages />
        </div>
      </main>
    </div>
  );
}
