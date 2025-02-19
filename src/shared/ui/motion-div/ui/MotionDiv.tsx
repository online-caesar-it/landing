'use client';

import { useMotionDiv } from './model';
import type { MotionDivProps } from './model';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

export const MotionDiv = (props: MotionDivProps) => {
	const { children, delay, className, sideAnimation, ...otherProps } = props;
	const { mainControls, ref, views } = useMotionDiv();

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={mainControls}
			transition={{ delay: delay }}
			className={twMerge(className)}
			variants={sideAnimation ? views.sideView : views.bottomView}
			{...otherProps}
		>
			{children}
		</motion.div>
	);
};
