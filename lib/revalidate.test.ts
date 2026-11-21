import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { describe, it } from "node:test";
import { checkSignature, publishedId, refreshTargets } from "./revalidate.ts";

const SECRET = "test-secret";
const sign = (t: string, body: string, secret = SECRET) =>
  `t=${t},v1=${createHmac("sha256", secret).update(`${t}.${body}`).digest("base64url")}`;

describe("checkSignature", () => {
  const body = JSON.stringify({ _id: "homePage", _type: "homePage" });
  it("accepts a valid base64url signature", () => assert.equal(checkSignature(sign("1700000000000", body), body, SECRET), true));
  it("accepts padded standard base64 too", () => {
    const sig = createHmac("sha256", SECRET).update(`1.${body}`).digest("base64");
    assert.equal(checkSignature(`t=1, v1=${sig}`, body, SECRET), true);
  });
  it("rejects another secret", () => assert.equal(checkSignature(sign("1", body, "other"), body, SECRET), false));
  it("rejects a changed body", () => assert.equal(checkSignature(sign("1", body), body + " ", SECRET), false));
  it("rejects a changed timestamp", () => assert.equal(checkSignature(sign("1", body).replace("t=1", "t=2"), body, SECRET), false));
  it("rejects missing or malformed headers", () => {
    for (const h of [null, "", "t=1", "v1=abc", "t=x,v1=" + "a".repeat(43), "t=1,v1=!!!"]) assert.equal(checkSignature(h, body, SECRET), false);
  });
  it("rejects when there is no secret", () => assert.equal(checkSignature(sign("1", body, ""), body, ""), false));
});

describe("refreshTargets", () => {
  it("tags the published id and the type", () =>
    assert.deepEqual(refreshTargets({ _id: "drafts.abc", _type: "post", path: "/blog/x/" }), { tags: ["abc", "post"], path: "/blog/x/" }));
  it("does not repeat a singleton's id and type", () => assert.deepEqual(refreshTargets({ _id: "homePage", _type: "homePage" }).tags, ["homePage"]));
  it("drops unsafe paths", () => {
    for (const path of ["//evil.com/", "https://evil.com/", "blog/x/", "/a/../b/", "/a b/", "/x?y=1", 5]) assert.equal(refreshTargets({ path }).path, null);
  });
  it("drops unsafe tags", () => assert.deepEqual(refreshTargets({ _id: "a b", _type: { x: 1 } }).tags, []));
  it("handles non-objects", () => assert.deepEqual(refreshTargets(null), { tags: [], path: null }));
  it("strips release versions", () => assert.equal(publishedId("versions.r1.abc"), "abc"));
});
