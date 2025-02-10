import {
	Faq,
	About,
	Stack,
	Banner,
	Teachers,
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

// TODO:
// мобильное меню

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
			<ClientsReviews />
			<NewVectors />
			<Faq />
			<Consulting />
		</div>
	);
};

export default Page;
