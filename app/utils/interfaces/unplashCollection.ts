import { UnsplashImage } from "./unplashimage";

export interface unplashCollection {
  id: number;
  title: string;
  images: UnsplashImage[];
}
