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
		'border-red-100': color === 'red',
		'border-white': color === 'white',
	});
	const titleCn = clsx({
		'text-green-60': color === 'green',
		'text-red-100': color === 'red',
		'text-white': color === 'white',
	});
	return (
		<div
			className={twMerge(
				'flex flex-col items-center border-[15px] border-solid rounded-[50px] px-[4.15%] py-[6%] 2xl:w-[48.7%] 2xl:flex 2xl:flex-row 2xl:p-[24px] 2xl:items-start 2xl:gap-5 2xl:border-[8px] xl:w-full md:rounded-[20px] md:p-[12px]',
				cn
			)}
		>
			<div className='relative w-[245px] aspect-square mb-[44px] 2xl:mb-0 2xl:min-w-[120px] 2xl:w-[120px] md:min-w-[100px] md:w-[100px]'>
				<Image
					alt=''
					fill
					src={image}
					className='rounded-[50px] mx-auto 2xl:rounded-[25px]'
				/>
			</div>
			<div className='2xl:flex 2xl:flex-col 2xl:items-start'>
				<div
					className={twMerge(
						'font-intro text-center !text-section-lg mb-[40px] 2xl:mb-0',
						titleCn
					)}
				>
					{title}
				</div>
				<div className='text-center text-blue-0 text-[32px] 2xl:-mt-4 md:text-xl'>
					<span>скоро...</span>
				</div>
			</div>
		</div>
	);
};
