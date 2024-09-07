"use client";

import AudioTrack from "@/components/AudioTrack";
import ClientLayout from "@/components/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <AudioTrack
        data={{
          id: 1,
          path: "songs/We Are Human.wav",
          artist: "Cola Hair",
          trackTitle: "We Are Human",
          durationInSeconds: 216,
        }}
      />
      <AudioTrack
        data={{
          id: 2,
          path: "songs/Cola Hair - Microsampling 01.mp3",
          artist: "Cola Hair",
          trackTitle: "Microsampling 01",
          durationInSeconds: 7,
        }}
      />
      <AudioTrack
        data={{
          id: 3,
          path: "songs/Cola Hair - Microsampling 02.mp3",
          artist: "Cola Hair",
          trackTitle: "Microsampling 02",
          durationInSeconds: 15,
        }}
      />
    </ClientLayout>
  );
}
