'use client';

import { CustomSwiper } from '@/widgets';
import { promotionsItems } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { PromotionCard } from '@/entities';
import { ButtonLink } from '@/shared/ui';

export const Promotions = () => {
	return (
		<SectionLayout id='promotions' className='mb-section-bottom'>
			<h2 className='font-intro text-blue-0 leading-[1] text-section-xl text-left mb-[75px]'>
				АКТУАЛЬНЫЕ СКИДКИ <br /> И АКЦИИ
			</h2>
			<div className='mb-[125px]'>
				<CustomSwiper
					spaceBetween={30}
					slidesPerView={3.2}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2.2,
							centeredSlides: true,
						},
						1025: {
							slidesPerView: 3.2,
							centeredSlides: false,
						},
					}}
					items={promotionsItems}
					CardComponent={PromotionCard}
					className='md:-mt-14'
				/>
			</div>
			<div className='mx-auto max-w-[630px]'>
				<ButtonLink variant='primary' href='#'>
					Оставить заявку
				</ButtonLink>
			</div>
		</SectionLayout>
	);
};
