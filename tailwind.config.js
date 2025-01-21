/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slideAndRotateYes: {
					"0%": {
						transform: "translateX(-50vw) rotate(0deg) ",
						opacity: "0.5",
					},

					"100%": {
						transform: "translateX(100vw) rotate(45deg) ",
						opacity: "1",
					},
				},
				slideAndRotateNope: {
					"0%": { transform: "translateX(50vw) rotate(0deg)", opacity: "0.5" },
					"100%": {
						transform: "translateX(-100vw) rotate(-45deg)",
						opacity: "1",
					},
				},
			},
			animation: {
				slideYes: "slideAndRotateYes 0.7s ease-in-out forwards",
				slideNope: "slideAndRotateNope 0.7s ease-in-out forwards",
			},
		},
	},
	plugins: [scrollbar, scrollbarHide], // Dodanie obu pluginów
};
