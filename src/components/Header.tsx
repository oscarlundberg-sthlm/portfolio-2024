import { Logo } from "@/svg/logo";
import Image from "next/image";

function Header() {
  return (
    <header className="relative">
      <div className="absolute inset-0 bg-custom-gray">
        <Image
          src="/img/steve-harvey-5zuCqOLaSyw-unsplash.jpg"
          width={1920}
          height={1440}
          alt="close view of drum machine"
          className="absolute inset-0 w-full h-full object-cover object-bottom mix-blend-luminosity"
        />
      </div>

      <div className="z-10 relative py-10 px-5">
        <Logo className="h-auto min-w-[min(500px,100%)] max-w-[500px] " />
        {/* <p className=" font-bold opacity-80">
            Get to know me better
            <br />
            Take a walk in
          </p> */}
        {/* <h1 className="text-9xl  font-black tracking-tighter">my tracks</h1> */}
      </div>
    </header>
  );
}

export default Header;
