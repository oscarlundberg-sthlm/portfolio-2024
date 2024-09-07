import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { formatDuration } from "@/helpers/time";
import { AudioMetaData } from "@/types/audioMetaData";
import classNames from "classnames";
import { SyntheticEvent } from "react";

interface Props {
  data: AudioMetaData;
}

function AudioTrack({ data }: Props) {
  const {
    audioMetaData: currentTrackMetaData,
    actions: { play, loadNewAudioTrack },
  } = useAudioPlayerContext();

  const handleOnClick = async (e: SyntheticEvent) => {
    e.stopPropagation();
    await loadNewAudioTrack(data);
    play();
  };
  return (
    <button
      onClick={handleOnClick}
      className={classNames(
        " w-full py-2 px-5 flex justify-between group",
        currentTrackMetaData.id === data.id
          ? " bg-gradient-to-r from-amber-800 to-amber-600 text-white"
          : " hover:bg-gray-200"
      )}
    >
      <div className="text-left">
        <div className="font-bold">{data.trackTitle}</div>
        <div className="text-sm">{data.artist}</div>
      </div>
      <div className="flex items-center self-stretch text-sm">
        {formatDuration(data.durationInSeconds)}
      </div>
    </button>
  );
}

export default AudioTrack;
