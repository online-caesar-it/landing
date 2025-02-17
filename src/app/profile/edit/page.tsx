import {
	LeftSidebar,
	EditProfile,
	RightSidebar,
	EditProfileProvider,
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
