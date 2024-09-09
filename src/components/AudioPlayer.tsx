"use client";

import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { ChevronUpIcon, PauseIcon, PlayIcon } from "@/svg/icons";
import classNames from "classnames";
import { useState } from "react";
import VolumeSlider from "./VolumeSlider";

interface Props {
  setExpanded: (expanded: boolean) => void;
  expanded: boolean;
}

function AudioPlayer({ setExpanded, expanded }: Props) {
  const {
    audioMetaData,
    audioElementRef,
    isPlaying,
    actions,
    onAudioPlayEnded,
  } = useAudioPlayerContext();
  const [disabled, setDisabled] = useState(true);

  const PlayPauseIcons = ({ className }: { className?: string }) => {
    return isPlaying ? (
      <PauseIcon className={className} />
    ) : (
      <PlayIcon className={className} />
    );
  };

  return (
    <div className="">
      <div className="relative">
        <div className="relative z-10 grid grid-cols-[minmax(0,1fr),max-content,minmax(0,1fr)] items-center justify-between p-5">
          <div className="text-left text-white">
            <div className="font-bold">{audioMetaData.trackTitle}</div>
            <div className="text-sm">{audioMetaData.artist}</div>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center">
              <audio
                ref={audioElementRef}
                onCanPlay={() => setDisabled(false)}
                onEmptied={() => setDisabled(true)}
                onStalled={() => setDisabled(true)}
                onEnded={() => onAudioPlayEnded()}
              ></audio>
              <button
                role="switch"
                aria-description="Play/pause toggle"
                onClick={() => actions.playPauseToggle()}
                disabled={disabled}
                className="rounded-full bg-accent text-white hover:bg-accent  h-16 w-16 disabled:opacity-30 flex items-center justify-center"
              >
                <PlayPauseIcons className="h-5 w-auto fill-green-950" />
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <VolumeSlider />
            <button
              className="p-1.5 relative group ml-4"
              aria-description="expand the player for more options"
              onClick={() => setExpanded(!expanded)}
            >
              <div className="rounded-full  w-9 h-9  flex items-center justify-center">
                <ChevronUpIcon
                  className={classNames(
                    " stroke-accent/60 group-hover:stroke-accent h-4 w-auto transition-transform",
                    expanded && "rotate-180"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="h-96"></div>
    </div>
  );
}

export default AudioPlayer;
