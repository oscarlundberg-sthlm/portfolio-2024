import { AudioMetaDataPopulated } from "@/types/audioMetaData";
import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { ContextValue } from "./types";
import { useAudioPlayerActions } from "./useAudioPlayerActions";

interface Props {
  children: ReactNode;
}

const audioPlayerContext = createContext<ContextValue>({} as any);

export function AudioPlayerContextProvider({ children }: Props) {
  const [audioMetaData, setAudioMetaData] = useState<AudioMetaDataPopulated>(
    {} as any
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cantPlay, setCantPlay] = useState(true);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const actions = useAudioPlayerActions(
    audioElementRef,
    setIsPlaying,
    setAudioMetaData
  );

  // const webAudioApi = useWebAudioApi(audioElementRef, isPlaying);

  return (
    <audioPlayerContext.Provider
      value={{
        audioMetaData,
        audioElementRef,
        isPlaying,
        cantPlay,
        loading,
        actions: {
          loadNewAudioTrack: (data) => actions.loadNewAudioTrack(data),
          play: () => actions.play(),
          pause: () => actions.pause(),
          playPauseToggle: () => actions.playPauseToggle(),
        },
        onAudioPlayEnded: () => actions.onAudioPlayEnded(),
        onAudioCanPlay: () => {
          setCantPlay(false);
          setLoading(false);
        },
        onAudioEmptied: () => {
          setCantPlay(true);
          setLoading(false);
        },
        onLoadStart: () => setLoading(true),
        // webAudioApi,
      }}
    >
      {children}
    </audioPlayerContext.Provider>
  );
}

export function useAudioPlayerContext() {
  return useContext(audioPlayerContext);
}
