/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
	green: '#078C65',
	black: '#222222',
	white: '#ffffff',
	'light-grey': '#D9D8D4',
	'dark-green': '#018860',
	beige: '#A8A59B',
	'light-green': '#E5F4EF'
}
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		},
		extend: {
			fontSize: {
				xs: '0.82rem'
			}
		}
	},
	plugins: []
}
