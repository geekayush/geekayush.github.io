function ArrowIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function Footer() {
	return (
		<footer className="mb-16" id="connect">
			<ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300">
				<li className="mb-2">
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/geekayush"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">github</p>
					</a>
					<p className="text-sm text-gray-500">
						occasionally pushing code, mostly pushing myself to code
					</p>
				</li>
				<li className="mb-2">
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.linkedin.com/in/geekayush/"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">linkedin</p>
					</a>
					<p className="text-sm text-gray-500">
						endorsed for lurking. networking in silent mode
					</p>
				</li>
				<li className="mb-2">
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://letterboxd.com/geekayush/"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">letterboxd</p>
					</a>
				</li>
				<li className="mb-2">
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.instagram.com/vastavmeinayush/"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">instagram</p>
					</a>
				</li>
				<li className="mb-2">
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://open.spotify.com/user/31h455itoj73uo6nuvwi2yklvria?si=6f10353333ce4b02"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">spotify</p>
					</a>
					<p className="text-sm text-gray-500">
						my code can have bugs, but my playlists don't
					</p>
				</li>
				<li className="mb-2">
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://stats.fm/vastavmeinayush"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">stats.fm</p>
					</a>
					<p className="text-sm text-gray-500">
						proof I listened to more music than people last year
					</p>
				</li>
				<li className="mb-2">
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/geekayush"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">x</p>
					</a>
					<p className="text-sm text-gray-500">tweeting less, thinking more</p>
				</li>
			</ul>
			<p className="mt-8 text-neutral-600 dark:text-neutral-300">
				© {new Date().getFullYear()} MIT Licensed
			</p>
		</footer>
	);
}
