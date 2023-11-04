import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="mx-auto grid h-[100dvh] w-full place-items-center">
			<SignIn afterSignInUrl="/dashboard" />
		</div>
	);
}
