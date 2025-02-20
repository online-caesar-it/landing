'use client';

import { AccordionProvider } from '@/features';
import { AccordionItem } from './accordion-item';
import { Fragment } from 'react';
import { MotionDiv } from '@/shared/ui';

type AccordionProps<E extends { title: string; body: string }> = {
	items: E[];
};

export function Accordion<E extends { title: string; body: string }>({
	items,
}: AccordionProps<E>) {
	return (
		<AccordionProvider>
			<div className='flex gap-[10px] flex-wrap'>
				{items.map((item, index) => (
					<Fragment key={index}>
						<MotionDiv className='w-full' delay={+`0.${index + 1}`}>
							<AccordionItem index={index} title={item.title}>
								{item.body}
							</AccordionItem>
						</MotionDiv>
					</Fragment>
				))}
			</div>
		</AccordionProvider>
	);
}
