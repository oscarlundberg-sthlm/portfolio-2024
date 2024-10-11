import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env?.NEXT_PUBLIC_URL ?? ""),
  title: "That tracks",
  description: "a very sound resume",
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
