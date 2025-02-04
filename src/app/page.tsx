import { About } from '@/widgets';
import Banner from '@/widgets/banner/ui/banner';
// import CoursesBlock from '@/widgets/courses/ui/courses-block';
// import FeedbackBlock from '@/widgets/feedback/ui/feedback-block';
// import PromoBlock from '@/widgets/promo/ui/promo-block';

const Page = () => {
	return (
		<div>
			<Banner />
			<About />
			{/* <CoursesBlock />
      <FeedbackBlock />
      <PromoBlock /> */}
		</div>
	);
};

export default Page;
