type TBubbleTailIconProps = {
	fill?: string;
};

export const BubbleTailIcon = ({ fill }: TBubbleTailIconProps) => {
	return (
		<svg width='84' height='84' viewBox='0 0 84 84' fill='none'>
			<path
				d='M0.355463 64.6154C0.355463 64.6154 30.3561 -16.8848 30.3561 3.61523C30.3561 61.6239 83.856 83.6154 83.856 83.6154C83.856 83.6154 47.3568 83.592 30.3561 76.1036C13.3555 68.6152 0.355463 64.6154 0.355463 64.6154Z'
				fill={fill ? fill : '#6A629B'}
			/>
		</svg>
	);
};
