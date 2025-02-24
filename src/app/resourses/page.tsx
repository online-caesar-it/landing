import {
	communicationStackExtended,
	programmingStackExtended,
} from '@/shared/constants';
import { BackLink, StackList } from '@/shared/ui';
import SectionLayout from '@/widgets/layouts/ui/section-layout';

export default function ResoursesPage() {
	return (
		<div className='mt-[105px]'>
			<SectionLayout>
				<div className='mb-14 flex items-center gap-4'>
					<BackLink />
					<h1 className='font-intro text-blue-20 text-6xl leading-[1] md:text-4xl'>
						используемые инструменты и ресурсы
					</h1>
				</div>
				<div className=''>
					<StackList
						extended
						array={programmingStackExtended}
						title='для программирования'
					/>
					<StackList
						extended
						array={communicationStackExtended}
						title='для деловых коммуникаций и школьных предметов'
					/>
				</div>
			</SectionLayout>
		</div>
	);
}
