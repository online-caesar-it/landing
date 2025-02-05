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
			className={`border-[15px] border-solid bg-[#1E1E2E] rounded-[50px] w-fit p-[55px] ${color}`}
		>
			<Image src={icon} alt='' width={107} height={107} />
		</div>
	);
};
