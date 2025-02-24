import { Tooltip } from './Tooltip';
import Image from 'next/image';

type TStackItemExtendedProps = {
	icon: string;
	color: string;
	name: string;
	iconColor: string;
	tooltip: string;
};

export const StackItemExtended = (props: TStackItemExtendedProps) => {
	const { color, icon, name, iconColor, tooltip } = props;

	return (
		<div className='flex-grow md:flex-grow-0'>
			<div className='w-fit relative md:w-fit'>
				<div
					aria-label={name}
					className={`border-[15px] border-solid bg-[#1E1E2E] rounded-[50px] w-full aspect-square p-[45px] flex items-center justify-center relative ${color} basis-36 lg:w-full md:rounded-[25px] md:h-fit md:aspect-auto md:p-28`}
				>
					<Image
						src={icon}
						alt=''
						width={107}
						height={107}
						className='min-w-[90px] lg:w-[80px] lg:h-[80px] md:w-[65px] md:h-[65px] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'
					/>
				</div>
				<span className='text-white block text-center w-fit mx-auto mt-3 text-base'>
					{name}
				</span>
				<Tooltip color={iconColor} text={tooltip} />
			</div>
		</div>
	);
};
