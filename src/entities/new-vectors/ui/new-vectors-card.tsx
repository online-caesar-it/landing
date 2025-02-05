import clsx from 'clsx';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type NewVectorsCardProps = {
	title: string;
	image: string;
	color: string;
};

export const NewVectorsCard = (props: NewVectorsCardProps) => {
	const { image, title, color } = props;
	const cn = clsx({
		'border-green-60': color === 'green',
		'border-orange-30': color === 'orange',
		'border-white': color === 'white',
	});
	const titleCn = clsx({
		'text-green-60': color === 'green',
		'text-orange-30': color === 'orange',
		'text-white': color === 'white',
	});
	return (
		<div
			className={twMerge(
				'border-[15px] border-solid rounded-[50px] px-[4.15%] py-[6%]',
				cn
			)}
		>
			<div className='mb-[44px]'>
				<Image
					alt=''
					src={image}
					width={245}
					height={245}
					className='rounded-[50px] mx-auto'
				/>
			</div>
			<div
				className={twMerge(
					'font-intro text-center !text-section-lg mb-[40px]',
					titleCn
				)}
			>
				{title}
			</div>
			<div className='text-center text-blue-0 text-[32px]'>
				<span>скоро...</span>
			</div>
		</div>
	);
};
