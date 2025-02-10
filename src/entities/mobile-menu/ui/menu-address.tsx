import AuthButtons from '@/widgets/header/ui/auth-buttons';
import Link from 'next/link';

export const MenuAddress = () => {
	return (
		<div className='sticky bottom-0 block lg:flex justify-between items-end lg:w-full md:flex-col md:items-start md:gap-10 bg-grey-85 lg:pb-10 md:pb-0'>
			<div className='flex flex-col mb-7 lg:mb-0'>
				<span className='block text-2xl text-[#555975] mb-5 md:text-base md:mb-[15px]'>
					Контакты
				</span>
				<Link
					className='text-[#B4BEFE] font-semibold text-5xl leading-[1] mb-4 md:text-2xl md:mb-[10px]'
					href='tel:+79524166862'
				>
					+7 (952) 416-68-62
				</Link>
				<Link
					className='text-[#B4BEFE] font-semibold text-3xl leading-[1] mb-5 lg:mb-0 md:text-lg'
					href='mailto:cesar_it@gmail.com'
				>
					cesar_it@gmail.com
				</Link>
			</div>
			<AuthButtons />
		</div>
	);
};
