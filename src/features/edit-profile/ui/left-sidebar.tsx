'use client';
import { useLogout } from '@/shared/hooks';
import Link from 'next/link';

export const LeftSidebar = () => {
	const handleLogout = useLogout();
	return (
		<aside className=''>
			<ul className='flex flex-col gap-[45px] font-intro text-xl xl:text-lg text-red-60 xl:hidden'>
				<li>
					<Link href='#' className='block transition-all hover:text-red-80'>
						ссылка на портал
					</Link>
				</li>
				<li>
					<Link
						href='/profile/courses'
						className='block transition-all hover:text-red-80'
					>
						Мои курсы
					</Link>
				</li>
			</ul>
			<div className='hidden font-intro text-xl xl:flex items-center justify-between gap-5 mb-7 md:hidden'>
				<Link href='/' className='underline transition-all hover:text-blue-40'>
					На главную
				</Link>
			</div>
			<div className='font-intro text-lg hidden md:flex justify-between items-center mb-6'>
				<Link href='/' className='underline transition-all hover:text-blue-40'>
					На главную
				</Link>
				<button
					className='bg-red-60 text-grey-90 leading-[1] py-[8px] px-[10px] rounded-full'
					onClick={handleLogout}
				>
					Выйти
				</button>
			</div>
		</aside>
	);
};
