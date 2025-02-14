'use client';

import { useSession } from '@/shared/hooks/use-session';
import { PhoneIcon, VkSmallIcon } from '@/shared/ui/icons';
import { TgSmallIcon } from '@/shared/ui/icons/tg-small-icon';

export const ProfileFooter = () => {
	const { session } = useSession();
	return (
		<div className='border-t-[5px] border-solid border-grey-55 pt-[35px] flex items-center justify-between gap-4 '>
			{session ? (
				<>
					<div className='flex items-center gap-[10px] text-3xl'>
						<PhoneIcon />
						<span className='leading-[1] text-blue-20'>
							{session.config.phone_number}
						</span>
					</div>
					<div className='flex items-center gap-[10px] text-3xl'>
						<TgSmallIcon />
						<span className='leading-[1] text-blue-20'>@dutycare</span>
					</div>
					<div className='flex items-center gap-[10px] text-3xl'>
						<VkSmallIcon />
						<span className='leading-[1] text-blue-20'>@ghhdgujjsjjd</span>
					</div>
				</>
			) : (
				<>
					<div className='flex items-center gap-[10px] text-3xl'>
						<PhoneIcon />
						<span className='h-6 w-[200px] bg-grey-80 rounded-full animate-pulse'></span>
					</div>
					<div className='flex items-center gap-[10px] text-3xl'>
						<TgSmallIcon />
						<span className='h-6 w-[200px] bg-grey-80 rounded-full animate-pulse'></span>
					</div>
					<div className='flex items-center gap-[10px] text-3xl'>
						<VkSmallIcon />
						<span className='h-6 w-[200px] bg-grey-80 rounded-full animate-pulse'></span>
					</div>
				</>
			)}
		</div>
	);
};
