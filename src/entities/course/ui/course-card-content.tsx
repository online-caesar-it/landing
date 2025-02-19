import Image from 'next/image';

type TCourseCardContent = {
	title: string;
	body?: string;
	image?: string;
};

const CourseCardContent = ({ title, body, image }: TCourseCardContent) => {
	return (
		<div className='flex flex-col'>
			<h3 className='font-intro text-5xl'>{title}</h3>
			<p className='font-semibold text-[#6A629B]'>{body}</p>
			<Image
				src={`/courses/${image}`}
				alt={title}
				width={190}
				height={190}
				className='absolute right-5 bottom-5'
			/>
		</div>
	);
};

export default CourseCardContent;
