type TeacherCardDescriptionProps = {
	name: string;
	description: string;
	isOpen: boolean;
};

export const TeacherCardDescription = ({
	name,
	isOpen,
	description,
}: TeacherCardDescriptionProps) => {
	return (
		<div
			className={`bg-black relative -ml-20 rounded-r-[50px] z-0 w-0 overflow-hidden p-5 text-blue-0 transition-all duration-700 ${
				isOpen && 'min-w-[500px] !z-50'
			}`}
		>
			<h3 className='font-intro text-4xl'>{name}</h3>
			<p>{description}</p>
		</div>
	);
};
