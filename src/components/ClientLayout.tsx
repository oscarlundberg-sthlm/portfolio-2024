"use client";

import { AudioPlayerContextProvider } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { GlobalStatesContextProvider } from "@/contexts/GlobalStatesProvider";
import { ReactNode } from "react";
import AnonymousAnalytics from "./AnonymousAnalytics";
import Header from "./Header";
import MainPlayerContainer from "./MainPlayerContainer";
import SocialLinksBasic from "./SocialLinksBasic";
import Toast from "./Toast";
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

        <Toast />

        <TrackFullScreen />
        <AnonymousAnalytics />
      </AudioPlayerContextProvider>
    </GlobalStatesContextProvider>
  );
};

export default ClientLayout;
