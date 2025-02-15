import Link from 'next/link';

export const RightSidebar = () => {
	return (
		<aside className='flex flex-col items-end'>
			<ul className='w-full flex flex-col gap-8 font-intro'>
				<li>
					<Link
						className='bg-red-60 lowercase text-grey-30 border-red-60 border-solid border w-full block text-center rounded-full text-sm px-[10px] py-[8px]  transition-all hover:bg-transparent hover:text-red-60'
						href='/profile/edit'
					>
						Изменить профиль
					</Link>
				</li>
				<li>
					<button className='bg-red-60 border-red-60 border-solid border lowercase text-grey-30 w-full rounded-full text-sm px-[10px] py-[8px] transition-all hover:bg-transparent hover:text-red-60'>
						Выйти
					</button>
				</li>
			</ul>
		</aside>
	);
};
