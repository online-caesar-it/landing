import SectionLayout from '@/widgets/layouts/ui/section-layout';

const PromoHeader = () => {
	return (
		<div className='bg-red-40 flex justify-center items-center py-4 '>
			<SectionLayout className='text-center'>
				<h2 className='text-text-primary text-base font-normal font-intro md:text-sm sm:text-[12px]'>
					при покупке одного курса по программированию, мини-курс по ui/ux
					дизайну в подарок!
				</h2>
			</SectionLayout>
		</div>
	);
};

export default PromoHeader;
