'use client';

import { userApi } from '../api/user.api';
import { useQuery } from '@tanstack/react-query';
import { localStorageToken } from '../local-storage/token';
import { useEffect, useState } from 'react';

export const useSession = () => {
	const [token, setToken] = useState(localStorageToken.getAccessToken());

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['get-self'],
		queryFn: userApi.getSelf,
		enabled: !!token,
	});

	useEffect(() => {
		const checkToken = () => {
			const newToken = localStorageToken.getAccessToken();
			if (newToken !== token) {
				setToken(newToken);
				refetch();
			}
		};

		const interval = setInterval(checkToken, 500);

		return () => clearInterval(interval);
	}, [token, refetch]);

	return { session: data, isLoading, refetch };
};
