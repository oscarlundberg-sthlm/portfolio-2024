import { Email, Github, LinkedIn } from "@/svg/socialIcons";
import classNames from "classnames";
import { useRef, useState } from "react";
import SocialLink from "./SocialLink";

function SocialLinks() {
  const mailRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    const email = mailRef.current;
    const github = githubRef.current;
    const linkedin = linkedinRef.current;

    if (!email || !github || !linkedin) {
      setOpen(false);
      return;
    }

    setOpen(!open);
  };

  return (
    <div className="relative">
      <div
        ref={mailRef}
        className={classNames(
          "absolute left-0 top-1/2 -translate-y-1/2 transition-transform duration-300",
          {
            "-translate-x-[162px]": open,
          }
        )}
      >
        <SocialLink
          href="mailto:oscarlundberg@hotmail.com"
          ariaLabel="Send me an email"
          iconComponent={<Email className="h-auto w-5" fill="currentColor" />}
        />
      </div>
      <div
        ref={githubRef}
        className={classNames(
          "absolute left-0 top-1/2 -translate-y-1/2 transition-transform duration-300",
          {
            "-translate-x-[108px]": open,
          }
        )}
      >
        <SocialLink
          href="https://github.com/oscarlundberg-sthlm"
          ariaLabel="Visit my Github page"
          iconComponent={<Github className="h-auto w-5" fill="currentColor" />}
        />
      </div>
      <div
        ref={linkedinRef}
        className={classNames(
          "absolute left-0 top-1/2 -translate-y-1/2 transition-transform duration-300",
          {
            "-translate-x-[54px]": open,
          }
        )}
      >
        <SocialLink
          href="https://www.linkedin.com/in/oscarlundberg-sthlm"
          ariaLabel="Visit my Linkedin page"
          iconComponent={
            <LinkedIn className="h-auto w-5" fill="currentColor" />
          }
        />
      </div>
      <div className="inline-block align-middle z-10">
        <button
          onClick={handleOnClick}
          className={classNames(
            "p-0.5 w-14 h-14 flex items-center justify-center rounded-full relative  hover:bg-custom-blue",
            open ? "bg-custom-blue" : "bg-custom-gray"
          )}
        >
          <div className="text-xs font-medium leading-[1.0]">
            reach
            <br />
            me
            <br />
            here
          </div>
        </button>
      </div>
    </div>
  );
}

export default SocialLinks;
