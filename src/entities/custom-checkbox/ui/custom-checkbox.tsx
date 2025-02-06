'use client';

import Image from 'next/image';
import { useState } from 'react';

type CustomCheckboxProps = {
	name: string;
	label: string;
};

export const CustomCheckbox = ({ name, label }: CustomCheckboxProps) => {
	const [checked, setChecked] = useState<boolean>(false);

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
				<div className='w-6 h-6 flex items-center justify-center bg-[#313244] rounded-md transition-all'>
					{checked && (
						<Image
							alt='Checked'
							width={20}
							height={20}
							src='/icons/checkbox-arrow.svg'
						/>
					)}
				</div>
			</label>
			<span className='text-[#F6C7C5] text-lg font-intro leading-[1]'>
				{label}
			</span>
		</div>
	);
};
