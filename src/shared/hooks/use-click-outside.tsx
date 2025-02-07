'use client';

import { useEffect } from 'react';

type useClickOutsideProps = {
	elementRef: React.RefObject<HTMLElement | null>;
	setIsOpen: (status: boolean) => void;
};

export const useClickOutside = (props: useClickOutsideProps) => {
	const { elementRef, setIsOpen } = props;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				elementRef.current &&
				!elementRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [elementRef, setIsOpen]);
};
