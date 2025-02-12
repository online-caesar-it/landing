'use client';

import If from '@/features/abstract/If';
import UserPanel from '@/features/user/ui/user-panel';
import { useSession } from '@/shared/hooks/use-session';
import React from 'react';
import AuthButtons from './auth-buttons';

const HeaderAuth = () => {
	const { session } = useSession();
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
		</If>
	);
};

export default HeaderAuth;
