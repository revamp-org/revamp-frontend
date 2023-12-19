import AvatarLogo from "@/app/components/AvatarLogo";
import { Button } from "@/components/ui/button";

interface Props {
	className?: string;
}

export default function JournalPage() {
	return (
		<div className="mx-auto flex h-full max-w-[--screen-max] grid-cols-3 items-start  gap-4 bg-accent p-4  text-white">
			{/* blog section */}
			<div className="w-full ">
				<div className="mb-6">
					<img
						alt="Header image"
						className="h-auto w-full"
						height="200"
						src="/assets/hero.webp"
						style={{
							aspectRatio: "600/200",
							objectFit: "cover",
						}}
						width="600"
					/>
				</div>
				<article>
					<div className="mb-4">
						<div className="mb-2 flex items-center space-x-2">
							<AvatarLogo />
							<div>
								<div className="text-sm text-gray-400">smallSoHoSolo for ILLA Cloud</div>
								<div className="text-xs text-gray-500">Posted on Dec 19</div>
							</div>
						</div>
						<h1 className="mb-2 text-4xl font-bold">{`It's 2024, should I choose Shadcn UI?`}</h1>
						<div className="flex space-x-2 text-blue-400">
							<span>#webdev</span>
							<span>#javascript</span>
							<span>#react</span>
							<span>#opensource</span>
						</div>
					</div>
					<p className="mb-4">
						2024 has arrived, and the ecosystem of React component libraries remains vibrant. This
						article will dissect two currently popular component libraries from various
						perspectives, providing an objective analysis to help users make more informed choices.
					</p>
					<h2 className="mb-2 text-2xl font-bold">Why Choose a Component Library?</h2>
					<p>
						In general, companies choose a component library when building web applications to
						streamline repetitive tasks. Component libraries offer a range of out-of-the-box
						components like Select, Input, CheckBox, etc. These components, with customizable styles
						or built-in attractive styles, enable rapid development of aesthetically pleasing
					</p>
				</article>
				<div className="mt-4 flex space-x-6">
					<div className="flex items-center">
						<ThumbsUpIcon className="h-4 w-4" />
						<span className="ml-2">React</span>
					</div>
					<div className="flex items-center">
						<SpeakerIcon className="h-4 w-4" />
						<span className="ml-2">Comment</span>
					</div>
					<div className="flex items-center">
						<BookmarkIcon className="h-4 w-4" />
						<span className="ml-2">Bookmark</span>
					</div>
				</div>
			</div>

			{/* Sidebar  */}
			<aside className="sticky top-20 h-[calc(100dvh-4rem-2rem)] w-[28rem] ">
				<div className="">
					<div className="mb-6 flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<AvatarLogo />
							<span className="text-white">Sugat</span>
						</div>
						<Button className="bg-blue-500 text-white">Follow</Button>
					</div>
					<div className="mb-6">
						<h3 className="mb-2 text-lg font-semibold">More from Sugat</h3>
						<div className="space-y-4">
							<div>
								<h4 className="font-medium">
									Shadcn vs MUI: A Comparative Analysis of Strengths and Weaknesses
								</h4>
								<div className="text-blue-400">#webdev #javascript #react #css</div>
							</div>
							<div>
								<h4 className="font-medium">
									{`
										Hello everyone, I'm Owen. We have spent two years developing a very cool
										open-source low-code tool.
										`}
								</h4>
								<div className="text-blue-400">#webdev #javascript #lowcode #opensource</div>
							</div>
							<div>
								<h4 className="font-medium">
									Building Interesting AI Game Idea Generators Using AI Agents on ILLA Cloud
								</h4>
								<div className="text-blue-400">#opensource #ai #cloud #webdev</div>
							</div>
						</div>
					</div>
					<div className="rounded-lg bg-gray-800 p-4">
						<h3 className="mb-4 text-lg font-semibold">Did you know?</h3>
						<p className="mb-4">{`You can use this area right here to promote your company's:`}</p>
						<ul className="list-inside list-disc space-y-2">
							<li>Products and tools</li>
							<li>Events</li>
							<li>Job listings</li>
							<li>And more</li>
						</ul>
						<Button className="mt-4 w-full bg-blue-500 text-white">Learn More</Button>
					</div>
				</div>
			</aside>
		</div>
	);
}

function BookmarkIcon(props: Props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
		</svg>
	);
}

function SpeakerIcon(props: Props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
			<circle cx="12" cy="14" r="4" />
			<line x1="12" x2="12.01" y1="6" y2="6" />
		</svg>
	);
}

function ThumbsUpIcon(props: Props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M7 10v12" />
			<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
		</svg>
	);
}
