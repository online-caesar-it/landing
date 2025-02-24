'use client';

import { useRouter } from 'next/navigation';
import { localStorageToken } from '../local-storage/token';
import { useQueryClient } from '@tanstack/react-query';

export const useLogout = () => {
	const router = useRouter();
	const queryClient = useQueryClient();

	const logout = () => {
		localStorageToken.deleteRefreshToken();
		localStorageToken.deleteAccessToken();
		queryClient.clear();
		router.push('/');
	};

	return logout;
};
