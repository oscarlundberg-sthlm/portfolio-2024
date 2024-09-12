"use client";

import { AudioPlayerContextProvider } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { GlobalStatesContextProvider } from "@/contexts/GlobalStatesProvider";
import { ReactNode } from "react";
import Header from "./Header";
import MainPlayerContainer from "./MainPlayerContainer";
import Notification from "./Notification";
import SocialLinksBasic from "./SocialLinksBasic";
import TrackFullScreen from "./TrackFullScreen";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalStatesContextProvider>
      <AudioPlayerContextProvider>
        <div className="flex flex-col h-screen">
          <div className="shrink-0">
            <Header />
          </div>
          <div className="grow overflow-y-auto">
            <main>{children}</main>
            <div className="pt-5 pb-10 lg:hidden">
              <SocialLinksBasic />
            </div>
          </div>
          <MainPlayerContainer />
        </div>

        <Notification />

        <TrackFullScreen />
      </AudioPlayerContextProvider>
    </GlobalStatesContextProvider>
  );
};

export default ClientLayout;
