import { AudioMetaDataPopulated } from "@/types/audioMetaData";
import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalState {
  tracks: AudioMetaDataPopulated[];
  fullScreenTrackOpen: boolean;
  setFullScreenTrackOpen: (arg1: boolean) => void;
}

const globalStatesContext = createContext<GlobalState>({} as any);

export function GlobalStatesContextProvider({
  children,
  tracks,
}: {
  children: ReactNode;
  tracks: AudioMetaDataPopulated[];
}) {
  const [fullScreenTrackOpen, setFullScreenTrackOpen] =
    useState<boolean>(false);

  return (
    <globalStatesContext.Provider
      value={{
        tracks,
        fullScreenTrackOpen,
        setFullScreenTrackOpen,
      }}
    >
      {children}
    </globalStatesContext.Provider>
  );
}

export function useGlobalStatesContext() {
  return useContext(globalStatesContext);
}
