'use client';

import FeedbackCard from '@/entities/feedback/ui/feedback-card';
import FeedbackCardContent from '@/entities/feedback/ui/feedback-card-content';
import { useClientReviewsContext } from '@/widgets/clients-reviews/ui/client-reviews-context';
import { twMerge } from 'tailwind-merge';

const FeedbackListCascade = () => {
	const { filteredData } = useClientReviewsContext();
	return (
		<div className={twMerge('relative left-[15%] w-1/2')}>
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
