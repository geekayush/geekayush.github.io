const Tweet = () => {
	return (
		<div className="max-w-xl mx-auto border border-neutral-800 rounded-xl p-4 md:p-6 bg-black w-full my-4">
			{/* Header */}
			<div className="flex items-center justify-between mb-3">
				<div className="flex items-center min-w-0">
					<a
						href="https://x.com/singla387"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center min-w-0"
						aria-label="Visit Anuj Singla's X profile"
					>
						<img
							src="https://pbs.twimg.com/profile_images/909420427608338433/wRSbbv5e_normal.jpg"
							alt="Anuj Singla"
							width={48}
							height={48}
							className="rounded-full w-12 h-12 object-cover"
						/>
						<div className="ml-3 min-w-0">
							<p className="font-bold text-base text-neutral-100 truncate">
								Anuj Singla
							</p>
							<p className="text-neutral-400 text-sm truncate">@singla387</p>
						</div>
					</a>
				</div>
				<a
					href="https://x.com/singla387/status/1572883447303254016"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="View on X"
					className="p-2 -mr-2"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-neutral-400 hover:fill-neutral-100 transition-colors">
						<g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
					</svg>
				</a>
			</div>

			{/* Body */}
			<div className="mb-3 text-base text-neutral-200">
				Web performance workshop at <span className="text-blue-500">@react_india</span>{" "}
				with <span className="text-blue-500">@trina_choudhury</span>{" "}
				<span className="text-blue-500">@geekayush</span>
				<br />
				<span className="text-blue-500">#webperformance</span>
			</div>

			{/* Image */}
			<a
				href="https://x.com/singla387/status/1572883447303254016"
				target="_blank"
				rel="noopener noreferrer"
				className="block rounded-xl overflow-hidden border border-neutral-800 hover:opacity-90 transition-opacity"
				aria-label="View Tweet image"
			>
				<img
					src="https://pbs.twimg.com/media/FdQBBvAaEAAqMzR.jpg"
					alt="Web performance workshop presentation preview"
					width={1203}
					height={1600}
					className="w-full h-auto object-cover"
				/>
			</a>

			{/* Footer */}
			<a
				href="https://x.com/singla387/status/1572883447303254016"
				target="_blank"
				rel="noopener noreferrer"
				className="block text-sm text-neutral-400 hover:underline mt-4 py-2"
			>
				3:10 PM · Sep 22, 2022
			</a>
		</div>
	);
};

export default Tweet;
