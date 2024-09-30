import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/contexts/GlobalStatesProvider";
import { getTrackArrayProps } from "@/helpers/arrayHelper";
import { SkipNextIcon } from "@/svg/icons";
import classNames from "classnames";
import { SyntheticEvent } from "react";

interface Props {
  direction: "prev" | "next";
  className?: string;
}

function SkipTrackButton({ direction, className }: Props) {
  const { tracks } = useGlobalStatesContext();
  const {
    loading,
    cantPlay,
    audioMetaData: currentTrackData,
    actions: { stepToSiblingTrack },
  } = useAudioPlayerContext();

  const { isLast, isFirst } = getTrackArrayProps(tracks, currentTrackData);

  const disabled =
    loading ||
    (direction === "prev" && isFirst) ||
    (direction === "next" && isLast) ||
    cantPlay;

  const handleOnClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    stepToSiblingTrack(direction);
  };

  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className={classNames(
        "flex items-center justify-center min-w-12 min-h-12 max-w-12 max-h-12 group hover:opacity-80 disabled:opacity-30",
        className
      )}
    >
      <SkipNextIcon
        className={classNames(
          "fill-current min-w-9 min-h-9 max-w-9 max-h-9",
          direction === "prev" && "rotate-180"
        )}
      />
    </button>
  );
}

export default SkipTrackButton;
