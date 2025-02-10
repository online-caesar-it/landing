import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';

type TTeacherDescription = {
	isExpanded: boolean;
	handleDecrease: () => void;
};

export const TeacherDescription = (props: TTeacherDescription) => {
	const { handleDecrease, isExpanded } = props;
	return (
		<motion.div
			className={twMerge(
				'bg-[#303236] p-10 text-white rounded-r-[50px] min-w-[650px] cursor-pointer',
				isExpanded
					? 'opacity-100 pointer-events-auto z-[2]'
					: 'opacity-0 pointer-events-none'
			)}
			animate={{
				x: isExpanded ? 0 : '-100%',
				opacity: isExpanded ? 1 : 0,
			}}
			transition={{
				duration: 0.5,
				ease: 'easeInOut',
			}}
			onClick={handleDecrease}
		>
			<h3 className='font-intro text-4xl mb-5'>иванов иван иванович</h3>
			<p className='text-xl max-h-[250px] overflow-auto'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
				ipsa, amet quidem aut vero quis explicabo modi, recusandae, sed ad magni
				excepturi in dolorum porro eaque beatae consequuntur iste illo!
			</p>
		</motion.div>
	);
};
