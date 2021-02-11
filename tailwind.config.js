const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: ['./{pages,components}/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				gray: colors.gray,
			},
		},
	},
	plugins: [
		// TODO: publish as npm module
		plugin(({ addUtilities }) => {
			const newUtilities = {
				'.m-safe': {
					marginTop: 'env(safe-area-inset-top)',
					marginRight: 'env(safe-area-inset-right)',
					marginBottom: 'env(safe-area-inset-bottom)',
					marginLeft: 'env(safe-area-inset-left)',
				},
				'.mx-safe': {
					marginRight: 'env(safe-area-inset-right)',
					marginLeft: 'env(safe-area-inset-left)',
				},
				'.my-safe': {
					marginTop: 'env(safe-area-inset-top)',
					marginBottom: 'env(safe-area-inset-bottom)',
				},
				'.mt-safe': {
					marginTop: 'env(safe-area-inset-top)',
				},
				'.mr-safe': {
					marginRight: 'env(safe-area-inset-right)',
				},
				'.mb-safe': {
					marginBottom: 'env(safe-area-inset-bottom)',
				},
				'.ml-safe': {
					marginLeft: 'env(safe-area-inset-left)',
				},
				'.p-safe': {
					paddingTop: 'env(safe-area-inset-top)',
					paddingRight: 'env(safe-area-inset-right)',
					paddingBottom: 'env(safe-area-inset-bottom)',
					paddingLeft: 'env(safe-area-inset-left)',
				},
				'.px-safe': {
					paddingRight: 'env(safe-area-inset-right)',
					paddingLeft: 'env(safe-area-inset-left)',
				},
				'.py-safe': {
					paddingTop: 'env(safe-area-inset-top)',
					paddingBottom: 'env(safe-area-inset-bottom)',
				},
				'.pt-safe': {
					paddingTop: 'env(safe-area-inset-top)',
				},
				'.pr-safe': {
					paddingRight: 'env(safe-area-inset-right)',
				},
				'.pb-safe': {
					paddingBottom: 'env(safe-area-inset-bottom)',
				},
				'.pl-safe': {
					paddingLeft: 'env(safe-area-inset-left)',
				},
			}

			addUtilities(newUtilities)
		}),
	],
}
