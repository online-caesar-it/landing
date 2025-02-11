'use client';

import { useCourseCard } from '../model';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

type TCourseCardProps = {
	children: ReactNode;
	color: string;
	index: number;
};

const CourseCard = ({ children, color, index }: TCourseCardProps) => {
	const { handleClick, setIsHover, top, isFull, setIsFull } = useCourseCard({
		index,
	});

	return (
		<motion.div
			className={twMerge(
				'rounded-[50px] p-[6.5%] aspect-[2/1] w-full shadow-xl min-h-[300px] 2xl:rounded-[30px] cursor-pointer'
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
