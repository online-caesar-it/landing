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

// TODO: Секция с блогом, секция с учителями, мобильное меню, статусы для бэка

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
