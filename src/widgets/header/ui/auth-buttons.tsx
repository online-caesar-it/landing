import { useMobileMenu } from '@/entities/mobile-menu/model';
import { ButtonLink } from '@/shared/ui';

const AuthButtons = () => {
	const { setOpen } = useMobileMenu();

	const handleClick = () => {
		if (setOpen) {
			setOpen(false);
		}
	};

	return (
		<div className='flex items-center gap-3 sm:flex-col md:items-start md:w-full'>
			<ButtonLink
				href='/auth/sign-up'
				size='sm'
				variant='blue'
				onClick={handleClick}
			>
				регистрация
			</ButtonLink>
			<ButtonLink
				href='/auth/sign-in'
				size='sm'
				variant='blue'
				onClick={handleClick}
			>
				вход
			</ButtonLink>
		</div>
	);
};

export default AuthButtons;
