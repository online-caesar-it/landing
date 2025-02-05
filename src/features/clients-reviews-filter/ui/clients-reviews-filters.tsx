'use client';

import { reviews } from '@/shared/constants';
import { Button } from '@/shared/ui';
import { useClientReviewsContext } from '@/widgets/clients-reviews/ui/client-reviews-context';
import { Fragment } from 'react';

export const ClientsReviewsFilters = () => {
	const { setSelectedCategory, selectedCategory } = useClientReviewsContext();

	const handleClick = (value: string) => {
		if (setSelectedCategory) {
			setSelectedCategory(selectedCategory === value ? '' : value);
		}
	};

	return (
		<div className='flex items-center justify-between'>
			{reviews.map(category => (
				<Fragment key={category.id}>
					<Button
						disabled={selectedCategory === category.value}
						onClick={() => handleClick(category.value)}
						variant='outline'
						size='lg'
					>
						{category.title}
					</Button>
				</Fragment>
			))}
		</div>
	);
};
