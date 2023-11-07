import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
	title: "Revamp",
	description:
		'Revamp is a goal setting app. Our main theme is "Transcending Physical, Mental and Emotional Health."',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<link rel="shortcut icon" type="image/x-icon" href="/assets/logo.svg" />
				<body>{children}</body>
			</html>
		</ClerkProvider>
	);
}
