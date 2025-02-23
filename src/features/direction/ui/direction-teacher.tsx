import SectionLayout from '@/widgets/layouts/ui/section-layout';
import Image from 'next/image';

type TDirectionTeacherProps = {
	avatar: string;
	firstName: string;
	lastName: string;
	patronymic: string;
};

export const DirectionTeacher = (props: TDirectionTeacherProps) => {
	const { avatar, firstName, lastName, patronymic } = props;
	return (
		<SectionLayout>
			<div className='flex items-center gap-5'>
				<div className='bg-[#D9D9D9] rounded-full w-fit'>
					<Image
						width={97}
						height={97}
						src={avatar}
						alt={`Преподаватель - ${lastName} ${firstName}`}
					/>
				</div>
				<div className='font-intro'>
					<span className='block text-[#7F849C] text-xl mb-2'>
						Преподаватель
					</span>
					<div className='text-5xl text-white flex gap-3'>
						<span>{lastName}</span>
						<span>{firstName}</span>
						<span>{patronymic}</span>
					</div>
				</div>
			</div>
		</SectionLayout>
	);
};
