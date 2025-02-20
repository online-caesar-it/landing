import { TDirection } from '../types';
import { api } from './api';

export const fetchDirections = async (): Promise<TDirection[]> => {
	try {
		const { data } = await api.get<TDirection[]>('/direction/get-all');
		return data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
			throw new Error(`Error in fetching all directions. ${error.message}`);
		}
		return [];
	}
};
