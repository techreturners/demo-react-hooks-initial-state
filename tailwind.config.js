module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontSize: {
				xs: '.75rem',
				sm: '.875rem',
				tiny: '.875rem',
				base: '2rem',
				lg: '2.125rem',
				xl: '2.25rem',
				'2xl': '2.5rem',
				'3xl': '2.875rem',
				'4xl': '3.25rem',
				'5xl': '4rem',
				'6xl': '5rem',
				'7xl': '6rem',
			},
			colors: {
				primary: {
					50: '#2123F8',
					100: '#0D10F7',
					200: '#0709D5',
					300: '#0607AD',
					400: '#040686',
					DEFAULT: '#03045E',
				},
				secondary: {
					DEFAULT: '#48CAE4',
				},
				success: {
					DEFAULT: '#0dab76',
				},
				warning: {
					DEFAULT: '#ffc300',
				},
				danger: {
					50: '#FFDAD6',
					100: '#FF7C70',
					200: '#FF5747',
					300: '#FF311F',
					400: '#F51400',
					DEFAULT: '#CC1100',
				},
				neutral: {
					DEFAULT: '#CAF0F8',
				},
				normal: {
					50: '#D6D6D6',
					DEFAULT: '#545454',
				},
			},
		},
	},
	plugins: [],
};
