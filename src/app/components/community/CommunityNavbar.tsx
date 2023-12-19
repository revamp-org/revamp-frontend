"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AvatarMenu } from "../AvatarMenu";

interface Props {
	className?: string;
}

export default function CommunityNavbar() {
	return (
		<nav className="sticky top-0 z-10  mx-auto flex h-16 max-w-[--screen-max]  items-center  justify-between bg-topbar  px-4 py-2 sm:flex-row sm:justify-between sm:px-4">
			<Link href="/" className="">
				<Image
					src="/assets/logo3-dark.svg"
					alt="REVAMP"
					height={60}
					width={120}
					className="hidden lg:block"
				/>
			</Link>
			<div className="mb-2 flex items-center sm:mb-0">
				<div className="relative">
					<input
						className="rounded-md border-2 border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-white"
						placeholder="Search..."
						type="search"
					/>
					<MicroscopeIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
				</div>
			</div>

			<div className="mb-2 flex items-center  space-x-4 sm:mb-0 sm:space-x-4">
				<Button className="rounded-md bg-accent px-4 py-2 text-white">Create Post</Button>
				<BellIcon className="h-6 w-6 text-gray-200" />
				<AvatarMenu />
			</div>
		</nav>
	);
}

function BellIcon(props: Props) {
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
			<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
		</svg>
	);
}

function MicroscopeIcon(props: Props) {
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
			<path d="M6 18h8" />
			<path d="M3 22h18" />
			<path d="M14 22a7 7 0 1 0 0-14h-1" />
			<path d="M9 14h2" />
			<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
			<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
		</svg>
	);
}
