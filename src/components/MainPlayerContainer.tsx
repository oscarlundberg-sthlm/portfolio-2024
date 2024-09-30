import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useKeyboard } from "@/hooks/useKeyboard";
import classNames from "classnames";
import { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

function MainPlayerContainer() {
  useKeyboard();
  const { audioMetaData } = useAudioPlayerContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(!!audioMetaData.id);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [audioMetaData]);

  return (
    <div
      className={classNames(
        "min-h-[80px] max-h-[80px] lg:min-h-[104px] lg:max-h-[104px] shrink-0 z-10 w-full transition-colors bg-[var(--color-bg-dark)] border-t border-[var(--color-theme-white-20)] overflow-hidden ",
        {
          "hidden lg:block": !show,
        }
      )}
    >
      <AudioPlayer />
    </div>
  );
}

export default MainPlayerContainer;
