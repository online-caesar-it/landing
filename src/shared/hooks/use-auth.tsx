'use client';

import { useEffect, useState } from 'react';
import { localStorageToken } from '../local-storage/token';

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		const token = localStorageToken.getAccessToken();
		setIsAuthenticated(!!token);
	}, []);

	return { isAuthenticated };
};
