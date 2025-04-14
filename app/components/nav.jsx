import Link from "next/link";

const navItems = {
	"#skills": {
		name: "skills",
	},
	"#community-contributions": {
		name: "community",
	},
	"#open-source-contributions": {
		name: "open source",
	},
	"#experiences": {
		name: "experiences",
	},
	"#volunteering": {
		name: "volunteering",
	},
	"#projects": {
		name: "projects",
	},
	"#education": {
		name: "education",
	},
	"#connect": {
		name: "connect",
	},
};

export function Navbar() {
	return (
		<aside className="-ml-[8px] mb-16 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-row items-start relative px-0 pb-0 fade overflow-auto scroll-pr-6"
					id="nav"
				>
					<div className="flex flex-row flex-wrap space-x-0 pr-10">
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<Link
									key={path}
									href={path}
									className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
								>
									{name}
								</Link>
							);
						})}
					</div>
				</nav>
			</div>
		</aside>
	);
}
