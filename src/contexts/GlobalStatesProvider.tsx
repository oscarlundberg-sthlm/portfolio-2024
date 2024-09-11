import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalState {
  fullScreenTrackOpen: boolean;
  setFullScreenTrackOpen: (arg1: boolean) => void;
}

const globalStatesContext = createContext<GlobalState>({} as any);

export function GlobalStatesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [fullScreenTrackOpen, setFullScreenTrackOpen] =
    useState<boolean>(false);

  return (
    <globalStatesContext.Provider
      value={{
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
