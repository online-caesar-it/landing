type TCheckboxIconProps = {
	className?: string;
};

export const CheckboxIcon = ({ className }: TCheckboxIconProps) => {
	return (
		<svg width='28' height='28' viewBox='0 0 35 35' fill='none'>
			<path
				className={className}
				d='M13.125 22.3125L7.65624 16.8437C6.81055 15.998 5.43942 15.998 4.59374 16.8437C3.74805 17.6894 3.74805 19.0606 4.59374 19.9062L11.5782 26.8907C12.4325 27.745 13.8175 27.745 14.6718 26.8907L31.2812 10.2812C32.1269 9.43555 32.1269 8.06442 31.2812 7.21874C30.4356 6.37305 29.0644 6.37305 28.2187 7.21874L13.125 22.3125Z'
			/>
		</svg>
	);
};
