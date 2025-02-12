'use client';

import { useConfirm } from '../hooks/useConfirm';

const Confirm = () => {
	const { loading, message } = useConfirm();
	return (
		<div className='text-white font-intro text-5xl'>
			<h1>Подтверждение входа</h1>
			{loading ? <p>Подтверждаем...</p> : <p>{message}</p>}
		</div>
	);
};

export default Confirm;
