'use client';

import { useLogout } from '@/shared/hooks';
import Link from 'next/link';

export const RightSidebar = () => {
	const handleLogout = useLogout();
	return (
		<aside className='flex flex-col items-end xl:items-start'>
			<ul className='w-full flex flex-col gap-8 font-intro xl:hidden'>
				<li>
					<Link
						className='bg-red-60 lowercase text-grey-30 border-red-60 border-solid border w-full block text-center rounded-full text-sm px-[10px] py-[8px]  transition-all hover:bg-transparent hover:text-red-60'
						href='/profile/edit'
					>
						Изменить профиль
					</Link>
				</li>
				<li>
					<button
						className='bg-red-60 border-red-60 border-solid border lowercase text-grey-30 w-full rounded-full text-sm px-[10px] py-[8px] transition-all hover:bg-transparent hover:text-red-60'
						onClick={handleLogout}
					>
						Выйти
					</button>
				</li>
			</ul>
			<ul className='hidden xl:flex justify-between gap-[45px] font-intro xl:text-lg text-red-60 mt-16 md:w-full md:text-sm md:gap-5 xsm:text-[12px]'>
				<li>
					<Link
						href='/profile/settings'
						className='block transition-all hover:text-red-80'
					>
						Настройки
					</Link>
				</li>
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
		</aside>
	);
};
