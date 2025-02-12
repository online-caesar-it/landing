import { userApi } from '../api/user.api';
import { useQuery } from '@tanstack/react-query';
import { localStorageToken } from '../local-storage/token';

export const useSession = () => {
	const token = localStorageToken.getAccessToken();

	const { data, isLoading } = useQuery({
		queryKey: ['get-self'],
		queryFn: userApi.getSelf,
		queryHash: '15m',
		enabled: !!token,
		staleTime: 0,
	});

	return { session: data, isLoading };
};
