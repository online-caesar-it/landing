'use client';

import { useRouter } from 'next/navigation';
import { localStorageToken } from '../local-storage/token';

export const useLogout = () => {
	const router = useRouter();

	const logout = async () => {
		localStorageToken.deleteRefreshToken();
		localStorageToken.deleteAccessToken();
		window.location.reload();
		router.push('/');
	};

	return logout;
};
