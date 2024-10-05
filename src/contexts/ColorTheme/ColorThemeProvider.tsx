import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ColorThemeClass } from "./types";

interface ColorThemeContextValue {
  colorThemeClass: ColorThemeClass;
  setColorThemeClass: (theme: ColorThemeClass) => void;
}

const ColorThemeContext = createContext<ColorThemeContextValue>({} as any);

export function ColorThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [colorThemeClass, setColorThemeClass] =
    useState<ColorThemeClass>("theme-orange");
  const prevColorThemeClass = useRef<ColorThemeClass | null>();

  useEffect(() => {
    // update class on body tag
    const bodyTag = document.querySelector("body");
    if (!bodyTag) return;

    if (!prevColorThemeClass.current) {
      bodyTag.classList.add(colorThemeClass);
    } else {
      bodyTag.classList.replace(prevColorThemeClass.current, colorThemeClass);
    }

    // update theme color
    const bodyStyles = getComputedStyle(bodyTag);
    const themeColor = bodyStyles.getPropertyValue("--color-logo").trim();

    const metaThemeTag = document.querySelector("meta[name='theme-color']");
    if (metaThemeTag) {
      metaThemeTag.setAttribute("content", themeColor);
    }

    prevColorThemeClass.current = colorThemeClass;
  }, [colorThemeClass]);

  return (
    <ColorThemeContext.Provider
      value={{
        colorThemeClass,
        setColorThemeClass,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorThemeContext() {
  return useContext(ColorThemeContext);
}
