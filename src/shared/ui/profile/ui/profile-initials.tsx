'use client';

import { useSession } from '@/shared/hooks/use-session';

export const ProfileInitials = () => {
	const { session } = useSession();
	const initials = `${session?.surname[0]}${session?.firstName[0]}`;

	if (!session) {
		return (
			<div className='min-w-[185px] aspect-square bg-grey-80 rounded-[50px] flex items-center justify-center text-avatar-labels animate-pulse md:min-w-[95px] md:text-4xl md:rounded-[30px] sm:min-w-0 sm:w-[60%]'></div>
		);
	}

	return (
		<div className='min-w-[185px] aspect-square bg-[#33334D] rounded-[50px] flex items-center justify-center text-avatar-labels font-intro md:min-w-[95px] md:text-4xl md:rounded-[30px] sm:min-w-0 sm:w-[60%]'>
			{initials}
		</div>
	);
};
