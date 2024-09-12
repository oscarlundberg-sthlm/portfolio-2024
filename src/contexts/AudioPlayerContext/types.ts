import { WebAudioApi } from "@/hooks/useWebAudioApi";
import { AudioMetaData } from "@/types/audioMetaData";
import { MutableRefObject } from "react";

export interface ContextValue {
  audioMetaData: AudioMetaData;
  audioElementRef: MutableRefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  cantPlay: boolean;
  loading: boolean;
  actions: {
    loadNewAudioTrack: (data: AudioMetaData) => Promise<void>;
    play: () => void;
    pause: () => void;
    playPauseToggle: () => void;
  };
  onAudioPlayEnded: () => void;
  onAudioCanPlay: () => void;
  onAudioEmptied: () => void;
  onLoadStart: () => void;
  webAudioApi?: WebAudioApi;
}
