'use client';

import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type CustomCheckboxProps = {
	name: string;
	label: string;
	variant?: 'blue' | 'red' | 'white' | 'dark';
};

export const CustomCheckbox = (props: CustomCheckboxProps) => {
	const { label, name, variant = 'red' } = props;
	const [checked, setChecked] = useState<boolean>(false);

	const textCn = twMerge(
		'text-lg font-intro leading-[1]',
		variant === 'red' && 'text-[#F6C7C5]',
		variant === 'blue' && 'text-blue-10'
	);

	const checkboxCn = twMerge(
		'w-6 h-6 flex items-center justify-center  rounded-md transition-all',
		variant === 'red' && 'bg-[#313244]',
		variant === 'blue' && 'bg-blue-10'
	);

	const variantsIcons = {
		blue: '/icons/checkbox-arrow.svg',
		red: '/icons/checkbox-arrow.svg',
		white: '',
		dark: '',
	};

	return (
		<div
			className='flex items-center gap-2 cursor-pointer mb-[40px]'
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
				<div className={checkboxCn}>
					{checked && (
						<Image
							alt='Checked'
							width={20}
							height={20}
							src={variantsIcons[variant]}
						/>
					)}
				</div>
			</label>
			<span className={textCn}>{label}</span>
		</div>
	);
};
