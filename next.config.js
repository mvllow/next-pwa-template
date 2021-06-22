const withPWA = require('next-pwa')

module.exports = withPWA({
	images: {
		domains: ['images.unsplash.com'],
	},
	pwa: {
		dest: 'public',
	},
})
