'use client';

import { useDirections } from '@/shared/hooks';
import Link from 'next/link';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

type SubMenuProps = {
	isOpen: boolean;
};

export const SubMenu = ({ isOpen }: SubMenuProps) => {
	const { directions } = useDirections();

	return (
		<div
			className={twMerge(
				'absolute bg-grey-80 top-full left-1/2 -translate-x-1/2 flex-col gap-2 p-5 rounded-[20px] w-full min-w-fit hidden',
				isOpen && 'flex'
			)}
		>
			{directions &&
				directions.map(direction => (
					<Fragment key={direction.id}>
						<Link
							className='text-blue-20 leading-[1.2] border-b border-b-blue-20 border-solid pb-[10px] capitalize last:border-b-0 last:pb-0 transition-all  hover:text-blue-70 active:text-blue-70 focus:text-blue-70'
							href={`/direction/${direction.id}`}
						>
							{direction.name}
						</Link>
					</Fragment>
				))}
		</div>
	);
};
