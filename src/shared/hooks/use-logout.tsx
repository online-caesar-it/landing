import { useRouter } from 'next/navigation';
import { localStorageToken } from '../local-storage/token';

export const useLogout = () => {
	const router = useRouter();

	const logout = () => {
		localStorageToken.deleteRefreshToken();
		localStorageToken.deleteAccessToken();
		router.push('/');
	};

	return logout;
};
