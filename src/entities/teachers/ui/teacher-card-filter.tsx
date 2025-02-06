type TeacherCardFilterProps = {
	isOpen: boolean;
};

export const TeacherCardFilter = ({ isOpen }: TeacherCardFilterProps) => {
	return (
		<div
			className={`absolute top-0 left-0 w-full h-full opacity-0 bg-black z-10 transition-all duration-200 group-hover:opacity-30 ${
				isOpen && 'opacity-30'
			}`}
		></div>
	);
};
