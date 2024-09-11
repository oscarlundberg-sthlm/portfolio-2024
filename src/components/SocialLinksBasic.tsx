import { Email, Github, LinkedIn } from "@/svg/socialIcons";
import SocialLink from "./SocialLink";

function SocialLinksBasic() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-3">
        <div className="">
          <SocialLink
            href="mailto:oscarlundberg@hotmail.com"
            ariaLabel="Send me an email"
            iconComponent={<Email className="h-auto w-5" fill="currentColor" />}
          />
        </div>
        <div className="">
          <SocialLink
            href="https://github.com/oscarlundberg-sthlm"
            ariaLabel="Visit my Github page"
            iconComponent={
              <Github className="h-auto w-5" fill="currentColor" />
            }
          />
        </div>
        <div className="">
          <SocialLink
            href="https://www.linkedin.com/in/oscarlundberg-sthlm"
            ariaLabel="Visit my Linkedin page"
            iconComponent={
              <LinkedIn className="h-auto w-5" fill="currentColor" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SocialLinksBasic;
