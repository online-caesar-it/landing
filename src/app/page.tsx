import {
	Faq,
	About,
	Stack,
	Banner,
	Recording,
	Promotions,
	Guarantees,
	OurFeatures,
	NewVectors,
	Consulting,
	CoursesBlock,
	ChildLearning,
	ClientsReviews,
} from '@/widgets';

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
			<Promotions />
			<ClientsReviews />
			<NewVectors />
			<Faq />
			<Consulting />
		</div>
	);
};

export default Page;
