import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CloseIcon } from "@/svg/icons";
import classNames from "classnames";
import { Bricolage_Grotesque } from "next/font/google";
import { useEffect, useState } from "react";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

function Toast() {
  const [show, setShow] = useState(false);
  const [isDismissed, setIsDismissed] = useLocalStorage("toast_welcome", "0");

  useEffect(() => {
    let timeoutId;

    timeoutId = setTimeout(() => {
      if (!+isDismissed) {
        setShow(true);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isDismissed]);

  const dismiss = () => {
    setIsDismissed("1");
    setShow(false);
  };

  return (
    <div
      className={classNames(
        "fixed z-30 min-w-[min(100%,425px)] bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 px-3.5 pb-12 lg:p-10 transition-transform duration-500",
        {
          "translate-y-full lg:translate-x-full": !show,
          "lg:translate-x-0": show,
        }
      )}
    >
      <div className="min-w-full h-full relative rounded-lg overflow-hidden custom-shadow border border-custom-beige bg-black max-w-96 text-white">
        <div className="absolute inset-0 bg-custom-gray/10"></div>
        <div className="relative pt-6 pb-6 pl-5 pr-9 flex">
          <div className="">
            <p
              className={classNames(
                "font-extrabold text-xl tracking-tight",
                bricolageGrotesque.className
              )}
            >
              So how does this work?
            </p>
            <p className="pt-4">
              It's simple - get to know me better by playing a track. There's a
              short visual text on each one.
            </p>
            <p className="pt-4">I suggest starting with the first one.</p>
            <p className="pt-4">
              Enjoy!
              <br />
              /Oscar
            </p>
          </div>
        </div>
        <button
          className="absolute top-0 right-0 w-12 h-12 group flex justify-center items-center"
          onClick={dismiss}
          aria-label="Close this notification"
        >
          <CloseIcon className="w-6 h-6 stroke-current opacity-60 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );
}

export default Toast;
