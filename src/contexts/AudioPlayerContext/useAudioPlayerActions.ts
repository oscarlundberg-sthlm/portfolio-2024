import { getTrackArrayProps } from "@/helpers/arrayHelper";
import { AudioMetaDataPopulated } from "@/types/audioMetaData";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export function useAudioPlayerActions(
  audioElementRef: MutableRefObject<HTMLAudioElement | null>,
  setIsPlaying: Dispatch<SetStateAction<boolean>>,
  setAudioMetaData: Dispatch<SetStateAction<AudioMetaDataPopulated>>,
  audioMetaData: AudioMetaDataPopulated,
  tracks: AudioMetaDataPopulated[]
) {
  function ensureAudioElementRefCurrent(): boolean {
    if (!audioElementRef.current) {
      setIsPlaying(false);
      return false;
    }
    return true;
  }

  async function loadNewAudioTrack(data: AudioMetaDataPopulated) {
    if (!ensureAudioElementRefCurrent()) return;
    setAudioMetaData(data);
    audioElementRef.current!.src = data.path;
    audioElementRef.current!.load();
    return new Promise<void>((resolve, reject) => {
      if (!audioElementRef.current) {
        reject(new Error("Audio element not found"));
        return false;
      }
      audioElementRef.current.addEventListener(
        "canplay",
        () => {
          resolve();
        },
        { once: true }
      );
    });
  }

  function play() {
    if (!ensureAudioElementRefCurrent()) return;
    audioElementRef.current!.play();
    setIsPlaying(true);
  }

  function pause() {
    if (!ensureAudioElementRefCurrent()) return;
    audioElementRef.current!.pause();
    setIsPlaying(false);
  }

  function playPauseToggle() {
    if (!ensureAudioElementRefCurrent()) return;

    if (audioElementRef.current!.paused) {
      play();
    } else {
      pause();
    }
  }

  async function onAudioPlayEnded() {
    setIsPlaying(false);
    if (!ensureAudioElementRefCurrent()) return;

    const { currentTrackIndex, isLast } = getTrackArrayProps(
      tracks,
      audioMetaData
    );

    // check if last
    if (isLast) {
      // Reset audio track to the start
      audioElementRef.current!.currentTime = 0;
      return;
    }

    const nextTrack = tracks[currentTrackIndex + 1];
    await loadNewAudioTrack(nextTrack);
    play();
  }

  return {
    ensureAudioElementRefCurrent,
    loadNewAudioTrack,
    play,
    pause,
    playPauseToggle,
    onAudioPlayEnded,
  };
}
