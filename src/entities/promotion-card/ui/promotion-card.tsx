import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { usePromotionCard } from '../model';
import { MotionDiv } from '@/shared/ui';

type PromotionCardProps = {
	id: number;
	title: string;
	description: string;
	icon: string;
	link: string;
	color: string;
	linkLabel: string;
	index?: number;
};

export const PromotionCard = (props: PromotionCardProps) => {
	const { color, description, icon, title, index } = props;
	const bgColors = usePromotionCard();

	return (
		<MotionDiv
			delay={index ? +`0.${index}` : 0}
			className={twMerge(
				'bg-black rounded-[50px] px-[14.2%] py-[20.1%] aspect-[0.74/1] min-h-[460px] relative border border-solid 2xl:p-[45px] 2xl:rounded-[35px] 2xl:aspect-auto 2xl:min-h-[420px] md:p-[25px] md:rounded-[25px]',
				bgColors[color].background,
				bgColors[color].border
			)}
		>
			<h3
				className={twMerge(
					'font-intro !text-section-sm leading-[1] mb-[40px]',
					bgColors[color].titleColor
				)}
			>
				{title}
			</h3>
			<p className='font-greco uppercase font-bold text-white'>{description}</p>
			<Image
				alt=''
				src={icon}
				width={140}
				height={110}
				quality={90}
				className='absolute scale-150 bottom-[10%] right-[10%] 2xl:bottom-[45px] 2xl:right-[45px] 2xl:scale-150 md:bottom-[35px] md:right-10 md:scale-[1.8]'
			/>
		</MotionDiv>
	);
};
