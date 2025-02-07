'use client';

import { useClickOutside } from '@/shared/hooks';
import { useRef, useState } from 'react';

export const useTeacherCard = () => {
	const [isExpanded, setExpanded] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useClickOutside({ elementRef: ref, setIsOpen: setExpanded });

	const handleExpand = () => setExpanded(true);
	const handleDecrease = () => setExpanded(false);

	return { handleExpand, handleDecrease, isExpanded, ref };
};
