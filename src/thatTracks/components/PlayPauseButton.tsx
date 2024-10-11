import { useAudioPlayerContext } from "@/thatTracks/contexts/AudioPlayerContext/AudioPlayerProvider";
import { PauseButtonSVG, PlayButtonSVG } from "@/thatTracks/svg/buttons";
import classNames from "classnames";

interface Props {
  placement: "mainAudioPlayer" | "trackFullScreen";
}

function PlayPauseButton({ placement }: Props) {
  const { actions, isPlaying, cantPlay, loading } = useAudioPlayerContext();

  const PlayPauseButtons = ({ className }: { className?: string }) => {
    return isPlaying ? (
      <PauseButtonSVG className={className} />
    ) : (
      <PlayButtonSVG className={className} />
    );
  };

  return (
    <div className="flex items-center relative">
      <button
        aria-label="Play/pause toggle"
        onClick={() => actions.playPauseToggle()}
        disabled={cantPlay}
        className="rounded-full hover:opacity-80 disabled:opacity-30 group"
      >
        <PlayPauseButtons
          className={classNames({
            "fill-current h-[50px] w-[50px] lg:h-16 lg:w-16":
              placement === "mainAudioPlayer",
            "fill-current h-16 w-16": placement === "trackFullScreen",
          })}
        />
      </button>
      {loading && (
        <div className="border-2 rounded-full border-t-current border-x-transparent border-b-transparent absolute inset-0 animate-spin"></div>
      )}
    </div>
  );
}

export default PlayPauseButton;
