import { DirectionBanner, DirectionBubble, DirectionTeacher } from '@/features';
import { directions } from '@/shared/constants';
import { Metadata } from 'next';

type PageProps = { params: { slug: string } };

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const data = directions.find(direction => direction.slug === slug);
	return {
		title: `Направление - ${data?.title}`,
	};
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params;
	const direction = directions.find(direction => direction.slug === slug);

	if (!direction) return null;

	return (
		<div className='mt-[116px]'>
			<DirectionBanner
				title={direction.title}
				iconSrc={direction.thumbnail}
				color={direction.colorTheme}
				descripion={direction.desription}
			/>
			<DirectionBubble
				skills={direction.skills}
				person={direction.person}
				color={direction.colorTheme}
				advantages={direction.advantages}
			/>
			<DirectionTeacher {...direction.teacher} />
		</div>
	);
}
