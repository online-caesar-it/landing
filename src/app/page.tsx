import {
	About,
	Banner,
	Guarantees,
	OurFeatures,
	ChildLearning,
} from '@/widgets';
// import CoursesBlock from '@/widgets/courses/ui/courses-block';
// import FeedbackBlock from '@/widgets/feedback/ui/feedback-block';

const Page = () => {
	return (
		<div>
			<Banner />
			<About />
			<OurFeatures />
			<Guarantees />
			<ChildLearning />
		</div>
	);
};

export default Page;
