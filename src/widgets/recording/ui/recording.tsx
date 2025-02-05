import { ContactForm } from '@/entities';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';

export const Recording = () => {
	return (
		<SectionLayout className='relative mb-section-bottom'>
			<div className='mb-[88px]'>
				<h2 className='font-intro text-section-xl text-right leading-[1] text-blue-10'>
					оставить заявку <br /> на запись
				</h2>
			</div>
			<div className='flex justify-between gap-4 pb-[30px]'>
				<div className='w-1/2 pl-[30px]'>
					<ContactForm />
				</div>
				<div className='relative w-[39%] aspect-square scale-95'>
					<Image src='/images/formCharacter.png' alt='' fill />
				</div>
			</div>
			<Image
				alt=''
				width={120}
				height={120}
				src='/icons/upLeftCorner.svg'
				className='absolute top-0 left-0'
			/>
			<Image
				alt=''
				width={120}
				height={120}
				src='/icons/bottomRightCorner.svg'
				className='absolute bottom-0 right-0'
			/>
		</SectionLayout>
	);
};
