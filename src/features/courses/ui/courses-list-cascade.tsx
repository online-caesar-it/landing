'use client';

import CourseCard from '@/entities/course/ui/course-card';
import CourseCardContent from '@/entities/course/ui/course-card-content';
import { directionColorPalette, directionIcons } from '@/shared/constants';
import { useDirections } from '@/shared/hooks';
import { twMerge } from 'tailwind-merge';

const CoursesListCascade = ({ className }: { className?: string }) => {
	const { directions } = useDirections();

	return (
		<div className={twMerge('relative', className)}>
			{directions &&
				directions
					.slice()
					.reverse()
					.map((direction, index) => {
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
