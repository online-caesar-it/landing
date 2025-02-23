'use client';

import { userApi } from '../api/user.api';
import { useQuery } from '@tanstack/react-query';
import { localStorageToken } from '../local-storage/token';

export const useSession = () => {
	const token = localStorageToken.getAccessToken();

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['get-self'],
		queryFn: userApi.getSelf,
		enabled: !!token,
	});

	return { session: data, isLoading, refetch };
};
