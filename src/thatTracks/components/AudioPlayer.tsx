"use client";

import { useAudioPlayerContext } from "@/thatTracks/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/thatTracks/contexts/GlobalStatesProvider";
import ExpanderButton from "./ExpanderButton";
import PlayPauseButton from "./PlayPauseButton";
import SkipTrackButton from "./SkipTrackButton";
import TrackImage from "./TrackImage";
import TrackTitle from "./TrackTitle";
import VolumeSlider from "./VolumeSlider";

function AudioPlayer() {
  const { audioMetaData, cantPlay } = useAudioPlayerContext();
  const { setFullScreenTrackOpen } = useGlobalStatesContext();

  return (
    <div className="h-full mx-auto max-w-screen-3xl">
      <div className="relative h-full">
        <div className="relative h-full z-10 grid grid-cols-[minmax(0,100%),max-content] lg:grid-cols-[minmax(0,1fr),max-content,minmax(0,1fr)] items-center justify-between p-3 lg:p-5">
          <button
            className="flex items-center group mr-3 lg:mr-5"
            onClick={() => setFullScreenTrackOpen(true)}
            disabled={cantPlay}
            aria-label="Open the track in fullscreen view"
          >
            {audioMetaData?.image?.src && (
              <div className="relative h-14 w-14 rounded-lg border border-[rgba(var(--color-theme-white-raw),0.2)] overflow-hidden">
                <TrackImage />
              </div>
            )}
            <div className="pl-3 lg:pl-4"></div>
            <TrackTitle
              title={audioMetaData?.trackTitle}
              artist={audioMetaData?.artist}
              className="[&_:first-child]:group-hover:underline"
              lineheight="tight"
            />
          </button>
          <div className="flex justify-center items-center mr-1 lg:mr-0 [&>*:not(:first-child)]:ml-5">
            <SkipTrackButton direction="prev" className="hidden lg:flex" />
            <PlayPauseButton placement="mainAudioPlayer" />
            <SkipTrackButton direction="next" className="hidden lg:flex" />
          </div>
          <div className="lg:flex justify-end hidden">
            <div className="hidden lg:block">
              <VolumeSlider />
            </div>
            <div className="lg:ml-4">
              <ExpanderButton
                setExpanded={(arg) => setFullScreenTrackOpen(arg)}
                expanded={false}
                disabled={cantPlay}
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
