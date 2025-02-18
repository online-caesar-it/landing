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
import { useEffect } from 'react';

export const EditProfile = () => {
	const { form, onSubmit, session } = useEditProfile();
	const { register } = form;

	useEffect(() => {
		if (session) {
			form.setValue('firstName', session.firstName || '');
			form.setValue('surname', session.surname || '');
			form.setValue('email', session.config.email);
			form.setValue('phone_number', session.config.phone_number || '');
			form.setValue('telegram', session.config.telegram || '');
			form.setValue('vkontakte', session.config.vkontakte || '');
		}
	}, [session, form]);

	return (
		<div className=''>
			<div className='underline text-xl mb-[45px] transition-all hover:text-blue-40 w-fit font-intro xl:hidden'>
				<Link href='/'>На главную</Link>
			</div>
			<form onSubmit={form!.handleSubmit!(onSubmit!)}>
				<div className='flex items-start gap-6 leading-[1] mb-10 md:mb-5 sm:flex-col'>
					<ProfileInitials />
					<div className='w-full'>
						<div className='flex items-center gap-10 md:flex-col md:items-start md:gap-2 md:mb-10'>
							<label
								htmlFor='surname'
								className='flex items-end mb-10 md:mb-0 md:items-center md:w-full'
							>
								<input
									id='surname'
									type='text'
									className='text-6xl w-full max-w-[250px] font-intro bg-transparent leading-[1] 2xl:text-5xl 2xl:max-w-[300px] lg:max-w-[200px] md:text-3xl outline-none capitalize md:w-full md:max-w-full'
									{...register('surname', {
										required: 'Поле должно быть заполнено',
									})}
								/>
								<div className='mb-[12px]'>
									<EditIcon />
								</div>
							</label>
							<label
								htmlFor='name'
								className='flex items-end mb-10 gap-4 md:mb-0 md:items-center md:w-full'
							>
								<input
									id='name'
									type='text'
									className='text-6xl w-full max-w-[200px] font-intro bg-transparent leading-[1] 2xl:text-5xl 2xl:max-w-[300px] lg:max-w-[200px] md:text-3xl outline-none capitalize md:w-full md:max-w-full'
									{...register('firstName', {
										required: 'Поле должно быть заполнено',
									})}
								/>
								<div className='mb-[12px]'>
									<EditIcon />
								</div>
							</label>
						</div>
						<label
							htmlFor='email'
							className='flex items-end gap-4 mb-10 md:w-full'
						>
							<input
								id='email'
								type='email'
								defaultValue={session ? session.config.email : 'Загрузка...'}
								className='text-3xl text-blue-20 w-full max-w-[350px] font-intro bg-transparent leading-[1] 2xl:text-2xl 2xl:max-w-[320px] md:text-base lowercase md:w-full md:max-w-full'
								{...register('email', {
									required: 'Поле должно быть заполнено',
								})}
							/>
							<div className='mb-[5px]'>
								<EditIcon />
							</div>
						</label>
					</div>
				</div>
				<div className='border-t-[5px] border-solid border-grey-55 pt-[35px] flex items-center justify-between gap-4 md:flex-col md:gap-8 md:items-start'>
					<EditProfileInput
						register={register}
						inputName='phone_number'
						inputIcon={<PhoneIcon />}
						defaultValue={
							session ? session?.config.phone_number : 'Загрузка...'
						}
					/>
					<EditProfileInput
						register={register}
						inputIcon={<TgSmallIcon />}
						inputName='telegram'
					/>
					<EditProfileInput
						register={register}
						inputIcon={<VkSmallIcon />}
						inputName='vkontakte'
					/>
				</div>
			</form>
		</div>
	);
};
