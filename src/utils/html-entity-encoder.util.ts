import htmlEntityDecoder from 'he';

export function decodeHTMLEntity(entity: string): string {
	return htmlEntityDecoder.decode(entity);
}
