'use client';

import { useAuth } from '@/shared/hooks';
import SectionLayout from '@/widgets/layouts/ui/section-layout';

type TProfileLayoutProps = {
	children?: React.ReactNode;
};

export default function ProfileLayout({ children }: TProfileLayoutProps) {
	useAuth();

	return (
		<SectionLayout className='grid grid-cols-[1fr_3fr_1fr] gap-7 text-blue-10 mt-14 xl:flex xl:flex-col'>
			{children}
		</SectionLayout>
	);
}
