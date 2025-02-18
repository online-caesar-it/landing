import { Profile } from '@/widgets';
import { LeftSidebar, RightSidebar } from '@/features/profile/ui';

export default function ProfilePage() {
	return (
		<>
			<LeftSidebar />
			<Profile />
			<RightSidebar />
		</>
	);
}
