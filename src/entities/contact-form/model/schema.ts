import * as z from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, { message: 'Укажите ваше ФИО' }),
	phone: z
		.string()
		.min(10, { message: 'Номер телефона должен быть больше 10 символов' })
		.max(14, { message: 'Укажите верный номер телефона' }),
	email: z
		.string()
		.min(1, { message: 'Заполните вашу почту' })
		.email('Укажите верную почту'),
});
