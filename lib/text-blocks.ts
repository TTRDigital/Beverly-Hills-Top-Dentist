/*
 * Lists and tables inside the CMS paragraph strings. Consecutive paragraphs that start with "- " make one bullet list,
 * "1. " (any number) one numbered list, and "| " one table (the first row is the header; a "| --- |" row is skipped).
 * Every other paragraph is passed through unchanged. Existing content has no paragraph that starts like this.
 */
export type ParaGroup =
  | { kind: "para"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "table"; header: string[]; rows: string[][] };

const BULLET = /^- (.+)$/s;
const NUMBER = /^\d+\. (.+)$/s;
const cells = (row: string) => row.replace(/^\|\s*/, "").replace(/\s*\|\s*$/, "").split(/\s*\|\s*/);

export function groupParas(paras: string[]): ParaGroup[] {
  const out: ParaGroup[] = [];
  for (const p of paras) {
    const last = out[out.length - 1];
    let m: RegExpMatchArray | null;
    if ((m = p.match(BULLET))) {
      if (last?.kind === "ul") last.items.push(m[1]);
      else out.push({ kind: "ul", items: [m[1]] });
    } else if ((m = p.match(NUMBER))) {
      if (last?.kind === "ol") last.items.push(m[1]);
      else out.push({ kind: "ol", items: [m[1]] });
    } else if (p.startsWith("| ")) {
      if (/^\|[\s|:-]+\|$/.test(p)) continue;
      if (last?.kind === "table") last.rows.push(cells(p));
      else out.push({ kind: "table", header: cells(p), rows: [] });
    } else {
      out.push({ kind: "para", text: p });
    }
  }
  return out;
}
