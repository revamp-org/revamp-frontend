"use client";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import SmallIcon from "../components/styled-components/SmallIcon";

const Li = ({
	icon,
	text,
	className,
	path,
}: {
	icon?: string;
	text: string;
	path: string;
	className?: string;
}) => {
	return (
		<li
			className={cn(
				"flex items-center justify-between text-xl text-primary-foreground hover:cursor-pointer",
				className,
			)}
		>
			<Link href={`/dashboard/${path}`} className="flex w-full items-center gap-2">
				{icon ? <Icon icon={icon} className="text-3xl" /> : null}
				<span className=" ">{text}</span>
			</Link>
		</li>
	);
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
	const [isJournalDropDownOpen, setIsJournalDropDownOpen] = useState<boolean>(false);

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

						<li className="flex items-center justify-between text-primary-foreground hover:cursor-pointer">
							<Link href={`/dashboard/journals`} className="flex w-full items-center gap-2">
								<Icon icon="mdi:journal-outline" className="text-3xl" />
								<span className="text-xl ">Journals</span>
							</Link>
							<SmallIcon
								icon="gridicons:dropdown"
								className="p-1/2 rounded-full text-3xl"
								handleClick={() => setIsJournalDropDownOpen(!isJournalDropDownOpen)}
							/>
						</li>

						{isJournalDropDownOpen && (
							<ul className="ml-12 ">
								<Li path="journals/daily" text="Daily" className="py-1 text-sm" />
								<Li path="journals/weekly" text="Weekly" className="py-1 text-sm" />
								<Li path="journals/monthly" text="Monthly" className="py-1 text-sm" />
							</ul>
						)}
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
