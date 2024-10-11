import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function BlockHeading({ children, className }: Props) {
  return (
    <h2
      className={classNames(
        "leading-[1] mb-5 font-black text-[32px] text-[var(--classic-white)] uppercase",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default BlockHeading;
