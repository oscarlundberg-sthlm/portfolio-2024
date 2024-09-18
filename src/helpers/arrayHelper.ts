import { AudioMetaDataPopulated } from "@/types/audioMetaData";

export function getTrackArrayProps(
  array: AudioMetaDataPopulated[],
  track: AudioMetaDataPopulated
) {
  const currentTrackIndex = array.findIndex((item) => track.id === item.id);
  const isLast = currentTrackIndex === array.length - 1;
  const isFirst = currentTrackIndex === 0;

  return {
    currentTrackIndex,
    isLast,
    isFirst,
  };
}
