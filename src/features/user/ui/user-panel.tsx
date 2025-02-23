'use client';

import If from '@/features/abstract/If';
import { useSession } from '@/shared/hooks/use-session';
import Link from 'next/link';

const UserPanel = () => {
	const { session, isLoading } = useSession();

	return (
		<div
			title='Перейти в профиль'
			aria-label='Перейти в профиль'
			className='text-white font-intro min-w-fit'
			role='button'
		>
			<If
				when={isLoading || !!session}
				elseComponent={
					<Link href={'/profile'}>
						<span className='leading-[1]'>
							{session?.firstName} {session?.surname}
						</span>
					</Link>
				}
			>
				<Link href={'/profile'}>
					<span className='leading-[1] md:hidden'>
						{session?.firstName} {session?.surname}
					</span>
					<span className='hidden leading-[1] md:block'>
						{session?.firstName} {session?.surname[0]}.
					</span>
				</Link>
			</If>
		</div>
	);
};

export default UserPanel;
