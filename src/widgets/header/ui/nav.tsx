import ListRender from '@/features/abstract/list-render';
import { navList } from '../model/nav-list';
import Link from 'next/link';

const Nav = () => {
	return (
		<nav className={'flex items-center gap-6 2xl:hidden'}>
			<ListRender list={navList}>
				{item => (
					<div className={'flex items-center'}>
						<Link
							className={
								'text-blue-20 uppercase font-normal font-intro text-3xl'
							}
							href={item.link}
						>
							{item.title}
						</Link>
						{item.icon}
					</div>
				)}
			</ListRender>
		</nav>
	);
};

export default Nav;
