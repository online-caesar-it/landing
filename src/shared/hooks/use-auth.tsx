import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('access-token');
			setIsAuthenticated(!!token);
		}
	}, []);

	useEffect(() => {
		if (isAuthenticated === null) return;

		if (isAuthenticated === false) {
			router.push('/auth/sign-in');
		}
	}, [isAuthenticated, router]);

	return { isAuthenticated };
};
