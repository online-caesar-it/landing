import { HTMLMotionProps } from 'motion/react';

export type MotionDivProps = HTMLMotionProps<'div'> & TAdditionalProps;

type TAdditionalProps = Partial<{
	children: React.ReactNode;
	delay: number;
	className: string;
	sideAnimation: boolean;
}>;
