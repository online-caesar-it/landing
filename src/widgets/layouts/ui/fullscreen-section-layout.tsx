type FullscreenSectionLayoutProps = {
	id?: string;
	className?: string;
	children?: React.ReactNode;
};

export const FullscreenSectionLayout = (
	props: FullscreenSectionLayoutProps
) => {
	const { className, id, children } = props;

	return (
		<section id={id} className={className}>
			<div className='max-w-[1400px] w-[94%] mx-auto'>{children}</div>
		</section>
	);
};
