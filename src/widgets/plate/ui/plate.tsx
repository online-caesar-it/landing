import Image from 'next/image';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type PlateProps = {
	title?: React.ReactNode;
	variant?: 'primary' | 'secondary';
	platePattern?: string;
	plateImage?: string;
};

export const Plate = (props: PlateProps) => {
	const { title, variant = 'primary', plateImage, platePattern } = props;

	const cn = clsx({
		'bg-linear-purple': variant !== 'secondary',
		'bg-linear-pink': variant === 'secondary',
	});

	return (
		<div className='text-white uppercase rounded-[50px] px-[3.25%] pt-[3.45%] pb-[3.95%] relative overflow-hidden mb-[75px]'>
			<div className='relative z-[3]'>
				<h2 className='text-section-sm max-w-[80%] leading-[1.3]'>{title}</h2>
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
				className='absolute right-10 top-1/2 -translate-y-1/2 z-[2] pointer-events-none'
			/>
			<div className='absolute right-0 top-0 h-full w-1/2 z-[1] pointer-events-none'>
				<Image src={platePattern!} alt='' fill />
			</div>
		</div>
	);
};
