import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type PromoCardProps = {
	id: number;
	title: string;
	description: string;
	icon: string;
	link: string;
	color: string;
	linkLabel: string;
};

export const PromoCard = (props: PromoCardProps) => {
	const { color, description, icon, link, title, linkLabel } = props;
	return (
		<div
			className={twMerge(
				'relative w-full rounded-[50px] pt-[8%] px-[8%] aspect-[0.71/1] max-h-[800px] overflow-hidden min-h-[745px] md:p-[24px] md:rounded-[25px] md:min-h-[460px] md:aspect-auto xsm:p-[20px]',
				color
			)}
		>
			<div className='text-white font-intro text-section-lg mb-[16%] leading-[1.1] md:mb-[20px]'>
				<h3>{title}</h3>
			</div>
			<div className='text-3xl font-greco uppercase md:text-base'>
				<p>{description}</p>
			</div>
			<div className='absolute bottom-28 right-0 md:bottom-14 md:scale-75 xsm:scale-[0.55] xsm:-right-10 xsm:bottom-10'>
				<Image src={icon} alt={title} width={220} height={220} />
			</div>
			<div className='absolute -bottom-1 left-0 w-full bg-grey-30 md:rounded-full md:bottom-[24px] md:left-[24px] md:right-[24px] md:w-auto'>
				<Link
					className='block w-full h-full py-[32px] text-center text-white font-intro text-3xl md:text-sm md:py-[16px] md:px-[24px] sm:text-[12px]'
					href={link}
				>
					{linkLabel}
				</Link>
			</div>
		</div>
	);
};
