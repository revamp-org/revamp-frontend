import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Landing = () => {
	return (
		<>
			<h1>Landing</h1>
			<SignedOut>
				<Link href="/sign-in" className="btn">
					Sign in
				</Link>
				<Link href="/sign-up" className="btn">
					Sign up
				</Link>
			</SignedOut>
			<SignedIn>
				<Link href="/dashboard" className="btn">
					Go To Dashboard
				</Link>
				<UserButton afterSignOutUrl="/" />
			</SignedIn>
		</>
	);
};

export default Landing;
