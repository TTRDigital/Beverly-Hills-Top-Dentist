import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { bodyItems, cleanSlug, sitePath, splitFaq, type BodyItem } from "./seo-page.ts";

const SITE = "https://beverlyhillstopdentist.com";
let k = 0;
const span = (text: string, marks: string[] = []) => ({ _type: "span", _key: `s${k++}`, text, marks });
const block = (style: string, children: unknown[], extra: Record<string, unknown> = {}) => ({ _type: "block", _key: `b${k++}`, style, markDefs: [], children, ...extra });
const texts = (items: BodyItem[]) => items.map((i) => (i.kind === "text" ? i.text : `[img ${i.image.src}]`));

describe("sitePath", () => {
  it("turns own-site links into paths", () => assert.equal(sitePath("https://www.beverlyhillstopdentist.com/services/x/", SITE), "/services/x/"));
  it("keeps other sites", () => assert.equal(sitePath("https://www.ada.org/a", SITE), "https://www.ada.org/a"));
  it("keeps site paths", () => assert.equal(sitePath("/appointment/", SITE), "/appointment/"));
});

describe("bodyItems", () => {
  it("reads TTR OS Portable Text in the site's paragraph format", () => {
    const body = [
      block("normal", [span("Plain "), span("bold", ["strong"]), span(" and "), span("a link", ["l1"]), span(" and "), span("italic", ["em"])], {
        markDefs: [{ _type: "link", _key: "l1", href: "https://beverlyhillstopdentist.com/services/cosmetic-dentistry/" }],
      }),
      block("h2", [span("Getting here")]),
      block("h3", [span("By car")]),
      block("h4", [span("Parking")]),
      block("normal", [span("one")], { listItem: "bullet", level: 1 }),
      block("normal", [span("two")], { listItem: "number", level: 1 }),
      block("normal", [span("   ")]),
      { _type: "image", _key: "i1", src: "https://cdn.sanity.io/images/p/d/a.jpg", alt: "Office", width: 1600, height: 900 },
      { _type: "image", _key: "i2" },
      "A plain paragraph typed in Studio",
    ];
    assert.deepEqual(texts(bodyItems(body, SITE)), [
      "Plain **bold** and [a link](/services/cosmetic-dentistry/) and italic",
      "## Getting here",
      "### By car",
      "### Parking",
      "- one",
      "1. two",
      "[img https://cdn.sanity.io/images/p/d/a.jpg]",
      "A plain paragraph typed in Studio",
    ]);
  });
  it("is empty for a missing body", () => assert.deepEqual(bodyItems(undefined, SITE), []));
  it("keeps a link with brackets in its address readable", () => {
    const b = block("normal", [span("x", ["l"])], { markDefs: [{ _type: "link", _key: "l", href: "https://example.com/a_(b)" }] });
    assert.deepEqual(texts(bodyItems([b], SITE)), ["[x](https://example.com/a_%28b%29)"]);
  });
});

describe("splitFaq", () => {
  const t = (text: string): BodyItem => ({ kind: "text", text });
  it("takes the questions section out of the body", () => {
    const r = splitFaq([t("Intro"), t("## Why us"), t("Text"), t("## Frequently asked questions"), t("### Is parking close?"), t("Yes."), t("More."), t("### Empty?"), t("## Visit us"), t("Closing")]);
    assert.deepEqual(texts(r.before), ["Intro", "## Why us", "Text"]);
    assert.deepEqual(r.faq, { heading: "Frequently asked questions", items: [{ question: "Is parking close?", answer: ["Yes.", "More."] }] });
    assert.deepEqual(texts(r.after), ["## Visit us", "Closing"]);
  });
  it("leaves the body whole without a questions section", () => {
    const items = [t("Intro"), t("## Questions to ask yourself"), t("Text")];
    assert.deepEqual(splitFaq(items), { before: items, faq: null, after: [] });
  });
});

describe("cleanSlug", () => {
  it("accepts one lowercase segment", () => assert.equal(cleanSlug("/dentist-near-malibu/"), "dentist-near-malibu"));
  it("rejects anything else", () => {
    for (const v of ["", "a/b", "Dentist", "../x", null, 3]) assert.equal(cleanSlug(v), null);
  });
});
