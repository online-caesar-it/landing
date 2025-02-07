'use client';

import { createContext, useState } from 'react';

type TMobileMenuContext = {
	isOpen: boolean;
	setOpen: (value: boolean) => void;
};

export const MobileMenuContext = createContext<TMobileMenuContext | null>(null);

type TMobileMenuProps = {
	children?: React.ReactNode;
};

export const MobileMenu = ({ children }: TMobileMenuProps) => {
	const [isOpen, setOpen] = useState<boolean>(false);
	return (
		<MobileMenuContext.Provider value={{ isOpen, setOpen }}>
			{children}
		</MobileMenuContext.Provider>
	);
};
