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
				'relative w-full rounded-[50px] pt-[14%] px-[11%] aspect-[0.71/1] max-h-[800px] overflow-hidden min-h-[745px]',
				color
			)}
		>
			<div className='text-white font-intro text-section-lg mb-[16%] leading-[1.1]'>
				<h3>{title}</h3>
			</div>
			<div className='text-3xl font-greco uppercase'>
				<p>{description}</p>
			</div>
			<div className='absolute bottom-28 right-0'>
				<Image src={icon} alt={title} width={220} height={220} />
			</div>
			<div className='absolute -bottom-1 left-0 w-full bg-grey-30'>
				<Link
					className='block w-full h-full py-[32px] text-center text-white font-intro text-3xl'
					href={link}
				>
					{linkLabel}
				</Link>
			</div>
		</div>
	);
};
