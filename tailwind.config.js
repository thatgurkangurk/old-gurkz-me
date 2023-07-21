/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
		extend: {
			colors: {
				themeColor: "#5EBFA8",
				themeBlack: "#121212"
			}
		},
	},
  plugins: []
};