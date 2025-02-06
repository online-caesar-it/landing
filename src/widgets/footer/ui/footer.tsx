import { footerSocials } from '@/shared/constants';
import { FooterSocialsLink } from '@/shared/ui';
import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { Fragment } from 'react';
import { FooterLinksList } from './footer-links-list';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='md:py-20'>
			<div className='relative w-1/2 aspect-[3/1] mx-auto mb-[5%] mt-[12%] md:w-[90%] md:mb-16'>
				<Image src='/images/bigLogo.png' alt='Логотип CesarIT' fill />
			</div>
			<SectionLayout className='text-white flex flex-col items-end md:items-center'>
				<div className='flex items-center gap-4 mb-4 md:order-1'>
					{footerSocials.map((item, index) => (
						<Fragment key={index}>
							<FooterSocialsLink {...item} />
						</Fragment>
					))}
				</div>
				<FooterLinksList />
			</SectionLayout>
		</footer>
	);
};

export default Footer;
