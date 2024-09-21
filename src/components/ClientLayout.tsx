"use client";

import { AudioPlayerContextProvider } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { GlobalStatesContextProvider } from "@/contexts/GlobalStatesProvider";
import { AudioMetaDataPopulated } from "@/types/audioMetaData";
import { ReactNode } from "react";
import AnonymousAnalytics from "./AnonymousAnalytics";
import AudioElement from "./AudioElement";
import Header from "./Header";
import MainPlayerContainer from "./MainPlayerContainer";
import MediaSessionApi from "./MediaSessionApi";
import SocialLinksBasic from "./SocialLinksBasic";
import Toast from "./Toast";
import TrackFullScreen from "./TrackFullScreen";

const ClientLayout = ({
  children,
  tracks,
}: {
  children: ReactNode;
  tracks: AudioMetaDataPopulated[];
}) => {
  return (
    <GlobalStatesContextProvider tracks={tracks}>
      <AudioPlayerContextProvider tracks={tracks}>
        <div className="flex flex-col h-screen">
          <div className="shrink-0">
            <Header />
          </div>
          <div className="grow overflow-y-auto">
            <main>{children}</main>
            <div className="pt-8 px-5 pb-14 lg:hidden">
              <SocialLinksBasic />
            </div>
          </div>
          <MainPlayerContainer />
        </div>

        <Toast />
        <MediaSessionApi />
        <AudioElement />
        <TrackFullScreen />
        <AnonymousAnalytics />
      </AudioPlayerContextProvider>
    </GlobalStatesContextProvider>
  );
};

export default ClientLayout;
