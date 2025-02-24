import { StackItem } from '@/entities';
import { StackItemExtended } from '@/entities/';
import { Fragment } from 'react';

type StackListProps = {
	array: {
		icon: string;
		color: string;
		name: string;
		tooltip?: string;
		iconColor?: string;
	}[];
	title: string;
	extended?: boolean;
};

export const StackList = ({ array, title, extended }: StackListProps) => {
	if (extended) {
		return (
			<div className='mb-[75px]'>
				<h3 className='font-intro text-[#CBA6F7] text-5xl mb-9 md:text-center'>
					{title}
				</h3>
				<div className='flex flex-wrap gap-4 md:flex-col md:items-center'>
					{array.map((item, index) => (
						<Fragment key={index}>
							<StackItemExtended
								{...item}
								tooltip={item.tooltip!}
								iconColor={item.iconColor!}
							/>
						</Fragment>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className='mb-[75px]'>
			<h3 className='font-intro text-[#CBA6F7] text-5xl mb-9'>{title}</h3>
			<div className='flex flex-wrap gap-4 md:grid md:grid-cols-3 sm:grid-cols-2 '>
				{array.map((item, index) => (
					<Fragment key={index}>
						<StackItem {...item} />
					</Fragment>
				))}
			</div>
		</div>
	);
};
