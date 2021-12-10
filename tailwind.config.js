module.exports = {
	content: ['./**/*.css', './{pages,components}/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	plugins: [require('tailwindcss-safe-area')],
}
