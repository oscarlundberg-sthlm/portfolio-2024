import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-classic">
      <div className="mx-5">{children}</div>
    </div>
  );
}

export default Container;
