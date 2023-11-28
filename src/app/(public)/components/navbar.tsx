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
		{ title: "Why Revamp", path: "" },
		{ title: "How It Works", path: "" },
		{ title: "Contact Us", path: "" },
	];

	useEffect(() => {
		const body = document.body;

		// Disable scrolling
		const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
		if (state) body.classList.add(...customBodyStyle);
		// Enable scrolling
		else body.classList.remove(...customBodyStyle);

		// Sticky strick
		const customStyle = ["sticky-nav", "fixed", "border-b"];
		window.onscroll = () => {
			if (window.scrollY > 80) navRef?.current?.classList.add(...customStyle);
			else navRef?.current?.classList.remove(...customStyle);
		};
	}, [state]);

	return (
		<nav ref={navRef} className="top-0 z-20 w-full bg-topbar text-topbar-foreground">
			<div className="items-center px-4 md:px-8 lg:flex">
				<div className="flex items-center justify-between py-3 lg:block lg:py-4">
					<a href="javascript:void(0)">
						<Image src="/assets/logo3-dark.svg" width={120} height={60} alt="Revamp Logo" />
					</a>
					
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
									className="block rounded-md border px-4 py-3 text-center  hover:opacity-80 lg:inline lg:border-0"
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
										<a href={item.path}>{item.title}</a>
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
