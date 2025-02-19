'use client';

import If from '@/features/abstract/If';
import { useSession } from '@/shared/hooks/use-session';
import { Button } from '../../button';
import AuthButtons from '@/widgets/header/ui/auth-buttons';
import { useLogout } from '@/shared/hooks';
import UserPanel from '@/features/user/ui/user-panel';
import { useMobileMenu } from '@/entities/mobile-menu/model';

export const LogoutBtn = () => {
	const { session } = useSession();
	const handleLogout = useLogout();
	const { setOpen: open } = useMobileMenu();

	const handleChildClick = () => {
		open!(false);
		handleLogout();
	};

	return (
		<If
			when={!!session}
			elseComponent={
				<div className='2xl:hidden'>
					<AuthButtons />
				</div>
			}
		>
			<UserPanel />
			<Button className='w-full' variant='primary' onClick={handleChildClick}>
				Выйти
			</Button>
		</If>
	);
};
