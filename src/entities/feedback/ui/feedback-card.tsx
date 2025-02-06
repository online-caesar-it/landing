import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'motion/react';

const FeedbackCard = ({
	color,
	children,
	index,
}: {
	color: string;
	index: number;
	children: ReactNode;
	id?: number;
	name?: string;
	description?: string;
}) => {
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
