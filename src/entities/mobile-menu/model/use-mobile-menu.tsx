'use client';

import { MobileMenuContext } from '../ui';
import { useContext } from 'react';

export const useMobileMenu = () => {
	const context = useContext(MobileMenuContext);
	return { ...context };
};
