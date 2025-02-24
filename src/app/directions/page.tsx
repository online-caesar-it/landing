'use client';

import { useAuth } from '@/shared/hooks';
import { ButtonLink } from '@/shared/ui';
import { AllDirectionsList } from '@/features';
import SectionLayout from '@/widgets/layouts/ui/section-layout';

export default function AllDirectionsPage() {
	useAuth();

	return (
		<div className='mt-14'>
			<SectionLayout>
				<div className='mb-10'>
					<div className='w-full flex justify-end mb-8'>
						<ButtonLink href='/profile' size='xsm'>
							Вернуться в личный кабинет
						</ButtonLink>
					</div>
					<h1 className='font-intro text-6xl text-blue-20 md:leading-[1] md:text-[40px]'>
						Все направления
					</h1>
				</div>
				<AllDirectionsList />
			</SectionLayout>
		</div>
	);
}
