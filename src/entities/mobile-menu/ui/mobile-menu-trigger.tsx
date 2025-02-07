'use client';

import { twMerge } from 'tailwind-merge';
import { useMobileMenu } from '../model';

export const MobileMenuTrigger = () => {
	const { setOpen, isOpen } = useMobileMenu();

	return (
		<button
			className='relative h-[54px] hidden 2xl:flex 2xl:flex-col 2xl:gap-2 2xl:justify-center cursor-pointer'
			title='Открыть мобильное меню'
			aria-label='Открыть мобильное меню'
			onClick={() => setOpen!(!isOpen)}
		>
			<div
				className={twMerge(
					'relative h-[2px] w-[54px] bg-white',
					isOpen && 'rotate-45 top-[10px]'
				)}
			></div>
			<div
				className={twMerge(
					'relative h-[2px] w-[54px] bg-white',
					isOpen && '-rotate-45'
				)}
			></div>
		</button>
	);
};
