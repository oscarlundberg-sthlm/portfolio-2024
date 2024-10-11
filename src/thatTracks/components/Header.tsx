import SiteSelector from "@/components/SiteSelector";
import { AVerySoundResume } from "@/thatTracks/svg/graphics";
import { LogoNarrow, LogoWide } from "@/thatTracks/svg/logo";
import ColorThemePicker from "./ColorThemePicker";
import SocialLinksBasic from "./SocialLinksBasic";

function Header() {
  return (
    <header className="relative lg:h-[360px]">
      <div className="z-10 relative px-5 pb-16 lg:pb-0 h-full flex justify-between lg:justify-normal lg:grid lg:grid-cols-[81px_auto_81px] lg:grid-rows-[100%] mx-auto max-w-screen-3xl">
        <div className="min-w-[min(16%,100px)] max-w-[60px] lg:min-w-[81px] lg:max-w-[81px] order-1 lg:-order-1 flex flex-col justify-between">
          <AVerySoundResume />
          <div className="lg:hidden flex justify-center">
            <ColorThemePicker />
          </div>
        </div>
        <div className="lg:hidden grow pt-16 flex justify-center items-center">
          <LogoNarrow className="grow max-h-[220px] sm:max-h-[420px] fill-[var(--color-logo)]" />
        </div>
        <div className="hidden lg:flex justify-center items-center px-5">
          <LogoWide className="grow min-h-[60%] max-h-[60%] max-w-[70%] fill-[var(--color-logo)]" />
        </div>
        <div className="grow lg:hidden min-w-[5%] max-w-[5%] shrink-0"></div>
        <div className="hidden lg:flex flex-col justify-between items-end absolute right-5 top-5 bottom-5">
          <div className="flex">
            <SocialLinksBasic />
            <div className="ml-3 flex justify-end">
              <ColorThemePicker />
            </div>
          </div>
          <SiteSelector />
        </div>
      </div>
    </header>
  );
}

export default Header;
