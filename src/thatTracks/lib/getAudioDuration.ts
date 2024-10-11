import { parseFile } from "music-metadata";

// Function to get audio duration
export const getAudioDuration = async (filePath: string): Promise<number> => {
  try {
    const metadata = await parseFile(filePath);
    return metadata.format.duration || 0;
  } catch (error) {
    console.error("Error parsing audio metadata:", error);
    throw error;
  }
};
