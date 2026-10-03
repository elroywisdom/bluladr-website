/**
 * parseCssTokens — reads CSS custom-property declarations and returns
 * a typed list of { name, value, group } objects.
 *
 * Used by the design-system feature to auto-generate swatches
 * from the real token files.
 */

export interface CssToken {
  name: string;
  value: string;
  group: string;
}

export function parseCssTokens(css: string): CssToken[] {
  const tokens: CssToken[] = [];
  const lines = css.split("\n");
  let currentGroup = "Ungrouped";
  const groupComment = /\/\*\s*[─\-]+\s*(.+?)\s*[─\-]+\s*\*\//;
  const propLine = /\s*(--[\w-]+)\s*:\s*(.+?)\s*;/;

  for (const line of lines) {
    const groupMatch = groupComment.exec(line);
    if (groupMatch) { currentGroup = groupMatch[1].trim(); continue; }
    const propMatch = propLine.exec(line);
    if (propMatch) {
      tokens.push({ name: propMatch[1], value: propMatch[2].trim(), group: currentGroup });
    }
  }
  return tokens;
}

export function groupTokens(tokens: CssToken[]): Record<string, CssToken[]> {
  return tokens.reduce<Record<string, CssToken[]>>((acc, token) => {
    if (!acc[token.group]) acc[token.group] = [];
    acc[token.group].push(token);
    return acc;
  }, {});
}
