import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { PauseButtonSVG, PlayButtonSVG } from "@/svg/buttons";
import classNames from "classnames";

interface Props {
  placement: "mainAudioPlayer" | "trackFullScreen";
}

function PlayPauseButton({ placement }: Props) {
  const { actions, isPlaying, cantPlay } = useAudioPlayerContext();

  const PlayPauseButtons = ({ className }: { className?: string }) => {
    return isPlaying ? (
      <PauseButtonSVG className={className} />
    ) : (
      <PlayButtonSVG className={className} />
    );
  };

  return (
    <button
      aria-label="Play/pause toggle"
      onClick={() => actions.playPauseToggle()}
      disabled={cantPlay}
      className="rounded-full  disabled:opacity-30 group"
    >
      <PlayPauseButtons
        className={classNames({
          "fill-white group-hover:fill-white/80 h-12 w-12 lg:h-16 lg:w-16":
            placement === "mainAudioPlayer",
          "fill-white group-hover:fill-white/80 h-16 w-16":
            placement === "trackFullScreen",
        })}
      />
    </button>
  );
}

export default PlayPauseButton;
