import { useAudioPlayerContext } from "@/thatTracks/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/thatTracks/contexts/GlobalStatesProvider";
import { useEffect } from "react";

export function useKeyboard() {
  const { setFullScreenTrackOpen } = useGlobalStatesContext();
  const { actions, cantPlay } = useAudioPlayerContext();

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        e.preventDefault();
        setFullScreenTrackOpen(false);
      }
      if (e.code === "Space" && !cantPlay) {
        e.preventDefault();
        actions.playPauseToggle();
      }
      if (e.code === "ArrowLeft") {
        e.preventDefault();
        actions.stepToSiblingTrack("prev");
      }
      if (e.code === "ArrowRight") {
        e.preventDefault();
        actions.stepToSiblingTrack("next");
      }
    };

    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, [setFullScreenTrackOpen, actions, cantPlay]);
}
