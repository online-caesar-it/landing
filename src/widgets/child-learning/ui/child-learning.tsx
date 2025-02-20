import Image from 'next/image';
import { childLearningItems } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';
import { ButtonLink, MotionDiv } from '@/shared/ui';
import { ChildLearningCard } from '@/entities';

export const ChildLearning = () => {
	return (
		<SectionLayout className='mb-section-bottom lg:mb-24'>
			<MotionDiv>
				<h2 className='font-intro text-blue-20 text-section-xl leading-[1] text-center mb-[70px] md:text-[40px]'>
					ЧЕМУ МОЖЕТ НАУЧИТЬСЯ РЕБЕНОК
				</h2>
			</MotionDiv>
			<div className='relative flex items-end justify-between mb-[70px] 2xl:gap-4 2xl:flex-wrap lg:justify-evenly lg:items-start'>
				{childLearningItems.map((item, index) => (
					<Fragment key={index}>
						<ChildLearningCard {...item} index={index} />
					</Fragment>
				))}
				<div className='absolute aspect-[2.2/1] w-full z-[-1] scale-125 top-1/2 -translate-y-1/2 lg:rotate-45 lg:scale-[2] md:scale-[4]'>
					<Image src='/patterns/child-learning-mark.png' alt='' fill />
				</div>
			</div>
			<MotionDiv delay={0.6} className='max-w-[632px] mx-auto'>
				<ButtonLink variant='blue' href='#contact-form'>
					Оставить заявку
				</ButtonLink>
			</MotionDiv>
		</SectionLayout>
	);
};
