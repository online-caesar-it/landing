import Image from 'next/image';
import Link from 'next/link';

type SocialItemProps = {
	icon: string;
	title: string;
	href?: string;
};

export const SocialItem = ({ icon, title, href }: SocialItemProps) => {
	return (
		<Link
			href={href ? href : '#'}
			title={`Перейти в ${title}`}
			aria-label={`Перейти в ${title}`}
		>
			<Image src={icon} alt={title} width={62} height={62} />
		</Link>
	);
};
