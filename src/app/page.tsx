"use client";

import AudioTrack from "@/components/AudioTrack";
import { useGlobalStatesContext } from "@/contexts/GlobalStatesProvider";

export default function Home() {
  const { tracks } = useGlobalStatesContext();
  return (
    <>
      {tracks.map((track) => (
        <AudioTrack key={track.id} data={track} />
      ))}
    </>
  );
}
