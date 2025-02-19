export const usePromotionCard = (): Record<
	string,
	{ background: string; titleColor: string; border: string }
> => {
	return {
		blue: {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(33,55,98,1)_60%,rgba(52,118,225,1)_100%)]',
			titleColor: 'text-blue-90',
			border: 'border-blue-90',
		},
		green: {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(56,109,74,1)_60%,rgba(102,229,125,1)_100%)]',
			titleColor: 'text-green-40',
			border: 'border-green-40',
		},
		'light-blue': {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(74,93,131,1)_60%,rgba(137,180,250,1)_100%)]',
			titleColor: 'text-blue-30',
			border: 'border-blue-30',
		},
		pink: {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(115,62,84,1)_60%,rgba(224,108,140,1)_100%)]',
			titleColor: 'text-red-70',
			border: 'border-red-70',
		},
		orange: {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(117,67,22,1)_60%,rgba(255,132,0,1)_100%)]',
			titleColor: 'text-orange-40',
			border: 'border-orange-40',
		},
		'light-green': {
			background:
				'bg-[linear-gradient(180deg,rgba(24,24,37,1)_22%,rgba(78,102,85,1)_60%,rgba(166,227,161,1)_100%)]',
			titleColor: 'text-green-30',
			border: 'border-green-30',
		},
	};
};
