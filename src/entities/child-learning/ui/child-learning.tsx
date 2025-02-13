import Image from 'next/image';

type ChildLearningProps = {
	pb: number;
	icon: string;
	text: string;
};

export const ChildLearningCard = ({ icon, pb, text }: ChildLearningProps) => {
	return (
		<div
			className='text-white w-fit h-fit max-w-[16%] flex flex-col items-center gap-4 3xl:max-w-[20%] 2xl:!mb-0 lg:max-w-[40%] md:max-w-full'
			style={{
				marginBottom: `${pb}%`,
			}}
		>
			<Image src={icon} alt='' width={175} height={175} quality={99} />
			<span className='block text-center font-intro text-3xl'>{text}</span>
		</div>
	);
};
