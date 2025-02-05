import Image from 'next/image';

type StackItemProps = {
	icon: string;
	color: string;
	name: string;
};

export const StackItem = ({ color, icon, name }: StackItemProps) => {
	return (
		<div
			aria-label={name}
			className={`border-[15px] border-solid bg-[#1E1E2E] rounded-[50px] w-[250px] aspect-square p-[55px] flex items-center justify-center relative ${color} md:w-full md:rounded-[25px]`}
		>
			<Image
				src={icon}
				alt=''
				width={107}
				height={107}
				className='md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'
			/>
		</div>
	);
};
