import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type TeacherCardButtonProps = {
	isOpen: boolean;
	setOpen: (el: boolean) => void;
};

export const TeacherCardButton = ({
	isOpen,
	setOpen,
}: TeacherCardButtonProps) => {
	return (
		<div
			role='button'
			title='Развернуть описание'
			className={twMerge(
				'absolute h-full w-[35px] top-0 -right-full z-30 transition-all duration-200 bg-[#181825] group-hover:right-0'
			)}
			onClick={() => setOpen(!isOpen)}
		>
			<Image
				alt=''
				width={21}
				height={21}
				src='/icons/whiteArrow.svg'
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
			/>
		</div>
	);
};
