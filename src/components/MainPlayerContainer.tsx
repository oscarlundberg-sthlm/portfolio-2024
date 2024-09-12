import { useKeyboard } from "@/hooks/useKeyboard";
import AudioPlayer from "./AudioPlayer";

function MainPlayerContainer() {
  useKeyboard();

  return (
    <div className="shrink-0 z-10 w-full bg-black border-t border-x lg:border-x-0 rounded-t-xl lg:rounded-t-none border-gray-700 overflow-hidden ">
      <AudioPlayer />
    </div>
  );
}

export default MainPlayerContainer;
