type FeedbackCardContentProps = {
	title: string;
	description: string;
};

const FeedbackCardContent = (props: FeedbackCardContentProps) => {
	const { description, title } = props;
	return (
		<div className='p-8'>
			<h3 className='text-5xl md:text-3xl leading-[1] mb-12'>{title}</h3>
			<div className=''>{description}</div>
		</div>
	);
};

export default FeedbackCardContent;
