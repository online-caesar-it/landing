import SectionLayout from '@/widgets/layouts/ui/section-layout';
import { twMerge } from 'tailwind-merge';
import styles from '../styles/styles.module.css';

const PromoBlock = () => {
	return (
		<div className={twMerge(styles.gradient)}>
			<SectionLayout>
				<div className='h-[400px]'>{/* <PromoList /> */}</div>
			</SectionLayout>
		</div>
	);
};

export default PromoBlock;
