import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env?.NEXT_PUBLIC_URL ?? ""),
  title: "Yeah, that tracks",
  description:
    "This is an interactive CV/portfolio/presentation of me, Oscar Lundberg.",
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
