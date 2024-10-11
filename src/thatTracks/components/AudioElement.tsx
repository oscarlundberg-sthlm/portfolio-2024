import { useAudioPlayerContext } from "@/thatTracks/contexts/AudioPlayerContext/AudioPlayerProvider";

function AudioElement() {
  const {
    audioElementRef,
    onAudioPlayEnded,
    onAudioCanPlay,
    onAudioEmptied,
    onLoadStart,
  } = useAudioPlayerContext();
  return (
    <audio
      ref={audioElementRef}
      onLoadStart={() => onLoadStart()}
      onCanPlay={() => onAudioCanPlay()}
      onEmptied={() => onAudioEmptied()}
      onEnded={() => onAudioPlayEnded()}
    ></audio>
  );
}

export default AudioElement;
