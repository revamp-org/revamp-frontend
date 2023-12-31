import "@/app/globals.scss";
import ReduxProvider from "@/lib/providers/ReduxProvider";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Timer",
	description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<ReduxProvider>
				<body className="dark">{children}</body>
			</ReduxProvider>
		</html>
	);
}
