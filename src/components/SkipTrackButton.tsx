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
  const { tracks, setFullScreenTrackOpen } = useGlobalStatesContext();
  const {
    loading,
    audioMetaData: currentTrackData,
    actions: { loadNewAudioTrack, play },
  } = useAudioPlayerContext();

  const { currentTrackIndex, isLast, isFirst } = getTrackArrayProps(
    tracks,
    currentTrackData
  );

  const disabled =
    loading ||
    (direction === "prev" && isFirst) ||
    (direction === "next" && isLast);

  const getTrackData = (direction: "prev" | "next") => {
    const step = direction === "next" ? 1 : -1;
    return tracks[currentTrackIndex + step] ?? false;
  };

  const handleOnClick = async (e: SyntheticEvent) => {
    e.stopPropagation();
    const newTrackData = getTrackData(direction);
    if (!newTrackData) return;
    await loadNewAudioTrack(newTrackData);
    play();
    setFullScreenTrackOpen(true);
  };

  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className={classNames(
        "flex items-center justify-center min-w-12 min-h-12 max-w-12 max-h-12  group disabled:opacity-30",
        className
      )}
    >
      <SkipNextIcon
        className={classNames(
          "fill-white group-hover:fill-white/80 min-w-9 min-h-9 max-w-9 max-h-9 group-disabled:group-hover:fill-white",
          direction === "prev" && "rotate-180"
        )}
      />
    </button>
  );
}

export default SkipTrackButton;
