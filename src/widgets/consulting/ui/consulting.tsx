import { ContactForm } from '@/entities';
import { Socials } from '@/shared/ui/socials/ui';
import { FullscreenSectionLayout } from '@/widgets/layouts/ui/fullscreen-section-layout';

export const Consulting = () => {
	return (
		<FullscreenSectionLayout className='bg-linear-section-red py-[155px]'>
			<div className=''>
				<h2 className='font-intro text-section-xl leading-[1] text-right mb-[150px]'>
					ЗАПИСАТЬСЯ <br /> НА консультацию
				</h2>
				<div className='flex justify-between'>
					<div className='w-[40%] font-intro text-grey-50'>
						<span className='block text-5xl underline mb-12'>
							пробный урок в подарок
						</span>
						<p className='text-[32px] leading-[1] mb-[70px]'>
							ответим на все ваши вопросы поможем с выбором направления и
							расскажем подробнее о интересующем направлении
						</p>
						<div className=''>
							<span className='text-red-30 text-[32px]'>
								так же можно с нами связаться
							</span>
							<div className=''>
								<Socials />
							</div>
						</div>
					</div>
					<div className='w-[55%]'>
						<ContactForm variant='white' />
					</div>
				</div>
			</div>
		</FullscreenSectionLayout>
	);
};
