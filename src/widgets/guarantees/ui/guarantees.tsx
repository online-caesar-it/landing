import { Separator } from '@/shared/ui';
import { Plate } from '@/widgets/plate/ui';
import { GuaranteeSwiper } from './guarantee-swiper';
import SectionLayout from '@/widgets/layouts/ui/section-layout';

export const Guarantees = () => {
	return (
		<SectionLayout id='guarantee' className='mb-section-bottom lg:mb-[12rem]'>
			<Plate
				mode='full-plate'
				variant='secondary'
				title={
					<>
						345 выпускников, сдавших егэ по англискому на{' '}
						<span className='text-red-95'>90+ баллов</span> 47 выпускноков стали{' '}
						<span className='text-red-95'>специалистами по it и дизайну</span>{' '}
						некоторые <span className='text-red-95'>наставники</span> - бывшие
						ученики caesar it
					</>
				}
			/>
			<Separator offset={40} />
			<GuaranteeSwiper />
		</SectionLayout>
	);
};
