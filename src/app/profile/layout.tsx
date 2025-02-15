import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { LeftSidebar, MainProfile, RightSidebar } from '@/features/profile/ui';

type TProfileLayoutProps = {
	children?: React.ReactNode;
};

export default function ProfileLayout({ children }: TProfileLayoutProps) {
	return (
		<SectionLayout className='grid grid-cols-[1fr_3fr_1fr] text-blue-10 mt-14'>
			<LeftSidebar />
			<MainProfile>{children}</MainProfile>
			<RightSidebar />
		</SectionLayout>
	);
}
