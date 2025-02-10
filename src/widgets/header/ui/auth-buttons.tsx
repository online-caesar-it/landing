import { Button } from '@/shared/ui';
import Link from 'next/link';

const AuthButtons = () => {
	return (
		<div className='flex items-center gap-3 sm:flex-col md:items-start md:w-full'>
			<Link className='md:flex md:w-full' href={'/auth/sign-up'}>
				<Button className='md:w-full'>регистрация</Button>
			</Link>
			<Link className='md:flex md:w-full' href={'/auth/sign-in'}>
				<Button className='md:w-full'>вход</Button>
			</Link>
		</div>
	);
};

export default AuthButtons;
