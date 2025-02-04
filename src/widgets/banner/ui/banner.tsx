import { IconTemplate } from '@/shared/ui/icons';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { twMerge } from 'tailwind-merge';
import style from '../styles/style.module.css';

export const Banner = () => {
	return (
		<SectionLayout
			className={
				'relative pt-[120px] mb-[380px] min-h-[90dvh] 3xl:mb-[80px] 3xl:pt-[40px] md:min-h-[65dvh]'
			}
		>
			<h2
				className={twMerge(
					'uppercase text-page-title font-intro text-left',
					style.title
				)}
			>
				От идей — к реализации: <br /> твой путь в мир <br /> технологий!
			</h2>
			<IconTemplate
				src='/images/characterPurple.png'
				alt='Иконка персонажа'
				className={twMerge(
					'absolute top-[36%] -left-[8%] scale-[1.3] 3xl:-left-[11%] 3xl:scale-[1] 3xl:top-[26%]',
					style.purpleIcon
				)}
			/>
			<IconTemplate
				src='/images/characterYellow.png'
				alt='Иконка персонажа'
				className={twMerge(
					'absolute top-[60%] left-1/2 -translate-x-1/2 scale-[1.3] 3xl:top-[30%]',
					style.yellowIcon
				)}
			/>
			<IconTemplate
				src='/images/characterRed.png'
				alt='Иконка красного персонажа'
				className={twMerge(
					'absolute top-[27%] right-0 scale-[1.5] 3xl:scale-[1] 3xl:top-[30%] 3xl:-right-[10%]',
					style.redIcons
				)}
			/>
		</SectionLayout>
	);
};
