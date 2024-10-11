"use client";

import { useAudioPlayerContext } from "@/thatTracks/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useEffect } from "react";

export function useMediaSessionApi() {
  const {
    actions: { play, pause, stepToSiblingTrack },
    audioMetaData,
  } = useAudioPlayerContext();

  // Update Track info to navigator.mediaSession
  useEffect(() => {
    if (!("mediaSession" in navigator)) return;
    if (!audioMetaData.id) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: audioMetaData.trackTitle,
      artist: audioMetaData.artist,
      artwork: [
        {
          src: audioMetaData.image.src,
        },
      ],
    });
  }, [audioMetaData]);

  //   Listen for actions performed natively (lock screen, notification-type controls)
  useEffect(() => {
    if (!("mediaSession" in navigator)) return;

    navigator.mediaSession.setActionHandler("play", () => {
      play();
    });

    navigator.mediaSession.setActionHandler("pause", () => {
      pause();
    });

    navigator.mediaSession.setActionHandler("stop", () => {
      pause();
    });

    navigator.mediaSession.setActionHandler("previoustrack", () => {
      stepToSiblingTrack("prev");
    });

    navigator.mediaSession.setActionHandler("nexttrack", () => {
      stepToSiblingTrack("next");
    });
  }, [audioMetaData, play, pause, stepToSiblingTrack]);
}
