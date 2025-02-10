import Link from 'next/link';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

type SubMenuProps = {
	isOpen: boolean;
	items: {
		title: string;
		link: string;
	}[];
};

export const SubMenu = ({ isOpen, items }: SubMenuProps) => {
	return (
		<div
			className={twMerge(
				'absolute bg-grey-80 top-full left-1/2 -translate-x-1/2 flex-col gap-2 p-5 rounded-[20px] w-full min-w-fit hidden',
				isOpen && 'flex'
			)}
		>
			{items.map((item, index) => (
				<Fragment key={index}>
					<Link
						className='text-blue-20 leading-[1.2] border-b border-b-blue-20 border-solid pb-[10px] capitalize last:border-b-0 last:pb-0 transition-all  hover:text-blue-70 active:text-blue-70 focus:text-blue-70'
						href={item.link}
					>
						{item.title}
					</Link>
				</Fragment>
			))}
		</div>
	);
};
