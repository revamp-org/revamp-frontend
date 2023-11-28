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
		
	);
};
export default Navbar;
