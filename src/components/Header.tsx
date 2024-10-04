import Image from "next/image";

import { AVerySoundResume } from "@/svg/graphics";
import { LogoNarrow, LogoWide } from "@/svg/logo";
import ColorThemePicker from "./ColorThemePicker";
import SocialLinksBasic from "./SocialLinksBasic";

function Header() {
  return (
    <header className="relative lg:h-[360px]">
      <div className="absolute inset-0 bg-custom-gray h-full">
        <Image
          src="/img/steve-harvey-5zuCqOLaSyw-unsplash.jpg"
          priority
          width={1920}
          height={1440}
          alt="close view of drum machine"
          className="absolute inset-0 w-full h-full object-cover object-bottom mix-blend-luminosity brightness-[0.3]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(var(--color-bg-dark-raw),0.2)] to-[var(--color-bg-dark)]"></div>

      <div className="z-10 relative px-5 pb-12 lg:pb-0 h-full flex justify-between lg:justify-normal lg:grid lg:grid-cols-[81px_auto_81px] lg:grid-rows-[100%] mx-auto max-w-screen-3xl">
        <div className="min-w-[min(16%,100px)] max-w-[60px] lg:min-w-[81px] lg:max-w-[81px] order-1 lg:-order-1 flex flex-col justify-between">
          <AVerySoundResume />
          <div className="lg:hidden flex justify-center">
            <ColorThemePicker />
          </div>
        </div>
        <div className="lg:hidden grow pt-12 flex justify-center items-center">
          <LogoNarrow className="min-w-[80%] max-w-[80%] h-auto fill-[var(--color-logo)]" />
        </div>
        <div className="hidden lg:flex justify-center items-center px-5">
          <LogoWide className="min-h-[80%] max-h-[80%] max-w-[100%] fill-[var(--color-logo)]" />
        </div>
        <div className="grow lg:hidden min-w-[5%] max-w-[5%] shrink-0"></div>
        <div className="hidden lg:flex absolute right-5 top-5 self-start place-self-end">
          <SocialLinksBasic />
          <div className="ml-3 flex justify-end">
            <ColorThemePicker />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
