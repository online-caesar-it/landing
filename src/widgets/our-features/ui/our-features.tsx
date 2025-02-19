import { OurFeaturesCard } from '@/entities';
import { features } from '@/shared/constants';
import { MotionDiv } from '@/shared/ui';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';

export const OurFeatures = () => {
	return (
		<SectionLayout className='mb-section-bottom lg:mb-24'>
			<div className='flex flex-wrap justify-between gap-4 lg:gap-2 md:mb-[30px] md:gap-0'>
				{features.map((feature, index) => (
					<Fragment key={index}>
						<OurFeaturesCard {...feature} number={index} />
					</Fragment>
				))}
			</div>
			<MotionDiv
				delay={0.2}
				className='border-solid border-[5px] border-orange-40 rounded-full pt-[33px] pb-[29px] px-[50px] text-5xl uppercase font-intro text-white text-center leading-[1] mx-auto tracking-[2px] md:text-xl md:px-[25px] md:pb-[15px] md:pt-[25px] md:rounded-[25px] xsm:text-base'
			>
				<span>для обучения потребуется всего лишь компьютер или ноутбук!</span>
			</MotionDiv>
		</SectionLayout>
	);
};
