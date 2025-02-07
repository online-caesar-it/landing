'use client';

import { formSchema } from './schema';
import { sendFormData } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

export const useContactForm = () => {
	const [isLoaded, setLoaded] = useState<boolean>(false);
	const form = useForm<z.infer<typeof formSchema>>({
		mode: 'onBlur',
		resolver: zodResolver(formSchema),
	});

	const { isSuccess } = useMutation({
		mutationKey: ['contact-form'],
		mutationFn: sendFormData,
		onSuccess: () => {
			console.log('Успещно отправлено!');
		},
		onError: () => {
			console.error('Ошибка в загрузке данных');
		},
	});

	const submitter = async (dataForm: z.infer<typeof formSchema>) => {
		console.log(dataForm);
		form.reset();
		setLoaded(true);

		setTimeout(() => {
			setLoaded(false);
		}, 4000);
	};

	return { submitter, isSuccess, isLoaded, ...form };
};
