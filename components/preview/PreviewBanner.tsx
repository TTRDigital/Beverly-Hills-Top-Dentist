import { isPreview } from "@/lib/preview";

/* Shown only while a TTR OS draft preview is open (TTR-566), so nobody mistakes a draft for the live page. */
export async function PreviewBanner() {
  if (!(await isPreview())) return null;
  return (
    <div role="status" style={{ position: "fixed", left: 12, right: 12, bottom: 12, zIndex: 1000, display: "flex", gap: 12, alignItems: "center",
      justifyContent: "space-between", flexWrap: "wrap", padding: "10px 14px", borderRadius: 12, background: "#1f2a24", color: "#fff",
      fontSize: 14, lineHeight: 1.4, boxShadow: "0 6px 24px rgba(0,0,0,.25)" }}>
      <span><strong>Preview.</strong> This is a draft for your review. It is not on the live website yet.</span>
      <a href="/api/preview/exit/" style={{ color: "#fff", textDecoration: "underline" }}>Leave preview</a>
    </div>
  );
}
