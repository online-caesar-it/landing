'use client';

import { TooltipIcon } from '@/shared/ui/icons';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type TTooltipProps = {
	color: string;
	text: string;
};

export const Tooltip = ({ color, text }: TTooltipProps) => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const handleMouseChange = () => {
		setOpen(!isOpen);
	};

	return (
		<div>
			<div
				onMouseEnter={handleMouseChange}
				onMouseLeave={handleMouseChange}
				className='absolute -top-3 -right-3 cursor-pointer'
			>
				<TooltipIcon fill={color} />
			</div>
			<div
				className={twMerge(
					'bg-grey-80 text-white absolute z-[2] left-0 top-2 rounded-[15px] text-[12px] p-[10px] opacity-0 transition-all',
					isOpen && 'opacity-100'
				)}
			>
				{text}
			</div>
		</div>
	);
};
