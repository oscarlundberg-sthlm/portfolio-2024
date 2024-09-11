import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/contexts/GlobalStatesProvider";
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
    };

    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, [setFullScreenTrackOpen, actions, cantPlay]);
}
