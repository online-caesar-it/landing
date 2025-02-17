import { LeftSidebar } from '@/features/profile/ui';
import {
	EditProfile,
	EditProfileProvider,
	RightSidebar,
} from '@/features/edit-profile/ui';

export default function ProfileEditPage() {
	return (
		<>
			<LeftSidebar />
			<EditProfileProvider>
				<EditProfile />
				<RightSidebar />
			</EditProfileProvider>
		</>
	);
}
