import CourseCard from '@/entities/course/ui/course-card';
import CourseCardContent from '@/entities/course/ui/course-card-content';
import { fetchDirections } from '@/shared/api';
import { directionColorPalette, directionIcons } from '@/shared/constants';
import { twMerge } from 'tailwind-merge';

const CoursesListCascade = async ({ className }: { className?: string }) => {
	const directions = await fetchDirections();

	return (
		<div className={twMerge('relative', className)}>
			{directions &&
				directions.reverse().map((direction, index) => {
					const directionName = direction.name
						.toLowerCase()
						.split(' ')
						.join('');

					return (
						<CourseCard
							color={directionColorPalette[directionName]}
							index={index}
							key={direction.id}
						>
							<CourseCardContent
								title={direction.name}
								body={direction.description}
								image={directionIcons[directionName]}
							/>
						</CourseCard>
					);
				})}
		</div>
	);
};

export default CoursesListCascade;
