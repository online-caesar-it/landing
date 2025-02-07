import { twMerge } from 'tailwind-merge';

type TTeacherCardRole = {
	isExpanded: boolean;
};

export const TeacherCardRole = ({ isExpanded }: TTeacherCardRole) => {
	return (
		<span
			className={twMerge(
				'absolute -bottom-full left-1/2 -translate-x-1/2 text-white font-intro text-[30px] transition-all duration-300 z-[2] group-hover:bottom-5',
				isExpanded && 'bottom-5'
			)}
		>
			Фронтенд
		</span>
	);
};
