"use client";
import Arrow from "@/components/Arrow";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SiteSelector() {
  const path = usePathname();

  const SiteLink = () => {
    if (path === "/classic") {
      return (
        <Link href="/" className="flex text-sm items-center px-5">
          <Arrow className="h-[0.7em] w-auto fill-current rotate-180 mr-3" />
          <div>BACK TO "THAT TRACKS"</div>
        </Link>
      );
    }
    if (path === "/") {
      return (
        <Link
          href="/classic"
          className="flex text-xs tracking-wider items-end max-w-[200px] bg-[rgba(var(--color-primary-raw),0)] opacity-50 transition-opacity hover:opacity-100 border border-[rgba(var(--color-primary-raw),1)] px-2.5 py-2"
        >
          <div>
            ANOTHER VERSION
            <br />
            OF THE SITE
          </div>
          <Arrow className="shrink-0 h-[0.7em] mb-[5px] w-auto fill-current ml-3" />
        </Link>
      );
    }
  };
  return (
    <div>
      <SiteLink />
    </div>
  );
}

export default SiteSelector;
