'use client';

import { PromotionCard } from '@/entities';
import { promotionsItems } from '@/shared/constants';
import { CustomSwiper } from '@/widgets/custom-swiper/ui';

export const PromotionsSwiper = () => {
	return (
		<CustomSwiper
			spaceBetween={30}
			slidesPerView={3.2}
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1.1,
					centeredSlides: true,
				},
				1025: {
					slidesPerView: 2.1,
					centeredSlides: false,
				},
				1325: {
					slidesPerView: 3.2,
					centeredSlides: false,
				},
			}}
			items={promotionsItems}
			renderItem={(item, index) => <PromotionCard {...item} index={index} />}
			className='md:-mt-14'
		/>
	);
};
