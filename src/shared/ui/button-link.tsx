import clsx from 'clsx';
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
	variant?: 'outline' | 'underline' | 'primary';
}>;

export const ButtonLink = (props: ButtonLinkProps) => {
	const {
		variant = 'primary',
		children,
		icon = false,
		size = 'md',
		...restProps
	} = props;

	const cn = clsx({
		'bg-red-60 hover:scale-105': variant === 'primary',
		'pr-[160px] hover:scale-100 lg:pr-[50px]': icon,
		'text-5xl': size === 'md',
	});

	return (
		<Link
			className={twMerge(
				'flex items-center justify-center gap-[10px] relative w-full pt-[25px] pb-[20px] px-[50px] rounded-full transition-all group',
				cn
			)}
			{...restProps}
		>
			<span className='text-button-primary text-link-md font-normal uppercase font-intro leading-[1] md:text-2xl sm:text-base'>
				{children}
			</span>
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
