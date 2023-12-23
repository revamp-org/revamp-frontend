import { ClerkProvider } from "@clerk/nextjs";
import "@/app/globals.scss"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

export const metadata = {
	title: "Revamp",
	description:
		'Revamp is a goal setting app. Our main theme is "Transcending Physical, Mental and Emotional Health."',
};

export default function RootLayout({ children }: { children: React.ReactNode, }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<link rel="shortcut icon" type="image/x-icon" href="/assets/logo.svg" />
				<body className="dark">
					<div className="min-h-screen flex flex-col">
						<Navbar />
						<main>
							{children}
						</main>
						<Footer />
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
