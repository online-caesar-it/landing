'use client';

import { Plate } from '@/widgets/plate/ui';
import { CustomSwiper } from '@/widgets/';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { promoItems } from '@/shared/constants';
import { PromoCard } from '@/features';

export const Guarantees = () => {
	return (
		<SectionLayout id='guarantee' className='mb-section-bottom lg:mb-24'>
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
			<CustomSwiper
				spaceBetween={20}
				slidesPerView={2.1}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1.24,
						centeredSlides: true,
					},
					1025: {
						slidesPerView: 2.25,
						centeredSlides: false,
					},
				}}
				items={promoItems}
				CardComponent={PromoCard}
				className='md:-mt-14'
			/>
		</SectionLayout>
	);
};
