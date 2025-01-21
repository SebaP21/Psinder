/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [scrollbar, scrollbarHide], // Dodanie obu pluginów
};
