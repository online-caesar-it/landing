import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonLinkProps = LinkProps &
	ButtonOwnLinkProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

type ButtonOwnLinkProps = Partial<{
	icon?: boolean;
	className: string;
	size?: 'sm' | 'md';
	children: React.ReactNode;
	variant?: 'outline' | 'underline' | 'primary' | 'blue';
}>;

export const ButtonLink = (props: ButtonLinkProps) => {
	const {
		variant = 'primary',
		children,
		icon = false,
		size = 'md',
		...restProps
	} = props;

	const cn = twMerge(
		'flex items-center justify-center gap-[10px] relative w-full pt-[25px] pb-[20px] px-[50px] rounded-full transition-all group',
		variant === 'primary' && 'bg-red-60 hover:scale-105',
		variant === 'blue' &&
			'bg-blue-20 border-2 border-solid border-blue-20 hover:bg-transparent',
		icon && 'pr-[160px] hover:scale-100 lg:pr-[50px]',
		size === 'md' && 'text-5xl md:text-2xl sm:text-base',
		size === 'sm' && 'pt-[12px] pb-[7px] px-[32px]'
	);

	const textCn = twMerge(
		'font-normal uppercase font-intro leading-[1] transition-all',
		size === 'sm' && 'text-2xl',
		size === 'md' && 'text-button-primary text-link-md',
		variant === 'blue' && 'group-hover:text-blue-20'
	);

	return (
		<Link className={cn} {...restProps}>
			<span className={textCn}>{children}</span>
			{icon && (
				<Image
					alt=''
					width={88}
					height={2}
					className='absolute right-16 top-1/2 -translate-y-1/2 transition-all group-hover:right-14 lg:hidden'
					src='/icons/link-arrow.svg'
				/>
			)}
		</Link>
	);
};
