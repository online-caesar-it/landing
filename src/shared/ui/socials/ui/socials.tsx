import { socials } from '@/shared/constants';
import { SocialItem } from './social-item';
import { Fragment } from 'react';

export const Socials = () => {
	return (
		<div className='flex items-center gap-5'>
			{socials.map((item, index) => (
				<Fragment key={index}>
					<SocialItem {...item} />
				</Fragment>
			))}
		</div>
	);
};
