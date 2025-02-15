'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

type CustomSwiperProps<E> = SwiperProps & {
	items: E[];
	renderItem: (item: E) => React.ReactNode;
};

export const CustomSwiper = <E extends { id: number }>({
	items,
	renderItem,
	...restProps
}: CustomSwiperProps<E>) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div className='swiper-container'>
			<Swiper {...restProps}>
				{items.map(item => (
					<SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
				))}
			</Swiper>

			{!isMounted && (
				<div className='no-js-slider'>
					{items.map(item => (
						<div key={item.id} className='static-slide'>
							{renderItem(item)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
