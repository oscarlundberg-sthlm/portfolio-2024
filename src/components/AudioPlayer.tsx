"use client";

import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/contexts/GlobalStatesProvider";
import { getImageFocusCSS } from "@/helpers/imageFocus";
import Image from "next/image";
import ExpanderButton from "./ExpanderButton";
import PlayPauseButton from "./PlayPauseButton";
import TrackTitle from "./TrackTitle";
import VolumeSlider from "./VolumeSlider";

function AudioPlayer() {
  const {
    audioMetaData,
    audioElementRef,
    isPlaying,
    cantPlay,
    actions,
    onAudioPlayEnded,
    onAudioCanPlay,
    onAudioEmptied,
    onAudioStalled,
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
            aria-description="Open the tracks' fullscreen view"
          >
            {audioMetaData?.image?.src && (
              <div className="relative h-14 w-14 rounded-lg border border-gray-700 overflow-hidden">
                <Image
                  src={audioMetaData?.image?.src}
                  width={audioMetaData?.image?.width}
                  height={audioMetaData?.image?.height}
                  alt={audioMetaData?.image?.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{
                    objectPosition: getImageFocusCSS(audioMetaData?.image),
                  }}
                />
              </div>
            )}
            <div className="pl-4"></div>
            <TrackTitle
              title={audioMetaData?.trackTitle}
              artist={audioMetaData?.artist}
              className="[&_:first-child]:group-hover:underline"
            />
          </button>
          <div className="flex justify-center mr-1 lg:mr-0">
            <div className="flex items-center">
              <audio
                ref={audioElementRef}
                onCanPlay={() => onAudioCanPlay()}
                onEmptied={() => onAudioEmptied()}
                onStalled={() => onAudioStalled()}
                onEnded={() => onAudioPlayEnded()}
              ></audio>
              <PlayPauseButton placement="mainAudioPlayer" />
            </div>
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
