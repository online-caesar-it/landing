import ChevronDownIcon from '@/shared/ui/icons/chevron-down-icon';
import { ReactNode } from 'react';

type TNavList = {
	title: string;
	icon?: ReactNode;
	link: string;
	childItems?: {
		title: string;
		link: string;
	}[];
};

export const navList: TNavList[] = [
	{
		title: 'Блог',
		icon: <ChevronDownIcon />,
		link: '/blog',
	},
	{
		title: 'Контакты',
		icon: <ChevronDownIcon />,
		link: '/contacts',
	},
	{
		title: 'Все направления',
		icon: <ChevronDownIcon />,
		link: '/directions',
		childItems: [
			{
				link: '#',
				title: 'фронтенд',
			},
			{
				link: '#',
				title: 'ui/ux дизайн',
			},
			{
				link: '#',
				title: 'верстка сайтов',
			},
			{
				link: '#',
				title: 'go',
			},
			{
				link: '#',
				title: 'js/ts',
			},
			{
				link: '#',
				title: 'python',
			},
			{
				link: '#',
				title: 'иллюстрация',
			},
		],
	},
];
