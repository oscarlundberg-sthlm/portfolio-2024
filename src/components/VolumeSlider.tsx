import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { VolumeLoudIcon, VolumeOffIcon } from "@/svg/icons";
import { SyntheticEvent, useState } from "react";

function VolumeSlider() {
  const { audioElementRef } = useAudioPlayerContext();
  const [gain, setGain] = useState(1);

  function setVolume(value: number) {
    setGain(value);
    if (!audioElementRef.current) return;
    audioElementRef.current.volume = value;
  }

  function handleOnInput(e: SyntheticEvent) {
    const sliderElement = e.target as HTMLInputElement;
    const value = +sliderElement.value;
    setVolume(value);
  }

  return (
    <div className="flex -mr-3">
      <button
        className="p-1.5 relative group -mr-1"
        onClick={() => setVolume(0)}
        aria-label="set volume to 0"
      >
        <div className="rounded-full w-9 h-9  flex items-center justify-center">
          <VolumeOffIcon className="stroke-[1.5px] stroke-[var(--color-theme-white)] opacity-70 group-hover:opacity-100 h-4 w-auto" />
        </div>
      </button>
      <input
        onInput={handleOnInput}
        type="range"
        name="volume"
        aria-label="Volume"
        min="0"
        max="1"
        value={gain}
        step="0.01"
        className=" accent-[var(--color-theme-white)]"
      />
      <button
        className="p-1.5 relative group"
        onClick={() => setVolume(1)}
        aria-label="set volume to max"
      >
        <div className="rounded-full w-9 h-9  flex items-center justify-center">
          <VolumeLoudIcon className="stroke-[1.5px] stroke-[var(--color-theme-white)] opacity-70 group-hover:opacity-100 h-4 w-auto" />
        </div>
      </button>
    </div>
  );
}

export default VolumeSlider;
