let audioContext: AudioContext | null = null;

export const audioContextSingleton = () => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
};
