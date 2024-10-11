import { useGlobalStatesContext } from "@/thatTracks/contexts/GlobalStatesProvider";
import AudioTrack from "./AudioTrack";

function Main() {
  const { tracks } = useGlobalStatesContext();
  return (
    <main>
      {tracks.map((track) => (
        <AudioTrack key={track.id} data={track} />
      ))}
    </main>
  );
}

export default Main;
