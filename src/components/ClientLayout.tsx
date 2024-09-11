"use client";

import { AudioPlayerContextProvider } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { GlobalStatesContextProvider } from "@/contexts/GlobalStatesProvider";
import { ReactNode } from "react";
import Header from "./Header";
import MainPlayerContainer from "./MainPlayerContainer";
import Notification from "./Notification";
import TrackFullScreen from "./TrackFullScreen";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalStatesContextProvider>
      <AudioPlayerContextProvider>
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
        </div>
        <MainPlayerContainer />

        <Notification />

        <TrackFullScreen />
      </AudioPlayerContextProvider>
    </GlobalStatesContextProvider>
  );
};

export default ClientLayout;
