import type { Config } from 'tailwindcss';
import * as color from 'tailwindcss/colors';

const plugin = require('tailwindcss/plugin');

const primary = '#8B00FF';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary,
			black: color.black,
			white: color.white,
			red: color.red,
			transparent: color.transparent,
			yellow: {
				700: '#F5C521',
			},
			gray: {
				300: '#d9dae8',
				500: '#999AA5',
				700: '#39393f',
				800: '#242529',
				900: '#191B1F',
				950: '#101215',
			},
		},
		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			fontSize: {
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0,0,0,0.4)',
				},
				'.outline-border-none': {
					outline: 'none',
					border: 'none',
				},
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.image-like-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none',
				},
			});
			addComponents({
				'.btn-primary': {
					backgroundColor: primary,
					color: '#fff',
					borderRadius: '0.65rem',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: '#660099',
					},
				},

				'.text-link': {
					textUnderline0ffset: 4,
					color: 'rgba(255, 255, 255, 0.9)',
					transition: 'text-decoration-color .3s ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 255, 255, 0.2)',
					'&:hover': {
						textDecorationColor: 'rgba(255, 255, 255, 0.9)',
					},
				},

				'.air-block': {
					borderRadius: prefix('borderRadius.layout'),
					backgroundColor: prefix('colors. gray.950'),
					color: prefix('colors white'),
					boxShadow: prefix('boxShadow.1g'),
				},
			});
		}),
	],
};
export default config;
