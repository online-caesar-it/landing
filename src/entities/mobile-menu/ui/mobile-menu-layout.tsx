'use client';

import { useMobileMenu } from '../model';
import { MenuHeader } from './menu-header';
import { MenuAddress } from './menu-address';
import { MenuLinksList } from './menu-links-list';
import { twMerge } from 'tailwind-merge';

type TMobileMenuLayout = {
	children?: React.ReactNode;
	className?: string;
};

export const MobileMenuLayout = (props: TMobileMenuLayout) => {
	const { className } = props;
	const { isOpen } = useMobileMenu();

	return (
		<div
			className={twMerge(
				'fixed bg-grey-85 w-full h-full top-0 -right-full text-white transition-all duration-700',
				isOpen && 'right-0',
				className
			)}
		>
			<div className='max-w-[1400px] w-[94%] mx-auto h-full flex flex-col justify-between overflow-auto scrollbar-hidden'>
				<MenuHeader />
				<div className='flex justify-between items-end gap-5 relative pb-[40px] pt-[60px] lg:flex-col lg:items-start md:pb-[16px]'>
					<MenuLinksList />
					<MenuAddress />
				</div>
			</div>
		</div>
	);
};
