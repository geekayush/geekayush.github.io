import Image from "next/image";
import Marquee from "react-fast-marquee";
import Tweet from "app/components/Tweet";
import ConsoleWarning from "app/components/ConsoleWarning";

const ArrowIcon = () => {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	);
};

const experiences = [
	{
		company: "TATA 1mg",
		companyLink: "https://1mg.com",
		companyDescription: "India's leading & most trusted healthcare platform",
		data: [
			{
				role: "Software Engineer - Frontend 2",
				duration: "April 2022 - Present",
				description: [
					"Built an AI-powered design system manager with asset pipelines, component playground, code generation (from prompt/image/Figma JSON), library publishing and Bitbucket integration - improved component development efficiency by 50% across the frontend team.",
					"Led the migration of the desktop cart flow (cart, coupon, address, prescription, payment, order success) by planning, executing, coordinating with cross-functional teams, and reviewing code.",
					"Owned and improved the in-house design system (Dopamine); led a team of 4 in its revamp.",
					"Presented ideas and contributed to the in-house frontend framework (Catalyst).",
					"Spearheaded POCs for third-party script optimization (introduced Partytown) and new desktop architecture (adopted Redux Toolkit).",
					"Led React 18 migration efforts and conducted an internal knowledge-sharing group.",
				],
			},
			{
				role: "Software Engineer - Frontend 1",
				duration: "August 2020 - March 2022",
				description: [
					"Delivered sprint tasks and engineering initiatives; actively solved critical frontend issues impacting performance and user experience.",
					"Documented components and solutions alongside development; authored internal articles on perceived performance and skeleton loading to enhance user experience.",
					"Applied page-level performance optimizations in 5+ high-traffic pages by incorporating research-driven techniques, contributing to faster load times and better Core Web Vitals scores.",
					"Reviewed peer PRs daily with a dedicated review schedule, helping maintain high code quality and delivery speed.",
					"Mentored teammates by providing debugging support, helping with project setup, and sharing architectural insights.",
				],
			},
			{
				role: "Software Engineer - Frontend Intern",
				duration: "January 2020 - July 2020",
				description: [
					"Worked in the Data Science team to build a target automated user survey system to create, edit or delete surveys.",
				],
			},
		],
	},
	{
		company: "Avanti",
		companyLink: "https://avanti.in",
		companyDescription:
			"provides high-school students free test preparation programs, mentorship and career services",
		data: [
			{
				role: "Data Visualization - Intern",
				duration: "July 2019 - September 2019",
				description: [
					"Built a web application to generate student reports consisting of their attendance, course progress, overall standing, comparison of accuracy and attempts, etc.",
					"Created scripts to automate this process to withdraw human involvement and increase productivity.",
				],
			},
		],
	},
	{
		company: "Almadots",
		companyLink: "https://www.linkedin.com/company/almadots/",
		companyDescription:
			"enhances alumni engagement in Indian colleges by providing automated tools for community management, content creation, and market research.",
		data: [
			{
				role: "Frontend Developer - self-employed",
				duration: "November 2017 - June 2019",
				description: [
					"We started as a SaaS business that aimed to build alumni management system to enter the hiring industry.",
					"We received pre-incubation from JSSATE STEP in November 2017 which is a DST backed IT business incubator previously conferred the best tech-based incubator in India by DST, GoI.",
				],
			},
		],
	},
	{
		company: "Edcams",
		companyLink: "https://www.linkedin.com/company/edcams/about/",
		companyDescription: "Student Recognition and Career Network",
		data: [
			{
				role: "Frontend Developer - Intern",
				duration: "November 2017 - January 2018",
				description: [
					"Built a new user-facing onboarding flow which decreased the friction involved in the previous version of the process.",
				],
			},
		],
	},
];

const projects = [
	{
		name: "Know Your College",
		link: "https://github.com/ncs-jss/Proj_kc01",
		projectDescription: "platform to explore the college with interative maps",
		data: [
			{
				description: [
					"helps students and faculties of JSSATE to explore various sections of the college and nearby places. Nearby places would have a CTA to give directions to reach the place.",
				],
			},
		],
	},
];

