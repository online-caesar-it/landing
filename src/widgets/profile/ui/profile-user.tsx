'use client';

import { useSession } from '@/shared/hooks/use-session';
import { ProfileInitials } from '@/shared/ui';

export const ProfileUser = () => {
	const { session } = useSession();
	return (
		<div className='flex items-start gap-6 leading-[1] mb-10 xsm:flex-col'>
			<ProfileInitials />
			{session ? (
				<div className=''>
					<h2 className='text-6xl mb-10 md:text-3xl md:mb-5'>
						{session.surname} {session.firstName}
					</h2>
					<span className='text-3xl text-blue-20 md:text-base'>
						{session.config.email}
					</span>
				</div>
			) : (
				<div className='w-full flex flex-col gap-10'>
					<div className='h-10 w-[60%] bg-grey-80 rounded-full animate-pulse'></div>
					<div className='h-6 w-[48%] bg-grey-80 rounded-full animate-pulse'></div>
				</div>
			)}
		</div>
	);
};
