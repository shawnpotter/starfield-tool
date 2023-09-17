import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'topo-light': "url('../public/background4k_light.png')",
				'topo-dark': "url('../public/background4k_dark.png')",
			},
		},
	},
	plugins: [],
}
export default config
