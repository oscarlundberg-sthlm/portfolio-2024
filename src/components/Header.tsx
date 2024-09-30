import Image from "next/image";

import { AVerySoundResume } from "@/svg/graphics";
import ColorThemePicker from "./ColorThemePicker";
import LogoDynamic from "./LogoDynamic";
import SocialLinksBasic from "./SocialLinksBasic";

function Header() {
  return (
    <header className="relative lg:h-[300px]">
      <div className="absolute inset-0 bg-custom-gray">
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

      <div className="z-10 relative px-5 h-full flex justify-between lg:grid lg:grid-cols-3 mx-auto max-w-screen-3xl">
        <div className="min-w-[min(16%,100px)] max-w-[60px] lg:min-w-[81px] lg:max-w-[81px] pb-12 order-1 lg:-order-1 flex flex-col justify-between">
          <AVerySoundResume />
          <div className="lg:hidden flex justify-center">
            <ColorThemePicker />
          </div>
        </div>
        <LogoDynamic
          className="grow py-12 lg:py-0 self-center place-self-center h-auto min-w-[60%] lg:min-w-[327px] max-w-[327px]"
          logoClassName="w-full h-auto"
        />
        <div className="grow lg:hidden min-w-[5%] shrink-0"></div>
        <div className="hidden lg:flex self-start place-self-end pt-5">
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
