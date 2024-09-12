import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/contexts/GlobalStatesProvider";
import { getImageFocusCSS } from "@/helpers/imageFocus";
import classNames from "classnames";
import Image from "next/image";
import AudioSeeker from "./AudioSeeker";
import ExpanderButton from "./ExpanderButton";
import PlayPauseButton from "./PlayPauseButton";
import TrackTitle from "./TrackTitle";

function TrackFullScreen() {
  const { fullScreenTrackOpen, setFullScreenTrackOpen } =
    useGlobalStatesContext();
  const { audioMetaData } = useAudioPlayerContext();

  return (
    <div
      className={classNames(
        "min-h-lvh max-h-lvh min-w-full max-w-full w-full h-full bg-green-950 fixed inset-0 z-40 transition-transform duration-500 overflow-hidden",
        {
          "translate-y-full": !fullScreenTrackOpen,
        }
      )}
      role="dialog"
      aria-modal={fullScreenTrackOpen}
    >
      {/* Screen filler */}
      {audioMetaData?.image?.src && (
        <>
          <Image
            src={audioMetaData?.image?.src}
            width={audioMetaData?.image?.width}
            height={audioMetaData?.image?.height}
            alt={audioMetaData?.image?.alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: getImageFocusCSS(audioMetaData?.image),
            }}
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/10 to-black lg:bg-black/70"></div>
        </>
      )}
      <div className=" w-full flex-shrink-0 flex justify-between items-center">
        <div></div>
        <div className="mx-3 mt-6 mb-3">
          <ExpanderButton
            setExpanded={(bool) => setFullScreenTrackOpen(bool)}
            expanded={true}
            color="white"
            aria-roledescription="Close dialog"
            size="lg"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative hidden overflow-hidden lg:block rounded-lg border-white/20 border w-1/2 mb-[60px] lg:mb-24">
          {audioMetaData?.image?.src && (
            <Image
              src={audioMetaData?.image?.src}
              width={audioMetaData?.image?.width}
              height={audioMetaData?.image?.height}
              alt={audioMetaData?.image?.alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: getImageFocusCSS(audioMetaData?.image),
              }}
            />
          )}
        </div>
        <div className="relative z-10 flex flex-col items-center h-[calc(100svh-84px)] max-w-full px-5">
          {/* Content container */}

          {/* Scrollable container for additional info */}
          <div className=" flex-grow overflow-y-auto max-w-[425px] rounded-lg bg-black/60 border-white/20 border mb-3 fullscreen-track-additional-info-box">
            <div className="p-5 text-2xl font-medium [&_p+p]:mt-5">
              {audioMetaData?.additionalInfo}
            </div>
          </div>
          {/* Non-scrollable bottom controls */}
          <div className="mx-5 mt-5 mb-[60px] lg:mb-24 flex-shrink-0 w-full max-w-[425px]">
            <div className="mx-1">
              <TrackTitle
                title={audioMetaData?.trackTitle}
                artist={audioMetaData?.artist}
              />
            </div>
            <div className="">
              <AudioSeeker />
            </div>
            <div className="my-5 flex justify-center">
              <PlayPauseButton placement="trackFullScreen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackFullScreen;
