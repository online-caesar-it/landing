import Logo from '@/widgets/header/ui/logo';
import { MobileMenuTrigger } from './mobile-menu-trigger';

export const MenuHeader = () => {
	return (
		<div className='flex justify-between items-center gap-4 py-5'>
			<Logo />
			<MobileMenuTrigger />
		</div>
	);
};
