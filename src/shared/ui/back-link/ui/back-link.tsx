'use client';

import { useRouter } from 'next/navigation';
import { BackArrowBtnIcon } from '../../icons';

export const BackLink = () => {
	const router = useRouter();

	return (
		<button title='Вернуться обратно' onClick={() => router.back()}>
			<BackArrowBtnIcon />
		</button>
	);
};
