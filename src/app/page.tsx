import { Promotions, Guarantees, OurFeatures } from '@/widgets';
import { About, Banner, Stack, Teachers, Recording } from '@/widgets';
import { CoursesBlock, ChildLearning, ClientsReviews } from '@/widgets';

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
		</div>
	);
};

export default Page;
