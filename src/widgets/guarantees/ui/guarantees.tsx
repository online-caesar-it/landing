import { MotionDiv, Separator } from '@/shared/ui';
import { Plate } from '@/widgets/plate/ui';
import { GuaranteeSwiper } from './guarantee-swiper';
import SectionLayout from '@/widgets/layouts/ui/section-layout';

export const Guarantees = () => {
	return (
		<SectionLayout id='guarantee' className='mb-section-bottom lg:mb-[12rem]'>
			<MotionDiv delay={0.2}>
				<Plate
					mode='full-plate'
					variant='secondary'
					title={
						<>
							<span className='block mb-5'>
								47 выпускников сдали егэ на
								<span className='text-red-95'>
									{' '}
									90+ баллов <br className='lg:hidden' />
								</span>{' '}
							</span>
							<span>
								{' '}
								368 выпускноков стали{' '}
								<span className='text-red-95'>специалистами в сфере it</span>
							</span>
						</>
					}
				/>
			</MotionDiv>
			<Separator offset={40} />
			<GuaranteeSwiper />
		</SectionLayout>
	);
};
