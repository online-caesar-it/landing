type TFormSnackbarProps = {
	title: string;
	subTitle?: string;
	icon?: React.ReactNode;
};

export const FormSnackbar = ({ title, icon, subTitle }: TFormSnackbarProps) => {
	return (
		<div className='font-intro mt-5 w-fit bg-grey-30 p-10 rounded-[25px] text-center mb-10 fixed top-[135px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-5 lg:w-auto lg:top-auto lg:bottom-5 lg:mb-0 lg:translate-x-0 lg:left-5 lg:right-5 z-[2] lg:p-5 md:flex-col md:p-2 md:left-2 md:right-2 md:bottom-2'>
			{icon}
			<div>
				<h3 className='text-blue-20 text-[32px] mb-2 leading-[1] lg:text-4xl md:text-xl'>
					{title}
				</h3>
				<p className='text-xl text-blue-40 leading-[1] lg:text-base md:text-sm'>
					{subTitle}
				</p>
			</div>
		</div>
	);
};
