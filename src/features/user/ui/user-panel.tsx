'use client';

import { useMobileMenu } from '@/entities/mobile-menu/model';
import If from '@/features/abstract/If';
import { useSession } from '@/shared/hooks/use-session';
import Link from 'next/link';

const UserPanel = () => {
	const { session, isLoading } = useSession();
	const { setOpen: open } = useMobileMenu();

	const handleChildClick = () => {
		open!(false);
	};

	return (
		<div
			title='Перейти в профиль'
			onClick={handleChildClick}
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
					<span className='leading-[1]'>
						{session?.firstName} {session?.surname}
					</span>
				</Link>
			</If>
		</div>
	);
};

export default UserPanel;
