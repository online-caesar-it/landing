import { BackButton } from '@/shared/ui';
import SectionLayout from '@/widgets/layouts/ui/section-layout';

export default function StackPage() {
	return (
		<div>
			<SectionLayout>
				<div className='flex items-center gap-[10px] mb-14'>
					<BackButton />
					<h1 className='font-intro text-6xl text-blue-20 leading-[1]'>
						используемые инструменты и ресурсы
					</h1>
				</div>
				<div className=''>stack</div>
			</SectionLayout>
		</div>
	);
}