const education = [
	{
		degree: "Bachelor of Technology in Computer Science & Engineering",
		duration: "2016 - 2020",
		institution: "JSS Academy of Technical Education",
		data: [
			{
				description: [
					"Special mention at DevFest Noida-18 for FitMo (React-based native application gamifying the motivation towards fitness)",
					"Among top 10 national finalists at Social Track organized by ECell-IITK",
					"Second runner-up at B-Plan competition organized by ATTAC NGO",
				],
			},
		],
	},
];

const volunteerings = [
	{
		name: "NIBBLE COMPUTER SOCIETY",
		designation: "HEAD OF WEB CLUB",
		description:
			"The community turning college into a collaborative work experience",
		duration: "February 2018 - July 2020",
		link: "http://hackncs.com/",
	},
	{
		name: "E-CELL, JSSATE",
		designation: "TECHNICAL HEAD",
		description:
			"The Entrepreneurship Development Cell (EDC) at JSSATE Noida is a dynamic hub of support and empowerment for budding entrepreneurs and ambitious professionals",
		duration: "September 2016 - July 2018",
		link: "https://edcjss.com/",
	},
];

const openSourceContributions = [
	[
		{
			name: "anitaB.org",
			link: "https://github.com/anitab-org/mentorship-backend/issues?q=author:geekayush",
		},
		{
			name: "EvalAI",
			link: "https://github.com/Cloud-CV/EvalAI/issues?q=author:geekayush",
		},
		{
			name: "Origami",
			link: "https://github.com/Cloud-CV/Origami/issues?q=author:geekayush",
		},
		{
			name: "Creative Commons",
			link: "https://github.com/cc-archive/cccatalog-frontend/issues?q=author:geekayush",
		},
	],
	[
		{
			name: "Facebook",
			link: "https://github.com/facebookarchive/react-360/issues?q=author:geekayush",
		},
		{
			name: "FOSSASIA",
			link: "https://github.com/fossasia/summit.fossasia.org/issues?q=author:geekayush",
		},
		{
			name: "Material Components",
			link: "https://github.com/material-components/material-components-web-react/issues?q=author:geekayush",
		},
	],
	[
		{
			name: "Open Climate Fix",
			link: "https://github.com/openclimatefix/website/issues?q=author:geekayush",
		},
		{
			name: "Open Policy Agent",
			link: "https://github.com/open-policy-agent/opa/issues?q=author:geekayush",
		},
		{
			name: "React QueryBuilder",
			link: "https://github.com/react-querybuilder/react-querybuilder/issues?q=author:geekayush",
		},
		{
			name: "Uber",
			link: "https://github.com/uber/manifold/issues?q=author:geekayush+",
		},
	],
];

const skillSets = [
	["html", "css", "javaScript", "next.js"],
	["catalyst", "express", "react"],
	["redux", "rtl", "loadable", "webpack"],
	["rollup", "babel", "docker", "ci/cd"],
	[
		"performance optimization",
		"design language systems",
		"motions",
		"ai toolings",
	],
];

