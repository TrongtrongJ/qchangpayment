import { Ref, ComputedRef, unref } from 'vue';

import { isPrimitive } from './primitive.util';

export type BaseRecordType = Record<string, any>;

export function deepClone<T extends BaseRecordType>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}

export function syncKeyValues<T extends BaseRecordType, U extends T & BaseRecordType>(
	toObj: T,
	fromObj: U,
	specifiedKeys?: (keyof T)[]
): void {
	const keysToSync = specifiedKeys || Object.keys(toObj);
	const keysToSyncMap = keysToSync.reduce((acc, cur) => {
		const fromObjValue = fromObj[cur];
		return {
			...acc,
			[cur]: isPrimitive(fromObjValue) ? fromObjValue : deepClone(fromObjValue)
		};
	}, {});
	Object.assign(toObj, keysToSyncMap);
}

export function resetAllKeysTo<T extends BaseRecordType>(obj: T, toVal: string | boolean | number | null): void {
	const keyMap = Object.keys(obj).reduce((acc, cur) => {
		return { [cur]: toVal, ...acc };
	}, {});
	Object.assign(obj, keyMap);
}

export function deriveReactiveValidity(
	reactiveObj: Record<string, boolean | Ref<boolean> | ComputedRef<boolean>>
): boolean {
	return Object.keys(reactiveObj).every((k) => unref(reactiveObj[k]));
}
