'use client';

import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const CourseCard = ({
	children,
	color,
	index,
}: {
	children: ReactNode;
	color: string;
	index: number;
}) => {
	const [isHover, setIsHover] = useState(false);
	const [isFull, setIsFull] = useState(false);
	const offset = 80;

	const handleClick = () => {
		setIsFull(prev => !prev);
	};

	const calculateTop = () => {
		if (isFull) {
			return index * offset - offset;
		}

		if (isHover) {
			return index * offset - offset;
		} else {
			return index * offset;
		}
	};

	const top = calculateTop();

	return (
		<motion.div
			className={twMerge(
				'rounded-[50px] p-[6.5%] aspect-[2/1] w-full shadow-xl min-h-[300px] 2xl:rounded-[30px]'
			)}
			style={{ backgroundColor: color, position: 'absolute', top: index * 50 }}
			animate={{
				zIndex: isFull ? 10 : 0,
				top: top,
			}}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => {
				setIsHover(false);
				setIsFull(false);
			}}
			onClick={handleClick}
		>
			{children}
		</motion.div>
	);
};

export default CourseCard;
