'use client';

import Image from 'next/image';
import { TeacherCardRole } from './teacher-card-role';
import { TeacherCardButton } from './teacher-card-button';
import { TeacherCardFilter } from './teacher-card-filter';
import { TeacherCardDescription } from './teacher-card-description';
import { useState } from 'react';

type TeacherCardProps = {
	name: string;
	avatar: string;
	description: string;
	role: string;
};

export const TeacherCard = (props: TeacherCardProps) => {
	const { avatar, description, name, role } = props;
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className={`relative flex ${open ? '' : 'mr-[30px]'}`}>
			<div className='relative bg-black aspect-square min-w-[366px] rounded-[50px] overflow-hidden z-30 group'>
				<TeacherCardRole isOpen={open} role={role} />
				<TeacherCardFilter isOpen={open} />
				<TeacherCardButton isOpen={open} setOpen={setOpen} />
				<Image
					fill
					alt='Учитель'
					src='/images/mock.png'
					className='object-cover'
				/>
			</div>
			<TeacherCardDescription
				name={name}
				isOpen={open}
				description={description}
			/>
		</div>
	);
};
