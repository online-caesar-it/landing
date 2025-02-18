import { ContactForm } from '@/entities';
import { Socials } from '@/shared/ui/socials/ui';
import { FullscreenSectionLayout } from '@/widgets/layouts/ui/fullscreen-section-layout';

export const Consulting = () => {
	return (
		<FullscreenSectionLayout className='bg-linear-section-red py-[155px] lg:py-[130px] md:py-[100px]'>
			<div>
				<h2 className='font-intro text-section-xl leading-[1] text-right mb-[150px] lg:mb-[90px] md:mb-[45px] md:text-[40px]'>
					ЗАПИСАТЬСЯ <br className='md:hidden' /> НА консультацию
				</h2>
				<div className='flex justify-between md:flex-col md:gap-6'>
					<div className='w-[40%] text-grey-50 md:w-[85%] sm:w-full'>
						<span className='block text-5xl underline mb-12 md:mb-6 lg:text-2xl'>
							Пробный урок в подарок
						</span>
						<p className='text-[32px] leading-[1] mb-[70px] lg:text-2xl lg:mb-5 sm:text-[22px]'>
							Ответим на все ваши вопросы и поможем с выбором интересующих
							направлений
						</p>
						<div className='md:hidden'>
							<span className='text-red-30 block font-intro text-[32px] leading-[1] mb-[18px] lg:text-2xl sm:text-[22px] sm:leading-[1] md:mb-5'>
								так же можно с нами связаться
							</span>
							<div className=''>
								<Socials />
							</div>
						</div>
					</div>
					<div className='w-[55%] md:w-full'>
						<ContactForm variant='white' id='contact-form-2' />
					</div>
					<div className='hidden md:block font-intro'>
						<span className='text-grey-50 block text-[32px] sm:text-[22px] sm:leading-[1] md:mb-2'>
							так же можно с нами связаться
						</span>
						<div className=''>
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</FullscreenSectionLayout>
	);
};
