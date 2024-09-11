import { ReactNode } from "react";
import { Image } from "./image";

export interface AudioMetaData {
  id: number;
  path: string;
  artist: string;
  trackTitle: string;
  durationInSeconds: number;
  image: Image;
  additionalInfo?: ReactNode;
}
