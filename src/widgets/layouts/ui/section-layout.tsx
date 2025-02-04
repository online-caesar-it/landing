import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionLayoutProps = {
	className?: string;
	children?: ReactNode;
	id?: string;
};

const SectionLayout = ({ className, children, id }: SectionLayoutProps) => {
	return (
		<section
			id={id}
			className={twMerge('max-w-[1400px] w-[94%] mx-auto', className)}
		>
			{children}
		</section>
	);
};

export default SectionLayout;
