import CoursesListCascade from '@/features/courses/ui/courses-list-cascade';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';

export const CoursesBlock = () => {
	return (
		<SectionLayout className='mb-section-bottom'>
			<div className='font-intro text-center text-blue-0 mb-[100px]'>
				<h2 className='text-section-xl'>КАТАЛОГ КУРСОВ</h2>
				<p className='block text-5xl w-8/12 mx-auto leading-[1.1]'>
					ЗДЕСЬ ВЫ МОЖЕТЕ ОЗНАКОМИТЬСЯ С ОБУЩАЮЩИМИ КУРСАМИ И ВЫБРАТЬ
					ИНТЕРЕСУЮЩИЙ ВАРИАНТ
				</p>
			</div>
			<div className='flex items-start justify-between relative'>
				<div className='relative w-[36%] aspect-[0.7/1]'>
					<Image
						fill
						src='/images/characterCoursesCatalog.png'
						alt='Изображение персонажа каталога курсов'
					/>
				</div>
				<CoursesListCascade />
			</div>
		</SectionLayout>
	);
};
