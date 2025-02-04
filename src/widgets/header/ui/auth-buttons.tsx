import Button from '@/shared/ui/button';
import Link from 'next/link';

const AuthButtons = () => {
	return (
		<div className={'flex items-center gap-3'}>
			<Link href={'/auth/sign-up'}>
				<Button>регистрация</Button>
			</Link>
			<Link href={'/auth/sign-in'}>
				<Button>вход</Button>
			</Link>
		</div>
	);
};

export default AuthButtons;
