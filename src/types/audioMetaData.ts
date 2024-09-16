import { Image } from "./image";

export interface AudioMetaData {
  id: string;
  path: string;
  artist: string;
  trackTitle: string;
  durationInSeconds: number;
  image: Image;
  additionalInfo?: {
    __html: TrustedHTML | string;
  };
}
