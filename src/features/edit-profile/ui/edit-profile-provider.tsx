'use client';
import { userApi } from '@/shared/api/user.api';
import { useSession } from '@/shared/hooks/use-session';
import { TEditProfileFields, TUser } from '@/shared/types/user-type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

type TEditProfileProviderProps = {
	children?: React.ReactNode;
};

type TEditProfileContext = {
	form: UseFormReturn<TEditProfileFields, unknown, undefined>;
	onSubmit: (data: TEditProfileFields) => void;
	name: string;
	session?: TUser;
	message: {
		title: string;
		subTitle: string;
	};
};

const EditProfileContext = createContext<TEditProfileContext | null>(null);

export const EditProfileProvider = ({
	children,
}: TEditProfileProviderProps) => {
	const { session } = useSession();
	const [message, setMessage] = useState({
		title: '',
		subTitle: '',
	});

	const name = `${session?.surname} ${session?.firstName}`;
	const client = useQueryClient();

	const { mutate: editProfile } = useMutation({
		mutationKey: ['edit-profile'],
		mutationFn: userApi.updateUser,
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['get-self'] });
			setMessage({
				title: 'Данные успешно обновлены',
				subTitle: '',
			});

			setTimeout(() => {
				setMessage({
					title: '',
					subTitle: '',
				});
			}, 1500);
		},
	});

	const form = useForm<TEditProfileFields>({
		mode: 'onBlur',
	});

	if (!session) {
		return null;
	}

	const onSubmit = (data: TEditProfileFields) => {
		const dataToServer = { ...data, userId: session.config.userId };
		editProfile(dataToServer);
		console.log(data);
	};

	return (
		<EditProfileContext.Provider
			value={{ form, onSubmit, name, session, message }}
		>
			{children}
		</EditProfileContext.Provider>
	);
};

export const useEditProfile = () => {
	const context = useContext(EditProfileContext);
	if (!context) {
		throw new Error(
			'useEditProfile must be used within an EditProfileProvider'
		);
	}
	return context;
};
