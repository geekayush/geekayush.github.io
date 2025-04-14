import "./global.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

const baseUrl = "https://geekayush.github.io";

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
	return (
		<html
			lang="en"
			className={cx(
				"text-black bg-white dark:text-white dark:bg-black lowercase",
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
