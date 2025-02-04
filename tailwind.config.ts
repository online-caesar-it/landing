import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			margin: {
				'section-bottom': '239px',
			},
			fontFamily: {
				intro: ['var(--font-intro-friday)', 'sans-serif'],
				greco: ['var(--font-greco-roman)', 'sans-serif'],
			},
			fontSize: {
				'section-sm': 'clamp(28px, 2.4vw, 36px)',
				'section-lg': 'clamp(26px, 5.6vw, 50px)',
			},
			backgroundImage: {
				'linear-purple':
					'linear-gradient(270deg, rgba(69,20,106,0.7105217086834734) 0%, rgba(110,33,167,1) 40%)',
				'linear-pink':
					'linear-gradient(270deg, rgba(175,29,70,0.7553396358543417) 0%, rgba(224,108,141,1) 40%)',
				'linear-pink-promo':
					'linear-gradient(190deg, rgba(255,48,104,1) 0%, rgba(181,184,248,1) 100%)',
				'linear-blue-promo':
					'linear-gradient(190deg, rgba(0,122,204,1) 0%, rgba(244,163,190,1) 100%)',
				'linear-orange-promo':
					'linear-gradient(190deg, rgba(228,79,38,1) 0%, rgba(244,163,190,1) 100%)',
				'linear-purple-promo':
					'linear-gradient(190deg, rgba(108,52,139,1) 0%, rgba(242,205,205,1) 100%)',
				'linear-blue-light-promo':
					'linear-gradient(190deg, rgba(0,172,215,1) 0%, rgba(217,217,217,1) 100%)',
				'linear-red-promo':
					'linear-gradient(190deg, rgba(175,29,70,1) 0%, rgba(244,163,190,1) 100%)',
			},
			colors: {
				blue: {
					'10': '#B5B8F8',
					'20': '#B4BEFE',
					'30': '#89B4FA',
					'40': '#7F849C',
					'50': '#74A7EB',
					'70': '#00ACD7',
					'80': '#35333B',
				},
				red: {
					'10': '#D9D9D9',
					'30': '#F2CDCD',
					'40': '#F5C2E7',
					'50': '#F4A3BE',
					'60': '#F38BA8',
					'65': '#E06C8D',
					'80': '#FF3068',
					'90': '#D72067',
					'95': '#AF1D46',
				},
				green: {
					'30': '#A6E3A1',
					'60': '#6B9C1F',
				},
				orange: {
					'30': '#FFAB19',
					'40': '#FF8400',
					'60': '#E44F26',
				},
				yellow: {
					'20': '#35333B',
					'40': '#7F849C',
				},
				purple: {
					'80': '#6C348B',
				},
				cyan: {
					'20': '#89DCEB',
					'60': '#01C8FE',
				},
				teal: {
					'20': '#94E2D5',
					'70': '#52ABA8',
				},
				emerald: {
					'60': '#0ACF83',
				},
				grey: {
					'30': '#313244',
					'40': '#7F849C',
					'60': '#34333D',
					'65': '#37333A',
					'70': '#35333B',
					'75': '#34333B',
					'80': '#303236',
					'85': '#181824',
					'90': '#181825',
				},
				white: '#FFFFFF',
			},
		},
		fontSize: {
			'link-md': '36px',
			xs: '12px',
			sm: '14px',
			base: '16px',
			lg: '18px',
			xl: '20px',
			'2xl': '22px',
			'3xl': '24px',
			'4xl': '28px',
			'5xl': 'clamp(22px, 3.5vw, 32px)',
			'6xl': '48px',
			'7xl': '60px',
			'8xl': '72px',
			'9xl': '88px',
		},
		screens: {
			'5xl': { max: '1729px' },
			'4xl': { max: '1513px' },
			'3xl': { max: '1442px' },
			'2xl': { max: '1290px' },
			xl: { max: '1171px' },
			lg: { max: '1025px' },
			md: { max: '769px' },
			sm: { max: '431px' },
			xsm: { max: '375px' },
		},
	},
	plugins: [],
} satisfies Config;
