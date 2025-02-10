import { navList } from '../model/nav-list';
import { NavLink } from '@/shared/ui/nav-link/ui';
import ListRender from '@/features/abstract/list-render';
import { Fragment } from 'react';

const Nav = () => {
	return (
		<nav className={'flex items-center gap-6 2xl:hidden'}>
			<ListRender list={navList}>
				{(item, index) => (
					<Fragment key={index}>
						<NavLink {...item} />
					</Fragment>
				)}
			</ListRender>
		</nav>
	);
};

export default Nav;
