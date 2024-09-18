import { useAudioPlayerContext } from "@/contexts/AudioPlayerContext/AudioPlayerProvider";
import { useGlobalStatesContext } from "@/contexts/GlobalStatesProvider";
import classNames from "classnames";
import AudioSeeker from "./AudioSeeker";
import ExpanderButton from "./ExpanderButton";
import PlayPauseButton from "./PlayPauseButton";
import SkipTrackButton from "./SkipTrackButton";
import TrackImage from "./TrackImage";
import TrackTitle from "./TrackTitle";

function TrackFullScreen() {
  const { fullScreenTrackOpen, setFullScreenTrackOpen } =
    useGlobalStatesContext();
  const { audioMetaData, loading } = useAudioPlayerContext();

  return (
    <div
      className={classNames(
        " w-full h-full bg-green-950 fixed inset-0 z-40 transition-transform duration-500 overflow-hidden",
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
          <TrackImage />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/15 to-black lg:bg-black/60"></div>
        </>
      )}
      <div className="min-h-lvh max-h-lvh min-w-full max-w-full flex flex-col py-2 lg:py-0">
        <div className=" w-full flex-shrink-0 flex justify-between items-center">
          <div></div>
          <div className="mx-3 mt-3 mb-3">
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
          <div className="relative hidden overflow-hidden lg:block rounded-lg border-white/20 border w-1/2">
            {audioMetaData?.image?.src && <TrackImage />}
          </div>
          <div className="relative z-10 flex flex-col items-center h-[calc(100svh-144px-16px)] lg:h-[calc(100svh-144px)] max-w-full px-5">
            {/* Content container */}
            {/* Scrollable container for additional info */}
            <div className=" flex-grow overflow-y-auto max-w-[425px] rounded-lg bg-black/60 border-white/20 border mb-3 fullscreen-track-additional-info-box">
              <div
                className="p-5 text-2xl font-medium [&_p+p]:mt-5"
                dangerouslySetInnerHTML={
                  audioMetaData?.additionalInfo ?? { __html: "" }
                }
              ></div>
            </div>
            {/* Non-scrollable bottom controls */}
            <div className="mx-5 mt-5 flex-shrink-0 w-full max-w-[425px]">
              <div className="mx-1">
                <TrackTitle
                  title={audioMetaData?.trackTitle}
                  artist={audioMetaData?.artist}
                />
              </div>
              <div className="">
                <AudioSeeker />
              </div>
              <div className="mt-5 lg:my-5 flex justify-center items-center [&>*:not(:first-child)]:ml-6">
                <SkipTrackButton direction="prev" />
                <PlayPauseButton placement="trackFullScreen" />
                <SkipTrackButton direction="next" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex-shrink-0 h-[72px]"></div>
      </div>
    </div>
  );
}

export default TrackFullScreen;
