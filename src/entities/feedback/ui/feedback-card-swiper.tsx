import { TMockReview } from '@/widgets/clients-reviews/model';

type FeedbackCardSwiperProps = TMockReview;

export const FeedbackCardSwiper = (props: FeedbackCardSwiperProps) => {
	const { color, description, name } = props;
	return (
		<div
			className='rounded-[25px] p-5 min-h-[360px]'
			style={{
				backgroundColor: color,
			}}
		>
			<h3 className='font-intro text-4xl mb-1'>{name}</h3>
			<p className=''>{description}</p>
		</div>
	);
};
