import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { formatDuration } from "@/helpers/time";
import { SyntheticEvent, useEffect, useState } from "react";

function AudioSeeker() {
  const {
    cantPlay,
    audioElementRef,
    audioMetaData: { durationInSeconds },
  } = useAudioPlayerContext();

  const [currentTime, setCurrentTime] = useState(0); // State to store currentTime
  const [isSeeking, setIsSeeking] = useState(false); // State to track if the user is currently seeking

  useEffect(() => {
    const audioElement = audioElementRef.current;

    if (!audioElement) return;

    // Event listener for the 'timeupdate' event to update currentTime state
    const updateCurrentTime = () => {
      if (!isSeeking) {
        // Only update if not seeking
        setCurrentTime(audioElement.currentTime);
      }
    };

    audioElement.addEventListener("timeupdate", updateCurrentTime);

    // Cleanup the event listener on component unmount
    return () => {
      audioElement.removeEventListener("timeupdate", updateCurrentTime);
    };
  }, [isSeeking, audioElementRef]); // Add isSeeking to dependency array

  const handleOnChange = (e: SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement;
    setCurrentTime(+inputElement.value); // Update local state while sliding
  };

  const handleOnPointerUp = (e: SyntheticEvent) => {
    if (!audioElementRef.current) return;
    const inputElement = e.target as HTMLInputElement;
    audioElementRef.current.currentTime = +inputElement.value; // Update audio currentTime when released
    setIsSeeking(false); // No longer seeking
  };

  const handleOnPointerDown = () => {
    setIsSeeking(true); // Track that the user is currently seeking
  };

  return (
    <div className="">
      <input
        disabled={cantPlay}
        type="range"
        name="audio_seeker"
        aria-label="Audio time seeker"
        onPointerDown={handleOnPointerDown} // Start seeking
        onPointerUp={handleOnPointerUp} // Finish seeking
        onChange={handleOnChange} // Update value while dragging
        min={0}
        max={durationInSeconds}
        step={0.01}
        value={currentTime} // Controlled by state
        className="w-full accent-current"
      />
      <div className="flex justify-between text-sm opacity-70 tracking-wider">
        <div>{formatDuration(currentTime)}</div>
        <div>{formatDuration(durationInSeconds)}</div>
      </div>
    </div>
  );
}

export default AudioSeeker;
