import Link from 'next/link';

export const LeftSidebar = () => {
	return (
		<aside>
			<ul className='flex flex-col gap-[45px] font-intro text-xl text-red-60'>
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
