import Image from 'next/image';
import Link from 'next/link';

type FooterSocialsLinkProps = {
	icon: string;
	label: string;
	href: string;
};

export const FooterSocialsLink = (props: FooterSocialsLinkProps) => {
	const { href, icon, label } = props;
	return (
		<Link href={href} title={`Ссылка на социальную сеть - ${label}`}>
			<Image
				src={icon}
				width={40}
				height={40}
				alt={`Иконка соц-сети - ${label}`}
			/>
		</Link>
	);
};
