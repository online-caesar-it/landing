import { useQuery } from '@tanstack/react-query';
import { fetchDirections } from '../api';

export const useDirections = () => {
	const { data: directions, isLoading } = useQuery({
		queryKey: ['directions-all'],
		queryFn: fetchDirections,
	});

	return { directions, isLoading };
};
