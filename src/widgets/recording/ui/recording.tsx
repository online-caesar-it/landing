import { ContactForm } from '@/entities';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';

export const Recording = () => {
	return (
		<SectionLayout className='relative mb-section-bottom lg:mb-24 p-[30px] md:p-0'>
			<div className='mb-[88px]'>
				<h2 className='font-intro text-section-xl text-right leading-[1] text-blue-10 md:text-[40px]'>
					оставить заявку <br /> на запись
				</h2>
			</div>
			<div className='flex justify-between gap-4 pb-[30px lg:flex-col-reverse lg:items-center'>
				<div className='w-1/2 min-w-[500px] lg:w-full lg:min-w-0'>
					<ContactForm id='contact-form' />
				</div>
				<div className='relative w-[39%] aspect-square scale-95 2xl:min-w-[530px] sm:min-w-[320px]'>
					<Image src='/images/formCharacter.png' alt='' fill />
				</div>
			</div>
			<Image
				alt=''
				width={120}
				height={120}
				src='/icons/upLeftCorner.svg'
				className='absolute top-0 left-0 md:hidden'
			/>
			<Image
				alt=''
				width={120}
				height={120}
				src='/icons/bottomRightCorner.svg'
				className='absolute bottom-0 right-0 md:hidden'
			/>
		</SectionLayout>
	);
};
