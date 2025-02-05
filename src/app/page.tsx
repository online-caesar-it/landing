import { About, Banner, Stack, Teachers, Recording } from '@/widgets';
import { CoursesBlock, ChildLearning, ClientsReviews } from '@/widgets';
import { Promotions, Guarantees, OurFeatures, NewVectors } from '@/widgets';

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
		</div>
	);
};

export default Page;
