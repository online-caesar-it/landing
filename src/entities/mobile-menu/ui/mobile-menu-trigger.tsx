'use client';
import { BurgerMenu, CloseIcon } from '@/shared/ui/icons';
import { useMobileMenu } from '../model';

export const MobileMenuTrigger = () => {
	const { setOpen, isOpen } = useMobileMenu();

	return (
		<button
			className='relative hidden 2xl:flex 2xl:flex-row-reverse 2xl:justify-center cursor-pointer text-blue-20 font-intro text-xl leading-[1] border border-solid border-blue-20 px-[30px] py-[16px] pb-[11px] gap-5 rounded-full transition-all hover:bg-blue-20 hover:text-grey-80 active:text-grey-80 active:bg-blue-20 focus:text-grey-80 focus:bg-blue-20 group md:p-4'
			title={isOpen ? 'Закрыть мобильное меню' : 'Открыть мобильное меню'}
			aria-label={isOpen ? 'Закрыть мобильное меню' : 'Открыть мобильное меню'}
			onClick={() => setOpen!(!isOpen)}
		>
			<span className='leading-[1.15] md:hidden'>
				{isOpen ? 'Закрыть' : 'Меню'}
			</span>
			{isOpen ? (
				<CloseIcon className='group-hover:fill-grey-80' />
			) : (
				<BurgerMenu className='group-hover:fill-grey-80' />
			)}
		</button>
	);
};
