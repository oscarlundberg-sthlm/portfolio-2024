import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  iconComponent: ReactNode;
  href: string;
  ariaLabel: string;
}

function SocialLink({ iconComponent, href, ariaLabel }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-0.5 w-11 h-11 flex items-center justify-center rounded-full relative bg-custom-blue hover:brightness-125"
      aria-label={ariaLabel}
    >
      <div className="p-2.5">{iconComponent}</div>
    </Link>
  );
}

export default SocialLink;
