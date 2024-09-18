import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { getImageFocusCSS } from "@/helpers/imageFocus";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

function TrackImage() {
  const { audioMetaData, loading: audioIsLoading } = useAudioPlayerContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Keep track of the previous image source to detect changes
  const [prevImageSrc, setPrevImageSrc] = useState(audioMetaData?.image?.src);

  // Reset the imageLoaded state only when the image source changes
  useEffect(() => {
    const currentImageSrc = audioMetaData?.image?.src;

    if (currentImageSrc && currentImageSrc !== prevImageSrc) {
      setImageLoaded(false); // Reset loading state when the image source changes
      setPrevImageSrc(currentImageSrc); // Update the previous image source
    }
  }, [audioMetaData?.image?.src, prevImageSrc]);

  return (
    <Image
      src={audioMetaData?.image?.src}
      width={audioMetaData?.image?.width}
      height={audioMetaData?.image?.height}
      alt={audioMetaData?.image?.alt}
      className={classNames(
        "absolute inset-0 w-full h-full object-cover transition",
        {
          "opacity-0": !imageLoaded,
        }
      )}
      style={{
        objectPosition: getImageFocusCSS(audioMetaData?.image),
      }}
      onLoad={() => setImageLoaded(true)}
    />
  );
}

export default TrackImage;
