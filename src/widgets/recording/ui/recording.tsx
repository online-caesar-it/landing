import SectionLayout from '@/widgets/layouts/ui/section-layout';

export const Recording = () => {
	return (
		<SectionLayout>
			<div className='mb-[88px]'>
				<h2 className='font-intro text-section-xl text-right leading-[1] text-blue-10'>
					оставить заявку <br /> на запись
				</h2>
			</div>
			<div className='flex justify-between gap-4'>
				<div className=''>form</div>
				<div className=''>image</div>
			</div>
		</SectionLayout>
	);
};
