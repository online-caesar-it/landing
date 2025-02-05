import * as z from 'zod';

export const formSchema = z.object({
	name: z.string({
		message: 'Укажите ваше ФИО',
	}),
	phone: z
		.string()
		.min(10, { message: 'Укажите верный номер телефона' })
		.max(14, { message: 'Укажите верный номер телефона' }),
	email: z
		.string()
		.min(1, { message: 'Заполните это поле' })
		.email('Укажите верную почту'),
});
