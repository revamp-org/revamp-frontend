"use client";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Li = ({
	icon,
	text,
	className,
	path,
}: {
	icon: string;
	text: string;
	path: string;
	className?: string;
}) => {
	return (
		<li
			className={cn(
				"flex items-center justify-between text-primary-foreground hover:cursor-pointer",
				className,
			)}
		>
			<Link href={`/dashboard/${path}`} className="flex w-full items-center gap-2">
				<Icon icon={icon} className="text-3xl" />
				<span className="text-xl ">{text}</span>
			</Link>
		</li>
	);
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
	return (
		<div className=" w-full text-primary-foreground ">
			{/* Appbar */}
			<section className="col-span-2 flex h-16 w-full items-center justify-between bg-topbar p-2 text-topbar-foreground">
				<div className="flex h-full items-center gap-4">
					<button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
						<Icon
							icon="eva:arrowhead-left-fill"
							className={`text-5xl ${isSidebarOpen ? "" : "rotate-180"} duration-300`}
						/>
					</button>
					<Link href="/" className="h-full w-full">
						<Image
							src="/assets/logo3-dark.svg"
							alt="REVAMP"
							height={80}
							width={280}
							className="h-full w-full"
						/>
					</Link>
				</div>
				<UserButton
					afterSignOutUrl="/"
					appearance={{
						elements: {
							avatarBox: "h-10 w-10",
						},
					}}
				/>
			</section>

			<div className="flex">
				{/* Sidebar */}
				<aside
					className={`${
						isSidebarOpen ? "w-[var(--sidebar-width)]" : "w-0"
					} h-[calc(100dvh_-_4rem)]  overflow-y-auto  bg-sidebar duration-300 ease-in-out  `}
				>
					<ul role="navigation" className="relative h-full space-y-4 p-4">
						<Li path="/" icon="radix-icons:dashboard" text="Overview" />
						<Li path="/goals" icon="octicon:goal-16" text="Goals" />
						<Li path="/tasks" icon="ph:notepad" text="Tasks" />
						<Li path="/journals" icon="mdi:journal-outline" text="Journals" />
						<Li path="/analytics" icon="octicon:graph-24" text="Analytics" />
						<Li path="/community" icon="bi:people" text="Community" />
					</ul>
				</aside>

				{/* Main */}
				{children}
			</div>
		</div>
	);
};

export default LayoutWrapper;
