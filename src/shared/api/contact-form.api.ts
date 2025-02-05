import { api } from './api';
import { TContactFormFields } from '@/entities/contact-form/model';

export const sendFormData = async (req: TContactFormFields) => {
	try {
		const { data } = await api.post<TContactFormFields>('', req);
		return data;
	} catch (error) {
		console.error(error);
		throw new Error('Ошибка в отправке данных с конактной форме');
	}
};
