import ClientLayout from "@/components/ClientLayout";
import { getAudioDuration } from "@/lib/getAudioDuration";
import { AudioMetaDataUnPopulated } from "@/types/audioMetaData";
import fs from "fs";
import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import path from "path";
import "./globals.css";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env?.NEXT_PUBLIC_URL ?? ""),
  title: "That tracks",
  description: "a very sound resume",
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

const tracksFilePath = path.join(process.cwd(), "src/data/tracks.json");

async function fetchAndPopulateTracks() {
  const tracksData: AudioMetaDataUnPopulated[] = JSON.parse(
    fs.readFileSync(tracksFilePath, "utf-8")
  );

  const populatedTracks = await Promise.all(
    tracksData.map(async (track) => {
      const filePath = path.join(process.cwd(), "/public", track.path);
      const durationInSeconds = await getAudioDuration(filePath);

      return {
        ...track,
        durationInSeconds,
      };
    })
  );

  return populatedTracks;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tracks = await fetchAndPopulateTracks();

  return (
    <html lang="en" className="h-full">
      <body className={interTight.className}>
        <ClientLayout tracks={tracks}>{children}</ClientLayout>
      </body>
    </html>
  );
}
