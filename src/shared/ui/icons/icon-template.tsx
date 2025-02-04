import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type IconTemplateProps = {
	src: string;
	alt: string;
	className?: string;
};

export const IconTemplate = ({ alt, src, className }: IconTemplateProps) => {
	return (
		<div
			className={twMerge('relative w-fit h-fit pointer-events-none', className)}
		>
			<Image
				src={src}
				alt={alt}
				width={615}
				height={615}
				className='pointer-events-none'
			/>
		</div>
	);
};
