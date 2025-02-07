'use client';

import { useTeacherCard } from '../model';
import { TeacherCardRole } from './teacher-card-role';
import { TeacherDescription } from './teacher-description';
import { TeacherCardWrapper } from './teacher-card-wrapper';
import { TeacherCardControll } from './teacher-card-controll';
import { twMerge } from 'tailwind-merge';

export const TeacherCard = () => {
	const { handleDecrease, handleExpand, isExpanded, ref } = useTeacherCard();

	return (
		<div
			ref={ref}
			className={twMerge(
				'relative flex w-[400px] transition-all duration-500',
				isExpanded && 'w-[1050px]'
			)}
		>
			<TeacherCardWrapper handleExpand={handleExpand} isExpanded={isExpanded}>
				<TeacherCardRole isExpanded={isExpanded} />
				<TeacherCardControll />
			</TeacherCardWrapper>
			<TeacherDescription
				isExpanded={isExpanded}
				handleDecrease={handleDecrease}
			/>
		</div>
	);
};
