'use client';

import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'motion/react';

export const useMotionDiv = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) mainControls.start('visible');
	}, [isInView, mainControls]);

	const views = {
		sideView: {
			hidden: { opacity: 0, x: 75 },
			visible: { opacity: 1, x: 0 },
		},
		bottomView: {
			hidden: { opacity: 0, y: 75 },
			visible: { opacity: 1, y: 0 },
		},
	};

	return { ref, isInView, mainControls, views };
};
