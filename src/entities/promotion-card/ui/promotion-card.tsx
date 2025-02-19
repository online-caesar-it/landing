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

	const bgColors: Record<
		string,
		{ background: string; titleColor: string; border: string }
	> = {
		blue: {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(33,55,98,1)_60%,rgba(52,118,225,1)_100%)]',
			titleColor: 'text-blue-90',
			border: 'border-blue-90',
		},
		green: {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(56,109,74,1)_60%,rgba(102,229,125,1)_100%)]',
			titleColor: 'text-green-40',
			border: 'border-green-40',
		},
		'light-blue': {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(74,93,131,1)_60%,rgba(137,180,250,1)_100%)]',
			titleColor: 'text-blue-30',
			border: 'border-blue-30',
		},
		pink: {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(115,62,84,1)_60%,rgba(224,108,140,1)_100%)]',
			titleColor: 'text-red-70',
			border: 'border-red-70',
		},
		orange: {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(117,67,22,1)_60%,rgba(255,132,0,1)_100%)]',
			titleColor: 'text-orange-40',
			border: 'border-orange-40',
		},
		'light-green': {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(78,102,85,1)_60%,rgba(166,227,161,1)_100%)]',
			titleColor: 'text-green-30',
			border: 'border-green-30',
		},
	};

	return (
		<div
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
		</div>
	);
};
