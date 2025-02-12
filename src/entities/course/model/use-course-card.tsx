import { useState } from 'react';

type TUseCourseCardProps = {
	index: number;
};

export const useCourseCard = ({ index }: TUseCourseCardProps) => {
	const [isHover, setIsHover] = useState(false);
	const [isFull, setIsFull] = useState(false);
	const offset = 80;
	const slideOffset = 40;

	const handleClick = () => {
		setIsFull(prev => !prev);
	};

	const calculateTop = () => {
		if (isFull) {
			return index * offset - slideOffset;
		}

		if (isHover) {
			return index * offset - slideOffset;
		} else {
			return index * offset;
		}
	};

	const top = calculateTop();

	return { top, handleClick, setIsHover, isFull, setIsFull };
};
