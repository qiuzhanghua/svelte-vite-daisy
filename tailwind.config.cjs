module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svelte}"],
	theme: {
		tj: {
			"primary": "#570DF8",
			"secondary": "#F000B8",
			"accent": "#37CDBE",
			"neutral": "#3D4451",
			"base-100": "#FFFFFF",
			"info": "#3ABFF8",
			"success": "#36D399",
			"warning": "#FBBD23",
			"error": "#F87272",
		},
		extend: {},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("daisyui"),
	],
	daisyui: {
		themes: [
			"tj",
			"light",
			"dark",
			// "cupcake",
			// "bumblebee",
			// "emerald",
			// "corporate",
			// "synthwave",
			// "retro",
			// "cyberpunk",
			// "valentine",
			// "halloween",
			// "garden",
			// "forest",
			// "aqua",
			// "lofi",
			// "pastel",
			// "fantasy",
			// "wireframe",
			// "black",
			// "luxury",
			// "dracula",
			// "cmyk",
			// "autumn",
			// "business",
			// "acid",
			// "lemonade",
			// "night",
			// "coffee",
			// "winter",
		],
	},
};
