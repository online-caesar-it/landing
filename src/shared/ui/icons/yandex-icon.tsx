type TYandexIconProps = {
	fill?: string;
};

export const YandexIcon = ({ fill }: TYandexIconProps) => {
	return (
		<svg
			width='60'
			height='60'
			viewBox='0 0 60 60'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='30' cy='30' r='30' fill={fill ? fill : '#FC3F1D'} />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M60 30C60 46.5686 46.5686 60 30 60C13.4314 60 0 46.5686 0 30C0 13.4314 13.4314 0 30 0C46.5686 0 60 13.4314 60 30ZM39.6774 47.1017V12.8613H31.0592C22.7231 12.8613 17.7489 17.0029 17.7489 23.9385C17.7489 29.3923 20.5393 32.5074 24.7303 35.5095L24.8008 35.5588L24.7515 35.6295L17.0293 47.1334H23.3228L31.9553 34.2324L28.9989 32.2393C25.2771 29.7133 23.5061 27.7766 23.5061 23.5856C23.5061 19.677 26.3424 17.3416 31.0909 17.3416H33.7684H33.8567V17.4298V47.1017H39.6774Z'
				fill='white'
			/>
		</svg>
	);
};
