'use client';

import { useRouter } from 'next/navigation';
import { BackArrowBtnIcon } from '../../icons';

export const BackButton = () => {
	const router = useRouter();
	const handleBackToPrevPage = () => router.back();

	return (
		<button
			onClick={handleBackToPrevPage}
			title='Вернуться на предидущую страницу'
			aria-label='Вернуться на предидущую страницу'
		>
			<BackArrowBtnIcon />
		</button>
	);
};
