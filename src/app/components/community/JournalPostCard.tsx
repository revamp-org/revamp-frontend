"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import AvatarLogo from "../AvatarLogo";

interface Props {
	className?: string;
}

export default function JournalPostCard() {
	return (
		<Card className="h-[14rem] w-full rounded-lg border-none p-1 shadow ">
			<CardHeader>
				<div className="flex items-center space-x-2">
					<AvatarLogo />

					<div>
						<p className="text-sm font-semibold">Alex Q. (they/them)</p>
						<p className="text-xs text-gray-500">Jan 20</p>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<h2 className="my-2 text-lg font-bold">
					{`Tech Trends and "The Emerging Innovations" Insights`}
				</h2>
				<Badge className="mb-4" variant="secondary">
					#technology
				</Badge>
			</CardContent>
			<CardFooter className="flex items-center justify-between">
				<div className="flex items-center space-x-1">
					<HeartIcon className="cursor-pointer text-red-500 transition-colors duration-300 hover:fill-red-600 " />
					<LightbulbIcon className="cursor-pointer text-yellow-500 transition-colors duration-300 hover:fill-yellow-600" />
					<CelebrationIcon className="cursor-pointer text-green-500 transition-colors duration-300 hover:text-green-600" />
					{/* <HandIcon className="text-green-500 transition-colors duration-300 hover:fill-green-600" /> */}
					<TrophyIcon className="cursor-pointer text-blue-500 transition-colors duration-300 hover:fill-blue-600" />
					<span className="text-sm">34 reactions</span>
				</div>
				<div className="flex items-center space-x-4">
					<div className="flex items-center space-x-1">
						<ReplyIcon className="text-gray-600" />
						<span className="text-sm">21 comments</span>
					</div>
					<span className="text-sm text-gray-600">4 min read</span>
					<BookmarkIcon className="text-gray-600" />
				</div>
			</CardFooter>
		</Card>
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
function CelebrationIcon(props: Props) {
	return <Icon {...props} icon="mingcute:celebrate-line" height={24} width={24} />;
}

function HandIcon(props: Props) {
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
			<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
			<path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
			<path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
			<path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
		</svg>
	);
}

function HeartIcon(props: Props) {
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
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
		</svg>
	);
}

function FlameIcon(props: Props) {
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
			<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
		</svg>
	);
}

function LightbulbIcon(props: Props) {
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
			<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
			<path d="M9 18h6" />
			<path d="M10 22h4" />
		</svg>
	);
}

function ReplyIcon(props: Props) {
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
			<polyline points="9 17 4 12 9 7" />
			<path d="M20 18v-2a4 4 0 0 0-4-4H4" />
		</svg>
	);
}

function TrophyIcon(props: Props) {
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
			<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
			<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
			<path d="M4 22h16" />
			<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
			<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
			<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
		</svg>
	);
}
