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
  const { audioMetaData } = useAudioPlayerContext();

  return (
    <div
      className={classNames(
        "[--py-outer-bottom:8px] [--py-outer-top:8px] lg:[--py-outer-bottom:8px] lg:[--py-outer-top:8px] [--py-inner:56px] lg:[--py-inner:72px] w-full h-full bg-green-950 fixed inset-0 z-40 transition-transform duration-500 overflow-hidden",
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
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/15 to-black bg-black/60"></div>
        </>
      )}
      <div className="min-h-lvh max-h-lvh min-w-full max-w-full flex flex-col pb-[var(--py-outer-bottom)] pt-[var(--py-outer-top)] lg:py-0">
        <div className="h-[var(--py-inner)] w-full flex-shrink-0 flex justify-between items-center">
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
          <div className="relative z-10 flex flex-col items-center h-[calc(100svh-(var(--py-inner)*2)-(var(--py-outer-bottom)+var(--py-outer-top)))] lg:h-[calc(100svh-var(--py-inner)*2)] max-w-full px-5 lg:pr-0 lg:pl-7">
            {/* Content container */}
            {/* Scrollable container for additional info */}
            {/* Desktop additional info box */}
            <div
              key={audioMetaData.id + "additionalInfoDesktopBox"}
              className="hidden lg:block flex-grow overflow-y-auto max-w-[425px] rounded-lg bg-black/60 border-white/20 border mb-3 fullscreen-track-additional-info-box-desktop"
            >
              <div
                className="p-7 text-2xl font-medium [&_p+p]:mt-5"
                dangerouslySetInnerHTML={
                  audioMetaData?.additionalInfo ?? { __html: "" }
                }
              ></div>
            </div>
            {/* Mobile additional info box */}
            <div
              key={audioMetaData.id + "additionalInfoMobileBox"}
              className="lg:hidden flex-grow overflow-y-auto max-w-[425px] pr-[16px] -mr-[18px] fullscreen-track-additional-info-box-mobile"
            >
              <div className="relative overflow-hidden lg:hidden rounded-lg border-white/20 border w-full pt-[66.66%]">
                {audioMetaData?.image?.src && <TrackImage />}
              </div>
              <div
                className="pt-7 text-2xl font-medium [&_p+p]:mt-5"
                dangerouslySetInnerHTML={
                  audioMetaData?.additionalInfo ?? { __html: "" }
                }
              ></div>
            </div>

            {/* Non-scrollable bottom controls */}
            <div className="mx-5 pt-9 lg:pt-5 flex-shrink-0 w-full max-w-[425px] ">
              <div className="mx-1">
                <TrackTitle
                  title={audioMetaData?.trackTitle}
                  artist={audioMetaData?.artist}
                />
              </div>
              <div className="mt-5">
                <AudioSeeker />
              </div>
              <div className="mt-4 lg:mt-4 lg:mb-6 flex justify-center items-center [&>*:not(:first-child)]:ml-6">
                <SkipTrackButton direction="prev" />
                <PlayPauseButton placement="trackFullScreen" />
                <SkipTrackButton direction="next" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex-shrink-0 h-[var(--py-inner)]"></div>
      </div>
    </div>
  );
}

export default TrackFullScreen;
