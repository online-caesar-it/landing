'use client';

import { useAuth } from '@/shared/hooks';
import { useRouter } from 'next/navigation';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { LeftSidebar, MainProfile, RightSidebar } from '@/features/profile/ui';
import { useEffect } from 'react';

type TProfileLayoutProps = {
	children?: React.ReactNode;
};

export default function ProfileLayout({ children }: TProfileLayoutProps) {
	const { isAuthenticated } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/auth/sign-in');
		}
	}, [isAuthenticated, router]);

	if (!isAuthenticated) return null;

	return (
		<SectionLayout className='grid grid-cols-[1fr_3fr_1fr] text-blue-10 mt-14'>
			<LeftSidebar />
			<MainProfile>{children}</MainProfile>
			<RightSidebar />
		</SectionLayout>
	);
}
