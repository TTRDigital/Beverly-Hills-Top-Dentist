/** Paragraph helpers. Paragraph strings may contain **bold** markers. */
export const stripMarks = (s: string) => s.replace(/\*\*/g, "");

export const plainText = (paras: string[] | undefined) => (paras ?? []).map(stripMarks).join(" ");
