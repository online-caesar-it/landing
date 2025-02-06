import { TeacherCard } from '@/entities';
import { teachers } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';

export const Teachers = () => {
	return (
		<SectionLayout className='mb-section-bottom lg:mb-24'>
			<div className='font-intro text-blue-0 mb-[70px]'>
				<h2 className='text-section-xl'>Наша команда</h2>
				<span className='text-3xl'>Мы очень классные</span>
			</div>
			<div className='flex items-center justify-between gap-[30px]'>
				{teachers.map((item, index) => (
					<Fragment key={index}>
						<TeacherCard {...item} />
					</Fragment>
				))}
			</div>
		</SectionLayout>
	);
};
