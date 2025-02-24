'use client';

import { Button } from '@/shared/ui';
import { useEditProfile } from './edit-profile-provider';
import Link from 'next/link';

export const RightSidebar = () => {
	const { onSubmit, form } = useEditProfile();

	return (
		<aside className='flex flex-col items-end'>
			<ul className='w-full flex flex-col gap-8 font-intro 2xl:items-end xl:items-start xl:flex-row xl:mt-10 md:flex-col md:gap-5'>
				<li className='md:w-full'>
					<Button
						size='sm'
						className='w-full 2xl:text-sm md:w-full'
						variant='secondary'
						onClick={() => onSubmit(form.getValues())}
						type='submit'
					>
						сохранить изменения
					</Button>
				</li>
				<li className='md:hidden'>
					<Link
						href='/profile'
						className='bg-red-60 border-red-60 flex items-center justify-center border-solid border lowercase text-grey-30 w-full rounded-full text-sm px-[10px] py-[8px] transition-all hover:bg-transparent hover:text-red-60 2xl:text-sm'
					>
						Выйти
					</Link>
				</li>
			</ul>
		</aside>
	);
};
