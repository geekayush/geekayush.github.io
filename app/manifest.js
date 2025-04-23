export default function manifest() {
	return {
		name: "Ayush | Portfolio",
		short_name: "Ayush | Portfolio",
		description:
			"I build UIs, fight slow renders, and preach the gospel of dark mode. This is my corner of the internet — part portfolio, all things frontend.",
		start_url: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#ffffff",
		icons: [
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
			{
				src: "/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				src: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
