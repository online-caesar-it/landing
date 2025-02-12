type TFormSnackbarProps = {
	title: string;
	subTitle?: string;
	icon?: React.ReactNode;
};

export const FormSnackbar = ({ title, icon, subTitle }: TFormSnackbarProps) => {
	return (
		<div className='font-intro mt-5 w-fit bg-grey-30 p-10 rounded-[25px] text-center mb-10 fixed top-[135px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-5'>
			{icon}
			<div>
				<h3 className='text-blue-20 text-[32px] mb-2 leading-[1]'>{title}</h3>
				<p className='text-xl text-blue-40 leading-[1]'>{subTitle}</p>
			</div>
		</div>
	);
};
