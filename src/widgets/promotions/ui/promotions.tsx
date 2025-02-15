import { ButtonLink } from '@/shared/ui';
import { PromotionsSwiper } from './promotions-swiper';
import SectionLayout from '@/widgets/layouts/ui/section-layout';

type TPromotionsProps = {
	children?: React.ReactNode;
};

export const Promotions = ({ children }: TPromotionsProps) => {
	return (
		<SectionLayout id='promotions' className='mb-section-bottom lg:mb-24'>
			<h2 className='font-intro text-blue-0 leading-[1] text-section-xl text-left mb-[75px] md:text-[40px]'>
				Актуальные скидки <br className='md:hidden' /> и акции
			</h2>
			<div className='mb-[125px] lg:mb-[90px] md:mb-[45px]'>
				{children}
				<PromotionsSwiper />
			</div>
			<div className='mx-auto max-w-[630px]'>
				<ButtonLink variant='primary' href='#'>
					Оставить заявку
				</ButtonLink>
			</div>
		</SectionLayout>
	);
};
