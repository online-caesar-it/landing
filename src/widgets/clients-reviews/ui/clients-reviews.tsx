import { ButtonLink } from '@/shared/ui';
import { ClientsReviewsFilters } from '@/features/';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { ClientReviewsProvider } from './client-reviews-context';
import FeedbackListCascade from '@/features/feedback/ui/feedback-list-cascade';

export const ClientsReviews = async () => {
	return (
		<SectionLayout>
			<div className='text-blue-0 text-center font-intro mb-[110px]'>
				<h2 className='text-section-xl'>ОТЗЫВЫ КЛИЕНТОВ</h2>
				<p className='text-5xl'>ПРО ОБРАЗОВАНИЕ И ПРЕПОДАВАТЕЛЕЙ</p>
			</div>
			<ClientReviewsProvider>
				<div className='w-full h-[620px] mb-[80px]'>
					<FeedbackListCascade />
				</div>
				<div className=''>
					<ClientsReviewsFilters />
				</div>
			</ClientReviewsProvider>
			<div className='max-w-[632px] mx-auto mt-[70px]'>
				<ButtonLink href='#'>Оставить заявку</ButtonLink>
			</div>
		</SectionLayout>
	);
};
