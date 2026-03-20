import "./global.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

const baseUrl = "https://vastavmeinayush.xyz";

export const metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "Ayush | Portfolio",
	},
	description:
		"I build UIs, fight slow renders, and preach the gospel of dark mode. This is my corner of the internet — part portfolio, all things frontend.",
	openGraph: {
		title: "Ayush | Portfolio",
		description:
			"I build UIs, fight slow renders, and preach the gospel of dark mode. This is my corner of the internet — part portfolio, all things frontend.",
		url: baseUrl,
		siteName: "Ayush | Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/profile.png",
				width: 512,
				height: 512,
				alt: "Ayush Srivastava Profile",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ayush | Portfolio",
		description:
			"I build UIs, fight slow renders, and preach the gospel of dark mode. This is my corner of the internet — part portfolio, all things frontend.",
		images: ["/profile.png"],
	},
	verification: {
		google: "jTbn6hyqS_OyehoxXsyEwCc6QrgouzoH3OJ8Xis8dec",
		other: {
			"msvalidate.01": "8D9030F210D62212E8A83A7766446193",
		},
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Ayush Srivastava",
		jobTitle: "Software Engineer",
		url: "https://vastavmeinayush.xyz",
		image: "https://vastavmeinayush.xyz/profile.png",
	};

	return (
		<html
			lang="en"
			className={cx(
				"text-white bg-black lowercase",
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<body className="antialiased max-w-xl mx-4 mt-8 mx-auto">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
