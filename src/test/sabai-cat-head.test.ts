import { describe, expect, it } from "vitest";
import { Route } from "@/routes/sabai-cat";

type Meta = { property?: string; name?: string; content?: string };

const meta = () => {
  const head = Route.options.head?.({} as never) as { meta: Meta[] };
  const get = (key: string) => head.meta.find((m) => m.property === key || m.name === key)?.content;
  return get;
};

describe("Sabai Cat share preview", () => {
  it("uses a 1200x630 JPG so link previews show it uncropped", () => {
    const get = meta();
    expect(get("og:image")).toBe("https://armsrichau.com/img/og-sabai-cat.jpg");
    expect(get("og:image:width")).toBe("1200");
    expect(get("og:image:height")).toBe("630");
    expect(get("twitter:image")).toBe("https://armsrichau.com/img/og-sabai-cat.jpg");
  });

  it("names the page URL and describes the image", () => {
    const get = meta();
    expect(get("og:url")).toBe("https://armsrichau.com/sabai-cat");
    expect(get("og:image:alt")).toBeTruthy();
  });
});
