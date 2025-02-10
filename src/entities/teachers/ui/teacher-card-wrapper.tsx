import Image from 'next/image';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';

type TeacherCardWrapper = {
	isExpanded: boolean;
	handleExpand: () => void;
	children?: React.ReactNode;
};

export const TeacherCardWrapper = (props: TeacherCardWrapper) => {
	const { isExpanded, handleExpand, children } = props;

	return (
		<motion.div
			className={twMerge(
				'relative min-w-[400px] max-w-[401px] aspect-square rounded-[50px] overflow-hidden cursor-pointer group z-10 transition-all duration-500',
				isExpanded && 'rounded-r-none pointer-events-none'
			)}
			onClick={handleExpand}
			animate={{ width: isExpanded ? '1050' : '400px' }}
			transition={{ duration: 0.5 }}
		>
			<Image
				fill
				priority
				sizes=''
				alt='Учитель'
				src='/images/mock.png'
				className='object-cover pointer-events-none'
			/>
			<div
				className={twMerge(
					'bg-black opacity-0 absolute top-0 left-0 w-full h-full z-[1] group-hover:opacity-30 transition-all duration-300',
					isExpanded && 'opacity-30'
				)}
			></div>
			{children}
		</motion.div>
	);
};
