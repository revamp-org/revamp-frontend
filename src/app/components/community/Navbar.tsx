/**
 * v0 by Vercel.
 * @see https://v0.dev/t/C3hPgmY7OP8
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
	DropdownMenuTrigger,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenu,
} from "@/components/ui/dropdown-menu";

export default function Component() {
	return (
		<header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
			<Link className="mr-6 flex" href="#">
				<img
					alt="Logo"
					className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
					height="40"
					src="/placeholder.svg"
					width="40"
				/>
				<span className="sr-only">Company Logo</span>
			</Link>
			<form className="ml-auto flex-1 sm:flex-initial">
				<div className="relative">
					<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
					<Input
						className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
						placeholder="Search..."
						type="search"
					/>
				</div>
			</form>
			<div className="ml-auto flex gap-2">
				<Button variant="outline">Share Journal</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar className="h-9 w-9">
							<AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
							<AvatarFallback>U</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent side="right">
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<Button size="icon" variant="outline">
					<SignalIcon className="h-6 w-6" />
				</Button>
				<Button variant="primary">Go to Dashboard</Button>
			</div>
		</header>
	);
}

function SearchIcon(props) {
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
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	);
}

function SignalIcon(props) {
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
			<path d="M2 20h.01" />
			<path d="M7 20v-4" />
			<path d="M12 20v-8" />
			<path d="M17 20V8" />
			<path d="M22 4v16" />
		</svg>
	);
}
