import { ButtonLink } from '@/shared/ui';
import { ClientsReviewsFilters } from '@/features/';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { ClientReviewsProvider } from './client-reviews-context';
import FeedbackListCascade from '@/features/feedback/ui/feedback-list-cascade';
import { FeedbackSwiper } from '@/features/feedback/ui/feedback-swiper';

export const ClientsReviews = async () => {
	return (
		<SectionLayout className='mb-section-bottom md:mb-24'>
			<div className='text-blue-0 text-center font-intro mb-[110px] md:mb-[30px]'>
				<h2 className='text-section-xl leading-[1] md:text-[40px]'>
					ОТЗЫВЫ КЛИЕНТОВ
				</h2>
				<p className='text-5xl md:text-lg'>ПРО ОБРАЗОВАНИЕ И ПРЕПОДАВАТЕЛЕЙ</p>
			</div>
			<ClientReviewsProvider>
				<div className='w-full h-[620px] mb-[80px] lg:h-[400px] md:mb-0 md:h-auto'>
					<FeedbackListCascade />
					<FeedbackSwiper />
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
