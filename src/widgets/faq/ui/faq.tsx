import { Accordion } from '@/entities/';
import { accordionData } from '@/shared/constants';
import { MotionDiv } from '@/shared/ui';
import { FullscreenSectionLayout } from '@/widgets/layouts/ui/fullscreen-section-layout';

export const Faq = () => {
	return (
		<FullscreenSectionLayout className=' bg-linear-section-blue py-[120px]'>
			<div className='flex justify-center flex-col'>
				<MotionDiv>
					<h2 className='font-intro text-grey-90 text-section-xl text-center mb-[70px] leading-[1] lg:mb-8'>
						ЧАСТЫЕ ВОПРОСЫ
					</h2>
				</MotionDiv>
				<div className=''>
					<Accordion items={accordionData} />
				</div>
			</div>
		</FullscreenSectionLayout>
	);
};
