'use client';

import { useMobileMenu } from '../model';
import { directions } from '@/shared/constants';
import { ChevronDownIconBig } from '@/shared/ui/icons';
import { Fragment, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const filteredLinks = ['/directions'];

type TMenuLinkProps = {
	title: string;
	link: string;
	childItems?: {
		title: string;
		link: string;
	}[];
};

export const MenuLink = ({ link, title, childItems }: TMenuLinkProps) => {
	const { setOpen: open } = useMobileMenu();
	const [isOpen, setOpen] = useState<boolean>(false);

	const handleChildClick = () => {
		setOpen(false);
		open!(false);
	};

	if (filteredLinks.includes(link)) {
		return (
			<div className=''>
				<div className='flex items-start'>
					<button
						onClick={() => setOpen(!isOpen)}
						className='font-intro leading-[1.1] text-mobile-menu-link text-[#555975] transition-all hover:text-[#B4BEFE] lg:text-[70px] md:text-[40px] sm:text-[36px] xsm:text-[30px]'
					>
						{title}
					</button>
					{childItems && (
						<div className=''>
							<ChevronDownIconBig
								className={twMerge(
									'md:w-10 md:h-8 sm:w-8 sm:h-7 transition-all',
									isOpen && '-rotate-180'
								)}
							/>
						</div>
					)}
				</div>
				{childItems && isOpen && directions && (
					<div className='flex flex-col gap-[15px] mt-10 md:mb-5'>
						{directions.map((item, index) => (
							<Fragment key={index}>
								<Link
									onClick={handleChildClick}
									href={`/direction/${item.slug}`}
									className='text-[#555975] transition-all hover:text-[#B4BEFE] font-intro text-6xl leading-[1] md:text-3xl xsm:text-lg'
								>
									{item.title}
								</Link>
							</Fragment>
						))}
					</div>
				)}
			</div>
		);
	}

	return (
		<div className='flex items-start' onClick={() => open!(false)}>
			<Link
				className='font-intro leading-[1.1] text-mobile-menu-link text-[#555975] transition-all hover:text-[#B4BEFE] lg:text-[70px] md:text-[40px] sm:text-[36px] xsm:text-[30px]'
				href={link}
			>
				{title}
			</Link>
			{childItems && (
				<div className='sm:hidden'>
					<ChevronDownIconBig />
				</div>
			)}
		</div>
	);
};
