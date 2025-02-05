import Image from 'next/image';
import { childLearningItems } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';
import { ButtonLink } from '@/shared/ui';

export const ChildLearning = () => {
	return (
		<SectionLayout className='mb-section-bottom'>
			<h2 className='font-intro text-blue-20 text-section-xl leading-[1] text-center mb-[70px]'>
				ЧЕМУ МОЖЕТ НАУЧИТЬСЯ РЕБЕНОК
			</h2>
			<div className='relative flex items-end justify-between mb-[70px]'>
				{childLearningItems.map(({ icon, pb, text }, index) => (
					<Fragment key={index}>
						<div
							className='text-white w-fit h-fit max-w-[16%] flex flex-col items-center gap-4'
							style={{
								marginBottom: `${pb}%`,
							}}
						>
							<Image src={icon} alt='' width={175} height={175} />
							<span className='block text-center font-intro text-3xl'>
								{text}
							</span>
						</div>
					</Fragment>
				))}
				<div className='absolute aspect-[2.2/1] w-full z-[-1] scale-125 top-1/2 -translate-y-1/2'>
					<Image src='/patterns/child-learning-mark.png' alt='' fill />
				</div>
			</div>
			<div className='max-w-[632px] mx-auto'>
				<ButtonLink variant='primary' href='#'>
					Оставить заявку
				</ButtonLink>
			</div>
		</SectionLayout>
	);
};
