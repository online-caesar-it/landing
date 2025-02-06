import { ButtonLink } from '@/shared/ui';
import { NewVectorsCard } from '@/entities';
import { newVectors } from '@/shared/constants';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';

export const NewVectors = () => {
	return (
		<SectionLayout className='mb-section-bottom md:mb-24'>
			<div className='text-blue-0 text-left font-intro mb-[140px] 2xl:mb-[30px]'>
				<h2 className='text-section-xl leading-[1] md:text-[40px]'>
					новые НАПРАВЛЕНИЯ
				</h2>
				<p className='text-section-lg md:text-xl'>в разработке</p>
			</div>
			<div className='flex items-center justify-between gap-4 mb-[140px] 2xl:flex-wrap lg:flex-col 2xl:mb-[80px]'>
				{newVectors.map(item => (
					<Fragment key={item.id}>
						<NewVectorsCard {...item} />
					</Fragment>
				))}
			</div>
			<div className='max-w-[623px] mx-auto'>
				<ButtonLink href='#'>посмотреть еще</ButtonLink>
			</div>
		</SectionLayout>
	);
};