export default function Page() {
	return (
		<div className="relative">
			<div className="progress-bar" />
			<ConsoleWarning />
			<section>
				<h1 className="mb-8 text-5xl font-semibold tracking-tighter">
					Ayush Srivastava
				</h1>
				<p className="mb-4 text-lg font-semibold tracking-tighter">
					Software Engineer with interests in performance, DX, design systems,
					and AI toolings.
				</p>
				<div className="mb-8">
					<Image
						src="/profile.png"
						alt="Ayush Srivastava"
						width={512}
						height={512}
						sizes="(max-width: 768px) 100vw, 512px"
						className="w-full object-cover rounded-xl"
						priority
					/>
				</div>
				<p className="mb-5 text-base text-justify">
					I'm a human who's slightly more fluent in JavaScript than in English
					and has been in a committed relationship with computers since
					childhood. A certified dark mode devotee — not because it's cool, but
					because my eyes feel <em>light</em> when everything else is dark. I
					believe tabs &gt; spaces. I enjoy building things that scale, perform,
					and <em>just work</em>. Outside work hours, you'll find me
					experimenting with frontends, obsessing over DX, or trying to get my
					Strat to sound like Blackstratblues.
				</p>
			</section>

			{/* SKILLS */}
			<section className="mb-12" id="skills">
				{skillSets.map((skills, setIndex) => (
					<Marquee
						key={`skill-set-${setIndex}`}
						speed={25}
						direction={setIndex % 2 === 0 ? "left" : "right"}
						pauseOnHover
					>
						{skills.map((skill) => (
							<p
								key={skill}
								className="text-5xl font-bold p-4 text-neutral-400"
							>
								{skill}
							</p>
						))}
					</Marquee>
				))}
			</section>

			{/* COMMUNITY CONTRIBUTIONS */}
			<section className="mb-12" id="community-contributions">
				<h2 className="sticky top-0 bg-black z-10 mb-5 text-3xl font-semibold tracking-tighter">
					Community Contributions
				</h2>
				<div className="text-neutral-400 mb-3">
					i Spoke at React India 2022 - ran a workshop on turning a basic CRA
					app into a performance beast, optimizing it at every level and
					sneaking in a mini frontend framework along the way.
				</div>
				<div className="flex items-center gap-2">
					<ArrowIcon />
					<a
						href="https://www.youtube.com/live/5yqi6dIEthk?si=jSlV2TINppJ_Ex39&t=13440"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View recorded workshop on YouTube"
						className="relative py-2 text-xl cursor-pointer w-fit block hover:text-black transition-colors duration-300 after:block after:content-[''] after:absolute after:z-[-1] after:bottom-0 after:h-[100%] after:bg-white after:w-full after:scale-y-4 after:hover:scale-y-100 after:transition after:duration-300 after:origin-bottom"
					>
						find the recorded workshop here
					</a>
				</div>
				<Tweet />
			</section>

			{/* OPEN SOURCE CONTRIBUTIONS */}
			<section className="mb-12" id="open-source-contributions">
				<h2 className="sticky top-0 bg-black z-10 mb-5 text-3xl font-semibold tracking-tighter">
					Open Source Contributions
				</h2>
				{openSourceContributions.map((row, rowIndex) => (
					<Marquee
						key={`contrib-row-${rowIndex}`}
						speed={25}
						direction={rowIndex % 2 === 0 ? "left" : "right"}
						pauseOnHover
					>
						{row.map((contrib) => (
							<a
								key={contrib.name}
								href={contrib.link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`View ${contrib.name} contributions on GitHub`}
							>
								<p className="text-5xl font-bold p-4 text-neutral-400">
									{contrib.name}
								</p>
							</a>
						))}
					</Marquee>
				))}
			</section>

			{/* EXPERIENCES */}
			<section className="mb-12" id="experiences">
				<h2 className="sticky top-0 bg-black z-10 mb-5 text-3xl font-semibold tracking-tighter">
					Experiences
				</h2>
				{experiences.map((experience, index) => (
					<div key={experience.company}>
						<div className="flex items-center gap-2">
							<ArrowIcon />
							<a
								className="relative text-xl cursor-pointer w-fit block hover:text-black transition-colors duration-300 after:block after:content-[''] after:absolute after:z-[-1] after:bottom-0 after:h-[100%] after:bg-white after:w-full after:scale-y-4 after:hover:scale-y-100 after:transition after:duration-300 after:origin-bottom"
								href={experience.companyLink}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Visit ${experience.company} website`}
							>
								<h3 className="text-xl font-semibold tracking-tighter">
									{experience.company}
								</h3>
							</a>
						</div>
						<div className="text-neutral-400 mb-3">
							{experience.companyDescription}
						</div>
						{experience.data.map((data, index) => (
							<div key={data.role}>
								<div className="md:flex md:justify-between mb-2 text-lg text-neutral-100">
									<p className="mb-1 md:mb-0">{data.role}</p>
									<p>{data.duration}</p>
								</div>
								<ul className="text-justify text-base text-neutral-300">
									{data.description.map((desc) => (
										<li key={desc} className="mb-2">
											{desc}
										</li>
									))}
								</ul>
								{index !== experience.data.length - 1 && (
									<hr className="my-8" />
								)}
							</div>
						))}
						{index !== experiences.length - 1 && (
							<hr className="my-8 border-t-8 border-dashed border-neutral-900" />
						)}
					</div>
				))}
			</section>

			{/* VOLUNTEERING */}
			<section className="mb-12" id="volunteering">
				<h2 className="sticky top-0 bg-black z-10 mb-5 text-3xl font-semibold tracking-tighter">
					Volunteering
				</h2>
				{volunteerings.map((volunteering, index) => (
					<div key={volunteering.name}>
						<div className="flex items-center gap-2">
							<ArrowIcon />
							<a
								href={volunteering.link}
								target="_blank"
								rel="noopener noreferrer"
								className="relative text-xl cursor-pointer w-fit block hover:text-black transition-colors duration-300 after:block after:content-[''] after:absolute after:z-[-1] after:bottom-0 after:h-[100%] after:bg-white after:w-full after:scale-y-4 after:hover:scale-y-100 after:transition after:duration-300 after:origin-bottom"
								aria-label={`Visit ${volunteering.name} website`}
							>
								<h3 className="text-xl font-semibold tracking-tighter">
									{volunteering.name}
								</h3>
							</a>
						</div>
						<div className="text-neutral-400 mb-3">
							{volunteering.description}
						</div>
						<div className="md:flex md:justify-between mb-2 text-lg text-neutral-100">
							<p className="mb-1 md:mb-0">{volunteering.designation}</p>
							<p>{volunteering.duration}</p>
						</div>
						{index !== volunteerings.length - 1 && (
							<hr className="my-8 border-t-8 border-dashed border-neutral-900" />
						)}
					</div>
				))}
			</section>

			{/* PROJECTS */}
			<section className="mb-12" id="projects">
				<h2 className="sticky top-0 bg-black z-10 mb-5 text-3xl font-semibold tracking-tighter">
					Projects
				</h2>
				{projects.map((project, index) => (
					<div key={project.name}>
						<div className="flex items-center gap-2">
							<ArrowIcon />
							<a
						className="relative text-xl cursor-pointer w-fit block hover:text-black transition-colors duration-300 after:block after:content-[''] after:absolute after:z-[-1] after:bottom-0 after:h-[100%] after:bg-white after:w-full after:scale-y-4 after:hover:scale-y-100 after:transition after:duration-300 after:origin-bottom"
						href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`View ${project.name} project`}
							>
								<h3 className="text-xl font-semibold tracking-tighter">
									{project.name}
								</h3>
							</a>
						</div>
						<div className="text-neutral-400 mb-3">
							{project.projectDescription}
						</div>
						{project.data.map((data, dataIndex) => (
							<div key={`${project.name}-data-${dataIndex}`}>
								<ul className="text-justify text-base text-neutral-300">
									{data.description.map((desc) => (
										<li key={desc} className="mb-2">
											{desc}
										</li>
									))}
								</ul>
								{index !== project.data.length - 1 && <hr className="my-8" />}
							</div>
						))}
						{index !== projects.length - 1 && (
							<hr className="my-8 border-t-8 border-dashed border-neutral-900" />
						)}
					</div>
				))}
			</section>

			{/* EDUCATION */}
			<section className="mb-12" id="education">
				<h2 className="sticky top-0 bg-black z-10 mb-5 text-3xl font-semibold tracking-tighter">
					Education
				</h2>
				{education.map((education) => (
					<div key={education.degree}>
						<h3 className="text-xl font-semibold tracking-tighter">
							{education.degree}
						</h3>
						<div className="text-neutral-400 mb-3">{education.institution}</div>
						{education.data.map((data, index) => (
							<div key={`${education.degree}-data-${index}`}>
								<ul className="text-justify text-base text-neutral-300">
									{data.description.map((desc) => (
										<li key={desc} className="mb-2">
											{desc}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				))}
			</section>
		</div>
	);
}
