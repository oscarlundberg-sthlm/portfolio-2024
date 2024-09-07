import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useEffect, useRef } from "react";

function VisualEqualizer() {
  const canvasRef = useRef(null);
  const { isPlaying, audioElementRef, webAudioApi } = useAudioPlayerContext();

  useEffect(() => {
    if (!canvasRef.current) return;
    if (!audioElementRef.current) return;
    if (!isPlaying) return;

    const cleanup = webAudioApi.visualEqualizer(canvasRef.current);
    return () => {
      cleanup();
    };
  }, [isPlaying, audioElementRef, webAudioApi]);

  return <canvas ref={canvasRef} className="w-full h-full"></canvas>;
}

export default VisualEqualizer;
