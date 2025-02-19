import { CONTACS_DATA } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';

export const Contacts = () => {
	return (
		<SectionLayout className='mt-[116px] '>
			<h1 className='font-intro text-6xl text-blue-10 mb-10'>Контакты</h1>
			<div className='flex items-center justify-between lg:flex-col-reverse lg:items-start'>
				<div className='w-[50%] md:w-full'>
					<div className='mb-[150px] lg:mb-8'>
						<ul className='flex flex-col gap-6 text-3xl 2xl:text-lg'>
							<li className='flex gap-2 items-center'>
								<span className='text-[#7F849C] font-intro leading-[1]'>
									Телефон:
								</span>
								<a
									className='text-[#B5B8F8] font-'
									href={`tel:${CONTACS_DATA.PHONE}`}
								>
									{CONTACS_DATA.PHONE}
								</a>
							</li>
							<li className='flex gap-2 items-center'>
								<span className='text-[#7F849C] font-intro leading-[1]'>
									Электронная почта:
								</span>
								<a
									className='text-[#B5B8F8] font-'
									href={`emailto:${CONTACS_DATA.EMAIL}`}
								>
									{CONTACS_DATA.EMAIL}
								</a>
							</li>
							<li className='flex gap-2 items-center'>
								<span className='text-[#7F849C] font-intro leading-[1]'>
									Telegram:
								</span>
								<a
									href={CONTACS_DATA.TELEGRAM.link}
									className='text-[#B5B8F8] font-'
								>
									{CONTACS_DATA.TELEGRAM.label}
								</a>
							</li>
							<li className='flex gap-2 items-center'>
								<span className='text-[#7F849C] font-intro leading-[1]'>
									VK:
								</span>
								<a href={CONTACS_DATA.VK.link} className='text-[#B5B8F8] font-'>
									{CONTACS_DATA.VK.label}
								</a>
							</li>
						</ul>
					</div>
					<div className=''>
						<div className='mb-5'>
							<h3 className='leading-[1] font-intro text-blue-10 text-3xl md:text-lg'>
								Реквизиты
							</h3>
							<ul></ul>
						</div>
						<div className=''>
							<h3 className='leading-[1] font-intro text-blue-10 text-3xl md:text-lg'>
								Адрес
							</h3>
						</div>
					</div>
				</div>
				<div className='w-[45%] mt-[50px] lg:mt-0 lg:w-[60%] lg:mb-8 md:w-full'>
					<div className=' relative'>
						<div className='bg-blue-10 py-6 px-16 rounded-[20px] relative z-[2] lg:p-4'>
							<p className='font-intro text-xl leading-[1] md:text-lg'>
								вы можете задать любой вопрос и получить на него ответ, стоит
								только позвонить нам на рабочий номер или написать на почту
							</p>
						</div>
						<div className='absolute bottom-full -left-[200px] 2xl:left-0 2xl:bottom-[70%] lg:hidden pointer-events-none'>
							<Image
								alt='Иконка'
								width={385}
								height={260}
								quality={100}
								className='scale-[2] 2xl:scale-100'
								src='/images/contacts-hand.png'
							/>
						</div>
					</div>
				</div>
			</div>
		</SectionLayout>
	);
};
