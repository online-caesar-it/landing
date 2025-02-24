'use client';
import { FormSnackbar } from '@/shared/ui';
import { useEditProfile } from './edit-profile-provider';

export const EditFormStatus = () => {
	const { message } = useEditProfile();

	if (!message.title) return null;

	return <FormSnackbar title={message.title} subTitle={message.subTitle} />;
};
