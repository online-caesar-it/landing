import { OurFeaturesCard } from '@/entities';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';

const features = [
	{
		label: 'Персонализированные и многоуровневые программы ',
		icon: '/images/actualCourses.png',
		description:
			'Мы создаем эффективные учебные программы, которые помогут вам ориентироваться в постоянно развивающемся IT-пространстве, а адаптивные и индивидуальные планы помогут вам освоить и овладеть нужными скиллами',
	},
	{
		label: 'Проектное и межпредметное обучение',
		icon: '/images/experiencedTeachers.png',
		description:
			'Благодаря оптимизированным методам обучения, внедрению геймИфикации и проектной деятельности, вы сможете не только запоминать, но и воспроизводить свои знания на практике, что позволит Вам создать собственный проект при завершении обучения!',
	},
	{
		label: 'ПОДГОТОВКА К огэ и егэ',
		icon: '/images/exams.png',
		description:
			'Подготовка к ОГЭ и ЕГЭ в нашей школе - уверенный шаг к вашему будущему. Благодаря нашим авторским эффективным курсам и методологии, вы сможете успешно сдать экзамены и поступить в ВУЗ мечты!',
	},
	{
		label: 'Практика эффективной коммуникации',
		icon: '/images/communication.png',
		description:
			'Эффективная коммуникация - авторский курс, который поможет развить навыки общения, уверенности и влияния. Как строить диалог, чтобы вас слушали и слышали? Как грамотно отстаивать свою позицию? Как управлять эмоциями собеседника? Ответы на эти и другие вопросы содержатся в нашем курсе!',
	},
	{
		label: 'Доступная образовательная среда',
		icon: '/images/schoolProgramm.png',
		description:
			'Вы сможете учиться и начинать свой творческий путь в любое время, в любом месте, без потери качества.',
	},
	{
		label: 'Профессиональное сетевое взаимодействие.',
		icon: '/images/goodFormat.png',
		description:
			'Такое взаимодействие открывает новые возможности для роста и развития, позволяет поделиться знаниями и опытом. ',
	},
];

export const OurFeatures = () => {
	return (
		<SectionLayout className='mb-section-bottom md:mb-24'>
			<div className='flex flex-wrap justify-between gap-4 lg:gap-2 md:mb-[60px]'>
				{features.map((feature, index) => (
					<Fragment key={index}>
						<OurFeaturesCard {...feature} number={index} />
					</Fragment>
				))}
			</div>
			<div className='border-solid border-[5px] border-orange-40 rounded-full pt-[33px] pb-[29px] px-[50px] text-5xl uppercase font-intro text-white text-center leading-[1] mx-auto tracking-[2px] md:text-xl md:px-[25px] md:pb-[15px] md:pt-[25px] md:rounded-[25px] xsm:text-base'>
				<span>для обучения потребуется всего лишь компьютер или ноутбук!</span>
			</div>
		</SectionLayout>
	);
};
