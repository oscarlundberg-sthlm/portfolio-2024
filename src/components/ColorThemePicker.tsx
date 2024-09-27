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
      className="relative [--space-y:8px] [--between-swatches:0px]"
    >
      <button
        onClick={() => setOpen(!open)}
        className={classNames(
          "relative z-10 h-11 w-11 group hover:scale-110 rounded-full flex items-center justify-center transition-all"
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
        <PaintBrush className={classNames(" h-6 w-6 fill-white")} />
      </button>
      <button
        onClick={() => {
          setColorThemeClass("theme-lilac");
          setOpen(false);
        }}
        className={classNames(
          "group absolute flex items-center justify-center h-11 w-11 top-0 left-0 transition-transform duration-300",
          open
            ? " translate-y-[calc(var(--space-y)+(var(--between-swatches)*0)+100%)]"
            : "translate-y-0"
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
          "group absolute flex items-center justify-center h-11 w-11 top-0 left-0 transition-transform duration-300 delay-75",
          open
            ? " translate-y-[calc(var(--space-y)+(var(--between-swatches)*1)+200%)]"
            : "translate-y-0 "
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
          "group absolute flex items-center justify-center h-11 w-11 top-0 left-0 transition-transform duration-300 delay-150",
          open
            ? "translate-y-[calc(var(--space-y)+(var(--between-swatches)*2)+300%)]"
            : "translate-y-0"
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
