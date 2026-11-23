/* Tests for the Sanity edit planner: npm test. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { plan, type EditSet, type SanityDoc } from "./plan.ts";

const set: EditSet = {
  name: "t",
  source: "test",
  edits: [
    { doc: "homePage", path: "intro.cards[_key==\"a\"].image", from: "image-old1", to: "image-new1", alt: "New 1", fromFile: "o1", toFile: "n1" },
    { doc: "service-x", path: "sections[_key==\"h\"].image", from: "image-old2", to: "image-new2", alt: "New 2", fromFile: "o2", toFile: "n2" },
  ],
};
const docs = () =>
  new Map<string, SanityDoc>([
    ["homePage", { _id: "homePage", _rev: "r1", intro: { cards: [{ _key: "a", image: { asset: { _ref: "image-old1" } } }] } }],
    ["service-x", { _id: "service-x", _rev: "r2", sections: [{ _key: "h", _type: "hero", image: { asset: { _ref: "image-old2" } } }] }],
  ]);

test("without exclude, every document is planned (default unchanged)", () => {
  const { rows, patches } = plan(set, docs());
  assert.deepEqual(rows.map((r) => r.status), ["change", "change"]);
  assert.deepEqual(patches.map((p) => p.patch.id).sort(), ["homePage", "service-x"]);
});

test("excluded documents get no patch and are reported as excluded", () => {
  const { rows, patches } = plan(set, docs(), ["homePage"]);
  assert.equal(rows.find((r) => r.doc === "homePage")?.status, "excluded");
  assert.equal(rows.find((r) => r.doc === "service-x")?.status, "change");
  assert.deepEqual(patches.map((p) => p.patch.id), ["service-x"]);
  assert.equal(patches[0].patch.set['sections[_key=="h"].overlay'], "left");
});

test("an excluded document that was not fetched is still reported as excluded, not missing", () => {
  const d = docs();
  d.delete("homePage");
  const { rows } = plan(set, d, ["homePage"]);
  assert.equal(rows.find((r) => r.doc === "homePage")?.status, "excluded");
});

const textSet: EditSet = {
  name: "t2",
  source: "test",
  edits: [],
  text: [
    { doc: "service-a", path: "seo.title", from: ["Old A"], to: "New A" },
    { doc: "service-b", path: "seo.title", from: ["Old B"], to: "New B" },
    { doc: "service-c", path: "seo.title", from: ["Old C"], to: "New C" },
    { doc: "service-d", path: "seo.title", from: ["Old D"], to: "New D" },
  ],
};
const textDocs = () =>
  new Map<string, SanityDoc>([
    ["service-a", { _id: "service-a", _rev: "ra", seo: { title: "Old A" } }],
    ["service-b", { _id: "service-b", _rev: "rb", seo: { title: "New B" } }],
    ["service-c", { _id: "service-c", _rev: "rc", seo: { title: "Typed in Studio" } }],
  ]);

test("text edits change only a field that still holds the expected old text", () => {
  const { rows, patches } = plan(textSet, textDocs());
  assert.deepEqual(rows.map((r) => r.status), ["change", "done", "skip", "skip"]);
  assert.match(rows[2].why ?? "", /Typed in Studio/);
  assert.equal(rows[3].why, "document not found");
  assert.deepEqual(patches, [{ patch: { id: "service-a", ifRevisionID: "ra", set: { "seo.title": "New A" } } }]);
});

test("text edits respect exclude", () => {
  const { rows, patches } = plan(textSet, textDocs(), ["service-a"]);
  assert.equal(rows[0].status, "excluded");
  assert.equal(patches.length, 0);
});

test("the TTR-2880 set: titles 30 to 70 characters, descriptions 110 to 170, no em dashes, and the code matches", async () => {
  const { readFile } = await import("node:fs/promises");
  const set = JSON.parse(await readFile(new URL("./seo-meta-2880.json", import.meta.url), "utf8")) as EditSet;
  const code = (await readFile(new URL("../data/services.ts", import.meta.url), "utf8")) + (await readFile(new URL("../data/areas.ts", import.meta.url), "utf8")) + (await readFile(new URL("../data/pages.ts", import.meta.url), "utf8"));
  for (const e of set.text ?? []) {
    const [min, max] = e.path.endsWith("title") ? [30, 70] : [110, 170];
    assert.ok(e.to.length >= min && e.to.length <= max, `${e.doc} ${e.path} is ${e.to.length} characters`);
    assert.ok(!e.to.includes("—"), `${e.doc} has an em dash`);
    assert.ok(code.includes(JSON.stringify(e.to)), `${e.doc}: the code fallback should hold the same text`);
  }
});
