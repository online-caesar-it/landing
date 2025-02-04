import { SwiperProps } from 'swiper/react';

export type CustomSwiperProps<E> = {
	items: E[];
	render: (item: E) => React.ReactNode;
} & SwiperProps;
