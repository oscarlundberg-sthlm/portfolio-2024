import { Image } from "./image";

// Raw data
export interface AudioMetaDataUnPopulated {
  id: string;
  path: string;
  artist: string;
  trackTitle: string;
  image: Image;
  additionalInfo?: {
    __html: TrustedHTML | string;
  };
}

// After server actions
export interface AudioMetaDataPopulated extends AudioMetaDataUnPopulated {
  durationInSeconds: number;
}
