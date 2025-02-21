import { directionsColors } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type TDirectionBannerProps = {
	title: string;
	color: string;
	descripion: string;
	iconSrc: string;
};

export const DirectionBanner = (props: TDirectionBannerProps) => {
	const { color, title, descripion, iconSrc } = props;
	const currentColor = directionsColors[color];

	return (
		<SectionLayout className='mb-[120px]'>
			<div className='flex items-start gap-12'>
				<div
					className={twMerge('py-4 px-14 rounded-[40px]', currentColor.iconBg)}
				>
					<Image
						alt={title}
						width={190}
						height={190}
						src={iconSrc}
						className='min-w-[190px] min-h-[190px]'
					/>
				</div>
				<div className=''>
					<h1
						className={twMerge(
							'font-intro mb-2 text-6xl leading-[1]',
							currentColor.title
						)}
					>
						{title}
					</h1>
					<p className='text-white text-3xl'>{descripion}</p>
				</div>
			</div>
		</SectionLayout>
	);
};
