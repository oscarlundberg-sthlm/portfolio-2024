import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/contexts/GlobalStatesProvider";
import { formatDuration } from "@/helpers/time";
import { AudioMetaData } from "@/types/audioMetaData";
import classNames from "classnames";
import { SyntheticEvent } from "react";
import TrackTitle from "./TrackTitle";

interface Props {
  data: AudioMetaData;
}

function AudioTrack({ data }: Props) {
  const {
    audioMetaData: currentTrackMetaData,
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
        " w-full py-2.5 px-5 flex justify-between group hover:bg-custom-gray/50"
        // currentTrackMetaData.id === data.id
        //   ? "bg-green-dark-accent"
        //   : "hover:bg-green-gray-800"
      )}
    >
      <TrackTitle title={data?.trackTitle} artist={data?.artist} />
      <div className="flex items-center self-stretch text-sm">
        {formatDuration(data.durationInSeconds)}
      </div>
    </button>
  );
}

export default AudioTrack;
