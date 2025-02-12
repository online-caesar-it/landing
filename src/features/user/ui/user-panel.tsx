'use client';

import UserAvatar from '@/entities/user/ui/user-avatar';
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
						<p>
							{session?.firstName} {session?.surname}
						</p>
					</Link>
				}
			>
				<UserAvatar isLoading={isLoading} user={session} />
			</If>
		</div>
	);
};

export default UserPanel;
