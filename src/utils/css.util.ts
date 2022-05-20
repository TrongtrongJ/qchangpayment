export const CssUnitRegex = /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;

export function isValidCssUnit(str: string): boolean {
	return CssUnitRegex.test(str) !== null;
}
