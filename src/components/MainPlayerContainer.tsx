import { useKeyboard } from "@/hooks/useKeyboard";
import AudioPlayer from "./AudioPlayer";

function MainPlayerContainer() {
  useKeyboard();

  return (
    <div className="fixed bottom-0 z-10 inset-x-0 bg-black border-t border-x lg:border-x-0 rounded-t-xl lg:rounded-t-none border-gray-700 overflow-hidden ">
      <AudioPlayer />
    </div>
  );
}

export default MainPlayerContainer;
