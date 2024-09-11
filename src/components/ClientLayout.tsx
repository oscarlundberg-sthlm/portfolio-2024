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
        <div className="relative z-10 mb-[72px] lg:mb-[104px]">
          <Header />
          <main>{children}</main>
          <div className="py-5 lg:hidden">
            <SocialLinksBasic />
          </div>
        </div>
        <MainPlayerContainer />

        <Notification />

        <TrackFullScreen />
      </AudioPlayerContextProvider>
    </GlobalStatesContextProvider>
  );
};

export default ClientLayout;
