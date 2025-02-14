'use client';

import If from '@/features/abstract/If';
import { useSession } from '@/shared/hooks/use-session';
import Link from 'next/link';

const UserPanel = () => {
	const { session, isLoading } = useSession();
	return (
		<div className='text-white font-intro'>
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
