export const TooltipIcon = ({ fill }: { fill: string }) => {
	return (
		<svg width='21' height='20' viewBox='0 0 21 20' fill='none'>
			<path
				d='M10.3252 19C15.2958 19 19.3252 14.9706 19.3252 10C19.3252 5.02944 15.2958 1 10.3252 1C5.35463 1 1.3252 5.02944 1.3252 10C1.3252 14.9706 5.35463 19 10.3252 19Z'
				stroke={fill}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10.3252 6H10.3352V6.01H10.3252V6Z'
				stroke={fill}
				strokeWidth='3'
				strokeLinejoin='round'
			/>
			<path
				d='M10.3252 10V14'
				stroke={fill}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
