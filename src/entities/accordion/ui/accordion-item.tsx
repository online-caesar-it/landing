'use client';

import { useAccordion } from '@/features';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

type AccordionItemProps = {
	index: number;
	title: string;
	children: ReactNode;
};

export function AccordionItem({ index, title, children }: AccordionItemProps) {
	const { openIndex, toggle } = useAccordion();
	const isOpen = openIndex === index;

	// Определяем класс для изменения max-height в зависимости от состояния
	const cn = clsx({
		'max-h-96 py-[45px] md:py-[25px]': isOpen,
	});

	return (
		<div className='overflow-hidden w-full rounded-[50px] lg:rounded-[25px]'>
			<button
				className={`w-full text-left font-bold bg-grey-90 py-[30px] px-[45px] pb-[25px]  text-blue-50 font-intro text-3xl leading-[1] transition-all duration-500 flex items-center justify-between gap-4 outline-none md:text-lg md:px-[20px] sm:text-base ${
					isOpen && 'rounded-b-none'
				}`}
				onClick={() => toggle(index)}
			>
				<span>{title}</span>
				<Image
					width={40}
					height={40}
					alt='Иконка аккордиона'
					src='/icons/accordionIcon.svg'
					className={`transition-all duration-500 ${
						isOpen && '-rotate-180'
					} md:w-[20px] md:h-[20px]`}
				/>
			</button>
			<div
				className={twMerge(
					`max-h-0 overflow-hidden text-xl px-[40px] text-white bg-grey-75 transition-all duration-500 md:text-base md:px-[20px] sm:text-sm`,
					cn
				)}
			>
				{children}
			</div>
		</div>
	);
}
