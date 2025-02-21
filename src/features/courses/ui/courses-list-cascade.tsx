import CourseCard from '@/entities/course/ui/course-card';
import CourseCardContent from '@/entities/course/ui/course-card-content';
import {
	directionColorPalette,
	directionIcons,
	staticDirections,
} from '@/shared/constants';
import { twMerge } from 'tailwind-merge';

const CoursesListCascade = ({ className }: { className?: string }) => {
	return (
		<div className={twMerge('relative', className)}>
			{staticDirections
				.slice()
				.reverse()
				.map((direction, index) => {
					const directionName = direction.title
						.toLowerCase()
						.split(' ')
						.join('');

					return (
						<CourseCard
							color={directionColorPalette[direction.colorTheme]}
							index={index}
							key={direction.id}
						>
							<CourseCardContent
								title={direction.title}
								body={direction.desription}
								image={directionIcons[directionName]}
							/>
						</CourseCard>
					);
				})}
		</div>
	);
};

export default CoursesListCascade;
