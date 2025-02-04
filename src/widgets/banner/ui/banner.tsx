import { IconTemplate } from '@/shared/ui/icons';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { twMerge } from 'tailwind-merge';
import style from '../styles/style.module.css';

const Banner = () => {
	return (
		<SectionLayout className={'relative pt-[120px] mb-[380px] min-h-[90dvh]'}>
			<h2
				className={twMerge(
					'uppercase text-9xl font-intro text-left w-[90%]',
					style.title
				)}
			>
				От идей — к реализации: твой путь в мир технологий!
			</h2>
			<IconTemplate
				src='/images/characterPurple.png'
				alt='Иконка персонажа'
				className='absolute top-[45%] -left-[8%] scale-[1.3]'
			/>
			<IconTemplate
				src='/images/characterYellow.png'
				alt='Иконка персонажа'
				className='absolute top-[70%] left-1/2 -translate-x-1/2 scale-[1.3]'
			/>
			<IconTemplate
				src='/images/characterRed.png'
				alt='Иконка красного персонажа'
				className='absolute top-[30%] right-0 scale-[1.5]'
			/>
		</SectionLayout>
	);
};

export default Banner;
