/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			fontFamily: {
				roboto: ['"Roboto Flex"', 'sans-serif'],
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(90deg, #6A9113, #141517)',
			},
			// fontFamily: {
			// 	Robotoflex: ['Roboto Flex', 'sans - serif'],
			// },
			keyframes: {
				fadeSlideDown: {
					'0%': { opacity: '0', transform: 'translateY(-20%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeSlideUp: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-20%)' },
				},
			},
			animation: {
				fadeSlideDown: 'fadeSlideDown 0.5s ease-in-out',
				fadeSlideUp: 'fadeSlideUp 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
	corePlugins: {
		textFillColor: false, // Disabling the core plugin to create custom utility
	},
};
