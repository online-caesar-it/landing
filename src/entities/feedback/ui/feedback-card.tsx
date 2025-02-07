import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useFeedbackCard } from '../model';

type TFeedbackCard = {
	color: string;
	index: number;
	children: ReactNode;
	id?: number;
	name?: string;
	description?: string;
};

const FeedbackCard = ({ color, children, index }: TFeedbackCard) => {
	const { handleClick, left, setIsHover, setIsFull, isFull } = useFeedbackCard({
		index,
	});

	return (
		<motion.div
			className={`p-2 rounded-[50px] aspect-[0.9/1] w-[57.5%] min-h-[600px] shadow-sm 2xl:w-[73%] 2xl:rounded-[25px] lg:w-[90%] lg:min-h-[400px]`}
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
