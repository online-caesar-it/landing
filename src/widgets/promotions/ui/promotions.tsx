'use client';

import { CustomSwiper } from '@/widgets';
import { promotionsItems } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { PromotionCard } from '@/entities';
import { ButtonLink } from '@/shared/ui';

export const Promotions = () => {
	return (
		<SectionLayout id='promotions' className='mb-section-bottom lg:mb-24'>
			<h2 className='font-intro text-blue-0 leading-[1] text-section-xl text-left mb-[75px] md:text-[40px]'>
				Актуальные скидки <br className='md:hidden' /> и акции
			</h2>
			<div className='mb-[125px] lg:mb-[90px] md:mb-[45px]'>
				<CustomSwiper
					spaceBetween={30}
					slidesPerView={3.2}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 1.1,
							centeredSlides: true,
						},
						1025: {
							slidesPerView: 2.1,
							centeredSlides: false,
						},
						1325: {
							slidesPerView: 3.2,
							centeredSlides: false,
						},
					}}
					items={promotionsItems}
					CardComponent={PromotionCard}
					className='md:-mt-14'
				/>
			</div>
			<div className='mx-auto max-w-[630px]'>
				<ButtonLink variant='primary' href='#'>
					Оставить заявку
				</ButtonLink>
			</div>
		</SectionLayout>
	);
};
