import Image from 'next/image';

type TCourseCardContent = {
	title: string;
	body?: string;
	image?: string;
};

const CourseCardContent = ({ title, body, image }: TCourseCardContent) => {
	return (
		<div className='flex flex-col'>
			<h3 className='font-intro text-5xl leading-[1] mb-5'>{title}</h3>
			<p className='font-semibold text-[#6A629B] max-w-[80%]'>{body}</p>
			<Image
				src={`/courses/${image}`}
				alt={title}
				width={150}
				height={150}
				className='absolute right-5 bottom-5'
			/>
		</div>
	);
};

export default CourseCardContent;
