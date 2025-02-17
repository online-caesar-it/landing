'use client';

import {
	EditIcon,
	PhoneIcon,
	VkSmallIcon,
	TgSmallIcon,
} from '@/shared/ui/icons';
import Link from 'next/link';
import { EditProfileInput } from './edit-profile-input';
import { useEditProfile } from './edit-profile-provider';
import { ProfileInitials } from '@/shared/ui';

export const EditProfile = () => {
	const { form, onSubmit, name, session } = useEditProfile();
	const { register } = form!;

	return (
		<div className=''>
			<div className='underline text-xl mb-[45px] transition-all hover:text-blue-40 w-fit font-intro'>
				<Link href='/'>На главную</Link>
			</div>
			<form onSubmit={form!.handleSubmit!(onSubmit!)}>
				<div className='flex items-start gap-6 leading-[1] mb-10'>
					<ProfileInitials />
					<div className=''>
						<div className='flex items-center'>
							<label htmlFor='name' className='flex items-end mb-10'>
								<input
									id='name'
									type='text'
									defaultValue={session ? name : 'Загрузка...'}
									className='text-6xl w-full max-w-[440px] font-intro bg-transparent leading-[1]'
									{...register('firstName')}
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
								defaultValue={session ? session.config.email : 'Загрузка...'}
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
						defaultValue={
							session ? session?.config.phone_number : 'Загрузка...'
						}
					/>
					<EditProfileInput inputIcon={<TgSmallIcon />} inputName='telegram' />
					<EditProfileInput inputIcon={<VkSmallIcon />} inputName='vkontakte' />
				</div>
			</form>
		</div>
	);
};
