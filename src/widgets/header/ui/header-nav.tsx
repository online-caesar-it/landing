import Nav from './nav';
import Logo from './logo';
import HeaderAuth from './header-auth';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { MobileMenu } from '@/entities';
import React from 'react';
import { MotionDiv } from '@/shared/ui';

const HeaderNav = () => {
	return (
		<SectionLayout className='flex justify-between items-center'>
			<MotionDiv delay={0.2} className={'flex items-center gap-20'}>
				<Logo />
				<Nav />
			</MotionDiv>
			<div className='flex items-center gap-5'>
				<MotionDiv delay={0.4} className='md:hidden'>
					<HeaderAuth />
				</MotionDiv>
				<MobileMenu />
			</div>
		</SectionLayout>
	);
};

export default HeaderNav;
