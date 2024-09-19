import { Logo } from "@/svg/logo";
import Image from "next/image";
import SocialLinksBasic from "./SocialLinksBasic";

function Header() {
  return (
    <header className="relative">
      <div className="absolute inset-0 bg-custom-gray">
        <Image
          src="/img/steve-harvey-5zuCqOLaSyw-unsplash.jpg"
          priority
          width={1920}
          height={1440}
          alt="close view of drum machine"
          className="absolute inset-0 w-full h-full object-cover object-bottom mix-blend-luminosity"
        />
      </div>

      <div className="z-10 relative py-10 px-5 flex justify-between mx-auto max-w-screen-3xl">
        <Logo className=" h-auto min-w-[min(500px,100%)] max-w-[500px] " />
        <div className="hidden lg:block">
          <SocialLinksBasic />
        </div>
      </div>
    </header>
  );
}

export default Header;
