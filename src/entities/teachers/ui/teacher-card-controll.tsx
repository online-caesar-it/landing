import Image from 'next/image';

export const TeacherCardControll = () => {
	return (
		<>
			<div className='absolute -right-full top-0 w-[35px] h-full bg-grey-90 z-[2] transition-all duration-[400ms] group-hover:right-0'>
				<Image
					alt=''
					width={20}
					height={20}
					src='/icons/whiteArrow.svg'
					className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'
				/>
			</div>
		</>
	);
};
