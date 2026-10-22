/** Paragraph helpers. Paragraph strings may contain **bold** markers, [text](/path/) links and "## " or "### " heading markers. */
export const stripMarks = (s: string) =>
  s
    .replace(/^#{2,3} /, "")
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .replace(/\*\*/g, "");

export const plainText = (paras: string[] | undefined) => (paras ?? []).map(stripMarks).join(" ");
