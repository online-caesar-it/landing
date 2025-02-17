'use client';

import {
	EditIcon,
	PhoneIcon,
	VkSmallIcon,
	TgSmallIcon,
} from '@/shared/ui/icons';
import Link from 'next/link';
import { EditProfileInput } from './edit-profile-input';
import { useSession } from '@/shared/hooks/use-session';

export const EditProfile = () => {
	const { session } = useSession();

	const name = `${session?.surname} ${session?.firstName}`;

	return (
		<div className=''>
			<div className='underline text-xl mb-[45px] transition-all hover:text-blue-40 w-fit font-intro'>
				<Link href='/'>На главную</Link>
			</div>
			<form>
				<div className='flex items-start gap-6 leading-[1] mb-10'>
					<div className='min-w-[185px] aspect-square bg-[#33334D] rounded-[50px] flex items-center justify-center text-avatar-labels font-intro'>
						ФИ
					</div>
					<div className=''>
						<div className='flex items-center'>
							<label htmlFor='name' className='flex items-end mb-10'>
								<input
									id='name'
									type='text'
									defaultValue={name}
									className='text-6xl w-full max-w-[440px] font-intro bg-transparent leading-[1]'
								/>
								<div className='mb-[12px]'>
									<EditIcon />
								</div>
							</label>
						</div>
						<label htmlFor='email' className='flex items-end mb-10'>
							<input
								id='email'
								type='email'
								defaultValue={session?.config.email}
								className='text-3xl text-blue-20 w-full max-w-[350px] font-intro bg-transparent leading-[1]'
							/>
							<div className='mb-[5px]'>
								<EditIcon />
							</div>
						</label>
					</div>
				</div>
				<div className='border-t-[5px] border-solid border-grey-55 pt-[35px] flex items-center justify-between gap-4'>
					<EditProfileInput
						inputName='phone'
						inputIcon={<PhoneIcon />}
						defaultValue={session?.config.phone_number}
					/>
					<EditProfileInput inputIcon={<TgSmallIcon />} inputName='telegram' />
					<EditProfileInput inputIcon={<VkSmallIcon />} inputName='vkontakte' />
				</div>
			</form>
		</div>
	);
};
