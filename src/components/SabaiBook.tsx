import { STORE_LABEL, STORE_ORDER, type Book } from "../lib/sabai-cat";

export function SabaiBook({ book }: { book: Book }) {
  return (
    <article className="sc-book" id={book.id} aria-labelledby={`${book.id}-h`}>
      <figure className="sc-cover">
        <img
          src={book.cover.src}
          width={book.cover.width}
          height={book.cover.height}
          loading="lazy"
          alt={book.cover.altEn}
        />
      </figure>
      <div className="sc-body">
        <h2 className="sc-title" id={`${book.id}-h`}>
          {book.title}
        </h2>
        <p className="sc-tag">
          <span className="en">{book.tagEn}</span>
          <span className="th" lang="th">
            {book.tagTh}
          </span>
        </p>
        <p className="sc-blurb">
          <span className="en">{book.blurbEn}</span>
          <span className="th" lang="th">
            {book.blurbTh}
          </span>
        </p>

        <ul className="sc-editions">
          {book.editions.map((edition) => (
            <li
              className="sc-edition"
              key={edition.id}
              data-testid={`edition-${book.id}-${edition.id}`}
            >
              <div className="sc-ed-head">
                <span className="sc-ed-name">
                  <span className="en">
                    {edition.en} · {edition.pages} pages
                  </span>
                  <span className="th" lang="th">
                    {edition.th} · {edition.pages} หน้า
                  </span>
                </span>
                <span className="sc-price">${edition.priceUsd}</span>
              </div>
              <div className="sc-buy">
                {STORE_ORDER.filter((store) => edition.links[store]).map((store, i) => (
                  <a
                    key={store}
                    className={i === 0 ? "btn btn-accent" : "btn btn-line"}
                    href={edition.links[store]}
                    target="_blank"
                    rel="noopener"
                  >
                    {STORE_LABEL[store]}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <p className="sc-paperback">
          <span className="en">Paperback coming soon on Amazon</span>
          <span className="th" lang="th">
            เล่มกระดาษ เร็ว ๆ นี้บน Amazon
          </span>
        </p>
        <p className="sc-small">
          <span className="en">
            Printable PDF in US Letter and A4, instant download; no physical book is shipped. For
            personal use. Illustrations were made with AI tools, then cleaned and checked page by
            page for print.
          </span>
          <span className="th" lang="th">
            ไฟล์ PDF ขนาด A4 และ US Letter ดาวน์โหลดได้ทันที ไม่มีเล่มจริงจัดส่ง ใช้ส่วนตัวเท่านั้น
            ภาพประกอบทำด้วยเครื่องมือ AI แล้วเก็บเส้นและตรวจทุกหน้าก่อนพิมพ์
          </span>
        </p>
      </div>
    </article>
  );
}
