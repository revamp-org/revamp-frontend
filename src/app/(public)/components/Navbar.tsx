"use client";
import { useEffect, useRef, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const [state, setState] = useState(false);
	const navRef = useRef<HTMLElement | null>(null);

	// Replace javascript:void(0) path with your path
	const navigation = [
		{ title: "Why Revamp", path: "/why-revamp" },
		{ title: "How It Works", path: "/how-it-works" },
		{ title: "Contact Us", path: "/contact" },
	];
	return (
		<nav
			ref={navRef}
			className="h-navbar-height sticky top-0 z-20 w-full bg-topbar text-topbar-foreground"
		>
			<div className="items-center px-4 md:px-8 lg:flex">
				<div className="flex items-center justify-between py-3 lg:block lg:py-4">
					<a href="/">
						<Image src="/assets/logo3-dark.svg" width={120} height={60} alt="Revamp Logo" />
					</a>
					<div className="lg:hidden">
						<button
							className="rounded-md p-2  outline-none focus:border focus:border-gray-400"
							onClick={() => setState(!state)}
						>
							{state ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`flex-1 flex-row-reverse justify-between lg:flex lg:h-auto lg:overflow-visible lg:pb-0 lg:pr-0 ${
						state ? "h-screen overflow-auto pb-20 pr-4" : "hidden"
					}`}
				>
					<div>
						<SignedOut>
							<div className="flex flex-col items-center gap-4 px-4 lg:flex-row">
								<Link
									href="/sign-in"
									className="block rounded-md  px-4 py-3 text-center  hover:opacity-80 lg:inline"
								>
									Sign In
								</Link>

								<Link
									href="/sign-up"
									className="block rounded-md bg-indigo-600 px-4 py-3 text-center text-white shadow hover:opacity-80 lg:inline"
								>
									Sign Up
								</Link>
							</div>
						</SignedOut>

						<SignedIn>
							<Link
								href="/dashboard"
								className="block rounded-md bg-indigo-600 px-4 py-3 text-center text-white shadow hover:opacity-80 lg:inline"
							>
								Go to Dashboard
							</Link>
						</SignedIn>
					</div>
					<div className="flex-1">
						<ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
							{navigation.map((item, idx) => {
								return (
									<li key={idx} className="  hover:opacity-80">
										<Link href={item.path}>{item.title}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
