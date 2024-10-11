import ClientLayout from "@/thatTracks/components/ClientLayout";
import { getAudioDuration } from "@/thatTracks/lib/getAudioDuration";
import { AudioMetaDataUnPopulated } from "@/types/audioMetaData";
import fs from "fs";
import path from "path";
import "./that_tracks.css";

const tracksFilePath = path.join(process.cwd(), "src/data/tracks.json");

async function fetchAndPopulateTracks() {
  const tracksData: AudioMetaDataUnPopulated[] = JSON.parse(
    fs.readFileSync(tracksFilePath, "utf-8")
  );

  const populatedTracks = await Promise.all(
    tracksData.map(async (track) => {
      const filePath = path.join(process.cwd(), "/public", track.path);
      const durationInSeconds = await getAudioDuration(filePath);

      return {
        ...track,
        durationInSeconds,
      };
    })
  );

  return populatedTracks;
}

export default async function Home() {
  const tracks = await fetchAndPopulateTracks();

  return <ClientLayout tracks={tracks} />;
}
