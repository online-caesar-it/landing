'use client';
import { useSession } from '@/shared/hooks/use-session';
import { TUser } from '@/shared/types/user-type';
import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

type TEditProfileFields = {
	firstName: string;
	surname: string;
	email: string;
	phone_number: string;
	userId: string;
	telegram: string;
	vkontakte: string;
};

type TEditProfileProviderProps = {
	children?: React.ReactNode;
};

type TEditProfileContext = {
	form: UseFormReturn<TEditProfileFields, unknown, undefined>;
	onSubmit: (data: TEditProfileFields) => void;
	name: string;
	session?: TUser;
	editProfile: UseMutateFunction<unknown, Error, void, unknown>;
};

const EditProfileContext = createContext<TEditProfileContext | null>(null);

export const EditProfileProvider = ({
	children,
}: TEditProfileProviderProps) => {
	const { session } = useSession();
	const name = `${session?.surname} ${session?.firstName}`;

	const handleEditProfile = async (): Promise<void> => {};

	const { mutate: editProfile } = useMutation({
		mutationKey: ['edit-profile'],
		mutationFn: handleEditProfile,
	});

	const form = useForm<TEditProfileFields>({
		mode: 'onBlur',
	});

	const onSubmit = (data: TEditProfileFields) => {
		console.log(data);
	};

	return (
		<EditProfileContext.Provider
			value={{ form, onSubmit, name, session, editProfile }}
		>
			{children}
		</EditProfileContext.Provider>
	);
};

export const useEditProfile = () => {
	const context = useContext(EditProfileContext);
	return { ...context };
};
