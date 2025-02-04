'use client';

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

type CustomSwiperProps<E> = {
	items: E[];
	CardComponent: React.ComponentType<E>;
} & SwiperProps;

export const CustomSwiper = <E extends { id: number }>({
	items,
	CardComponent,
	...restProps
}: CustomSwiperProps<E>) => {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={2.1}
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1.25,
				},
				1024: {
					slidesPerView: 2.1,
				},
			}}
			{...restProps}
		>
			{items.map(item => (
				<SwiperSlide key={item.id}>
					<CardComponent {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
