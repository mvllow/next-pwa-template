const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	purge: ['./**/*.css', './{pages,components}/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				gray: colors.gray,
			},
		},
	},
	plugins: [require('tailwindcss-safe-area')],
}
