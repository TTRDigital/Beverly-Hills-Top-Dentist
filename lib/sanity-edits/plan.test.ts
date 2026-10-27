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
