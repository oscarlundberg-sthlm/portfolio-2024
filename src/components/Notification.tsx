import { CloseIcon, InfoIcon } from "@/svg/icons";
import classNames from "classnames";
import { useEffect, useState } from "react";

function Notification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeoutId;

    timeoutId = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const dismiss = () => setShow(false);

  return (
    <div
      className={classNames(
        "fixed z-30 bottom-24 lg:bottom-32 right-0 px-5 transition-transform duration-500",
        {
          "translate-x-full": !show,
        }
      )}
    >
      <div className="rounded-lg overflow-hidden border border-custom-beige bg-gray-900 max-w-96">
        <div className="p-2 bg-custom-beige flex justify-between items-center text-black">
          <div className="flex items-center ">
            <InfoIcon className="w-5 h-5 fill-current" />
            <div className=" text-sm ml-2 italic font-bold tracking-wide">
              Hi there! Welcome
            </div>
          </div>
          <button
            className="w-12 h-12 -m-6 group"
            onClick={dismiss}
            aria-label="Close this notification"
          >
            <CloseIcon className="w-6 h-6 stroke-current group-hover:opacity-70" />
          </button>
        </div>
        <div className="p-4">
          Get to know me better by playing one of the tracks.
          <br />
          <br />
          /Oscar
        </div>
      </div>
    </div>
  );
}

export default Notification;
