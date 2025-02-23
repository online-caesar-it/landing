'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { authApi } from '@/shared/api/auth.api';
import { localStorageToken } from '@/shared/local-storage/token';
import { useQueryClient } from '@tanstack/react-query';

export const useConfirm = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const token = searchParams.get('token');
	const method = searchParams.get('method');
	const type = searchParams.get('type');
	const [loading, setLoading] = useState(true);
	const [message, setMessage] = useState('');
	const client = useQueryClient();

	useEffect(() => {
		if (token && method === 'by-email' && type === 'sign-up') {
			verifyTokenSignUp();
		}
		if (token && method === 'by-email' && type === 'sign-in') {
			verifyTokenSignIn();
		}
	}, [token, method, type]);

	const verifyTokenSignIn = async () => {
		try {
			const response = await authApi.verifySignIn(token);
			if (response.data) {
				setMessage('Вход завершен! Перенаправляем...');
				localStorageToken.setAccessToken(response.data.accessToken);
				localStorageToken.setRefreshToken(
					response.data.user.config.refresh_token
				);
				await client.invalidateQueries({ queryKey: ['get-self'] });
				await client.refetchQueries({ queryKey: ['get-self'] });
			}
			router.push('/');
			console.log(response.data);
		} catch (err) {
			console.error(err);
			setMessage('Ошибка подтверждения. Попробуйте снова.');
		} finally {
			setLoading(false);
		}
	};
	const verifyTokenSignUp = async () => {
		try {
			const response = await authApi.verifySignUp(token);

			if (response.data) {
				setMessage('Регистрация завершена! Перенаправляем...');
				localStorageToken.setAccessToken(response.data.accessToken);
				localStorageToken.setRefreshToken(
					response.data.user.config.refresh_token
				);
				client.invalidateQueries({ queryKey: 'get-self' });
			}
			router.push('/');
			console.log(response.data);
		} catch (err) {
			console.error(err);
			setMessage('Ошибка подтверждения. Попробуйте снова.');
		} finally {
			setLoading(false);
		}
	};
	return { loading, message };
};
