import { ChevronUpIcon } from "@/thatTracks/svg/icons";
import classNames from "classnames";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  setExpanded: (arg01: boolean) => void;
  expanded: boolean;
  disabled?: boolean;
  color?: "accent" | "white";
  size?: "sm" | "lg";
}

function ExpanderButton({
  setExpanded,
  expanded,
  disabled,
  color = "accent",
  size = "sm",
  ...rest
}: Props) {
  return (
    <button
      className="p-1.5 relative group"
      aria-label={!expanded ? "expand" : "minimize"}
      onClick={() => setExpanded(!expanded)}
      disabled={disabled}
      {...rest}
    >
      <div className="rounded-full  w-9 h-9  flex items-center justify-center">
        <ChevronUpIcon
          className={classNames(
            " w-auto transition-transform group-disabled:opacity-20",
            expanded && "rotate-180",
            {
              " fill-accent/50 group-hover:fill-accent": color === "accent",
              " fill-current group-hover:opacity-70": color === "white",
              "h-6": size === "sm",
              "h-8": size === "lg",
            }
          )}
        />
      </div>
    </button>
  );
}

export default ExpanderButton;
