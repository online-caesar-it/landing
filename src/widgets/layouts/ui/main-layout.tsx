import Footer from '@/widgets/footer/ui/footer';
import Header from '@/widgets/header/ui/header';
import PromoHeader from '@/widgets/header/ui/promo-header';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='min-h-dvh flex flex-col'>
			<PromoHeader />
			<Header />
			<main className='main overflow-x-hidden flex-grow'>{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
