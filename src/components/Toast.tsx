import { useLocalStorage } from "@/hooks/useLocalStorage";
import { PulseLineLine, PulseLinePulse } from "@/svg/graphics";
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
        "absolute inset-0 z-50 overflow-hidden pointer-events-none"
      )}
    >
      <div className="absolute inset-0 mx-auto max-w-screen-3xl">
        <div
          className={classNames(
            "absolute z-30 min-w-[min(100%,425px)] bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-0 px-3.5 pb-12 lg:p-10 transition-transform duration-500 pointer-events-auto",
            {
              "translate-y-full": !show,
            }
          )}
        >
          <div className="min-w-full h-full relative rounded-lg overflow-hidden custom-shadow border border-gray-400 bg-black max-w-96 text-white">
            <div className="absolute inset-0 bg-custom-gray/10"></div>
            <div className="relative flex justify-between pl-5">
              <div className="grow overflow-hidden pt-2">
                <PulseLinePulse className="inline-block stroke-[var(--color-primary)] h-8 min-w-14 max-w-14 avsr_pulse_animation" />
                <PulseLineLine className="inline-block stroke-[var(--color-primary)] h-8 min-w-14 max-w-14 avsr_pulse_animation avsr_pulse_animation_delay -ml-px" />
              </div>
              <div>
                <button
                  className="w-12 h-12 group flex justify-center items-center"
                  onClick={dismiss}
                  aria-label="Close this notification"
                >
                  <CloseIcon className="w-6 h-6 stroke-current opacity-60 group-hover:opacity-100" />
                </button>
              </div>
            </div>
            <div className="relative pb-6 pl-5 pr-9 flex">
              <div className="relative w-full">
                <p
                  className={classNames(
                    "font-extrabold text-xl tracking-tight",
                    bricolageGrotesque.className
                  )}
                >
                  So how does this work?
                </p>
                <p className="pt-4">
                  It's simple - get to know me better by playing a track.
                  There's a short visual text on each one.
                </p>
                <p className="pt-4">I suggest starting with the first one.</p>
                <p className="pt-4">
                  Enjoy!
                  <br />
                  /Oscar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
