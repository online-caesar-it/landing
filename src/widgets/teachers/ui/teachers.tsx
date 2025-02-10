'use client';

import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { TeacherCard } from '@/entities/teachers/ui/teacher-card';
import { TeacherCardMobile } from '@/entities/teachers/ui/teacher-card-mobile';
import { Fragment } from 'react';

export const Teachers = () => {
	return (
		<SectionLayout className='mb-section-bottom lg:mb-24'>
			<div className='font-intro text-blue-0 mb-[70px]'>
				<h2 className='text-section-xl leading-[1]'>Наша команда</h2>
				<span className='text-3xl'>Мы очень классные</span>
			</div>
			<div className='flex gap-10 items-center overflow-x-scroll scrollbar-hidden md:hidden'>
				{[...Array(7)].map((_, index) => (
					<Fragment key={index}>
						<TeacherCard />
					</Fragment>
				))}
			</div>
			<div className='hidden md:flex flex-col gap-5'>
				{[...Array(7)].map((_, index) => (
					<Fragment key={index}>
						<TeacherCardMobile />
					</Fragment>
				))}
			</div>
		</SectionLayout>
	);
};
