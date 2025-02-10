type TCloseIconProps = {
	fill?: string;
	className?: string;
};

export const CloseIcon = ({ fill, className }: TCloseIconProps) => {
	return (
		<svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
			<path
				className={className}
				d='M2.7 17.1C2.20294 17.5971 1.39706 17.5971 0.9 17.1V17.1C0.402944 16.6029 0.402944 15.7971 0.9 15.3L7.2 9L0.9 2.7C0.402944 2.20294 0.402944 1.39706 0.9 0.9V0.9C1.39706 0.402944 2.20294 0.402944 2.7 0.9L9 7.2L15.3 0.9C15.7971 0.402944 16.6029 0.402944 17.1 0.9V0.9C17.5971 1.39706 17.5971 2.20294 17.1 2.7L10.8 9L17.1 15.3C17.5971 15.7971 17.5971 16.6029 17.1 17.1V17.1C16.6029 17.5971 15.7971 17.5971 15.3 17.1L9 10.8L2.7 17.1Z'
				fill={fill ? fill : '#B4BEFE'}
			/>
		</svg>
	);
};
