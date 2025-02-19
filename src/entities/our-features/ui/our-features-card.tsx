import Image from 'next/image';

type OurFeaturesCardProps = {
	label: string;
	number: number;
	icon: string;
	description: string;
};

export const OurFeaturesCard = (props: OurFeaturesCardProps) => {
	const { icon, number, label, description } = props;
	const changedNumber = number + 1;

	return (
		<div className='relative w-[44%] bg-linear-card-red mb-[65px] rounded-[50px] pt-[3.6%] pb-[3.6%] px-[4.3%] min-h-[420px] flex flex-col justify-between lg:rounded-[25px] lg:w-[49%] lg:mb-[28px] lg:p-[20px] md:w-full md:min-h-[340px] md:aspect-auto md:p-[24px] md:mb-2'>
			<div className='md:mb-5'>
				<h3 className='font-intro text-[30px] text-white leading-[1] mb-5 lg:text-2xl'>
					{label}
				</h3>
				<p className='text-right font-intro text-[#FFAFA6] lg:text-sm'>
					{description}
				</p>
			</div>
			<div className=''>
				<Image
					src={icon}
					width={190}
					height={175}
					quality={100}
					alt={`Картинка к ${label}`}
					className='lg:w-[150px] lg:h-[135px] md:w-[120px] md:h-[105px]'
				/>
			</div>
			<div className='absolute -bottom-1 -right-3 rounded-l-full bg-grey-85 w-fit text-white px-10 py-4 leading-[1] text-section-sm z-[1] font-intro transition-all xsm:px-7'>
				<span>{changedNumber}</span>
			</div>
		</div>
	);
};
