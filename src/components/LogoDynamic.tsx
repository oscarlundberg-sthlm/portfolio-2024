import { useColorThemeContext } from "@/contexts/ColorTheme/ColorThemeProvider";
import { Logo4Sound, Logo80s, LogoSkate } from "@/svg/logo";
import classNames from "classnames";

interface Props {
  className?: string;
  logoClassName?: string;
}

function LogoDynamic({ className, logoClassName }: Props) {
  const { colorThemeClass } = useColorThemeContext();
  return (
    <div className={className}>
      <Logo4Sound
        className={classNames(logoClassName, {
          hidden: colorThemeClass !== "theme-blue",
        })}
      />
      <LogoSkate
        className={classNames(logoClassName, {
          hidden: colorThemeClass !== "theme-orange",
        })}
      />
      <Logo80s
        className={classNames(logoClassName, {
          hidden: colorThemeClass !== "theme-lilac",
        })}
      />
    </div>
  );
}

export default LogoDynamic;
