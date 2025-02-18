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
						<b>Caesar IT</b> — это онлайн-школа с уклоном на программирование и
						дизайн, созданная для тех, кто готов обучаться, развиваться и
						воплощать свои идеи в жизнь.
					</>
				}
			/>
			<Plate
				variant='secondary'
				plateImage='/images/characterRocket3d.png'
				platePattern='/patterns/platePatternPink.png'
				title={
					<>
						<b>главная цель</b> — предоставить качественное образование, которое
						позволит нашим ученикам создавать полноценные проекты и строить свою
						карьеру специалиста.
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
