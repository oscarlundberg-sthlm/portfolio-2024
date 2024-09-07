import { useWebAudioApi } from "@/hooks/useWebAudioApi";
import { AudioMetaData } from "@/types/audioMetaData";
import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { ContextValue } from "./types";
import { useAudioPlayerActions } from "./useAudioPlayerActions";

interface Props {
  children: ReactNode;
}

const audioPlayerContext = createContext<ContextValue>({} as any);

export function AudioPlayerContextProvider({ children }: Props) {
  const [audioMetaData, setAudioMetaData] = useState<AudioMetaData>({} as any);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const actions = useAudioPlayerActions(
    audioElementRef,
    setIsPlaying,
    setAudioMetaData
  );

  const webAudioApi = useWebAudioApi(audioElementRef, isPlaying);

  return (
    <audioPlayerContext.Provider
      value={{
        audioMetaData,
        audioElementRef,
        isPlaying,
        actions: {
          loadNewAudioTrack: (data) => actions.loadNewAudioTrack(data),
          play: () => actions.play(),
          pause: () => actions.pause(),
          playPauseToggle: () => actions.playPauseToggle(),
        },
        onAudioPlayEnded: () => actions.onAudioPlayEnded(),
        webAudioApi,
      }}
    >
      {children}
    </audioPlayerContext.Provider>
  );
}

export function useAudioPlayerContext() {
  return useContext(audioPlayerContext);
}
