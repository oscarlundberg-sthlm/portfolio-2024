"use client";

import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/contexts/GlobalStatesProvider";
import ExpanderButton from "./ExpanderButton";
import PlayPauseButton from "./PlayPauseButton";
import TrackImage from "./TrackImage";
import TrackTitle from "./TrackTitle";
import VolumeSlider from "./VolumeSlider";

function AudioPlayer() {
  const {
    audioMetaData,
    audioElementRef,
    cantPlay,
    loading,
    onAudioPlayEnded,
    onAudioCanPlay,
    onAudioEmptied,
    onLoadStart,
  } = useAudioPlayerContext();
  const { setFullScreenTrackOpen } = useGlobalStatesContext();

  return (
    <div className="">
      <div className="relative">
        <div className="relative z-10 grid grid-cols-[minmax(0,100%),max-content] lg:grid-cols-[minmax(0,1fr),max-content,minmax(0,1fr)] items-center justify-between p-2 lg:p-5">
          <button
            className="flex items-center group mr-3 lg:mr-5"
            onClick={() => setFullScreenTrackOpen(true)}
            disabled={cantPlay}
            aria-label="Open the track in fullscreen view"
          >
            {audioMetaData?.image?.src && (
              <div className="relative h-14 w-14 rounded-lg border border-gray-700 overflow-hidden">
                <TrackImage />
              </div>
            )}
            <div className="pl-4"></div>
            <TrackTitle
              title={audioMetaData?.trackTitle}
              artist={audioMetaData?.artist}
              className="[&_:first-child]:group-hover:underline"
            />
          </button>
          <div className="flex justify-center items-center mr-1 lg:mr-0 [&>*:not(:first-child)]:ml-6">
            <PlayPauseButton placement="mainAudioPlayer" />
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
      <audio
        ref={audioElementRef}
        onLoadStart={() => onLoadStart()}
        onCanPlay={() => onAudioCanPlay()}
        onEmptied={() => onAudioEmptied()}
        onEnded={() => onAudioPlayEnded()}
      ></audio>
    </div>
  );
}

export default AudioPlayer;
