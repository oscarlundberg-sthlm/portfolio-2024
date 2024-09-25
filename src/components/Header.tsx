import { Logo } from "@/svg/logo";
import Image from "next/image";

import { AVerySoundResume } from "@/svg/graphics";
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black"></div>

      <div className="z-10 relative px-5 h-full flex justify-between lg:grid lg:grid-cols-3 mx-auto max-w-screen-3xl">
        <div className=" min-w-[min(16%,100px)] max-w-[60px] lg:min-w-[81px] lg:max-w-[81px] self-start order-1 lg:-order-1">
          <AVerySoundResume />
        </div>
        <Logo className="grow pt-12 pb-12 self-center place-self-center h-auto min-w-[60%] lg:min-w-[327px] max-w-[327px] " />
        <div className="grow lg:hidden min-w-[5%] shrink-0"></div>
        <div className="hidden lg:block self-start place-self-end pt-5">
          <SocialLinksBasic />
        </div>
      </div>
    </header>
  );
}

export default Header;
