import {
	About,
	Banner,
	Stack,
	Guarantees,
	OurFeatures,
	CoursesBlock,
	ChildLearning,
	Recording,
	Teachers,
	Promotions,
} from '@/widgets';
// import FeedbackBlock from '@/widgets/feedback/ui/feedback-block';

const Page = () => {
	return (
		<div>
			<Banner />
			<About />
			<OurFeatures />
			<Guarantees />
			<ChildLearning />
			<Stack />
			<CoursesBlock />
			<Recording />
			<Teachers />
			<Promotions />
		</div>
	);
};

export default Page;
