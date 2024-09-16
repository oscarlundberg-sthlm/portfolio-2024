"use client";

import AudioTrack from "@/components/AudioTrack";
import ClientLayout from "@/components/ClientLayout";
import tracks from "@/data/tracks.json";

export default function Home() {
  return (
    <ClientLayout>
      {tracks.map((track) => (
        <AudioTrack key={track.id} data={track} />
      ))}
    </ClientLayout>
  );
}
