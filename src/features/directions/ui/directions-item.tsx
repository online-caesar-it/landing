import { directionsColors } from '@/shared/constants';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type TDirectionsItemProps = {
	title: string;
	thumbnail: string;
	colorTheme: string;
	slug: string;
};

export const DirectionsItem = (props: TDirectionsItemProps) => {
	const { colorTheme, thumbnail, title, slug } = props;
	const currentColor = directionsColors[colorTheme];

	return (
		<div className='relative flex flex-col items-center justify-center w-full gap-4 group'>
			<div
				className={twMerge(
					currentColor.iconBg,
					'w-fit py-[18px] px-16 rounded-[50px] flex items-center justify-center'
				)}
			>
				<Image
					src={thumbnail}
					alt={title}
					width={190}
					height={190}
					className='transition-all group-hover:scale-105'
				/>
			</div>
			<div className='text-center'>
				<h3 className='text-white font-intro text-3xl leading-[1] group-hover:underline'>
					{title}
				</h3>
			</div>
			<Link
				href={`/direction/${slug}`}
				className='absolute top-0 left-0 w-full h-full'
			></Link>
		</div>
	);
};
