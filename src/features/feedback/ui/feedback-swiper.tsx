'use client';

import { CustomSwiper } from '@/widgets';
import { FeedbackCardSwiper } from '@/entities/feedback/ui/feedback-card-swiper';
import { useClientReviewsContext } from '@/widgets/clients-reviews/ui/client-reviews-context';

export const FeedbackSwiper = () => {
	const { filteredData } = useClientReviewsContext();

	if (!filteredData || filteredData.length === 0) {
		return null;
	}

	return (
		<div id='reviewsSwiper' className='hidden md:block mb-[60px]'>
			<CustomSwiper
				spaceBetween={20}
				slidesPerView={1.1}
				centeredSlides
				items={filteredData}
				renderItem={item => <FeedbackCardSwiper {...item} />}
			/>
		</div>
	);
};
