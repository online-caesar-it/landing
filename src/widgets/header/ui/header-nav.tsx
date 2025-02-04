import SectionLayout from '@/widgets/layouts/ui/section-layout';
import React from 'react';
import HeaderAuth from './header-auth';
import Logo from './logo';
import Nav from './nav';

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
			<div className='relative h-[54px] hidden 2xl:flex 2xl:flex-col 2xl:gap-2 2xl:justify-center cursor-pointer'>
				<div className='relative h-[2px] w-[54px] bg-white'></div>
				<div className='relative h-[2px] w-[54px] bg-white'></div>
			</div>
		</SectionLayout>
	);
};

export default HeaderNav;
