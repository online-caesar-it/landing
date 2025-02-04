'use client';

import { Plate } from '@/widgets/plate/ui';
import { CustomSwiper } from '@/widgets/';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { promoItems } from '@/shared/constants';
import { PromoCard } from '@/features';

export const Guarantees = () => {
	return (
		<SectionLayout id='guarantee'>
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
			<CustomSwiper items={promoItems} CardComponent={PromoCard} />
		</SectionLayout>
	);
};
