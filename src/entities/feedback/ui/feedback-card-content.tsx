type FeedbackCardContentProps = {
	title: string;
	description: string;
};

const FeedbackCardContent = (props: FeedbackCardContentProps) => {
	const { description, title } = props;
	return (
		<div className='p-5'>
			<div className=''>{title}</div>
			<div className=''>{description}</div>
		</div>
	);
};

export default FeedbackCardContent;
