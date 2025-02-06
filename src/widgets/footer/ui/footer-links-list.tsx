import { links } from '@/shared/constants';
import Link from 'next/link';

export const FooterLinksList = () => {
	return (
		<ul className='flex items-center gap-4 font-intro text-blue-40 justify-between w-full flex-wrap mb-[18px] lg:justify-normal lg:gap-2 md:flex-col md:items-center md:text-xl md:text-center md:gap'>
			<li>
				<Link href='tel:+7952416586' className='hover:underline'>
					+7952416586
				</Link>
			</li>
			<li>
				<Link href='#' className='hover:underline'>
					ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
				</Link>
			</li>
			{links.map(({ href, title }, index) => (
				<li key={index}>
					<Link href={href} className='hover:underline'>
						{title}
					</Link>
				</li>
			))}
		</ul>
	);
};
