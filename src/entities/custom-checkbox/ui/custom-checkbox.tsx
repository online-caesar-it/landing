'use client';

import { CheckboxIcon } from '@/shared/ui/icons';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type CustomCheckboxProps = {
	name: string;
	label: string;
	variant?: 'blue' | 'red' | 'white' | 'dark';
};

export const CustomCheckbox = (props: CustomCheckboxProps) => {
	const { label, name, variant = 'red' } = props;
	const [checked, setChecked] = useState<boolean>(true);

	const textCn = twMerge(
		'text-3xl font-intro leading-[1] lg:text-xl md:text-lg',
		variant === 'red' && 'text-[#F6C7C5]',
		variant === 'blue' && 'text-blue-10'
	);

	const checkboxCn = twMerge(
		'w-[30px] h-[30px] flex items-center justify-center rounded-md transition-all',
		variant === 'red' && 'bg-[#313244]',
		variant === 'blue' && 'bg-blue-10'
	);

	const iconCn = twMerge(
		variant === 'blue' && 'fill-[#33334D]',
		variant === 'red' && 'fill-[#E06C8C]'
	);

	return (
		<div
			className='flex items-center gap-2 cursor-pointer'
			onClick={() => setChecked(!checked)}
		>
			<label className='relative flex items-center'>
				<input
					required
					name={name}
					type='checkbox'
					checked={checked}
					className='absolute opacity-0 w-0 h-0'
					onChange={() => {}}
				/>
			</label>
			<div className={checkboxCn}>
				{checked && <CheckboxIcon className={iconCn} />}
			</div>
			<span className={textCn}>{label}</span>
		</div>
	);
};
