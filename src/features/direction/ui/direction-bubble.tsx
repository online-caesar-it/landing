import { directionsColors } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { twMerge } from 'tailwind-merge';

type TDirectionBubbleProps = {
	color: string;
	skills: {
		id: number;
		label: string;
	}[];
	advantages: {
		id: number;
		label: string;
	}[];
	person: {
		image: string;
		title: string;
	};
};

export const DirectionBubble = (props: TDirectionBubbleProps) => {
	const { color, advantages, skills } = props;
	const currentColor = directionsColors[color];
	const blackText = ['orange', 'red-blue', 'orange-blue'];
	const isInBlackText = blackText.includes(color);

	return (
		<SectionLayout className='mb-[160px]'>
			<div
				className={twMerge(
					currentColor.background.first,
					'py-7 px-20 rounded-[50px] mb-[50px] max-w-[95%] mr-auto'
				)}
			>
				<h2
					className={twMerge('font-intro text-[26px] mb-3', currentColor.title)}
				>
					Чему вы научитесь
				</h2>
				<ol
					className={twMerge(
						'list-decimal text-white pl-[24px] font-medium',
						isInBlackText && '!text-black'
					)}
				>
					{skills.map(skill => (
						<li key={skill.id} className='text-3xl'>
							{skill.label}
						</li>
					))}
				</ol>
			</div>
			<div
				className={twMerge(
					currentColor.background.last,
					'py-7 px-20 rounded-[50px] mb-[50px] max-w-[95%] ml-auto'
				)}
			>
				<h2
					className={twMerge('font-intro text-[26px] mb-3', currentColor.title)}
				>
					Преимущества обучения
				</h2>
				<ol
					className={twMerge(
						'list-decimal text-white pl-[24px] font-medium',
						isInBlackText && '!text-black'
					)}
				>
					{advantages.map(advantage => (
						<li key={advantage.id} className='text-3xl'>
							{advantage.label}
						</li>
					))}
				</ol>
			</div>
			<div className=''></div>
		</SectionLayout>
	);
};
