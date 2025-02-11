import { ButtonLink } from '@/shared/ui';

const AuthButtons = () => {
	return (
		<div className='flex items-center gap-3 sm:flex-col md:items-start md:w-full'>
			<ButtonLink href='/auth/sign-up' size='sm' variant='blue'>
				регистрация
			</ButtonLink>
			<ButtonLink href='/auth/sign-in' size='sm' variant='blue'>
				вход
			</ButtonLink>
		</div>
	);
};

export default AuthButtons;
