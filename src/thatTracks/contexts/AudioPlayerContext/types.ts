// import { WebAudioApi } from "@/hooks/useWebAudioApi";
import { AudioMetaDataPopulated } from "@/types/audioMetaData";
import { MutableRefObject } from "react";

export interface ContextValue {
  audioMetaData: AudioMetaDataPopulated;
  audioElementRef: MutableRefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  cantPlay: boolean;
  loading: boolean;
  actions: {
    loadNewAudioTrack: (data: AudioMetaDataPopulated) => Promise<void>;
    play: () => void;
    pause: () => void;
    playPauseToggle: () => void;
    stepToSiblingTrack: (direction: "prev" | "next") => void;
  };
  onAudioPlayEnded: () => void;
  onAudioCanPlay: () => void;
  onAudioEmptied: () => void;
  onLoadStart: () => void;
  // webAudioApi?: WebAudioApi;
}
