const baseUrl = "https://geekayush.github.io";

export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
