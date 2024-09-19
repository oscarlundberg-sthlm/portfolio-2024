import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/contexts/GlobalStatesProvider";
import { formatDuration } from "@/helpers/time";
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
    <button
      onClick={handleOnClick}
      className={classNames(
        " w-full py-4 px-5 flex justify-between group mx-auto max-w-screen-3xl 3xl+:rounded-lg",
        {
          "hover:bg-custom-gray/50": audioMetaData.id !== data.id,
          "bg-custom-blue/70 hover:bg-custom-blue/90":
            audioMetaData.id === data.id,
        }
      )}
    >
      <TrackTitle
        title={data?.trackTitle}
        artist={data?.artist}
        lineheight="tight"
      />
      <div className="flex items-center self-stretch text-sm">
        {formatDuration(data.durationInSeconds)}
      </div>
    </button>
  );
}

export default AudioTrack;
