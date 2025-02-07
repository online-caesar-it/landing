'use client';

import Logo from '@/widgets/header/ui/logo';
import { MobileMenuTrigger } from './mobile-menu-trigger';
import { twMerge } from 'tailwind-merge';
import { useMobileMenu } from '../model';

type TMobileMenuLayout = {
	children?: React.ReactNode;
	className?: string;
};

export const MobileMenuLayout = (props: TMobileMenuLayout) => {
	const { children, className } = props;
	const { isOpen } = useMobileMenu();
	return (
		<div
			className={twMerge(
				'fixed bg-black w-full h-full top-0 -right-full text-white transition-all duration-700',
				isOpen && 'right-0',
				className
			)}
		>
			<div className='max-w-[1400px] w-[94%] mx-auto'>
				<div className='flex justify-between items-center gap-4 py-5'>
					<Logo />
					<MobileMenuTrigger />
				</div>
				<div className=''>{children}</div>
			</div>
		</div>
	);
};
