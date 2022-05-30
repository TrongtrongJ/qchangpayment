import { BaseRecordType } from '../record.util';

const backend_base_url = `${import.meta.env.VITE_APP_BACKEND_URL}`;

export type ApiModule = 'auth' | 'payment' | 'user' | 'meta';

export type ApiVer = 'V1' | 'V2';

interface ResolveTargetApiProps {
	apiVer?: ApiVer;
	module: ApiModule;
	submodule?: string | null;
	parameter?: string | number | null;
	queryMap?: BaseRecordType<string | number>;
}

export const resolveTargetApi = ({
	apiVer = 'V1',
	module,
	submodule,
	parameter,
	queryMap
}: ResolveTargetApiProps): string => {
	let target_api = backend_base_url;
	target_api += `${apiVer}/${module}`;
	submodule && (target_api += `/${submodule}`);
	parameter && (target_api += `/${parameter}`);
	queryMap &&
		(() => {
			const queryKeys = Object.keys(queryMap);
			const queryValues = Object.values(queryMap);
			target_api += '?';
			for (let i = 0; i < queryKeys.length; i++) {
				target_api += `${queryKeys[i]}=${queryValues[i]}`;
				i !== queryKeys.length - 1 && (target_api += '&');
			}
		})();
	return target_api;
};
