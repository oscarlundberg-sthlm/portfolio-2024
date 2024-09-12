import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useEffect, useRef, useState } from "react";

function AudioProgressLine() {
  const { audioElementRef } = useAudioPlayerContext();
  const progressLineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // State to store currentTime

  useEffect(() => {
    const audioElement = audioElementRef.current;

    if (!audioElement) return;

    // Event listener for the 'timeupdate' event to update currentTime state
    const updateCurrentTime = () => {
      const currentTime = audioElement.currentTime;
      const duration = audioElement.duration;
      const progress = currentTime / duration;
      setProgress(progress);
    };

    audioElement.addEventListener("timeupdate", updateCurrentTime);

    // Cleanup the event listener on component unmount
    return () => {
      audioElement.removeEventListener("timeupdate", updateCurrentTime);
    };
  }, [audioElementRef]);

  useEffect(() => {
    const progressLineElement = progressLineRef.current;
    if (!progressLineElement) return;

    let animationFrameId: number;

    const animate = () => {
      progressLineElement.style.transform = `translateX(${
        -100 + progress * 100
      }%)`;

      // Request the next animation frame
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function to cancel the animation when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [progress]);

  return (
    <div className="overflow-hidden relative w-full h-full bg-gray-700">
      <div
        className="bg-white/50 w-full h-full transition-transform ease-linear"
        style={{
          transform: "translateX(-100%)",
        }}
        ref={progressLineRef}
      ></div>
    </div>
  );
}

export default AudioProgressLine;
