import Image from 'next/image';

type OurFeaturesCardProps = {
	label: string;
	number: number;
	icon: string;
};

export const OurFeaturesCard = (props: OurFeaturesCardProps) => {
	const { icon, number, label } = props;
	const changedNumber = number + 1;

	return (
		<div className='relative w-[44%] aspect-[1.3/1] max-h-[441px] bg-red-90 mb-[65px] rounded-[50px] pt-[3.6%] px-[4.3%] min-h-[420px] lg:rounded-[25px] lg:w-[49%] lg:mb-[28px] md:w-full md:min-h-[340px] md:aspect-auto md:p-[24px]'>
			<h3 className='font-intro text-section-sm text-white'>{label}</h3>
			<div className='absolute -bottom-1 -left-3 rounded-r-full bg-grey-85 w-fit text-white px-10 py-4 leading-[1] text-section-sm z-[1] font-intro transition-all xsm:px-7'>
				<span>{changedNumber}</span>
			</div>
			<div className='absolute bottom-[25px] left-[30px] md:left-auto md:right-[24px]'>
				<Image
					src={icon}
					alt={`Картинка к ${label}`}
					width={210}
					height={195}
				/>
			</div>
		</div>
	);
};
