'use client';

import { useState, useEffect } from 'react';

type TFeedbackCard = {
	index: number;
};

export const useFeedbackCard = ({ index }: TFeedbackCard) => {
	const [isHover, setIsHover] = useState(false);
	const [isFull, setIsFull] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const offset = isMobile ? 80 : 120;

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleClick = () => {
		setIsFull(prev => !prev);
	};

	const calculateLeft = () => {
		if (isFull) {
			return index * offset - offset;
		}

		if (isHover) {
			return index * offset - offset;
		} else {
			return index * offset;
		}
	};

	const left = calculateLeft();

	return { left, handleClick, setIsHover, setIsFull, isFull };
};
