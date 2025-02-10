import { navList } from '@/widgets/header/model/nav-list';
import { MenuLink } from './menu-link';
import { Fragment } from 'react';

export const MenuLinksList = () => {
	return (
		<div className='flex flex-col gap-8 md:gap-4'>
			{navList.map((item, index) => (
				<Fragment key={index}>
					<MenuLink
						link={item.link}
						title={item.title}
						childItems={item.childItems}
					/>
				</Fragment>
			))}
		</div>
	);
};
