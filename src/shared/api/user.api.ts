import { TEditProfileFields, TUser } from '../types/user-type';
import { api } from './api';

const getSelf = async () => {
	const { data } = await api.get<TUser>('/user/getSelf');
	return data;
};

const updateUser = async (userToUpdate: TEditProfileFields) => {
	console.log(userToUpdate);
	try {
		const { data } = await api.put<TEditProfileFields>(
			`/user/update`,
			userToUpdate
		);
		return data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error);
			throw new Error('Error while updating user');
		}
	}
};

export const userApi = { getSelf, updateUser };
