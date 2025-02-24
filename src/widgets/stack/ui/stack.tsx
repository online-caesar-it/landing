import { communicationStack, programmingStack } from '@/shared/constants';
import { ButtonLink, MotionDiv, StackList } from '@/shared/ui';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';

export const Stack = () => {
	return (
		<div className='relative'>
			<SectionLayout className='mb-section-bottom lg:mb-24'>
				<MotionDiv>
					<h2 className='font-intro text-blue-20 text-section-xl leading-[1] mb-[150px] 2xl:mb-[80px] md:text-[40px] md:mb-[30px]'>
						КАКИЕ ИНСТРУМЕНТЫ ИСПОЛЬЗУЮТСЯ <br /> В ОБУЧЕНИИ
					</h2>
				</MotionDiv>
				<div>
					<div className='mb-[164px] md:mb-[80px]'>
						<MotionDiv delay={0.3}>
							<StackList
								array={programmingStack}
								title='для программирования'
							/>
						</MotionDiv>
						<MotionDiv delay={0.2}>
							<StackList
								array={communicationStack}
								title='для деловых коммуникаций и школьных предметов'
							/>
						</MotionDiv>
					</div>
					<MotionDiv delay={0.4} className='max-w-[632px] mx-auto'>
						<ButtonLink icon href='/resourses' variant='primary'>
							больше ресурсов
						</ButtonLink>
					</MotionDiv>
				</div>
			</SectionLayout>
			<div className='absolute w-[340px] h-[400px] top-[26%] -z-[1] 4xl:w-[300px] 4xl:h-[360px] 2xl:top-[16%] pointer-events-none'>
				<Image src='/patterns/stack-left-pattern.png' alt='' fill />
			</div>
			<div className='absolute w-[1274px] h-[847px] top-[24%] -z-[1] right-0 4xl:w-[1000px] 4xl:h-[600px] 4xl:top-[30%] lg:w-[600px] lg:h-[400px] lg:top-[50%] md:top-auto md:bottom-48 pointer-events-none'>
				<Image src='/patterns/stack-right-pattern.png' alt='' fill />
			</div>
		</div>
	);
};
