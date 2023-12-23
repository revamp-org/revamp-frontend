import { ClerkProvider } from "@clerk/nextjs";
import "@/app/globals.scss"
import Navbar from "./components/Navbar";

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

				<body className="dark min-h-screen"><Navbar />{children}</body>
			</html>
		</ClerkProvider>
	);
}
