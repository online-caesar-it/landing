import CoursesListCascade from '@/features/courses/ui/courses-list-cascade';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';

export const CoursesBlock = () => {
	return (
		<SectionLayout className='mb-section-bottom 2xl:mb-[400px] lg:mb-[460px]'>
			<div className='font-intro text-center text-blue-0 mb-[100px] md:mb-[30px]'>
				<h2 className='text-section-xl leading-[1] md:mb-10'>КАТАЛОГ КУРСОВ</h2>
				<p className='block text-5xl w-8/12 mx-auto leading-[1.1] lg:text-xl md:w-full md:text-base'>
					ЗДЕСЬ ВЫ МОЖЕТЕ ОЗНАКОМИТЬСЯ С ОБУЩАЮЩИМИ КУРСАМИ И ВЫБРАТЬ
					ИНТЕРЕСУЮЩИЙ ВАРИАНТ
				</p>
			</div>
			<div className='flex items-start justify-between relative'>
				<div className='relative w-[36%] aspect-[0.7/1] lg:hidden'>
					<Image
						fill
						src='/images/characterCoursesCatalog.png'
						alt='Изображение персонажа каталога курсов'
					/>
				</div>
				<div className='w-1/2 lg:h-[50dvh] lg:w-full md:h-[40dvh]'>
					<CoursesListCascade />
				</div>
			</div>
		</SectionLayout>
	);
};
