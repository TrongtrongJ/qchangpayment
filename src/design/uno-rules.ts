type AtomicCssRule = [string | RegExp, Record<string, string> | ((param: any) => Record<string, string>)];

export const atomicCssRules: AtomicCssRule[] = [
	[ /^m-(\d+)$/, ([ , d ]) => ({ margin: `${d / 4}rem` }) ],
	[ /^p-(\d+)$/, (match) => ({ padding: `${match[1] / 4}rem` }) ]
];
