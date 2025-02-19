import { ButtonLink } from '@/shared/ui';
import { Plate } from '@/widgets';
import SectionLayout from '@/widgets/layouts/ui/section-layout';

export const About = () => {
	return (
		<SectionLayout className='mb-section-bottom lg:mb-24'>
			<Plate
				variant='primary'
				plateImage='/images/characterNotebook3d.png'
				platePattern='/patterns/platePatternPurple.png'
				title={
					<>
						<b className='font-intro'>Caesar IT</b> — это уникальная
						онлайн-школа со множеством направлений. Мы обучаем программированию,
						дизайну, а также школьным предметам. Мечтаете построить карьеру в IT
						и воплотить свои идеи в реальность? Оставляйте заявку!
					</>
				}
			/>
			<Plate
				variant='secondary'
				plateImage='/images/characterRocket3d.png'
				platePattern='/patterns/platePatternPink.png'
				title={
					<>
						<b className='font-intro'>главная цель</b> — предоставить
						качественное обучение в удобном и доступном формате с помощью
						инновационных технологий. С нуля вы овладеете множеством
						инструментов, которые помогут вам создать собственные проекты любого
						уровня!
						<br />
						<span className='text-grey-30'>
							Ваша успешная карьера в <span className='font-intro'>IT</span>{' '}
							начинается здесь!
						</span>
					</>
				}
			/>
			<div className='pt-[20px] max-w-[632px] mx-auto'>
				<ButtonLink href='#contact-form' variant='primary' size='md'>
					Оставить заявку
				</ButtonLink>
			</div>
		</SectionLayout>
	);
};
