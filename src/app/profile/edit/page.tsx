import { LeftSidebar } from '@/features/profile/ui';
import { EditProfile, RightSidebar } from '@/features/edit-profile/ui';

export default function ProfileEditPage() {
	return (
		<>
			<LeftSidebar />
			<EditProfile />
			<RightSidebar />
		</>
	);
}
