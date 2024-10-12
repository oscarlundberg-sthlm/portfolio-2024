import classNames from "classnames";
import { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { ReactNode } from "react";
import "./modern-minimalism.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env?.NEXT_PUBLIC_URL ?? ""),
  title: "Oscar Lundberg - Frontend Developer",
  description: "Frontend Developer",
  icons: {
    icon: [
      {
        url: "/img/favicons/modern-minimalism.ico",
        href: "/img/favicons/modern-minimalism.ico",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function ModernMinimalismLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return <div className={classNames(figtree.className)}>{children}</div>;
}
