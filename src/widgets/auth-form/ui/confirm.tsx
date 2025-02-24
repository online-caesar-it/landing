'use client';

import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { useConfirm } from '../hooks/useConfirm';

const Confirm = () => {
	const { loading, message } = useConfirm();
	return (
		<SectionLayout className='text-white font-intro text-5xl text-center mt-20'>
			<h1>Подтверждение входа</h1>
			{loading ? <p>Подтверждаем...</p> : <p>{message}</p>}
		</SectionLayout>
	);
};

export default Confirm;
