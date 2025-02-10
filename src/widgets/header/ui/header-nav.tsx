import Nav from './nav';
import Logo from './logo';
import HeaderAuth from './header-auth';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { MobileMenu } from '@/entities';
import React from 'react';

const HeaderNav = () => {
	return (
		<SectionLayout className='flex justify-between items-center'>
			<div className={'flex items-center gap-20'}>
				<Logo />
				<Nav />
			</div>
			<div className='2xl:hidden'>
				<HeaderAuth />
			</div>
			<MobileMenu />
		</SectionLayout>
	);
};

export default HeaderNav;
