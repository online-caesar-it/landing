'use client';

import If from '@/features/abstract/If';
import { useSession } from '@/shared/hooks/use-session';
import { Button } from '../../button';
import AuthButtons from '@/widgets/header/ui/auth-buttons';
import { useLogout } from '@/shared/hooks';

export const LogoutBtn = () => {
	const { session } = useSession();
	const handleLogout = useLogout();

	return (
		<If
			when={!!session}
			elseComponent={
				<div className='2xl:hidden'>
					<AuthButtons />
				</div>
			}
		>
			<Button className='w-full' variant='primary' onClick={handleLogout}>
				Выйти
			</Button>
		</If>
	);
};
