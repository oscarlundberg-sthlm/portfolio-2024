import classNames from "classnames";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

function MainPlayerContainer() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={classNames(
        "fixed bottom-0 z-10 inset-x-0 bg-green-950 transition-transform duration-300 max-h-screen",
        {
          "translate-y-[calc(100%-105px)]": !expanded,
          "overflow-y-auto": expanded,
        }
      )}
    >
      <AudioPlayer
        setExpanded={(bool) => setExpanded(bool)}
        expanded={expanded}
      />
    </div>
  );
}

export default MainPlayerContainer;
