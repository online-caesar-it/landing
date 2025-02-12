import { twMerge } from 'tailwind-merge';

type separatorProps = {
	className?: string;
	offset?: number;
};

export const Separator = ({ className, offset }: separatorProps) => {
	return (
		<div
			className={twMerge('w-full h-[1px]', className)}
			style={{ paddingBottom: offset }}
		></div>
	);
};
