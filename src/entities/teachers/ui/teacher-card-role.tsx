type TeacherCardRoleProps = {
	isOpen: boolean;
	role: string;
};

export const TeacherCardRole = ({ isOpen, role }: TeacherCardRoleProps) => {
	return (
		<div
			className={`absolute -bottom-full left-1/2 -translate-x-1/2 z-20 text-white font-intro text-[30px] leading-[1] transition-all text-center duration-500 group-hover:bottom-5 ${
				isOpen && 'bottom-5'
			}`}
		>
			{role}
		</div>
	);
};
