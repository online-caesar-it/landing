import { StackItem } from '@/entities';
import { Fragment } from 'react';

type StackListProps = {
	array: {
		icon: string;
		color: string;
		name: string;
	}[];
	title: string;
};

export const StackList = ({ array, title }: StackListProps) => {
	return (
		<div className='mb-[75px]'>
			<h3 className='font-intro text-[#CBA6F7] text-5xl mb-9'>{title}</h3>
			<div className='flex flex-wrap gap-4 md:grid md:grid-cols-2 '>
				{array.map((item, index) => (
					<Fragment key={index}>
						<StackItem {...item} />
					</Fragment>
				))}
			</div>
		</div>
	);
};
