import { SHOP_LINKS } from "../lib/sabai-cat";

export function SabaiShopLinks() {
  return (
    <p className="sc-shops">
      <a className="link" href={SHOP_LINKS.etsy} target="_blank" rel="noopener">
        <span className="en">Etsy shop</span>
        <span className="th" lang="th">
          ร้านบน Etsy
        </span>{" "}
        <span aria-hidden="true">↗</span>
      </a>
      <a className="link" href={SHOP_LINKS.gumroad} target="_blank" rel="noopener">
        <span className="en">Gumroad shop</span>
        <span className="th" lang="th">
          ร้านบน Gumroad
        </span>{" "}
        <span aria-hidden="true">↗</span>
      </a>
      <a className="link" href={SHOP_LINKS.pinterest} target="_blank" rel="noopener">
        Pinterest <span aria-hidden="true">↗</span>
      </a>
    </p>
  );
}
