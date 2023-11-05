import "@/app/globals.scss";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutWrapper from "./layout-wrapper";

export const metadata: Metadata = {
  title: "Revamp",
  description:
    'Revamp is a goal setting app. Our main theme is "Transcending Physical, Mental and Emotional Health."',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="dark flex ">
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/assets/logo.svg"
          />
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
