import LogoIcon from '@/shared/ui/icons/logo-icon';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href='/' className={'flex items-center gap-2'}>
			<LogoIcon />
			<p className={'text-blue-20 text-5xl uppercase font-greco leading-[1]'}>
				caesar it
			</p>
		</Link>
	);
};

export default Logo;
