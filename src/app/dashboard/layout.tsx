import "@/app/globals.scss";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutWrapper from "./layout-wrapper";
import ReduxProvider from "@/lib/providers/ReduxProvider";
import ApolloClientProvider from "@/lib/providers/ApolloClientProvider";

export const metadata: Metadata = {
	title: "Revamp",
	description:
		'Revamp is a goal setting app. Our main theme is "Transcending Physical, Mental and Emotional Health."',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning={true}>
				<body className="dark flex overflow-y-hidden ">
					<ApolloClientProvider>
						<link rel="shortcut icon" type="image/x-icon" href="/assets/logo.svg" />
						<ReduxProvider>
							<LayoutWrapper>{children}</LayoutWrapper>
						</ReduxProvider>
					</ApolloClientProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
