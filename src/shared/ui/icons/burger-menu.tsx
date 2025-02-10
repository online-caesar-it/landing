type TBurgerMenuProps = { className?: string };

export const BurgerMenu = ({ className }: TBurgerMenuProps) => {
	return (
		<svg width='24' height='20' viewBox='0 0 24 20' fill='none'>
			<rect
				y='6'
				width='24'
				height='2'
				rx='1'
				fill='#B4BEFE'
				className={className}
			/>
			<rect
				y='11'
				width='24'
				height='2'
				rx='1'
				fill='#B4BEFE'
				className={className}
			/>
		</svg>
	);
};
