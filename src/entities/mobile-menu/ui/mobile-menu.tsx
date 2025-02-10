'use client';

import { createContext, useEffect, useState } from 'react';
import { MobileMenuTrigger } from './mobile-menu-trigger';
import { MobileMenuLayout } from './mobile-menu-layout';

type TMobileMenuContext = {
	isOpen: boolean;
	setOpen: (value: boolean) => void;
};

export const MobileMenuContext = createContext<TMobileMenuContext | null>(null);

type TMobileMenuProps = {
	children?: React.ReactNode;
};

export const MobileMenu = ({}: TMobileMenuProps) => {
	const [isOpen, setOpen] = useState<boolean>(false);

	useEffect(() => {
		if (isOpen) document.body.classList.add('menu-open');

		return () => {
			document.body.classList.remove('menu-open');
		};
	}, [isOpen]);

	return (
		<MobileMenuContext.Provider value={{ isOpen, setOpen }}>
			<MobileMenuTrigger />
			<MobileMenuLayout />
		</MobileMenuContext.Provider>
	);
};
