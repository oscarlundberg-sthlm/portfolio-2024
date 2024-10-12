import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function BlockProse({ children, className }: Props) {
  return (
    <div
      className={classNames(
        "[&_p:not(:first-child)]:mt-5 max-w-[240px] md:max-w-[320px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default BlockProse;
