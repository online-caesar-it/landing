import Image from 'next/image';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type PlateProps = {
	title?: React.ReactNode;
	variant?: 'primary' | 'secondary';
	platePattern?: string;
	plateImage?: string;
	mode?: 'standart' | 'full-plate';
};

export const Plate = (props: PlateProps) => {
	const {
		title,
		variant = 'primary',
		plateImage,
		platePattern,
		mode = 'standart',
	} = props;

	const cn = clsx({
		'bg-linear-purple': variant !== 'secondary',
		'bg-linear-pink': variant === 'secondary',
		'bg-red-65': mode === 'full-plate',
	});

	if (mode === 'full-plate') {
		return (
			<div className='text-white uppercase rounded-[50px] px-[4.58%] pt-[4.8%] pb-[4.1%] relative overflow-hidden mb-[75px] md:mb-[40px] md:p-[30px] md:rounded-[25px] xsm:p-[20px] xsm:rounded-[20px]'>
				<div className='relative z-[3]'>
					<h2 className='text-section-md leading-[1.3] font-intro max-w-[95%] md:text-2xl md:max-w-full'>
						{title}
					</h2>
				</div>
				<div
					className={twMerge(
						'absolute top-0 left-0 w-full h-full z-[2] pointer-events-none',
						cn
					)}
				></div>
			</div>
		);
	}

	return (
		<div className='text-white uppercase rounded-[50px] px-[3.25%] pt-[3.45%] pb-[3.95%] relative overflow-hidden mb-[75px] lg:mb-[40px] lg:flex lg:flex-col lg:gap-4 lg:rounded-[25px] lg:p-[20px]'>
			<div className='relative z-[3]'>
				<h2 className='text-section-sm max-w-[77%] leading-[1.3] 4xl:max-w-[60%] md:max-w-full md:text-xl xsm:text-lg font-medium'>
					{title}
				</h2>
			</div>
			<div
				className={twMerge(
					'absolute top-0 left-0 w-full h-full z-[2] pointer-events-none',
					cn
				)}
			></div>
			<Image
				width={269}
				height={269}
				src={plateImage!}
				alt='Иконка персонажа'
				className='absolute right-10 top-1/2 -translate-y-1/2 z-[2] pointer-events-none md:static md:pointer-events-all md:-translate-y-0 md:mx-auto'
			/>
			<div className='absolute right-0 top-0 h-full w-1/2 z-[1] pointer-events-none md:w-full'>
				<Image src={platePattern!} alt='' fill className='object-cover' />
			</div>
		</div>
	);
};
