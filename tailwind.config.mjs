/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [scrollbar],
	corePlugins: {
		preflight: true
	}
};
