'use client';

import FeedbackCard from '@/entities/feedback/ui/feedback-card';
import FeedbackCardContent from '@/entities/feedback/ui/feedback-card-content';
import { useClientReviewsContext } from '@/widgets/clients-reviews/ui/client-reviews-context';

const FeedbackListCascade = () => {
	const { filteredData } = useClientReviewsContext();
	return (
		<div className='relative left-[23%] w-1/2 2xl:left-[10%] lg:left-0 md:hidden'>
			{filteredData ? (
				filteredData.map((item, index) => (
					<FeedbackCard color={item.color} index={index} key={index}>
						<FeedbackCardContent
							title={item.name}
							description={item.description}
						/>
					</FeedbackCard>
				))
			) : (
				<div>Нет отзывов</div>
			)}
		</div>
	);
};

export default FeedbackListCascade;
