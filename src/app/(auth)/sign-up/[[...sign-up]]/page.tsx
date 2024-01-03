import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="mx-auto grid h-[100dvh] w-full place-items-center">
			<SignUp afterSignUpUrl="/lets-get-started" />
		</div>
	);
}
