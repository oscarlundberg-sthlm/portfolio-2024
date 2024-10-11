import { formatDuration } from "@/helpers/time";
import { useAudioPlayerContext } from "@/thatTracks/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/thatTracks/contexts/GlobalStatesProvider";
import { AudioMetaDataPopulated } from "@/types/audioMetaData";
import classNames from "classnames";
import { SyntheticEvent } from "react";
import TrackTitle from "./TrackTitle";

interface Props {
  data: AudioMetaDataPopulated;
}

function AudioTrack({ data }: Props) {
  const {
    audioMetaData,
    actions: { play, loadNewAudioTrack },
  } = useAudioPlayerContext();
  const { setFullScreenTrackOpen } = useGlobalStatesContext();

  const handleOnClick = async (e: SyntheticEvent) => {
    e.stopPropagation();
    await loadNewAudioTrack(data);
    play();
    setFullScreenTrackOpen(true);
  };
  return (
    <div className="mx-auto max-w-screen-3xl 3xl+:px-5">
      <button
        onClick={handleOnClick}
        className={classNames(
          " w-full py-4 px-5 flex justify-between group transition-colors",
          {
            "hover:bg-[rgba(var(--color-primary-raw),0.4)]":
              audioMetaData.id !== data.id,
            "bg-[var(--color-primary)] text-[var(--color-theme-white)] hover:brightness-110":
              audioMetaData.id === data.id,
          }
        )}
      >
        <TrackTitle
          title={data?.trackTitle}
          artist={data?.artist}
          lineheight="tight"
        />
        <div className="flex items-center self-stretch text-sm tracking-wider">
          {formatDuration(data.durationInSeconds)}
        </div>
      </button>
    </div>
  );
}

export default AudioTrack;
