import { userApi } from '../api/user.api';
import { localStorageToken } from '../local-storage/token';
import { useQuery } from '@tanstack/react-query';

export const useSession = () => {
	const token = localStorageToken.getAccessToken();

	const { data, isLoading } = useQuery({
		queryKey: ['get-self', token],
		queryFn: userApi.getSelf,
		queryHash: '15m',
		enabled: !!token,
		staleTime: 0,
	});

	return { session: data, isLoading };
};
