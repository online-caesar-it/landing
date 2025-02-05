import { StackItem } from '@/entities';
import { designerStack, programmingStack } from '@/shared/constants';
import { ButtonLink } from '@/shared/ui';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';

export const Stack = () => {
	return (
		<SectionLayout className='mb-section-bottom'>
			<h2 className='font-intro text-blue-20 text-section-xl leading-[1] mb-[160px]'>
				КАКИЕ ИНСТРУМЕНТЫ ИСПОЛЬЗУЮТСЯ <br /> В ОБУЧЕНИИ
			</h2>
			<div className=''>
				<div className='mb-[75px]'>
					<h3 className='font-intro text-[#CBA6F7] text-5xl mb-9'>
						для дизайна
					</h3>
					<div className='flex items-center justify-between gap-4 flex-wrap'>
						{designerStack.map((item, index) => (
							<Fragment key={index}>
								<StackItem {...item} />
							</Fragment>
						))}
					</div>
				</div>
				<div className='mb-[164px]'>
					<h3 className='font-intro text-[#CBA6F7] text-5xl mb-9'>
						для программирования
					</h3>
					<div className='flex items-center justify-between gap-4 flex-wrap'>
						{programmingStack.map((item, index) => (
							<Fragment key={index}>
								<StackItem {...item} />
							</Fragment>
						))}
					</div>
				</div>
				<div className='max-w-[632px] mx-auto'>
					<ButtonLink icon href='#' variant='primary'>
						больше ресурсов
					</ButtonLink>
				</div>
			</div>
		</SectionLayout>
	);
};
