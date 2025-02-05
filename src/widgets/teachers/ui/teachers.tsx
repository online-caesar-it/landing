import { TeacherCard } from '@/entities';
import { teachers } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';

export const Teachers = () => {
	return (
		<SectionLayout className='mb-section-bottom'>
			<div className='flex items-center justify-between gap-4 flex-wrap'>
				{teachers.map((item, index) => (
					<Fragment key={index}>
						<TeacherCard {...item} />
					</Fragment>
				))}
			</div>
		</SectionLayout>
	);
};
