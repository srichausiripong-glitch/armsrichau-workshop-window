import { FREE_PAGES } from "../lib/sabai-cat";

export function SabaiFreePages() {
  return (
    <section className="sc-free" aria-labelledby="sc-free-h">
      <h2 className="sc-title" id="sc-free-h">
        <span className="en">Free pages to try</span>
        <span className="th" lang="th">
          ภาพแจกฟรี ลองระบายก่อน
        </span>
      </h2>
      <ul className="sc-free-list">
        {FREE_PAGES.map((page) => (
          <li key={page.href}>
            <a className="btn btn-line" href={page.href} target="_blank" rel="noopener">
              <span className="en">{page.en}</span>
              <span className="th" lang="th">
                {page.th}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="sc-small">
        <span className="en">Free on Payhip. Checkout asks for an email address.</span>
        <span className="th" lang="th">
          ดาวน์โหลดฟรีบน Payhip ตอนกดรับจะขออีเมล
        </span>
      </p>
    </section>
  );
}
