/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
			},
			colors: {
				grey: "#1f2023",
				primary: "#56e39f",
				secondary: "#ff5e5b",
			},
		},
	},
	plugins: [],
};
