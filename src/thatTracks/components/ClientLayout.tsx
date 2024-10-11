"use client";

import SiteSelector from "@/components/SiteSelector";
import { AudioPlayerContextProvider } from "@/thatTracks/contexts/AudioPlayerContext/AudioPlayerProvider";
import { ColorThemeContextProvider } from "@/thatTracks/contexts/ColorTheme/ColorThemeProvider";
import { GlobalStatesContextProvider } from "@/thatTracks/contexts/GlobalStatesProvider";
import { AudioMetaDataPopulated } from "@/types/audioMetaData";
import AnonymousAnalytics from "./AnonymousAnalytics";
import AudioElement from "./AudioElement";
import Header from "./Header";
import Main from "./Main";
import MainPlayerContainer from "./MainPlayerContainer";
import MediaSessionApi from "./MediaSessionApi";
import SocialLinksBasic from "./SocialLinksBasic";
import Toast from "./Toast";
import TrackFullScreen from "./TrackFullScreen";

const ClientLayout = ({ tracks }: { tracks: AudioMetaDataPopulated[] }) => {
  return (
    <GlobalStatesContextProvider tracks={tracks}>
      <ColorThemeContextProvider>
        <AudioPlayerContextProvider tracks={tracks}>
          <div className="flex flex-col h-screen">
            <div className="shrink-0">
              <Header />
            </div>
            <div className="grow overflow-y-auto">
              <Main />
              <div className="pt-8 px-5 pb-14 lg:hidden flex justify-between">
                <SocialLinksBasic />
                <SiteSelector />
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
      </ColorThemeContextProvider>
    </GlobalStatesContextProvider>
  );
};

export default ClientLayout;
