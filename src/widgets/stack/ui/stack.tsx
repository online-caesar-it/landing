import { designerStack, programmingStack } from '@/shared/constants';
import { ButtonLink, StackList } from '@/shared/ui';
import SectionLayout from '@/widgets/layouts/ui/section-layout';

export const Stack = () => {
	return (
		<SectionLayout className='mb-section-bottom lg:mb-24'>
			<h2 className='font-intro text-blue-20 text-section-xl leading-[1] mb-[160px] 2xl:mb-[80px] md:text-[40px] md:mb-[30px]'>
				КАКИЕ ИНСТРУМЕНТЫ ИСПОЛЬЗУЮТСЯ <br /> В ОБУЧЕНИИ
			</h2>
			<div>
				<div className='mb-[164px] md:mb-[80px]'>
					<StackList array={designerStack} title='для дизайна' />
					<StackList array={programmingStack} title='для программирования' />
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
