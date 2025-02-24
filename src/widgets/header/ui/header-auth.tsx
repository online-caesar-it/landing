'use client';

import UserPanel from '@/features/user/ui/user-panel';
import { useSession } from '@/shared/hooks/use-session';
import AuthButtons from './auth-buttons';

const HeaderAuth = () => {
	const { session } = useSession();

	if (!session) {
		return (
			<div className='2xl:hidden'>
				<AuthButtons />
			</div>
		);
	}

	return <UserPanel />;
};

export default HeaderAuth;
