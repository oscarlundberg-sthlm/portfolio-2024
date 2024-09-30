import { useColorThemeContext } from "@/contexts/ColorTheme/ColorThemeProvider";
import useClickOutside from "@/hooks/useClickOutside";
import {
  ColorSwatchBlue,
  ColorSwatchLilac,
  ColorSwatchOrange,
} from "@/svg/colorSwatches";
import { PaintBrush } from "@/svg/icons";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

function ColorThemePicker() {
  const [open, setOpen] = useState(false);
  const { colorThemeClass, setColorThemeClass } = useColorThemeContext();
  const ref = useRef(null);
  const clickedOutside = useClickOutside(ref);

  useEffect(() => {
    setOpen(false);
  }, [clickedOutside]);

  const activeSwatch = {
    "theme-blue": <ColorSwatchBlue className="h-full w-full" />,
    "theme-orange": <ColorSwatchOrange className="h-full w-full" />,
    "theme-lilac": <ColorSwatchLilac className="h-full w-full" />,
  };

  return (
    <div
      ref={ref}
      className="relative [--swatches-margin-t:8px] [--between-swatches:0px] w-11 h-11"
    >
      <button
        onClick={() => setOpen(!open)}
        className={classNames(
          "relative z-10 h-11 w-11 group hover:scale-110 rounded-full flex items-center justify-center transition-all mb-1"
        )}
      >
        <div
          className={classNames(
            "absolute inset-0 -z-10 transition-all duration-1000",
            {
              "-rotate-[360deg]": open,
            }
          )}
        >
          {activeSwatch[colorThemeClass]}
        </div>
        <div
          className={classNames(
            "absolute rounded-full inset-0.5 -z-10 transition-colors duration-300 bg-[var(--color-bg-dark)] brightness-50"
          )}
        ></div>
        <PaintBrush
          className={classNames(" h-6 w-6 fill-[var(--color-theme-white)]")}
        />
      </button>
      <div
        className={classNames(
          "bg-black overflow-hidden border border-[rgba(var(--color-theme-white-raw),0.3)] -m-2 p-2 h-[calc(400%+var(--swatches-margin-t)+18px)] inset-x-0 rounded-full absolute left-0 top-0 origin-top transition-all duration-500",
          {
            "": open,
            "scale-[0.5] translate-y-5 opacity-0": !open,
          }
        )}
      ></div>
      <button
        onClick={() => {
          setColorThemeClass("theme-lilac");
          setOpen(false);
        }}
        className={classNames(
          "absolute top-0 left-0 group flex items-center justify-center h-11 w-11 transition-transform duration-300",
          {
            "translate-y-[calc(100%+var(--swatches-margin-t))]": open,
          }
        )}
      >
        <div
          className={classNames(
            " h-8 w-8 border-2 border-white group-hover:scale-110 transition-all rounded-full flex items-center justify-center"
          )}
        >
          <ColorSwatchLilac className="h-full w-full" />
        </div>
      </button>
      <button
        onClick={() => {
          setColorThemeClass("theme-orange");
          setOpen(false);
        }}
        className={classNames(
          "absolute top-0 left-0 group flex items-center justify-center h-11 w-11 transition-transform duration-300 delay-75",
          {
            "translate-y-[calc(200%+var(--swatches-margin-t))]": open,
          }
        )}
      >
        <div
          className={classNames(
            " h-8 w-8 border-2 border-white group-hover:scale-110 transition-all rounded-full flex items-center justify-center"
          )}
        >
          <ColorSwatchOrange className="h-full w-full" />
        </div>
      </button>
      <button
        onClick={() => {
          setColorThemeClass("theme-blue");
          setOpen(false);
        }}
        className={classNames(
          "absolute top-0 left-0 group flex items-center justify-center h-11 w-11 transition-transform duration-300 delay-150 mb-0.5",
          {
            "translate-y-[calc(300%+var(--swatches-margin-t))]": open,
          }
        )}
      >
        <div
          className={classNames(
            " h-8 w-8 border-2 border-white group-hover:scale-110 transition-all rounded-full flex items-center justify-center"
          )}
        >
          <ColorSwatchBlue className="h-full w-full" />
        </div>
      </button>
    </div>
  );
}

export default ColorThemePicker;
