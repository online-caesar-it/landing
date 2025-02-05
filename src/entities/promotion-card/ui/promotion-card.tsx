import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type PromotionCardProps = {
	id: number;
	title: string;
	description: string;
	icon: string;
	link: string;
	color: string;
	linkLabel: string;
};

export const PromotionCard = (props: PromotionCardProps) => {
	const { color, description, icon, title } = props;

	return (
		<div
			className={twMerge(
				'bg-black rounded-[50px] px-[14.2%] py-[20.1%] aspect-[0.74/1] min-h-[460px] relative',
				color
			)}
		>
			<h3 className='text-blue-0 font-intro text-section-sm leading-[1] mb-[40px]'>
				{title}
			</h3>
			<p className='font-greco uppercase font-bold text-white'>{description}</p>
			<Image
				src={icon}
				alt=''
				width={140}
				height={110}
				className='absolute bottom-[10%] right-[10%]'
			/>
		</div>
	);
};
