import { describe, it, expect } from "vitest";
import { cn } from "./cn";
import { slugify } from "./slugify";
import { contrast, meetsAA } from "./contrast";
import { parseCssTokens, groupTokens } from "./parse-css-tokens";

describe("cn", () => {
  it("joins truthy strings", () => expect(cn("a", "b")).toBe("a b"));
  it("filters falsy values", () => expect(cn("a", undefined, null, false, "b")).toBe("a b"));
  it("handles empty call", () => expect(cn()).toBe(""));
});

describe("slugify", () => {
  it("lower-cases and replaces spaces", () => expect(slugify("Hello World")).toBe("hello-world"));
  it("strips punctuation", () => expect(slugify("Let's go!")).toBe("lets-go"));
  it("collapses multiple dashes", () => expect(slugify("a   b")).toBe("a-b"));
});

describe("contrast", () => {
  it("white on black is ~21", () => expect(contrast("#ffffff", "#000000")).toBeCloseTo(21, 0));
  it("navy on paper passes AA", () => expect(meetsAA("#1F4591", "#F6F8FC")).toBe(true));
});

describe("parseCssTokens", () => {
  const source = `
:root {
  /* ── Brand Primitives ── */
  --navy: #1F4591;
  --sky:  #049DD9;
  /* ── Semantic ── */
  --surface: var(--paper);
}
  `;

  it("extracts all custom properties", () => expect(parseCssTokens(source).length).toBe(3));
  it("assigns group names", () => expect(parseCssTokens(source)[0].group).toBe("Brand Primitives"));
  it("groups tokens correctly", () => {
    const groups = groupTokens(parseCssTokens(source));
    expect(Object.keys(groups)).toEqual(["Brand Primitives", "Semantic"]);
  });
});
