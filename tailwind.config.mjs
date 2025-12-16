/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: '#2337ff',
					dark: '#000d8a',
				},
				gray: {
					light: 'rgb(229, 233, 240)',
					DEFAULT: 'rgb(96, 115, 159)',
					dark: 'rgb(34, 41, 57)',
				},
				black: 'rgb(15, 18, 25)',
			},
			fontFamily: {
				sans: ['Atkinson', 'sans-serif'],
			},
			boxShadow: {
				custom: '0 2px 6px rgba(96, 115, 159, 0.25), 0 8px 24px rgba(96, 115, 159, 0.33), 0 16px 32px rgba(96, 115, 159, 0.33)',
			},
			backgroundImage: {
				'gradient-custom': 'linear-gradient(rgba(229, 233, 240, 0.5), #fff)',
			},
		},
	},
	plugins: [],
};

