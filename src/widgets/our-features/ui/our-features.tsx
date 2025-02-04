import { OurFeaturesCard } from '@/entities';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';

const features = [
	{
		label: 'Актуальные курсы',
		icon: '/images/actualCourses.png',
	},
	{
		label: 'Опытные преподаватели',
		icon: '/images/experiencedTeachers.png',
	},
	{
		label: 'огэ и егэ',
		icon: '/images/exams.png',
	},
	{
		label: 'коммуникация',
		icon: '/images/communication.png',
	},
	{
		label: 'школьная программа',
		icon: '/images/schoolProgramm.png',
	},
	{
		label: 'Удобный формат',
		icon: '/images/goodFormat.png',
	},
];

export const OurFeatures = () => {
	return (
		<SectionLayout className='mb-section-bottom'>
			<div className='flex flex-wrap justify-between gap-4 lg:gap-2 md:mb-[60px]'>
				{features.map((feature, index) => (
					<Fragment key={index}>
						<OurFeaturesCard {...feature} number={index} />
					</Fragment>
				))}
			</div>
			<div className='border-solid border-[5px] border-orange-40 rounded-full pt-[33px] pb-[29px] px-[50px] text-5xl uppercase font-intro text-white text-center leading-[1] mx-auto tracking-[2px]'>
				<span>для обучения потребуется всего лишь компьютер или ноутбук!</span>
			</div>
		</SectionLayout>
	);
};
