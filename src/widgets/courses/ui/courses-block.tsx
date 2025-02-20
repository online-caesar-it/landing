import CoursesListCascade from '@/features/courses/ui/courses-list-cascade';
import { MotionDiv } from '@/shared/ui';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';
import Link from 'next/link';

export const CoursesBlock = () => {
	return (
		<SectionLayout className='mb-section-bottom 2xl:mb-[400px] lg:mb-[460px]'>
			<div className='font-intro text-center text-blue-0 mb-[100px] md:mb-[30px]'>
				<MotionDiv>
					<h2 className='text-section-xl mb-5 leading-[1] md:mb-10'>
						КАТАЛОГ КУРСОВ
					</h2>
				</MotionDiv>
				<MotionDiv delay={0.2}>
					<Link
						href='/directions'
						className='block underline text-3xl w-8/12 mx-auto leading-[1.1] lg:text-xl md:w-full md:text-base'
					>
						ЗДЕСЬ ВЫ МОЖЕТЕ ОЗНАКОМИТЬСЯ С ОБУЩАЮЩИМИ КУРСАМИ И ВЫБРАТЬ
						ИНТЕРЕСУЮЩИЙ ВАРИАНТ
					</Link>
				</MotionDiv>
			</div>
			<div className='flex items-start justify-between relative'>
				<div className='relative w-[36%] aspect-[0.7/1] lg:hidden'>
					<Image
						fill
						src='/images/characterCoursesCatalog.png'
						alt='Изображение персонажа каталога курсов'
					/>
				</div>
				<MotionDiv
					delay={0.4}
					className='w-1/2 lg:h-[50dvh] lg:w-full md:h-[40dvh]'
				>
					<CoursesListCascade />
				</MotionDiv>
			</div>
		</SectionLayout>
	);
};
