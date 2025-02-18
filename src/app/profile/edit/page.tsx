import {
	LeftSidebar,
	EditProfile,
	RightSidebar,
	EditProfileProvider,
	EditFormStatus,
} from '@/features/edit-profile/ui';

export default function ProfileEditPage() {
	return (
		<>
			<LeftSidebar />
			<EditProfileProvider>
				<EditProfile />
				<RightSidebar />
				<EditFormStatus />
			</EditProfileProvider>
		</>
	);
}
