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
		<Swiper {...restProps}>
			{items.map((item, index) => (
				<SwiperSlide key={index}>
					<CardComponent {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
