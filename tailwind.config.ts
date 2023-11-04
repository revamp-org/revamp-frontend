/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "hsl(var(--bg-primary))",
					foreground: "hsl(var(--primary))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--bg-sidebar))",
				},
				topbar: {
					DEFAULT: "hsl(var(--bg-topbar))",
					foreground: "hsl(var(--text-topbar))",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
