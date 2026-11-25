import { describe, expect, it } from "vitest";
import { Route } from "@/routes/apply";

type Meta = { property?: string; name?: string; content?: string };

describe("/apply head after the November open call", () => {
  it("describes the call as closed when the link is shared", () => {
    const head = Route.options.head?.({} as never) as { meta: Meta[] };
    for (const key of ["description", "og:description"]) {
      const content = head.meta.find((m) => m.property === key || m.name === key)?.content;
      expect(content).toContain("closed");
      expect(content).not.toMatch(/^Apply/);
    }
  });
});
