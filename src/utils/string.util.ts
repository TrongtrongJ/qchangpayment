export function removeWhiteSpaces(str: string): string {
	return str.replace(/\s/g, '');
}

export function isNumeric(str: string): boolean {
	return !!str && !isNaN(+str);
}

const charRegex = /^.$/u;
export function isChar(str: string): boolean {
	return charRegex.test(str);
}

export function bootstrapDigit(digit: string | number): string {
	return `${'0'.repeat(Number(digit < 10))}${digit}`;
}

export function capitalizePhrase(phrase: string): string {
	return phrase
		.split(' ')
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(' ');
}

const allNumericRegex = new RegExp('[0-9]', 'g');
export function replaceAllNumericWithChar(numericString: string, withChar: string) {
	return numericString.replaceAll(allNumericRegex, withChar);
}
