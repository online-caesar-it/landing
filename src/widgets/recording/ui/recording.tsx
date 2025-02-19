import { ContactForm } from '@/entities';
import { MotionDiv } from '@/shared/ui';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';

export const Recording = () => {
	return (
		<SectionLayout className='relative mb-section-bottom lg:mb-24 p-[30px] md:p-0'>
			<div className='mb-[88px] md:mb-10'>
				<MotionDiv>
					<h2 className='font-intro text-section-xl text-right leading-[1] text-blue-10 md:text-[40px]'>
						оставить заявку <br /> на запись
					</h2>
				</MotionDiv>
			</div>
			<div className='flex items-center justify-between gap-4 pb-[30px lg:flex-col-reverse lg:items-center'>
				<MotionDiv
					delay={0.2}
					className='w-1/2 min-w-[500px] lg:w-full lg:min-w-0'
				>
					<ContactForm id='contact-form' />
				</MotionDiv>
				<div className='relative w-[450px] h-[450px] sm:w-[350px] sm:h-[350px]'>
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
