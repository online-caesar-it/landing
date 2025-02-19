import { MotionDiv } from '@/shared/ui';
import Image from 'next/image';

type ChildLearningProps = {
	pb: number;
	icon: string;
	text: string;
	index?: number;
};

export const ChildLearningCard = ({
	icon,
	pb,
	text,
	index,
}: ChildLearningProps) => {
	return (
		<MotionDiv
			delay={index ? +`0.${index + 1}` : 0}
			className='text-white w-fit h-fit max-w-[16%] flex flex-col items-center gap-4 3xl:max-w-[20%] 2xl:!mb-0 lg:max-w-[40%] md:max-w-full'
			style={{
				marginBottom: `${pb}%`,
			}}
		>
			<Image
				src={icon}
				alt=''
				width={175}
				height={175}
				quality={99}
				className='lg:w-[140px] lg:h-[140px] md:w-[100px] md:h-[100px]'
			/>
			<span className='block text-center font-intro text-3xl lg:text-xl md:text-lg md:max-w-[75%]'>
				{text}
			</span>
		</MotionDiv>
	);
};
