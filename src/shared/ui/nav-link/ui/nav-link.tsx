'use client';

import { SubMenu } from '@/widgets/header/ui/sub-menu';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

type TNavLinkProps = {
	link: string;
	title: string;
	icon?: React.ReactNode;
	childItems?: {
		title: string;
		link: string;
	}[];
};

export const NavLink = ({ link, title, icon, childItems }: TNavLinkProps) => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const handleOpenToggle = () => {
		setOpen(!isOpen);
	};

	return (
		<div
			className='relative flex items-center gap-1'
			onMouseEnter={handleOpenToggle}
			onMouseLeave={handleOpenToggle}
		>
			<Link
				className='text-blue-20 uppercase font-normal font-intro text-3xl'
				href={link}
			>
				{title}
			</Link>
			{childItems && (
				<div className={twMerge('transition-all', isOpen ? '-rotate-180' : '')}>
					{icon}
				</div>
			)}
			{childItems && <SubMenu isOpen={isOpen} />}
		</div>
	);
};
