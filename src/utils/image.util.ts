export function usePlaceHolderImage(event: Event, size: `${number}x${number}`): void {
	const target = event.target as HTMLImageElement;
	target.src = `https://via.placeholder.com/${size}`;
}
