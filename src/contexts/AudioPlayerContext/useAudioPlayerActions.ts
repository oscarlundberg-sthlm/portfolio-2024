import { AudioMetaDataUnPopulated } from "@/types/AudioMetaDataUnPopulated";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export function useAudioPlayerActions(
  audioElementRef: MutableRefObject<HTMLAudioElement | null>,
  setIsPlaying: Dispatch<SetStateAction<boolean>>,
  setAudioMetaDataUnPopulated: Dispatch<
    SetStateAction<AudioMetaDataUnPopulated>
  >
) {
  function ensureAudioElementRefCurrent(): boolean {
    if (!audioElementRef.current) {
      setIsPlaying(false);
      return false;
    }
    return true;
  }

  async function loadNewAudioTrack(data: AudioMetaDataUnPopulated) {
    if (!ensureAudioElementRefCurrent()) return;
    setAudioMetaDataUnPopulated(data);
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

  function onAudioPlayEnded() {
    setIsPlaying(false);
    if (!ensureAudioElementRefCurrent()) return;
    // Reset audio track to the start
    audioElementRef.current!.currentTime = 0;
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
