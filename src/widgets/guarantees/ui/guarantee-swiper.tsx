'use client';

import { PromoCard } from '@/features';
import { promoItems } from '@/shared/constants';
import { CustomSwiper } from '@/widgets/custom-swiper/ui';

export const GuaranteeSwiper = () => {
	return (
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
			renderItem={item => <PromoCard {...item} />}
			className='md:-mt-14'
		/>
	);
};
