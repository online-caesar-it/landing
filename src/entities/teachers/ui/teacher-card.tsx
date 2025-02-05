import Image from 'next/image';

type TeacherCardProps = {
	name: string;
	avatar: string;
	description: string;
	role: string;
};

export const TeacherCard = (props: TeacherCardProps) => {
	const { avatar, description, name, role } = props;

	return (
		<div className='max-w-[12%] text-center'>
			<div className='relative max-w-[173px] aspect-square rounded-full bg-white mb-[30px]'>
				<Image src={avatar} alt={`Преподаватель - ${name}`} fill />
			</div>
			<div className='mb-[25px]'>
				<h3 className='font-intro text-blue-0 text-5xl leading-[1]'>{name}</h3>
			</div>
			<div className='bg-linear-dark py-[15px] text-white rounded-[30px] mb-[42px]'>
				<p>{description}</p>
			</div>
			<div className='text-white leading-[1]'>
				<span>{role}</span>
			</div>
		</div>
	);
};
