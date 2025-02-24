import { directions } from '@/shared/constants';
import { Fragment } from 'react';
import { DirectionsItem } from './directions-item';

export const AllDirectionsList = () => {
	return (
		<div className='grid grid-cols-4 gap-12 2xl:grid-cols-3 xl:grid-cols-2 md:flex md:flex-col'>
			{directions.map(direction => (
				<Fragment key={direction.id}>
					<DirectionsItem {...direction} />
				</Fragment>
			))}
		</div>
	);
};
