import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const FeedbackCard = ({
	color,
	children,
	index,
}: {
	color: string;
	index: number;
	children: ReactNode;
}) => {
	const [isHover, setIsHover] = useState(false);
	const [isFull, setIsFull] = useState(false);

	const handleClick = () => {
		setIsFull(prev => !prev);
	};

	const calculateLeft = () => {
		if (isFull) {
			return index * 120 - 120;
		}

		if (isHover) {
			return index * 120 - 120;
		} else {
			return index * 120;
		}
	};

	const left = calculateLeft();

	return (
		<motion.div
			className={twMerge(
				'p-2 rounded-[50px] aspect-[0.9/1] w-[57.5%] min-h-[600px] shadow-sm'
			)}
			style={{
				backgroundColor: color,
				position: 'absolute',
				left: index * 50,
			}}
			animate={{
				zIndex: isFull ? 10 : 0,
				left: left,
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

export default FeedbackCard;
